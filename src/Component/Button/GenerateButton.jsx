import React from 'react';
import './GenerateButton.css';

const GenerateButton = ({ 
  children = "Generate", 
  className = "", 
  onClick, 
  icon // <-- custom image prop
}) => {
  const text = children.split("");

  const renderLetters = (letters) => (
    <>
      {letters.map((letter, index) => (
        <span key={index} className="btn-letter">
          {letter}
        </span>
      ))}
    </>
  );

  return (
    <div className={`btn-wrapper ${className}`}>
      <button className="btn" onClick={onClick}>
        {/* ✅ Replace SVG with your image */}
        {icon && <img src={icon} alt="icon" className="btn-icon" />}

        {/* Text animation */}
        <div className="txt-wrapper">
          <div className="txt-1">{renderLetters(text)}</div>
          <div className="txt-2">{renderLetters(text)}</div>
        </div>
      </button>
    </div>
  );
};

export default GenerateButton;
