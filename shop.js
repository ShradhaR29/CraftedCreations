import React from 'react';
import './shop.css'; // Ensure this is where your updated styles are
import { Link } from 'react-router-dom';

  const categories = [
    {
      title: "Clothing",
      items: ["Winter Wear", "Tops", "Shawls"],
      image: "./clothing.jpg" // Image path relative to public folder
    },
    {
      title: "Accessories",
      items: ["Hair Accessories", "Bracelets", "Socks", "Bags", "Wallets", "Case Covers", "Mobile Bags"],
      image: "./accessories.jpg" // Image path relative to public folder
    },
    {
      title: "HomeDecor",
      items: ["Mats", "Table Cloth", "Wall Hangings"],
      image: "./Crochet-Home-Decor-Featured.jpg" // Image path relative to public folder
    }
  ];
  

const Shop = () => {
  return (
    <div className="shop-container">
      <h1 className="shop-title">Shop Categories</h1>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.title} className="category-image"/>
            <h2 className="category-title">{category.title}</h2>
            <ul className="category-items">
              {category.items.map((item, i) => (
                <li key={i} className="category-item">{item}</li>
              ))}
            </ul>
            <Link to={`/shop/${category.title.toLowerCase()}`} className="view-more-btn">View More</Link>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default Shop;
