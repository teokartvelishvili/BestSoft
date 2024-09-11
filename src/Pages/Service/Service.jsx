import React, { useContext } from "react"
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Service.css";

const Service = () => {
  const { theme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={`page ${theme}`}>{TEXTS[language].service}</div>
  );
};

export default Service;
