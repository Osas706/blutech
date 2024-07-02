import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <>
      <div className="product">
        <div></div>

        <span>{product.id}.</span>
        <img src={product.Image_1} alt="" />
        <span>{product.SKU}</span>
        <span>{product.Name}</span>
        <span>{product.Title}</span>
        <span>{product.Description}</span>
        <span className="brand">{product.Brand}</span>
        <span>{product.cost}</span>
        <span>{product.quantity}</span>
        <span>{product.size}</span>
      </div>

      <div className="div"></div>
    </>
  );
};

export default Product;
