import React, { useState, useEffect } from "react";
import "./Cards.css";

import img1 from "../../assets/use1.jpg";
import img2 from "../../assets/use2.jpg";
import img3 from "../../assets/use3.png";
import img4 from "../../assets/use4.jpg";
import img5 from "../../assets/use5.jpg";

const cards = [
  { id: 1, title: "Crypto Wallet", img: img1 },
  { id: 2, title: "Metaverse Gaming", img: img2 },
  { id: 3, title: "Staking & Passive Income", img: img3 },
  { id: 4, title: "Secure Transactions", img: img4 },
  { id: 5, title: "Silvernova Mascot", img: img5 },
];

const Cards = () => {
  const [active, setActive] = useState(2); // Center card

  const handleClick = (index) => {
    setActive(index);
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="usecase-section">
      {/* Heading and Description */}
      <div className="usecase-header">
        <h2>Use Case</h2>
        <p>
          Silvernova Token (SRN) is a multi-utility asset powering DeFi, gaming,
          NFTs, e-commerce, and global payments — bridging blockchain with real-world use.
        </p>
      </div>

      {/* Carousel */}
      <div className="carousel-container">
        {cards.map((card, index) => {
          let position = index - active;

          // Handle circular positions
          if (position < -2) position += cards.length;
          if (position > 2) position -= cards.length;

          let className = "card";
          if (position === 0) className += " active";
          else if (position === -1) className += " left1";
          else if (position === -2) className += " left2";
          else if (position === 1) className += " right1";
          else if (position === 2) className += " right2";

          return (
            <div
              key={card.id}
              className={className}
              style={{ backgroundImage: `url(${card.img})` }}
              onClick={() => handleClick(index)}
            >
              {position === 0 && <h3>{card.title}</h3>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
