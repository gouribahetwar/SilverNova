import React, { useState } from "react";
import "./Faq.css";
import tickIcon from "../../assets/tick.png";
import topRightImg from "../../assets/faq1.png"; // 🟢 replace with your image path
import bottomLeftImg from "../../assets/faq2.png"; // 🟢 replace with your image path

const faqData = [
  {
    question: "How Do I Buy In The Presale?",
    answer:
      "Connect A BEP-20-Compatible Wallet (E.G., MetaMask On BSC), Select A Tier, Enter Amount In USDT Or BNB (As Specified), And Confirm The Transaction.",
  },
  {
    question: "How Do I Buy In The presale?",
    answer:
      "Connect A BEP-20-Compatible Wallet (E.G., MetaMask On BSC), Select A Tier, Enter Amount In USDT Or BNB (As Specified), And Confirm The Transaction.",
  },
  {
    question: "How Do I Buy In The Presale?",
    answer:
      "Connect A BEP-20-Compatible Wallet (E.G., MetaMask On BSC), Select A Tier, Enter Amount In USDT Or BNB (As Specified), And Confirm The Transaction.",
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
