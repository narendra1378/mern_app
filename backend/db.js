const mongoose = require("mongoose");

// Use environment variable for MongoDB URI
const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    if (!mongoURI) {
      throw new Error("MongoDB URI not defined in environment variables");
    }
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
