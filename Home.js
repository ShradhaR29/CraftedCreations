import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'; 

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Yarn Yards</h1>
          <p className="hero-subtitle">Handmade Crochet Products by Talented Housewives & Hobbyists</p>
          <li>
          <Link to="/shop" className="cta-btn">Shop now</Link>    
          </li>
              </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2 className="section-title">About Us</h2>
        <p className="about-text">
          At Yarn Yards, we bring together the creativity of housewives and hobbyists, offering beautiful and unique crochet products. We also provide learning resources for crochet enthusiasts of all skill levels.
        </p>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {/* Example featured product card */}
          <div className="product-card">
            <img src="Jellyfish keychain.png" alt="Product 1" className="product-image" />
            <h3 className="product-name">Jellyfish Keychain</h3>
            <p className="product-price">Rs. 149</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="Buuterfly tote bag.png" alt="Product 2" className="product-image" />
            <h3 className="product-name">Butterfly Tote Bag</h3>
            <p className="product-price">Rs. 349</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="Sea sculpture hanging.png" alt="Product 3" className="product-image" />
            <h3 className="product-name">Sea Sculpture Hanging</h3>
            <p className="product-price">Rs. 199</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="Crochet roses.png" alt="Product 4" className="product-image" />
            <h3 className="product-name">Crochet Roses</h3>
            <p className="product-price">Rs. 249</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          {/* Add more product cards similarly */}
        </div>
      </section>

{/* Tutorials Section */}
<section className="tutorials">
  <h2 className="section-title">Learn Crochet with Us</h2>
  <div className="tutorial-content">
    <div className="tutorial-description">
      <p>
        Welcome to our crochet community! We are passionate about sharing the art of crochet with everyone. Whether you are a beginner or an experienced crocheter, our tutorials and resources are designed to inspire creativity and help you improve your skills.
      </p>
    </div>
    <div className="tutorial-grid">
      <div className="tutorial-card">
        <img src="Baby hat.jpeg" alt="Tutorial 1" className="tutorial-image" />
        <div className="tutorial-info">
          <h3 className="tutorial-title">How to Crochet a Hat</h3>
          <button
          className ="view-tutorial-btn"
          onClick={()=>window.open('https://youtu.be/tWy4bU6FRXY?si=sRE8OGoHVhDSTZwx')}
          >View Tutorial</button>
        </div>
      </div>
      {/* Add more tutorial cards similarly */}
    </div>
  </div>
</section>
</div>
  );
};

export default HomePage;
