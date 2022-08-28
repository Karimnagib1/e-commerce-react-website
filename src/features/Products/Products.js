/* eslint-disable react-hooks/rules-of-hooks */
import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  selectProducts,
  selectProductsStatus,
  // selectFilteredProducts,
  // setFilteredProducts
} from "./ProductsSlice";
import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  // const filteredProducts = useSelector(selectFilteredProducts);

  let cartLength = products.length;

  const [searchTerm, setSearchTerm] = useState("");

  //complete search with the api instead
  // const search = (e) => {
  //   const term = e.target.value;
  //   setSearchTerm(term);
  //   if (term === ""){
  //       return dispatch(setFilteredProducts(products));
  //   }
  //   let prods = products.filter(prod => {
  //       return prod.title.toLowerCase().includes(term);
  //   })
  //   dispatch(setFilteredProducts(prods));
  // }

  const status = useSelector(selectProductsStatus);

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(getProducts());

  }, []);

  useEffect(() => {
    const timeout = setTimeout(()=> {
      dispatch(getProducts(searchTerm));
    }, 2000)
    return ()=> {
      clearTimeout(timeout);
    }
  }, [searchTerm, dispatch]);

  if (status === "pending") {
    return (
      <div className="products">
        <input
          type="text"
          onChange={handleSearchTerm}
          className="search"
          id="search"
          value={searchTerm}
          placeholder="Search Products"
        />{" "}
        {/*[(ngModel)]="searchValue" */}
        {/* <select>
        
        <option value="all">All</option>
        <option value="skincare">Skin Care</option>
        <option value="fragrances">Fragrances</option>
        <option value="laptops">Laptops</option>
        <option value="smartphones">Smart Phones</option>
      </select> */}
        <h2 className="section-title">products</h2>
        <p>Products in the cart: {cartLength}</p>
        <div className="b">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } else if (status === "fulfilled") {
    return (
      <div>
        <div className="products">
          <input
            type="text"
            onChange={handleSearchTerm}
            className="search"
            id="search"
            value={searchTerm}
            placeholder="Search Products"
          />{" "}
          {/*[(ngModel)]="searchValue" */}
          {/* <select>
        
        <option value="all">All</option>
        <option value="skincare">Skin Care</option>
        <option value="fragrances">Fragrances</option>
        <option value="laptops">Laptops</option>
        <option value="smartphones">Smart Phones</option>
      </select> */}
          <h2 className="section-title">products</h2>
          <p>Products in the cart: {cartLength}</p>
          <div className="cards-wrapper">
            {products.map((product) => {
              return (
                <div className="card">
                  {/* *ngIf= "product.stock> 0" */}
                  <h1 className="title">{product.title}</h1>
                  <div className="image-wrap">
                    <img
                      className="card-img"
                      src={product.thumbnail}
                      alt="productImage"
                    />
                    {/* [routerLink]="['/products', product.id]" */}
                  </div>
                  <p className="price">{product.price}$</p>
                  <p className="description">{product.description}</p>
                  <div className="card_actions">
                    <button className="btn">Add to Cart</button>{" "}
                    {/* (click)="addToCart(product.id)" */}
                    <button className="btn">Buy </button>{" "}
                    {/* (click)="buyProduct(product.id)" */}
                  </div>
                </div>
              );
            })}
            {/* *ngFor= "let product of filteredProducts" */}
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="error">Something went wrong!</div>;
  }
};

export default Products;
