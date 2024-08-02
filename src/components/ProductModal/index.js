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
        <div className="modal-body">
          <div className="left-side">
            <div className="product-card-small">
              <img
                src={product.image}
                alt={product.title}
                className="product-image-small"
              />
              <div className="product-details-small">
                <p>{product.title}</p>
              </div>
            </div>
            <p className="product-details-small">{product.description}</p>
          </div>
          <div className="right-side">
            <h1 className="title">Minha Sacola</h1>
            <p className="product-title-small">{product.title}</p>
            <div className="divider"></div>
            <p className="product-price-small">{product.price}</p>
            <button className="modal-button">Continuar Comprando</button>
            <button className="modal-button">Finalizar Compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
