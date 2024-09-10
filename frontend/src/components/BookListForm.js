import React, { useState } from 'react';
import './BookListForm.css'; // Import the CSS file


const BookListForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author, genre, year };
        onSubmit(newBook);
        setTitle('');
        setAuthor('');
        setGenre('');
        setYear('');
    };

    return (
        <form onSubmit={handleSubmit} className="book-list-form">
            <h2>Add a New Book</h2>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="genre">Genre:</label>
                <input
                    type="text"
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="year">Year:</label>
                <input
                    type="number"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookListForm;
