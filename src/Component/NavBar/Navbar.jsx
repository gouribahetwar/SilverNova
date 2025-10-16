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
  <li><a href="#home" className="nunito" onClick={() => setIsOpen(false)}>Home</a></li>
  <li><a href="#about" className="nunito" onClick={() => setIsOpen(false)}>Stake</a></li>
  <li><a href="#about" className="nunito" onClick={() => setIsOpen(false)}>About Us</a></li>
  <li><a href="#card" className="nunito" onClick={() => setIsOpen(false)}>Use Case</a></li>
  <li><a href="#token" className="nunito" onClick={() => setIsOpen(false)}>Tokenomics</a></li>
  <li><a href="#roadmap" className="nunito" onClick={() => setIsOpen(false)}>Roadmap</a></li>
  <li><a href="https://sunswap.com/?lang=en-US#/v2?t0=TGfJ7GoEHZovXM9SVHb5pkBDCj5d4sLKmw&t1=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&type=swap&from=scan" className="nunito" onClick={() => setIsOpen(false)}>Presale</a></li>
</ul>



       <div className="nav-right desktop-only">
       <GenerateButton
  icon={sparkleImg}
  onClick={() => window.open("https://silvers-token.gitbook.io/silvers-token/", "_blank")}
>
  Whitepaper
</GenerateButton>

      </div>
    </nav>
  );
};

export default Navbar;
