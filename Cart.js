// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeItem } = useContext(CartContext); // Access cart items and remove function

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="cart-item-img" /> {/* Display image */}
                        <div className="cart-item-details">
                        <h2 className="cart-item-title">{item.name}</h2> {/* Display name */}
                        <p className="cart-item-price">Rs.{item.price.toFixed(2)}</p>
                            <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            )}
            <h2>Total: Rs.{cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</h2>
            <button className="proceed-to-pay-btn">Proceed to Pay</button>
        </div>
    );
};

export default Cart;
