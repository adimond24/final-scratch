import React, { useState, useEffect } from 'react';
import './TBR.css'; // Import the CSS file

const TBR = () => {
    const [tbrBooks, setTbrBooks] = useState([]);
    const [newBook, setNewBook] = useState('');

    useEffect(() => {
        // Fetch TBR books from the backend when the component mounts
        fetch('http://localhost:5000/api/tbr-books')
            .then(response => response.json())
            .then(data => setTbrBooks(data))
            .catch(error => console.error('Error fetching TBR books:', error));
    }, []);

    const handleAddBook = (e) => {
        e.preventDefault();
        if (!newBook.trim()) return;

        const bookToAdd = { title: newBook };

        fetch('http://localhost:5000/api/tbr-books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookToAdd),
        })
        .then(response => response.json())
        .then(data => {
            setTbrBooks([...tbrBooks, data]);
            setNewBook('');
        })
        .catch(error => console.error('Error adding book:', error));
    };

    const handleRemoveBook = (bookId) => {
        fetch(`http://localhost:5000/api/tbr-books/${bookId}`, {
            method: 'DELETE',
        })
        .then(() => {
            setTbrBooks(tbrBooks.filter(book => book.id !== bookId));
        })
        .catch(error => console.error('Error removing book:', error));
    };

    return (
        <div className="tbr">
            <header className="tbr-header">
                <h1>Your TBR List</h1>
                <p>Add books you plan to read in the future!</p>
            </header>
            <section className="tbr-content">
                <form onSubmit={handleAddBook} className="tbr-form">
                    <input
                        type="text"
                        value={newBook}
                        onChange={(e) => setNewBook(e.target.value)}
                        placeholder="Enter book title"
                        required
                    />
                    <button type="submit">Add Book</button>
                </form>
                <ul className="tbr-list">
                    {tbrBooks.map((book) => (
                        <li key={book.id} className="tbr-item">
                            <span>{book.title}</span>
                            <button onClick={() => handleRemoveBook(book.id)} className="tbr-remove-button">Remove</button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default TBR;
