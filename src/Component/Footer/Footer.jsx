import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

import {
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaGamepad,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <div className="footer-logo">
            <img src={logo} alt="Silvernova Logo" />
          </div>
          <p className="f-left">
            Silvernova Token (SRN) is more than just a cryptocurrency — it’s a
            revolution in digital finance! Built on the BEP-20 network, SRN is
            designed to fuel a new era of seamless transactions, passive
            earnings, and blockchain-powered innovations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Use Cases</li>
            <li>Presale Information</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Disclaimer</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section footer-right">
          <h3>Contact Us</h3>
          <p>Address: [Insert Company Address]</p>
          <p>Email:supportsilvernova@gmail.com</p>
          <p>Phone: [Insert Phone Number]</p>
         
        </div>
      </div>

   <div className="footer-bottom">
  <p>© 2025 Silvernova. All Rights Reserved.</p>
  <div className="footer-bottom-icons">
    <FaInstagram />
    <FaFacebook />
    <FaTelegramPlane />
    <FaGamepad />
    <FaYoutube />
  </div>
</div>
      
    </footer>
  );
};

export default Footer;
