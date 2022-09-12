import { React, useEffect } from "react";
import "./Header.css";

import { Link } from "react-router-dom";
const Header = () => {
  useEffect(() => {
    //this didn't work. Try another thing.
    var myNav = document.getElementById("mynav");
    var search = document.getElementsByClassName("search-container")[0];

    window.onscroll = function () {
      if (window.scrollY > 200) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        search.style.display = "flex";
      } else {
        search.style.display = "none";
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
      }
    };
  });
  return (
    <div className="header-container">
      <header id="mynav">
        <nav>
          <ul>
          <Link to= '/' >
              <li>
                Home
              </li>
            </Link>
            <li>Contact Us</li>
            <li>About</li>
          </ul>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="search" />
          <div className="search-button"></div>
        </div>
        <div className="authetication-container">
          <div className="authentication">Login</div>
          <div className="authentication signup">Sign Up</div>
        </div>
      </header>
      <div className="banner"></div>
    </div>
  );
};

export default Header;
