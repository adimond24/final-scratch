const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // Allow requests from all origins

// Your routes and other middleware here
