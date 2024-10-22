import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { CartContext } from './CartContext'; // Import the CartContext
import './navbar.css'; // Your existing CSS file
import Logo1 from './logo1-removebg-preview.png';
import Logo2 from './logo2-removebg-preview.png';

const Navbar = () => {
  const { cartItems } = useContext(CartContext); // Access cart items from context

  return (
    <nav className='navbar'>
      {/* Logo Section */}
      <div className='logos'>
        <img src={Logo1} alt="Logo 1" className='logo-img' />
        <img src={Logo2} alt="Logo 2" className='logo-img' />
      </div>

      {/* Search Bar Section */}
      <form className='search-bar'>
        <input type='text' placeholder='Search...' className='search-input' />
        <button type='submit' className='search-btn'>Search</button>
      </form>

      {/* Navigation Links */}
      <ul className='nav-links'>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link> 
        </li>
        <li>
          <Link to="/learn">Learn</Link> 
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart" className='cart-btn'>
            Cart {cartItems.length > 0 && `(${cartItems.length})`} {/* Display item count */}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
