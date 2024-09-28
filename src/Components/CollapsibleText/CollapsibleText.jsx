import React, { useState, useEffect } from "react";
import "./CollapsibleText.css";

const CollapsibleText = ({ text, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
              დახურვა
            </button>
          </>
        ) : (
          <>
            {text.slice(0, maxLength)}...
            <button onClick={toggleExpand} className="readMoreBtn">
              გაიგეთ მეტი...
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
