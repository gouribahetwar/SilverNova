import React from 'react';
import './BuyButton.css';

const BuyButton = ({ 
  children = "Generate", 
  className = "", 
  onClick, 
  icon // <-- custom image prop
}) => {
  const text = children.split("");

  const renderLetters = (letters) => (
    <>
      {letters.map((letter, index) => (
        <span key={index} className="buy-btn-letter">
          {letter}
        </span>
      ))}
    </>
  );

  return (
    <div className={`buy-btn-wrapper ${className}`}>
      <button className="buy-btn" onClick={onClick}>
        {icon && <img src={icon} alt="icon" className="buy-btn-icon" />}

        <div className="buy-txt-wrapper">
          <div className="buy-txt-1">{renderLetters(text)}</div>
          <div className="buy-txt-2">{renderLetters(text)}</div>
        </div>
      </button>
    </div>
  );
};

export default BuyButton;
