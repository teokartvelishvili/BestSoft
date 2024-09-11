import React, { useContext } from "react"
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from '../../Hooks/LanguageContext'
import { TEXTS } from "../../Hooks/Languages";
import "./About.css";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={`page ${theme}`}>{TEXTS[language].about}</div>
  );
};

export default About;
