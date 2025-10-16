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
           <li><a href="#home">Home</a></li>
            
             <li><a href="#about">About Us</a></li>
             <li><a href="#card">Use Cases</a></li>
            <li><a href="https://sunswap.com/?lang=en-US#/v2?t0=TGfJ7GoEHZovXM9SVHb5pkBDCj5d4sLKmw&t1=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&type=swap&from=scan
">Presale Information</a></li>
             <li><a href="https://silvers-token.gitbook.io/silvers-token/">Whitepeper</a></li>
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
        {/* <div className="footer-section footer-right">
          <h3>Contact Us</h3>
          <p>Address: [Insert Company Address]</p>
          <p>Email:supportsilvernova@gmail.com</p>
          <p>Phone: [Insert Phone Number]</p>
         
        </div> */}
      </div>

   <div className="footer-bottom">
  <p>© 2025 Silvernova. All Rights Reserved.</p>
  <div className="footer-bottom-icons">
  <a
    href="https://www.instagram.com/silvernova_io/?hl=en"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.facebook.com/Silvernova.io/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook />
  </a>

  <a
    href="https://t.me/silvernovaofficialchannel"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTelegramPlane />
  </a>

  <a
    href="https://yourgamepage.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGamepad />
  </a>

  <a
    href="https://www.youtube.com/@Silvernova_io"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube />
  </a>
</div>

</div>
      
    </footer>
  );
};

export default Footer;
