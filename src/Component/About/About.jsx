import React from "react";
import "./About.css";
import globeVideo from "../../assets/1.mp4"; 
import GenerateButton from "../Button/GenerateButton";
import sparkleImg from "../../assets/btnlogo.png"; 

const About = () => {
  return (
    <div className="about-section" id="about">
      {/* Desktop video (visible on desktop only) */}
      <div className="about-left-desktop">
        <video
          src={globeVideo}
          autoPlay
          loop
          muted
          playsInline
          className="about-video"
        />
      </div>

      {/* Right side content */}
      <div className="about-right">
        <h3 className="about-subtitle sora">About Us</h3>

        {/* Mobile video (visible on mobile only, appears after subtitle) */}
        <div className="about-left-mobile">
          <video
            src={globeVideo}
            autoPlay
            loop
            muted
            playsInline
            className="about-video"
          />
        </div>

        <h2 className="about-title montserrat">
          Empowering the Future of Digital Finance with Silvernova Token (SRN)
        </h2>
        
        <p className="about-description montserrat">
          Silvernova Token (SRN) is a BEP-20 based digital asset designed to
          deliver seamless transactions, passive income opportunities, and
          advanced blockchain solutions across DeFi, NFTs, gaming, and global
          payment ecosystems.
        </p>

        <GenerateButton
          className="ABTBTN"
          icon={sparkleImg} 
        >
          Whitepaper
        </GenerateButton>
      </div>
    </div>
  );
};

export default About;
