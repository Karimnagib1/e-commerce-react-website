/* eslint-disable react-hooks/rules-of-hooks */
import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductsByCategory,
  selectProducts,
  selectProductsStatus,
  clearProducts,
} from "./ProductsSlice";
import ProductsList from "../../components/ProductsList/ProductsList";
import Loading from "../../components/Loading/Loading";
import "./Products.css";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  let cartLength = products.length;
  const status = useSelector(selectProductsStatus);
  const params = useParams();

  // To get Categories
  useEffect(() => {
    if (params.category) {
      dispatch(getProductsByCategory(params.category));
    } 
    return () => {
      dispatch(clearProducts());
    };
  }, [dispatch, params.category]);



  return (
    <div className="products">
      <h2 className="section-title">products</h2>
      <p>Products in the cart: {cartLength}</p>
      {status === "pending" && <Loading />}
      {status === "fulfilled" && <ProductsList products={products} />}
      {status === "rejected" && (
        <div className="error">Something went wrong!</div>
      )}
    </div>
  );
};

export default Products;
