import React, { useState, useEffect } from 'react';
import './BookList.css'; // Import the CSS file

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        // Fetch existing books from the backend when the component mounts
        fetch('http://localhost:5000/api/books')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    const handleAddBook = (e) => {
        e.preventDefault();
        if (!title.trim() || !author.trim() || !genre.trim() || !year) return;

        const newBook = { title, author, genre, year };

        fetch('http://localhost:5000/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
        })
        .then(response => response.json())
        .then(data => {
            setBooks([...books, data]);
            setTitle('');
            setAuthor('');
            setGenre('');
            setYear('');
        })
        .catch(error => console.error('Error adding book:', error));
    };

    return (
        <div className="book-list">
            <header className="book-list-header">
                <h1>Book List</h1>
                <p>Add your favorite books to your list!</p>
            </header>
            <section className="book-list-content">
                <form onSubmit={handleAddBook} className="book-list-form">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        required
                    />
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Author"
                        required
                    />
                    <input
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        placeholder="Genre"
                        required
                    />
                    <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="Year"
                        required
                    />
                    <button type="submit">Add Book</button>
                </form>
                <ul className="book-list-items">
                    {books.map((book) => (
                        <li key={book.id} className="book-list-item">
                            <h2 className="book-title">{book.title}</h2>
                            <p className="book-author">by {book.author}</p>
                            <p className="book-genre">{book.genre}</p>
                            <p className="book-year">{book.year}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default BookList;
