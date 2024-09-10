import React, { useState, useEffect } from 'react';
import './BookReview.css'; // Import the CSS file

const Bookreview = () => {
    const [reviews, setReviews] = useState([]);
    const [bookTitle, setBookTitle] = useState('');
    const [reviewText, setReviewText] = useState('');

    useEffect(() => {
        // Fetch existing reviews from the backend when the component mounts
        fetch('http://localhost:5000/api/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    const handleSubmitReview = (e) => {
        e.preventDefault();
        if (!bookTitle.trim() || !reviewText.trim()) return;

        const newReview = { title: bookTitle, review: reviewText };

        fetch('http://localhost:5000/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newReview),
        })
        .then(response => response.json())
        .then(data => {
            setReviews([...reviews, data]);
            setBookTitle('');
            setReviewText('');
        })
        .catch(error => console.error('Error adding review:', error));
    };

    return (
        <div className="book-review">
            <header className="book-review-header">
                <h1>Book Reviews</h1>
                <p>Share your thoughts on your favorite books!</p>
            </header>
            <section className="book-review-content">
                <form onSubmit={handleSubmitReview} className="book-review-form">
                    <input
                        type="text"
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                        placeholder="Book Title"
                        required
                    />
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Write your review..."
                        required
                    />
                    <button type="submit">Submit Review</button>
                </form>
                <div className="book-review-list">
                    {reviews.map((review) => (
                        <div key={review.id} className="book-review-item">
                            <h2 className="book-review-title">{review.title}</h2>
                            <p className="book-review-text">{review.review}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Bookreview;

