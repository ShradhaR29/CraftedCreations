import React from 'react';
import './FeaturedProducts.css';

const featuredProducts = [
  { id: 1, name: 'Sunflower Bandanas', price: 199, description: 'Beautiful handcrafted bandanas.', image: '/images/Sunflower_bandanas(1).png' },
  { id: 2, name: 'Crochet Mirror', price: 499, description: 'A unique crochet mirror frame.', image: '/images/Chrochet_Mirror(1).png' },
  { id: 3, name: 'Sunflower Keychain', price: 99, description: 'A cute sunflower keychain.', image: '/images/Sunflower_keychain.png' },
  { id: 4, name: 'Tulips Flowers', price: 299, description: 'Handmade tulip flowers.', image: '/images/Tulips.png' },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product">
              <div className="overlay"></div>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">Rs.{product.price.toFixed(2)}</p>
              <p className="product-description">{product.description}</p>
              <button className="btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
