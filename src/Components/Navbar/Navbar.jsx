import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, setLanguage } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`NavCont ${theme}`}>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className={`burger ${isOpen ? 'open' : ''}`}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <ul className={`UlCont ${isOpen ? "open" : ""}`}>
                <li><Link to="/">{TEXTS[language].home}</Link> </li>
                <li><Link to="/Service">{TEXTS[language].service}</Link> </li>
                <li><Link to="/About">{TEXTS[language].about}</Link> </li>
                <li><Link to="/Contact">{TEXTS[language].contact}</Link> </li>
            </ul>
        </div>
    );
};

export default Navbar;
