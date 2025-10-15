import React from "react";
import "./Token.css";
import silvenovaImg from "../../assets/ZToken.png";
import backgroundVideo from "../../assets/TokenVid.mp4";

const Token = () => {
  // Added color gradients for each box
  const data = [
    { label: "INVESTORS  40%", color: "linear-gradient(145deg, #ffffffff, #fffefdff)" },
    { label: "TEAM & ADVISORS 10%", color: "linear-gradient(45deg, #BCBDBF 0%, #101111 74.62%)" },
    { label: "STAKING & REWARDS 15%", color: "linear-gradient(295.77deg, #000000 0%, #C7C7C7 51%)" },
    { label: "COMMUNITY & REWARDS 15%", color: "linear-gradient(123.23deg, #D5D5D5 5.46%, #161616 91.81%)" },
    { label: "ECOSYSTEM & DEVELOPMENT 20%", color:"linear-gradient(315deg, #FFFFFF -100%, #404142 51.21%)" },
  ];

  return (
    <div className="token-section">
      {/* Video Background */}
      <video className="token-bg-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="token-content">
        <h2 className="token-subtitle">Tokenomics</h2>

        <p className="token-description">
          Silvernova Token (SRN) features a sustainable and growth-focused model ensuring fair distribution, ecosystem expansion, and rewarding opportunities for holders, investors, and the community.
        </p>

        <div className="token-container">
          <div className="token-left">
            <img
              src={silvenovaImg}
              alt="SilverNova Distribution"
              className="token-image"
            />
          </div>

          <div className="token-right">
            <div className="token-card">
              {data.map((item, index) => (
                <div key={index} className="token-row">
                  <span
                    className="token-box"
                    style={{ background: item.color }}
                  ></span>
                  <p className="token-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
