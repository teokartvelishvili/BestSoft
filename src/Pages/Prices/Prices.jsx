import React, { useState, useEffect } from "react";
import headPicture from "./head picture.png";
import "./Prices.css";
import CircleEffect from "../../Components/CircleEffect/CircleEffect";
import CircleSquare from "../../Components/CircleSquare/CircleSquare";
import CalculationPage from "../Calculator/Calculation";
import { useFormContext } from "../../Hooks/FormContext";

const Prices = () => {
  const { formData, errors, handleChange, handleSubmit } = useFormContext();
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
