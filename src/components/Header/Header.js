import { React, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated, logout } from "../../features/Login/UserSlice";
import axios from "axios";
import "./Header.css";

import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  useEffect(() => {
    //this didn't work. Try another thing.
    var myNav = document.getElementById("mynav");
    // var search = document.getElementsByClassName("search-container")[0];

    window.onscroll = function () {
      if (window.scrollY > 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        // search.style.display = "flex";
      } else {
        // search.style.display = "none";
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
      }
    };
  });
 
  const handleLogout = (e) => {
    dispatch(logout());
    delete axios.defaults.headers.common["Authorization"];
    
  }
  return (
    <div className="header-container">
      <header id="mynav">
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>Contact Us</li>
            <li>About</li>
          </ul>
        </nav>
        {/* <div className="search-container">
          <input type="text" placeholder="search" />
          <div className="search-button"></div>
        </div> */}
        <SearchBox />
        <div className="authetication-container">
          {!isAuthenticated && (
            <Link to="/login">
              <div className="authentication"> Login </div>
            </Link>
          )}
          {!isAuthenticated && (
            <Link to="/signup">
              <div className="authentication signup">Sign Up</div>
            </Link>
          )}
          {isAuthenticated && (
            <Link to="/">
              <div className="authentication" onClick = {handleLogout}> Logout </div>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
