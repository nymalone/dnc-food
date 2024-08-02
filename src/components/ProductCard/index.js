import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, description, onAddClick }) => {
  return (
    <div className="product-card">
      <img src={image} alt={description} className="product-image" />
      <div className="product-details">
        <p>{description}</p>
        <button className="buy-button" onClick={onAddClick}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
