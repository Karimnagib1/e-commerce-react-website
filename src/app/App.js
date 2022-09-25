import React from "react";
import Header from "../components/Header/Header";
import Products from "../features/Products/Products";
import Login from "../features/Login/Login";
import Signup from "../features/Signup/Signup";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import ProductDetails from "../components/ProductDetails/ProductDetails";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <main>
          {/* <Products /> */}
            <Routes>
              <Route path="/" element= {<Home />} />
              <Route path = "/products" element = {<Products />}/>
              <Route path= "/products/:category" element = {<Products />} />
              <Route path= "/login" exact element = {<Login />} />
              <Route path= "/signup" exact element = {<Signup />} />
              <Route path= "/product:id" element = {<ProductDetails />} />

            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
