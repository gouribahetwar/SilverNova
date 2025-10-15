import React from "react";
import "./Hero.css";
import heroVideo from "../../assets/hero-bg.mp4"; 
import coinImg from "../../assets/hero-coin.png"; 
import GenerateButton from "../Button/GenerateButton";
// import BuyButton from "../Button/BuyButton";
import sparkleImg from "../../assets/btnlogo.png"; 

const Hero = () => {
  return (
    <div className="hero">
      <video className="hero-bg" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Revolutionizing <span>Digital Finance</span> with{" "}
            <span>Blockchain Innovation</span>
          </h1>
          <p> 
            Silvernova Token (SRN) is more than just a cryptocurrency It's a
            revolution in digital finance! Built on the BEP-20 network, SRN is
            designed to fuel a new era of seamless transactions, passive
            earnings, and blockchain-powered innovations.
          </p>
          <div className="hero-buttons">
              <GenerateButton icon={sparkleImg}>
                     Buy Now
                   </GenerateButton>
              <GenerateButton icon={sparkleImg}>
          Whitepaper
        </GenerateButton>
          </div>
        </div>

        <div className="hero-right">
          <img src={coinImg} alt="Silvernova Coin" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
