import React, { useState, useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import { Link } from "react-router-dom";
import "./Navbar.css";
import BurgerMenu from "./Icons/burger menu icon.png";
import x from "./Icons/x (2).png";
import homeIcon from "./Icons/Home.png";
import sercvIcon from "./Icons/draw_abstract.png";
import priceIcon from "./Icons/sell.png";
import aboutIcon from "./Icons/groups_2.png";
import contactIcon from "./Icons/call.png";
import xLight from "./Icons/x light.png";
import homeIconLight from "./Icons/Home (1).png";
import sercvIconLight from "./Icons/draw_abstract (1).png";
import priceIconLight from "./Icons/sell (1).png";
import aboutIconLight from "./Icons/groups_2 (1).png";
import contactIconLight from "./Icons/call (1).png";
import mobImage from "./Icons/primery bs logoai 1.png";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`NavCont ${theme}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`burger ${isOpen ? "open" : ""}`}>
          <img alt="icon" src={BurgerMenu} />
        </div>
      </div>

      <ul className={`UlCont ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <img
            className="x"
            alt="close icon"
            src={theme === "dark" ? xLight : x}
            onClick={closeMenu}
          />
        )}
        <li>
          <img
            src={theme === "dark" ? homeIconLight : homeIcon}
            alt="homeIcon"
          />
          <Link to="/">{TEXTS[language].home}</Link>{" "}
        </li>
        <hr />
        <li>
          <img
            src={theme === "dark" ? sercvIconLight : sercvIcon}
            alt="sersvIcon"
          />
          <Link to="/Service">{TEXTS[language].ourService}</Link>{" "}
        </li>
        <hr />
        <li>
          <img
            src={theme === "dark" ? priceIconLight : priceIcon}
            alt="priceIcon"
          />
          <Link to="/Prices">{TEXTS[language].prices}</Link>{" "}
        </li>
        <hr />
        <li>
          <img
            src={theme === "dark" ? aboutIconLight : aboutIcon}
            alt="aboutIcon"
          />
          <Link to="/About">{TEXTS[language].about}</Link>{" "}
        </li>
        <hr />
        <li>
          <img
            src={theme === "dark" ? contactIconLight : contactIcon}
            alt="contactIcon"
          />
          <Link to="/Contact">{TEXTS[language].contact}</Link>{" "}
        </li>
        <hr />
        <img className="mobileImageNavbar" alt="logo" src={mobImage} />
      </ul>
    </div>
  );
};

export default Navbar;
