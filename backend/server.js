// import express from 'express';
// import cors from 'cors';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// app.use(cors({
//     origin: 'http://localhost:3000'
// }));


// // Connect to MongoDB (or replace with your database setup)
// mongoose.connect('mongodb+srv://john:2025Ad69563@nodeexpressprojects.dvz4bvx.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// mongoose.connection.on('error', (err) => console.error('Database connection error:', err));

// // Define your data model
// const itemSchema = new mongoose.Schema({
//     name: String,
//     description: String,
// });
// const Item = mongoose.model('Item', itemSchema);

// // Routes
// app.get('/', (req, res) => {
//     res.send('hello from the backend!');
// });

// // CRUD Routes

// // Create
// app.post('/api/items', async (req, res) => {
//     try {
//         const item = new Item(req.body);
//         await item.save();
//         res.status(201).json(item);
//     } catch (err) {
//         res.status(400).json({ message: 'Error creating item', error: err });
//     }
// });

// // Read All
// app.get('/api/items', async (req, res) => {
//     try {
//         const items = await Item.find();
//         res.json(items);
//     } catch (err) {
//         res.status(500).json({ message: 'Error retrieving items', error: err });
//     }
// });

// // Read Single
// app.get('/api/items/:id', async (req, res) => {
//     try {
//         const item = await Item.findById(req.params.id);
//         if (item) {
//             res.json(item);
//         } else {
//             res.status(404).json({ message: 'Item not found' });
//         }
//     } catch (err) {
//         res.status(500).json({ message: 'Error retrieving item', error: err });
//     }
// });

// // Update
// app.put('/api/items/:id', async (req, res) => {
//     try {
//         const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (item) {
//             res.json(item);
//         } else {
//             res.status(404).json({ message: 'Item not found' });
//         }
//     } catch (err) {
//         res.status(400).json({ message: 'Error updating item', error: err });
//     }
// });

// // Delete
// app.delete('/api/items/:id', async (req, res) => {
//     try {
//         const result = await Item.findByIdAndDelete(req.params.id);
//         if (result) {
//             res.status(204).end();
//         } else {
//             res.status(404).json({ message: 'Item not found' });
//         }
//     } catch (err) {
//         res.status(500).json({ message: 'Error deleting item', error: err });
//     }
// });

// // Start server
// app.listen(3000, () => console.log('Server running on port 3000'));

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const port = 5000;

// // Dummy in-memory book storage
// let books = [];

// app.use(cors());
// app.use(bodyParser.json());

// // Get all books
// app.get('/api/books', (req, res) => {
//     res.json(books);
// });

// // Add a new book
// app.post('/api/books', (req, res) => {
//     const newBook = req.body;
//     books.push(newBook);
//     res.status(201).json(newBook);
// });

// // Update a book
// app.put('/api/books/:id', (req, res) => {
//     const { id } = req.params;
//     const updatedBook = req.body;
//     books = books.map(book => (book.id === parseInt(id) ? updatedBook : book));
//     res.json(updatedBook);
// });

// // Delete a book
// app.delete('/api/books/:id', (req, res) => {
//     const { id } = req.params;
//     books = books.filter(book => book.id !== parseInt(id));
//     res.status(204).end();
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000;

// Dummy in-memory book storage
let books = [];
let reviews = [];
let tbrBooks = [];

app.use(cors());
app.use(bodyParser.json());

// Get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Add a new book
app.post('/api/books', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book
app.put('/api/books/:id', (req, res) => {
    const { id } = req.params;
    const updatedBook = req.body;
    books = books.map(book => (book.id === parseInt(id) ? updatedBook : book));
    res.json(updatedBook);
});

// Delete a book
app.delete('/api/books/:id', (req, res) => {
    const { id } = req.params;
    books = books.filter(book => book.id !== parseInt(id));
    res.status(204).end();
});

// Get all reviews
app.get('/api/reviews', (req, res) => {
    res.json(reviews);
});

// Add a new review
app.post('/api/reviews', (req, res) => {
    const newReview = req.body;
    if (!newReview.title || !newReview.review) {
        return res.status(400).json({ error: 'Title and review are required' });
    }

    // Simulate generating an ID (in a real app, this should be done with a database)
    newReview.id = reviews.length + 1;
    reviews.push(newReview);
    res.status(201).json(newReview);
});

// Get all TBR books
app.get('/api/tbr-books', (req, res) => {
    res.json(tbrBooks);
});

// Add a new TBR book
app.post('/api/tbr-books', (req, res) => {
    const newBook = req.body;
    if (!newBook.title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    // Simulate generating an ID (in a real app, this should be done with a database)
    newBook.id = tbrBooks.length + 1;
    tbrBooks.push(newBook);
    res.status(201).json(newBook);
});

// Remove a TBR book
app.delete('/api/tbr-books/:id', (req, res) => {
    const { id } = req.params;
    tbrBooks = tbrBooks.filter(book => book.id !== parseInt(id));
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
