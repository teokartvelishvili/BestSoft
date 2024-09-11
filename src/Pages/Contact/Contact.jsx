import React, { useContext } from "react"
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Contact.css";


const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={`page ${theme}`}>{TEXTS[language].contact}</div>
  );
};

export default Contact;
