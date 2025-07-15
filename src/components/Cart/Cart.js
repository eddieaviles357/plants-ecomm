import React, { useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const updateItemQuantity = (itemId, quantity) => {
        setCartItems(cartItems.map(item => 
            item.id === itemId ? { ...item, quantity } : item
        ));
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - Quantity: {item.quantity}
                            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;