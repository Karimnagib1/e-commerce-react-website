import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../features/Products/ProductsSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons';

import "./SearchBox.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate("/products", { replace: true });
    dispatch(getProducts(searchTerm));
  };

  return (
    <form onSubmit={search} className="search-container">
      <input
        type="text"
        onChange={handleSearchTerm}
        className="search"
        id="search"
        value={searchTerm}
        placeholder="Search Products"
      />
      <button className="search-btn" type="submit">
        <FontAwesomeIcon icon = {faSearch} />
      </button>
    </form>
  );
};

export default SearchBox;
// fix getting a category problem
