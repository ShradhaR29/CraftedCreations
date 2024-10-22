import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; // Import your CartProvider

// Import Router components
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import Shop from './components/shop';
import AccessoriesPage from './components/AccessoriesPage';
import ClothingPage from './components/ClothingPage';
import HomeDecorPage from './components/HomeDecorPage';
import About from './components/About';
import Footer from './components/Footer';
import PremiumTutorials from './components/Tutorials/PremiumTutorials';
import FreeTutorials from './components/Tutorials/FreeTutorials';
import TutorialsPage from './components/Tutorials/TutorialsPage';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider> {/* Wrap the entire app with the CartProvider */}
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/accessories" element={<AccessoriesPage />} />
            <Route path="/shop/clothing" element={<ClothingPage />} />
            <Route path="/shop/homedecor" element={<HomeDecorPage />} />
            <Route path="/learn" element={<TutorialsPage />} />
            <Route path="/tutorials/freetutorials" element={<FreeTutorials />} />
            <Route path="/tutorials/premiumtutorials" element={<PremiumTutorials />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} /> {/* Ensure correct casing */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
