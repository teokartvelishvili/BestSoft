import React, { useContext } from "react"
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Home.css";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={`page ${theme}`}>{TEXTS[language].home}</div>
  );
};

export default Home;
