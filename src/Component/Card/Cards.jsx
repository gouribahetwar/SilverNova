import React, { useState, useEffect, useRef } from "react";
import "./Cards.css";

// Front images
import use1 from "../../assets/use1.jpg";
import use2 from "../../assets/use2.jpg";
import use3 from "../../assets/use3.png";
import use4 from "../../assets/use4.jpg";
import use5 from "../../assets/use5.jpg";
import use6 from "../../assets/use6.jpg";
import use7 from "../../assets/use7.jpg";

// Back images
import use1back from "../../assets/use1back.jpeg";
import use2back from "../../assets/use2back.png";
import use3back from "../../assets/use3back.png";
import use4back from "../../assets/use4back.png";
import use5back from "../../assets/use5back.png";
import use6back from "../../assets/use6back.jpeg";
import use7back from "../../assets/use7back.png";

const cards = [
  {
    id: 1,
    title: "NFT MARKETPLACE",
    front: use1,
    back: use1back,
    desc: "Own, trade, and showcase exclusive digital assets on the SRN-powered NFT marketplace. Buy rare collectibles, tokenize creations, and participate in a thriving decentralized digital art economy.",
  },
  {
    id: 2,
    title: "Metaverse Gaming",
    front: use2,
    back: use2back,
    desc: "Dive into immersive blockchain gaming worlds where SRN fuels in-game assets, player rewards, and cross-platform economies.",
  },
  {
    id: 3,
    title: "Staking & Passive Income",
    front: use3,
    back: use3back,
    desc: "Secure your SRN, stake effortlessly, and earn passive income. Watch your portfolio expand while benefiting from DeFi growth opportunities.",
  },
  {
    id: 4,
    title: "Borderless Payments",
    front: use4,
    back: use4back,
    desc: "Send and receive SRN worldwide within seconds. Eliminate intermediaries and enable fast, secure, and transparent transactions.",
  },
  {
    id: 5,
    title: "Tokenized Investments",
    front: use5,
    back: use5back,
    desc: "Diversify your portfolio with SRN-powered tokenized assets like real estate, stocks, and commodities for secure, global investments.",
  },
  {
    id: 6,
    title: "DeFi Integration",
    front: use6,
    back: use6back,
    desc: "Seamlessly connect SRN with DeFi platforms to lend, borrow, and earn yields through decentralized liquidity and smart contracts.",
  },
  {
    id: 7,
    title: "AI & Blockchain Synergy",
    front: use7,
    back: use7back,
    desc: "Experience next-gen digital intelligence as SRN integrates AI for smarter, faster, and more secure blockchain transactions.",
  },
];

const Cards = () => {
  const [active, setActive] = useState(Math.floor(cards.length / 2));
  const [showDesc, setShowDesc] = useState(false);
  const intervalRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleClick = (index) => {
    if (index === active) {
      setShowDesc((prev) => !prev); // toggle title/description
    } else {
      setActive(index);
      setShowDesc(false);
      resetAutoScroll();
    }
  };

  // Auto-scroll
  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
      setShowDesc(false);
    }, 3000);
  };

  const resetAutoScroll = () => startAutoScroll();

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const onTouchEnd = () => {
    const dx = touchEndX.current - touchStartX.current;
    const threshold = 50;
    if (Math.abs(dx) > threshold) {
      if (dx < 0) setActive((prev) => (prev + 1) % cards.length);
      else setActive((prev) => (prev - 1 + cards.length) % cards.length);
      setShowDesc(false);
      resetAutoScroll();
    }
  };

  return (
    <section className="usecase-section" id="card">
      <div className="usecase-header">
        <h2>Use Case</h2>
        <p>
          Silvernova Token (SRN) is a multi-utility asset powering DeFi, gaming,
          NFTs, e-commerce, and global payments — bridging blockchain with
          real-world use.
        </p>
      </div>

      <div
        className="carousel-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {cards.map((card, index) => {
          let position = index - active;
          if (position < -Math.floor(cards.length / 2)) position += cards.length;
          if (position > Math.floor(cards.length / 2)) position -= cards.length;

          let className = "card";
          if (position === 0) className += " active";
          else if (position === -1) className += " left1";
          else if (position === -2) className += " left2";
          else if (position === 1) className += " right1";
          else if (position === 2) className += " right2";
          else className += " hidden-card";

          const isActive = position === 0;
          const currentImg = isActive ? card.front : card.back;

          return (
            <div
              key={card.id}
              className={className}
              style={{ backgroundImage: `url(${currentImg})` }}
              onClick={() => handleClick(index)}
            >
              {isActive && (
                <>
                  {!showDesc ? (
                    <h3 className="card-title">{card.title}</h3>
                  ) : (
                    <p className="card-desc">{card.desc}</p>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;
