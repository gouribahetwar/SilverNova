import React from 'react';
import './GenerateButton.css';

const GenerateButton = ({ 
  children = "Generate", 
  className = "", 
  onClick, 
  icon 
}) => {
  // Split text into letters including spaces
  const text = children.split("");

  const renderLetters = (letters) => (
    <>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`btn-letter ${letter === " " ? "space" : ""}`}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </>
  );

  return (
    <div className={`btn-wrapper ${className}`}>
      <button className="btn" onClick={onClick}>
        {icon && <img src={icon} alt="icon" className="btn-icon" />}

        <div className="txt-wrapper">
          <div className="txt-1">{renderLetters(text)}</div>
          <div className="txt-2">{renderLetters(text)}</div>
        </div>
      </button>
    </div>
  );
};

export default GenerateButton;
