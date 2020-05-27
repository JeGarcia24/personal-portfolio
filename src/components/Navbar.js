import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'


const responsiveNavbar = () => {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function Navbar(props) {

    return (
        <div>
            <header>
                <nav className="topnav" id="navbar">
                    <div className="navList">
                        <Link to="/" className="navLink">Home</Link>
                        <Link to="/about" className="navLink">About</Link>
                        <Link to="/portfolio" className="navLink" id="portfolioNav">Portfolio</Link>
                        <Link to="/contact" className="navLink">Contact</Link>
                        <button className="menu" type="button" onClick={responsiveNavbar}>
                            <span className="menu-line"></span>
                        </button>
                    </div>
                    
                </nav>        
            </header>
        </div>
    )
};

export default Navbar;