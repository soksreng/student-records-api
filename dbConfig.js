//Import mongoose
const mongoose = require('mongoose');

//Async function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI); //Use URL from .env file
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
