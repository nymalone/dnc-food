import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, onAddClick }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <p>{title}</p>
        <button className="buy-button" onClick={onAddClick}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
