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
        <meta name="author" content="BestSoft Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bestsoft.ge/prices" />
        
        {/* Open Graph მეტა თაგები */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TEXTS[language].pricesTitle} />
        <meta property="og:description" content={TEXTS[language].pricesDescription} />
        <meta property="og:url" content="https://bestsoft.ge/prices" />
        <meta property="og:site_name" content="BestSoft" />
        <meta property="og:image" content="https://bestsoft.ge/logo192.png" />
        <meta property="og:locale" content={language === 'ge' ? 'ka_GE' : 'en_US'} />
        
        {/* Twitter Card მეტა თაგები */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TEXTS[language].pricesTitle} />
        <meta name="twitter:description" content={TEXTS[language].pricesDescription} />
        <meta name="twitter:image" content="https://bestsoft.ge/logo192.png" />
        
        {/* Pricing Page Specific Meta Tags */}
        <meta name="price:currency" content="GEL" />
        <meta name="price:availability" content="available" />
        
        {/* Geo meta tags */}
        <meta name="geo.region" content="GE-TB" />
        <meta name="geo.placename" content="Tbilisi, Georgia" />
        <meta name="geo.position" content="41.7151;44.8271" />
        <meta name="ICBM" content="41.7151, 44.8271" />
        
        {/* Structured Data for Pricing Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": TEXTS[language].pricesTitle,
            "description": TEXTS[language].pricesDescription,
            "url": "https://bestsoft.ge/prices",
            "mainEntity": {
              "@type": "Organization",
              "name": "BestSoft",
              "offers": {
                "@type": "Offer",
                "category": "Software Development Services",
                "availability": "InStock",
                "priceCurrency": "GEL",
                "areaServed": {
                  "@type": "Country",
                  "name": "Georgia"
                }
              }
            }
          })}
        </script>
        
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
