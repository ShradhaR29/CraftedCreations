import React from 'react';
import './shop.css'; // Make sure the CSS file is linked correctly

const homeDecorProducts = [
    { id: 1, name: 'Brown Doormat', price: 'Rs. 350', image: '/Brown Doormat.png' },
    { id: 2, name: 'Avocado Coasters', price: 'Rs. 150', image: '/Avacado Coasters.png' },
    { id: 3, name: 'Crochet Mirror', price: 'Rs. 450', image: '/Chrochet Mirror (1).png' },
    { id: 4, name: 'Crochet Roses', price: 'Rs. 350', image: '/Crochet roses.png' },
    { id: 5, name: 'Evil Eye Coasters', price: 'Rs. 150', image: '/Evileye cup.png' },
    { id: 6, name: 'Crochet Hanging Plant', price: 'Rs. 550', image: '/hanging plant.png' },
    { id: 7, name: 'Crochet Hanging Planter', price: 'Rs. 590', image: '/Hanging planter.png' },
    { id: 8, name: 'Leaf Cushions', price: 'Rs. 450', image: '/Leaf cushion.png' },
    { id: 9, name: 'Sea Sculpture Hanging', price: 'Rs. 390', image: '/sea sculpture hanging.png' },
    { id: 10, name: 'Crochet Tissue Box', price: 'Rs. 650', image: '/Tissue box.png' },
    { id: 11, name: 'Window Hanging', price: 'Rs. 950', image: '/window hanging.jpeg' },
    { id: 12, name: 'Hanging daisy plant', price: 'Rs. 250', image: '/Hanging daisy plants.png' },
    { id: 13, name: 'Lemon Coasters', price: 'Rs. 150', image: '/Lemon coasters.png' },
    { id: 14, name: 'Mini Cactus', price: 'Rs. 250', image: '/MiniCactus.png' },
    { id: 15, name: 'Sea sculptue Hanging', price: 'Rs. 390', image: '/Sea sculpture hanging1.png' },
    { id: 16, name: 'Honey Bee cushion', price: 'Rs. 250', image: '/Bee cushion.png' },
    { id: 17, name: 'Bee sculpture hanging', price: 'Rs. 390', image: '/Bee sculpture hanging.png' },
    { id: 18, name: 'Crochet baskets', price: 'Rs. 299', image: '/Crochet baskets.png' },
    { id: 19, name: 'Crochet blanket', price: 'Rs. 299', image: '/Crochet blanket.png' },
    { id: 20, name: 'Curtain Holder', price: 'Rs. 99', image: '/Curtain holder.png' },
    { id: 21, name: 'Curtain Holder', price: 'Rs. 99', image: '/Curtain holder1.png' },
    { id: 22, name: 'Flower Lamp', price: 'Rs. 399', image: '/Flower lamp.png' },
    { id: 23, name: 'Flower Veil', price: 'Rs. 399', image: '/Flower veil.png' },
    { id: 24, name: 'Flower Wreath', price: 'Rs. 399', image: '/Flower wreath.png' },
    { id: 25, name: 'Hanging Plant holder', price: 'Rs. 199', image: '/Hanging plat holder.png' },
    { id: 26, name: 'Heart Vase', price: 'Rs. 199', image: '/Heart vase.png' },
    { id: 27, name: 'Strawberry Veil', price: 'Rs. 299', image: '/Strawberry veil.png' },
    { id: 28, name: 'Sun Moon cushion', price: 'Rs. 199', image: '/SunMoon cushion.png' },
    { id: 29, name: 'Tulips', price: 'Rs. 399', image: '/Tulips.png' },
    { id: 30, name: 'Wall Hanging', price: 'Rs. 99', image: '/wallhanging.png' },
    { id: 31, name: 'Wall Hanging', price: 'Rs. 99', image: '/Wallhanging1.png' },
    { id: 32, name: 'Wall Hanging', price: 'Rs. 99', image: '/wallhanging2.png' },
    { id: 33, name: 'Watermelon Coaster', price: 'Rs. 199', image: '/Watermelon coasters.png' },

  ];
  

const HomeDecorPage = () => {
  return (
    <div className="shop-container">
      <h1 className="shop-title">Home Decor</h1>
      <div className="product-grid">
        {homeDecorProducts.map((product) => (
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

export default HomeDecorPage;
