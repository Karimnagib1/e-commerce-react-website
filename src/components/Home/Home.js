import React from "react";
import Categories from "../Categories/Categories";
import "./Home.css";
import axios from 'axios';

const Home = () => {
    // const handleClick = async (e) => {
    //     const response = await axios.get('http://localhost:5000/add-product');
    //     console.log(response.data);
    //   }
    
  return (
    <div>
      <div className="banner"></div>
      {/* <button onClick={handleClick}></button> */}
      <Categories />
    </div>
  );
};

export default Home;
