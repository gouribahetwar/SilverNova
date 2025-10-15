import React from "react";
import "./Contract.css";
import statueImg from "../../assets/Contract.png";
import sparkleImg from "../../assets/btnlogo.png";

const Contract = () => {
  const contractAddress = "0xb2ffd1b3b48d6913d8d76062cae30708d2a16e62";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract Address Copied!");
  };

  return (
    <div className="contract-container">
      {/* Left Statue */}
      <div className="contract-left">
        <img src={statueImg} alt="Silver Nova Statue" />
      </div>

      {/* Right Text Section */}
      <div className="contract-right">
        <h3>
          Contract <span>Address</span>
        </h3>

        <div className="address-box">
          <p>{contractAddress}</p>
        </div>

        <button className="copy-btn" onClick={copyToClipboard}>
          <img src={sparkleImg} alt="icon" className="copy-icon" />
          Copy Address
        </button>
      </div>
    </div>
  );
};

export default Contract;
