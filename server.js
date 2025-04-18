// Import required packages

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./dbConfig'); //MongoDB connection
const studentRoutes = require('./routes/studentRoutes');//Routes for students

dotenv.config(); //load environment variables from .env file
connectDB(); //Connect to MongoDB Atlas

const app = express();

app.use(cors()); //Allow Cross-Origin Resource Sharing
app.use(express.json()); //Parse JSON request body

// Define routes for students
app.use('/students', studentRoutes);

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
