import React, { useState, useEffect } from 'react';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlistItems(storedWishlist);
    }, []);

    const removeFromWishlist = (item) => {
        const updatedWishlist = wishlistItems.filter(wishlistItem => wishlistItem.id !== item.id);
        setWishlistItems(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    return (
        <div className="wishlist">
            <h2>Your Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul>
                    {wishlistItems.map(item => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <button onClick={() => removeFromWishlist(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;