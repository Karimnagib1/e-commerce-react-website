import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";
const ProductsList = ({products}) => {
  return (
    <div className="cards-wrapper">
      {products.map((product) => {
        return <ProductCard product={product} key = {product.id}/>;
      })}
    </div>
  );
};

export default ProductsList;
