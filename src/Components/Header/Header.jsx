import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from '../../Hooks/ThemeContext';
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import logoLight from '../../Assets/logoLight.png';
import logoDark from '../../Assets/logoDark.png';
import gr1 from '../../Assets/Gooey01.png';
import gr2 from '../../Assets/Gooey02.png';
import gr3 from '../../Assets/Gooey03.png';
import gr4 from '../../Assets/Gooey04.png';

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext); // აქ გამოვიძახებთ toggleTheme

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage);
  };

  const handleThemeClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme(newTheme); // აქ გამოვიძახებთ toggleTheme-ს, რომელიც კონტექსტშია
  };

  return (
    <div className={`header ${theme}`}>
      <div className={`headerLogoCont ${theme}`}>
        <Link to="/">
          <img
            alt="logo"
            src={theme === "dark" ? logoDark : logoLight}
            className="logo"
          />
        </Link>
      </div>
      <Navbar />
      <div className="ThemeToggle">
        <div className={`toggles ${theme}`}>
          <div className="ToggleGR">
          {TEXTS[language].geo}
            <img
              className="lang"
              src={language === "ge" ? gr2 : gr1}
              alt="lang"
              onClick={handleLangClick}
            />
            {TEXTS[language].eng}
          </div>

          <div className="ToggleGR">
          {TEXTS[language].light}
            <img
              className="lang"
              src={theme === "light" ? gr3 : gr4}
              alt="theme"
              onClick={handleThemeClick}
            />
            {TEXTS[language].dark}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
