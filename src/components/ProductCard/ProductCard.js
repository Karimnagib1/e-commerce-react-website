import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <h1 className="title">{product.title}</h1>
      <div className="image-wrap">
        <img className="card-img" src={product.thumbnail} alt="productImage" />
      </div>
      <p className="price">{product.price}$</p>
      <p className="description">{product.description}</p>
      <div className="card_actions">
        <button className="btn">Add to Cart</button>{" "}
        <button className="btn">Buy </button>
      </div>
    </div>
  );
};

export default ProductCard;
