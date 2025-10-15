import React, { useState, useEffect, useRef } from "react";
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
  // center by default (works for odd/even counts)
  const [active, setActive] = useState(Math.floor(cards.length / 2));
  const intervalRef = useRef(null);

  // Touch swipe variables
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleClick = (index) => {
    setActive(index);
    resetAutoScroll();
  };

  // Auto-scroll
  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3000);
  };

  const resetAutoScroll = () => {
    startAutoScroll();
  };

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const dx = touchEndX.current - touchStartX.current;
    const threshold = 50; // minimal swipe distance
    if (Math.abs(dx) > threshold) {
      if (dx < 0) {
        // swipe left -> next
        setActive((prev) => (prev + 1) % cards.length);
      } else {
        // swipe right -> prev
        setActive((prev) => (prev - 1 + cards.length) % cards.length);
      }
      resetAutoScroll();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section className="usecase-section" aria-label="Use case carousel">
      <div className="usecase-header">
        <h2>Use Case</h2>
        <p>
          Silvernova Token (SRN) is a multi-utility asset powering DeFi, gaming,
          NFTs, e-commerce, and global payments — bridging blockchain with real-world use.
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

          // circular positions
          if (position < -Math.floor(cards.length / 2))
            position += cards.length;
          if (position > Math.floor(cards.length / 2))
            position -= cards.length;

          let className = "card";
          if (position === 0) className += " active";
          else if (position === -1) className += " left1";
          else if (position === -2) className += " left2";
          else if (position === 1) className += " right1";
          else if (position === 2) className += " right2";
          else className += " hidden-card"; // for larger card sets

          return (
            <div
              key={card.id}
              className={className}
              style={{ backgroundImage: `url(${card.img})` }}
              onClick={() => handleClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClick(index);
                }
              }}
              aria-current={position === 0 ? "true" : "false"}
            >
              {position === 0 && <h3>{card.title}</h3>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;


// import React, { useState, useEffect } from "react";
// import "./Cards.css";

// import img1 from "../../assets/use1.jpg";
// import img2 from "../../assets/use2.jpg";
// import img3 from "../../assets/use3.png";
// import img4 from "../../assets/use4.jpg";
// import img5 from "../../assets/use5.jpg";

// const cards = [
//   { id: 1, title: "Crypto Wallet", img: img1 },
//   { id: 2, title: "Metaverse Gaming", img: img2 },
//   { id: 3, title: "Staking & Passive Income", img: img3 },
//   { id: 4, title: "Secure Transactions", img: img4 },
//   { id: 5, title: "Silvernova Mascot", img: img5 },
// ];

// const Cards = () => {
//   const [active, setActive] = useState(2); // Center card

//   const handleClick = (index) => {
//     setActive(index);
//   };

//   // Auto-scroll
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % cards.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="usecase-section">
//       {/* Heading and Description */}
//       <div className="usecase-header">
//         <h2>Use Case</h2>
//         <p>
//           Silvernova Token (SRN) is a multi-utility asset powering DeFi, gaming,
//           NFTs, e-commerce, and global payments — bridging blockchain with real-world use.
//         </p>
//       </div>

//       {/* Carousel */}
//       <div className="carousel-container">
//         {cards.map((card, index) => {
//           let position = index - active;

//           // Handle circular positions
//           if (position < -2) position += cards.length;
//           if (position > 2) position -= cards.length;

//           let className = "card";
//           if (position === 0) className += " active";
//           else if (position === -1) className += " left1";
//           else if (position === -2) className += " left2";
//           else if (position === 1) className += " right1";
//           else if (position === 2) className += " right2";

//           return (
//             <div
//               key={card.id}
//               className={className}
//               style={{ backgroundImage: `url(${card.img})` }}
//               onClick={() => handleClick(index)}
//             >
//               {position === 0 && <h3>{card.title}</h3>}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Cards;
