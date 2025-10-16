import React, { useState } from "react";
import "./Faq.css";
import tickIcon from "../../assets/tick.png";
import topRightImg from "../../assets/faq1.png"; // 🟢 replace with your image path
import bottomLeftImg from "../../assets/faq2.png"; // 🟢 replace with your image path

const faqData = [
  {
    question: "What is SilverNova?",
    answer:
      "SilverNova (ticker SRN) is a digital token and blockchain-based project aiming to revolutionize digital finance. It is positioned not merely as a cryptocurrency, but as part of a broader movement in Web3, DeFi, and related ecosystems. X (formerly Twitter)",
  },
  {
    question: "On which blockchain network does SilverNova operate?",
    answer:
      "SilverNova operates on the BEP-20 network (BEP-20 standard)",
  },
  {
    question: "What is the total or maximum supply of SRN?",
    answer:
      "The maximum or total supply of SRN tokens is 3,000,000,000 (3 billion). ",
  },
   {
    question: " Is SRN a stablecoin?",
    answer:
      "No, SRN is not a stablecoin. Its value is subject to market volatility, like most cryptocurrencies.",
  },
  {
    question: "How can I buy or trade SRN?",
    answer:
      "You can purchase SRN from various cryptocurrency exchanges that list SRN, using fiat or other crypto. Make sure to use a compatible wallet (e.g. one that supports BNB / BEP-20 tokens) to receive your SRN.",
  },
    {
    question: "Where can I find more technical documentation or resources?",
    answer:
      "You can consult: The SRN official website (silvernova.io) Any “Technical Docs” or whitepaper linked on the site",
  },
];



const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleIconClick = (index, e) => {
    e.stopPropagation();
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      {/* Decorative Images */}
      <img src={topRightImg} alt="decor top right" className="faq-decor faq-top-right" />
      <img src={bottomLeftImg} alt="decor bottom left" className="faq-decor faq-bottom-left" />

      <h2 className="faq-title">Frequently Asked Questions</h2>

      {faqData.map((item, index) => (
        <div key={index} className="faq-wrapper">
          <div className="faq-item">
            <div className="faq-question">
              <img
                src={tickIcon}
                alt="icon"
                className="faq-icon"
                onClick={(e) => handleIconClick(index, e)}
              />
              {item.question}
            </div>
          </div>

          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
