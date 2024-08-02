import React from "react";
import ProductCard from "../ProductCard";
import products from "../../utils/mockProducts";
import "./ProductList.css";

const ProductList = ({ onAddClick }) => {
  console.log("products ->", products);
  return (
    <div className="product-list">
      {products.map((product) => {
        console.log("--------->", product);
        return (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            onAddClick={() => onAddClick(product)}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
