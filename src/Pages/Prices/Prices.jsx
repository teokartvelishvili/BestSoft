import React, { useState, useEffect } from "react";
// import headPicture from "./head picture.png";
import "./Prices.css";
import CircleEffect from "../../Components/CircleEffect/CircleEffect";
// import CircleSquare from "../../Components/CircleSquare/CircleSquare";
import CalculationPage from "../Calculator/Calculation";
import { Helmet } from "react-helmet-async";

const Prices = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="pricesPage" className="prices">
      <Helmet>
        <title>Prices - BestSoft Service Pricing</title>
        <meta
          name="description"
          content="Discover the pricing for our software development services and get the best offers for your business."
        />
        <meta
          name="keywords"
          content="prices, BestSoft, service pricing, offers, software development"
        />
      </Helmet>
      {!isMobile && <CircleEffect />}

      {/* <div className="servSect1 contactSect1 priceSect1">
        {isMobile ? (
          <img alt="contactImage" src={headPicture} className="image" />
        ) : null}
        {!isMobile && <CircleSquare />}

      </div> */}
      <CalculationPage />
    </div>
  );
};

export default Prices;
