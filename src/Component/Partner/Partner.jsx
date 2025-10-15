import React from "react";
import "./Partner.css";

// replace these with your actual logo paths
import logo1 from "../../assets/11.png";
import logo2 from "../../assets/12.png";
import logo3 from "../../assets/13.png";
import logo4 from "../../assets/14.png";
import logo5 from "../../assets/19.png";

const logos = [
  { id: 1, src: logo1, alt: "CoinMarketCap" },
  { id: 2, src: logo2, alt: "CoinGecko" },
  { id: 3, src: logo3, alt: "Binance" },
  { id: 4, src: logo4, alt: "OKX" },
  { id: 4, src: logo5, alt: "OKCX" },
];

const Partner = () => {
  return (
    <div className="section-container">
      <div className="section-left">
        <p className="partner-text">
          Empowering the Future of
          <br />
          Blockchain Innovation with
          <br />
          Silvernova Token (SRN)
        </p>
      </div>

      <div className="section-right">
        {logos.map((logo) => (
          <button
            key={logo.id}
            aria-label={logo.alt}
            className="partner-btn"
            onClick={() => {
              /* optional: add link action or onClick behavior */
            }}
          >
            <img src={logo.src} alt={logo.alt} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Partner;
