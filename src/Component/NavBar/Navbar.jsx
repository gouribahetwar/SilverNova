import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"; 
import GenerateButton from "../Button/GenerateButton";
import sparkleImg from "../../assets/btnlogo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="SilverNova Logo" className="nav-logo" />
      </div>

      {/* Hamburger / close button */}
      <div className="nav-burger" onClick={toggleMenu}>
        <div className={`burger-line ${isOpen ? "rotate1" : ""}`}></div>
        <div className={`burger-line ${isOpen ? "fade" : ""}`}></div>
        <div className={`burger-line ${isOpen ? "rotate2" : ""}`}></div>
      </div>

      {/* Desktop Whitepaper button */}
     

      {/* Mobile links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" className="nunito">Home</a></li>
        <li><a href="#about" className="nunito">About Us</a></li>
        <li><a href="#usecase" className="nunito">Use Case</a></li>
        <li><a href="#tokenomics" className="nunito">Tokenomics</a></li>
        <li><a href="#roadmap" className="nunito">Roadmap</a></li>
        <li><a href="#presale" className="nunito">Presale</a></li>
      </ul>


       <div className="nav-right desktop-only">
        <GenerateButton icon={sparkleImg}>
          Whitepaper
        </GenerateButton>
      </div>
    </nav>
  );
};

export default Navbar;
