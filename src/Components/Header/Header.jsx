import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from '../../Hooks/ThemeContext';
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import logoLight from '../../Assets/logoLight.png';
import logoDark from '../../Assets/logoDark.png'
import ToggleSwitch from "../Toggle/Toggle";
import toggleStars from '../../Assets/stars.jpeg'
import toggleShine from '../../Assets/sunShine.jpeg'
import geoFlag from '../../Assets/geoFlag.png'
import engFlag from '../../Assets/engFlag.png'

const Header = () => {
const { theme, toggleTheme } = useContext(ThemeContext); // Access ThemeContext
    const [isChecked, setIsChecked] = useState(theme === "dark");
    const { language, setLanguage } = useContext(LanguageContext);

    const handleChange = () => {
        setIsChecked(!isChecked);
        toggleTheme(); // Toggle theme
    };
    const handleLangClick = () => {
        const newLanguage = language === "ge" ? "en" : "ge";
        setLanguage(newLanguage); // Use setLanguage from LanguageContext to update the language
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
            {/* Pass all four images as props */}
            
            <div className={`toggles ${theme}`}>
            <ToggleSwitch 
                checked={isChecked} 
                onChange={handleChange} 
                image={toggleShine} 
                image2={toggleStars}
            />
            <div>
             <img
              className="lang"
              src={language === "ge" ? engFlag : geoFlag}
              alt="lang"
              onClick={handleLangClick}
            />
            </div></div></div >
        
    </div>

);
};

export default Header;
