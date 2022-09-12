import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";
const ProductsList = ({products}) => {
  return (
    <div class="cards-wrapper">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
