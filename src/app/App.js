import React from "react";
import Header from "../components/Header/Header";
import Products from "../features/Products/Products";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Categories/Categories";
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
              <Route path="/" element= {<Categories />} />
              <Route path = "/products" element = {<Products />}/>
              <Route path= "/products/:category" element = {<Products />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
