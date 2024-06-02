import React from 'react';
import './card.css';

const ProductCard = () => {
  return (
    <>
  
  
   

    <div className="product-card">
       
      <div className="product-image">
        <div className="yellow-square"></div>
        <span className="edit-icon">&#9998;</span>
      </div>
      <div className="product-details">
        <h3>Product B</h3>
        <div className="product-rating">
          <span className="star-icon">&#9733;</span>
          <span className="star-icon">&#9733;</span>
          <span className="star-icon">&#9733;</span>
          <span className="star-icon">&#9733;</span>
          <span className="star-icon">&#9733;</span>
          <span>4.7 (1k)</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
      </div>
    </div>

    </>



  );
};

export default ProductCard;
