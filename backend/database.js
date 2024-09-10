// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://john:2025Ad69563@nodeexpressprojects.dvz4bvx.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// mongoose.connection.on('error', (err) => console.error('Database connection error:', err));


// const mongoose = require('mongoose');

// // Define your MongoDB Atlas connection string
// const mongoURI = 'mongodb+srv://john:2025Ad69563@nodeexpressprojects.dvz4bvx.mongodb.net/mydatabase?retryWrites=true&w=majority';

// // Connect to MongoDB Atlas
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('Connected to MongoDB Atlas'))
//     .catch(err => console.error('Database connection error:', err));

// // Optional: Handle disconnection events
// mongoose.connection.on('disconnected', () => {
//     console.log('Disconnected from MongoDB Atlas');
// });

// // Optional: Handle connection events
// mongoose.connection.on('connected', () => {
//     console.log('Successfully connected to MongoDB Atlas');
// });

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Database connection error:', err));

// Optional: Handle disconnection events
mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB Atlas');
});

// Optional: Handle connection events
mongoose.connection.on('connected', () => {
    console.log('Successfully connected to MongoDB Atlas');
});
