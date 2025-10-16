import React from "react";
import "./Contract.css";
import statueImg from "../../assets/Contract.png";
import sparkleImg from "../../assets/btnlogo.png";
import GenerateButton from "../Button/GenerateButton";

const Contract = () => {
  const address = "0xb2ffd1b3b48d6913d8d76062cae30708d2a16e62";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    alert("Contract Address Copied!");
  };

  return (
    <div className="contract-container">
      {/* Left statue */}
      <div className="contract-left">
        <img src={statueImg} alt="SilverNova Statue" className="contract-img" />
      </div>
      
      {/* Right content */}
      <div className="contract-right">
        <h2 className="contract-title">Contract Address</h2>
        <div className="contract-line"></div>

        <div className="address-box">
          <p className="contract-address-text">{address}</p>
        </div>
{/* 
        <button className="copy-btn" onClick={copyToClipboard}>
          <img src={sparkleImg} alt="icon" className="btn-icon" />
          Copy Address
        </button> */}

        
                <GenerateButton
                   onClick={copyToClipboard}
                  icon={sparkleImg} 
                >
                  Copy Adress
                </GenerateButton>
      </div>
    </div>
  );
};

export default Contract;
