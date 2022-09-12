import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../features/Products/ProductsSlice";
import {useNavigate} from 'react-router-dom';
 
import "./SearchBox.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm) {
        navigate('/products', {replace: true});
        dispatch(getProducts(searchTerm));
      }else {
        navigate('/', {replace: true});
      }
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchTerm, dispatch, navigate]);
  
  return (
    <div>
      <input
        type="text"
        onChange={handleSearchTerm}
        className="search"
        id="search"
        value={searchTerm}
        placeholder="Search Products"
      />
    </div>
  );
};

export default SearchBox;
