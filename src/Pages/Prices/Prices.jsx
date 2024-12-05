import React, { useState, useEffect, useContext } from "react";
// import headPicture from "./head picture.png";
import "./Prices.css";
import CircleEffect from "../../Components/CircleEffect/CircleEffect";
// import CircleSquare from "../../Components/CircleSquare/CircleSquare";
import CalculationPage from "../Calculator/Calculation";
import { Helmet } from "react-helmet-async";
import { LanguageContext } from "../../Hooks/LanguageContext"; // Importing language context
import { TEXTS } from "../../Hooks/Languages"; //

const Prices = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { language } = useContext(LanguageContext);

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
        <title>{TEXTS[language].pricesTitle}</title>
        <meta name="description" content={TEXTS[language].pricesDescription} />
        <meta name="keywords" content={TEXTS[language].pricesKeywords} />
        <meta
          name="facebook-domain-verification"
          content="ghhck2ke4iia07bma9rr2q7zny6r10"
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
