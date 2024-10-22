import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a platform dedicated to empowering artisans by providing them with a space to showcase and sell their
            crochet products. Every piece is handmade with love and care, ensuring quality and uniqueness in each item.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/learn">Learn</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/yarnyards.co?igsh=bHUycXE1Zm9xZDM1" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 YarnYards | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
