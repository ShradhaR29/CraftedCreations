import React from 'react';
import './shop.css';

const clothingProducts = [
  { id: 1, name: 'Blue White Crop Top', price: 'Rs. 499', image: '/Blue white crop top.png' },
  { id: 2, name: 'Brown Croptop', price: 'Rs. 599', image: '/Brown cute top.png' },
  { id: 3, name: 'Cherry Jacket', price: 'Rs. 649', image: '/cherry jacket.png' },
  { id: 4, name: 'Crochet Dressover top', price: 'Rs. 699', image: '/crochet dressover.png' },
  { id: 5, name: 'Crochet mini skirt', price: 'Rs. 549', image: '/crochet mini skirt.png' },
  { id: 6, name: 'Crochet Red Shirt', price: 'Rs. 499', image: '/crochet red shirt.png' },
  { id: 7, name: 'Cropped Sweatshirt', price: 'Rs. 549', image: '/Cropped sweat shirt.png' },
  { id: 8, name: 'Red Turtle neck top', price: 'Rs. 399', image: '/Red turtle neck top.png' },
  { id: 9, name: 'Sunflower Bucket hat', price: 'Rs. 449', image: '/Sunflower bucket hat.png' },
  { id: 10, name: 'Strawberry Bucket Hat', price: 'Rs. 249', image: '/Strawberry bucket hat.png' },
  { id: 11, name: 'White Leg warmer', price: 'Rs. 149', image: '/White leg warmers.png' },
  { id: 12, name: 'Winter Shawl', price: 'Rs. 199', image: '/Shawl.webp' },
  { id: 13, name: 'Baby Converse', price: 'Rs. 149', image: '/Baby converse.png' },
  { id: 14, name: 'Baby Evil eye sweatshirt', price: 'Rs. 199', image: '/Baby evileye sweatshirt.png' },
  { id: 15, name: 'Baby hat', price: 'Rs. 99', image: '/Baby hat.jpeg' },
  { id: 16, name: 'Baby onesie', price: 'Rs. 199', image: '/Baby onesie.png' },
  { id: 17, name: 'Baby sandals', price: 'Rs. 99', image: '/Baby sandals.png' },
  { id: 18, name: 'Baby Bunny onesie', price: 'Rs. 299', image: '/Baby1.png' },
  { id: 19, name: 'Blue Baby Frock', price: 'Rs. 229', image: '/Blue baby frock.png' },
  { id: 20, name: 'Bunny Bucket Hat', price: 'Rs. 99', image: '/Bunny bucket hat.png' },
  { id: 21, name: 'Bunny Hat', price: 'Rs. 79', image: '/Bunny hat.png' },
  { id: 22, name: 'Bunny Shoes', price: 'Rs. 199', image: '/Bunny shoes.png' },
  { id: 23, name: 'Baby Grey shoes', price: 'Rs. 99', image: '/Grey shoes.png' },
  { id: 24, name: 'Lemon Hat', price: 'Rs. 59', image: '/Lemon hat.png' },
  { id: 25, name: 'Baby Lilac onesie', price: 'Rs. 299', image: '/Lilac onesie.png' },
  { id: 26, name: 'Minnie baby Hat', price: 'Rs. 99', image: '/Minnie hat.png' },
  { id: 27, name: 'Mustard onesie', price: 'Rs. 199', image: '/Mustard onsie.png' },
  { id: 28, name: 'Baby pig shoes', price: 'Rs. 99', image: '/Pig shoes.png' },
  { id: 29, name: 'Strawberry Bucket Hat', price: 'Rs. 249', image: '/Strawberry bucket hat1.png' },
  { id: 30, name: 'Strawberry Baby costume', price: 'Rs. 299', image: '/Strawberry costume.png' },
  { id: 31, name: 'Strawberry Onesie', price: 'Rs. 149', image: '/Strawberry onesie.png' },
  { id: 32, name: 'Sunflower hat', price: 'Rs. 49', image: '/Sunflower hat.png' },
  { id: 33, name: 'Tulips top', price: 'Rs. 249', image: '/Tulips top.png' },

  // Add more items
];

const ClothingPage = () => {
  return (
    <div className="shop-container">
      <h1 className="shop-title">Clothing</h1>
      <div className="product-grid">
        {clothingProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingPage;
