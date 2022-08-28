import {React, useEffect} from 'react';
import './Header.css';
const Header = () => {

    useEffect(() => {
        //this didn't work. Try another thing.
        var myNav = document.getElementById('mynav');
        window.onscroll = function () {     
            if (window.scrollY > 200 ) {
                myNav.classList.add("nav-colored");
                myNav.classList.remove("nav-transparent");
            } 
            else {
                myNav.classList.add("nav-transparent");
                myNav.classList.remove("nav-colored");
        }
        };  
    })
    return (
        <div className= "header-container">
            <header id = "mynav">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>About</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>
            <div className= 'banner'></div>                   
        </div>
    );
};

export default Header;