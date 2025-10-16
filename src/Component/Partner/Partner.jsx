import React from "react";
import "./Partner.css";

// logos
import logo1 from "../../assets/22.png";
import logo2 from "../../assets/12.png";

const logos = [
  {
    id: 1,
    src: logo1,
    alt: "Sunswap",
    link: "https://sunswap.com/?lang=en-US#/v2?t0=TGfJ7GoEHZovXM9SVHb5pkBDCj5d4sLKmw&t1=TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t&type=swap&from=scan"
  },
  {
    id: 2,
    src: logo2,
    alt: "CoinMarketCap",
    link: "https://dex.coinmarketcap.com/token/bsc/0xb2ffd1b3b48d6913d8d76062cae30708d2a16e62/"
  }
];

const Partner = () => {
  return (
    <div className="section-container">
      <div className="section-left">
        <p className="partner-text">Listed In</p>
      </div>

      <div className="section-right">
        {logos.map((logo) => (
          <button
            key={logo.id}
            aria-label={logo.alt}
            className="partner-btn"
            onClick={() => window.open(logo.link, "_blank")} // opens link in new tab
          >
            <img src={logo.src} alt={logo.alt} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Partner;
