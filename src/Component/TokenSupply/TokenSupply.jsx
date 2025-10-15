import React from "react";
import "./TokenSupply.css";

const TokenSupply = () => {
  const supplyData = [
    { name: "TOKEN NAME", value: "Silvernova Token" },
    { name: "SYMBOL", value: "SRN" },
    { name: "TOTAL SUPPLY", value: "3 billion" },
    { name: "DECIMAL", value: "18" },
    { name: "NETWORK", value: "BEP-20" },
  ];

  return (
    <div className="supply-main">
      {supplyData.map((item, index) => (
        <div key={index} className="supply-container">
          <div className="left-box">{item.name}</div>
          <div className="right-box">{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default TokenSupply;
