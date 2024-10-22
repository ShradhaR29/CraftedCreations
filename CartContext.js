// src/contexts/CartContext.js

import React, { createContext, useState } from 'react';

// Create the Cart Context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
