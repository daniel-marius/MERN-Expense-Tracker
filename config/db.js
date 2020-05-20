const mongoose = require('mongoose');

const connectOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, connectOptions);
    console.log(`MongoDB Atlas Connected: ${connection.connection.host}`.cyan.underline.bold);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1); // exit with failure
  }
};

module.exports = connectDB;
