import React from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={product.image} alt={product.description} />
        <h2>{product.description}</h2>
      </div>
    </div>
  );
};

export default ProductModal;
