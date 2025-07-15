import React, { useState, useEffect } from 'react';

const Reviews = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');
    
    useEffect(() => {
        fetch(`https://api.example.com/products/${productId}/reviews`)
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, [productId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewData = { review: newReview, productId };

        fetch(`https://api.example.com/products/${productId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
        .then(response => response.json())
        .then(data => {
            setReviews([...reviews, data]);
            setNewReview('');
        })
        .catch(error => console.error('Error submitting review:', error));
    };

    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={newReview} 
                    onChange={(e) => setNewReview(e.target.value)} 
                    placeholder="Write a review..." 
                    required 
                />
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default Reviews;