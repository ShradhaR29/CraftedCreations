import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Import CartContext
import './shop.css'; // Same CSS file for consistency

const accessoriesProducts = [
  { id: 1, name: 'Hair clips', price: 'Rs. 99', image: '/Flower hairclips.png' },
  { id: 2, name: 'Flower Charm', price: 'Rs. 99', image: '/Flower charm.png' },
  { id: 3, name: 'Jellyfish keychain', price: 'Rs. 89', image: '/Jellyfish keychain.png' },
  { id: 4, name: 'Flower keychains', price: 'Rs. 119', image: '/Flower keychains.png' },
  { id: 5, name: 'Flower Earphone case', price: 'Rs. 99', image: '/Flower earphone case.png' },
  { id: 6, name: 'Green flower keychain', price: 'Rs. 79', image: '/Green flower keychain.png' },
  { id: 7, name: 'Sunflower keychain', price: 'Rs. 69', image: '/Sunflower keychain.png' },
  { id: 8, name: 'Tulips keychain', price: 'Rs. 59', image: '/Tulips keychain.png' },
  { id: 9, name: 'Turtle keychain', price: 'Rs. 99', image: '/Turtle keychain.png' },
  { id: 10, name: 'Flower hairclips', price: 'Rs. 99', image: '/Untitled.png' },
  { id: 11, name: 'Red white tote bag', price: 'Rs. 249', image: '/Red white tote bag.png' },
  { id: 12, name: 'Butterfly Tote bag', price: 'Rs. 299', image: '/Buuterfly tote bag.png' },
  { id: 13, name: 'Bottle cover', price: 'Rs. 229', image: '/Bottle cover.png' },
  { id: 14, name: 'Cherry Earrings', price: 'Rs. 119', image: '/Cherry Earrings.png' },
  { id: 15, name: 'Sunflower Slingbag', price: 'Rs. 229', image: '/Sunflower slingbag.png' },
  // Add more items
];

const AccessoriesPage = () => {
  const { addToCart } = useContext(CartContext); // Access addToCart from context

  return (
    <div className="shop-container">
      <h1 className="shop-title">Accessories</h1>
      <div className="product-grid">
        {accessoriesProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button 
              className="add-to-cart-btn" 
              onClick={() => addToCart({ id: product.id, name: product.name, price: parseFloat(product.price.replace('Rs. ', '')) })} // Adjust the price format
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;
