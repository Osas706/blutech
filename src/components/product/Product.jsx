import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <>
      <div className="product">
        <div></div>

        <span>{product.id}.</span>
        <img src={product.image} alt="" />
        <span>{product.sku}</span>
        <span>{product.name}</span>
        <span>{product.title}</span>
        <span>{product.description}</span>
        <span>{product.brand}</span>
        <span>{product.cost}</span>
        <span>{product.qty}</span>
        <span>{product.size}</span>
      </div>

      <div className="div"></div>
    </>
  );
};

export default Product;
