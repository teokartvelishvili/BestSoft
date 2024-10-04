import React, { useState, useEffect, useContext } from "react";
import "./CollapsibleText.css";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";

const CollapsibleText = ({ text, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <p>
      {isMobile ? (
        isExpanded ? (
          <>
            {text}
            <button onClick={toggleExpand} className="readMoreBtn">
              {TEXTS[language].close}
            </button>
          </>
        ) : (
          <>
            {text.slice(0, maxLength)}...
            <button onClick={toggleExpand} className="readMoreBtn">
              {TEXTS[language].learnMore}
            </button>
          </>
        )
      ) : (
        text
      )}
    </p>
  );
};

export default CollapsibleText;
