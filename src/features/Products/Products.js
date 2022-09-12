/* eslint-disable react-hooks/rules-of-hooks */
import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
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
  console.log(products);
  let cartLength = products.length;
  const [searchTerm, setSearchTerm] = useState("");
  const status = useSelector(selectProductsStatus);
  const params = useParams();
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  // To get Categories
  useEffect(() => {
    if (params.category) {
      dispatch(getProductsByCategory(params.category));
    } else {
      dispatch(getProducts());
    }
    return () => {
      dispatch(clearProducts());
    };
  }, [dispatch, params.category]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm) {
        dispatch(getProducts(searchTerm));
      }
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchTerm, dispatch]);

  return (
    <div className="products">
      <input
        type="text"
        onChange={handleSearchTerm}
        className="search"
        id="search"
        value={searchTerm}
        placeholder="Search Products"
      />
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
