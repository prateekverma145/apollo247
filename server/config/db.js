const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Using local MongoDB
    const conn = await mongoose.connect('mongodb://localhost:27017/doctor-listing-app', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB; 