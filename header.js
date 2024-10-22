import React, { useState } from 'react';
import './navbar.css';
import logo1 from '../assets/images/logo1.jpg';
import logo2 from '../assets/images/logo2.jpg';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/" className="logo-link">
            <img src={logo1} alt="Yarn" className="logo-image" />
            <img src={logo2} alt="Yards" className="logo-image" />
          </a>
        </div>
        
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/shop" className="nav-links">Shop</a>
          </li>
          <li className="nav-item">
            <a href="/learn" className="nav-links">Learn</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links">About</a>
          </li>
          <li className="nav-item dropdown">
            <button className="nav-links dropdown-btn">
              Menu <i className="fas fa-caret-down"></i>
            </button>
            <ul className="dropdown-content">
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQ</a></li>
              {/* Add more dropdown items as needed */}
            </ul>
          </li>
          <li className="nav-item">
            <div className="search-container">
              <input type="text" placeholder="Search products..." className="search-input" />
              <button className="search-btn"><i className="fas fa-search"></i></button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
