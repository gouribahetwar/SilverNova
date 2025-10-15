import React, { useEffect, useState, useRef } from "react";
import "./Roadmap.css";
import rocket1 from "../../assets/rockett.png";
import rocket2 from "../../assets/hands.png";
import rocket3 from "../../assets/nftcoin.png";
import rocket4 from "../../assets/chain.png";
import RoadImg from "../../assets/RoadImg.png";

const Roadmap = () => {
  const containerRef = useRef(null);
  const [trackerPos, setTrackerPos] = useState(0);

  const roadmapData = [
    { quarter: "Q1 2025", title: "The Launchpad", number: 1, img: rocket1, size: "110px", top: "-50px", right: "-20px" },
    { quarter: "Q2 2025", title: "Expansion & Adoption", number: 2, img: rocket2, size: "135px", top: "5px", right: "2px" },
    { quarter: "Q3 2025", title: "DeFi Domination", number: 3, img: rocket3, size: "120px", top: "-20px", right: "-10px" },
    { quarter: "Q4 2025", title: "Global Integration", number: 4, img: rocket4, size: "140px", top: "-28px", right: "-20px" },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let y = e.clientY - rect.top;
      y = Math.max(0, Math.min(y, rect.height));
      const percent = (y / rect.height) * 100;
      setTrackerPos(percent);
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="roadmap-section">
      <img src={RoadImg} alt="Decoration" className="roadmap-deco top-right" />
      <img src={RoadImg} alt="Decoration" className="roadmap-deco bottom-left" />

      <div className="roadmap-header">
        <h3 className="Roadmap-subtitle sora">Roadmap</h3>
        <p className="roadmap-description">
          Silvernova Token (SRN) drives sustainable growth through DeFi, gaming,
          metaverse expansion, and global payments.
        </p>
      </div>

      <div className="roadmap-container" ref={containerRef}>
        <div className="scroll-tracker" style={{ top: `${trackerPos}%` }}></div>

        {roadmapData.map((item, i) => (
          <div className="launchpad-card" key={i}>
            <div className="card-text">
              <p className="quarter">{item.quarter}</p>
              <h2 className="title">{item.title}</h2>
            </div>
            <img
              src={item.img}
              alt={`Rocket ${item.number}`}
              className="rocket-img"
              style={{
                width: item.size,
                top: item.top,
                right: item.right,
              }}
            />
            <div className="number-circle">{item.number}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
