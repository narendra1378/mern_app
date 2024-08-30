// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors package
const connectDB = require("./db");

// Initialize Express
const app = express();
const port = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all origins

// Connect to MongoDB

// Define User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zip: String,
});

// Create User Model
const User = mongoose.model("User", userSchema);

// Route to handle registration
app.post("/register", async (req, res) => {
  try {
    const userData = req.body;

    // Create a new user
    const newUser = new User(userData);
    await newUser.save();

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Registration failed" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
