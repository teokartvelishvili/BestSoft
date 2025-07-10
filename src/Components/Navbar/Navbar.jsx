import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import { Link, useLocation } from "react-router-dom";
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
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdownToggle = (e) => {
    if (isMobile) {
      if (e.target.className === "dropdown-toggle") {
        e.preventDefault();
        setShowDropdown(!showDropdown);
        e.stopPropagation();
      }
    }
  };

  const navigateToAbout = () => {
    closeMenu();
  };

  return (
    <div className={`NavCont ${theme}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`burger ${isOpen ? "open" : ""}`}>
          <img alt="icon bestSoft navbar " src={BurgerMenu} loading="lazy" />
        </div>
      </div>

      <ul className={`UlCont ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <img
            className="x"
            alt="close icon"
            src={theme === "dark" ? xLight : x}
            onClick={closeMenu}
            loading="lazy"
          />
        )}
        <li onClick={closeMenu}>
          <img
            src={theme === "dark" ? homeIconLight : homeIcon}
            alt="home icon poster bestSoft bestsoft.ge"
            loading="lazy"
          />
          <Link to="/">{TEXTS[language].home}</Link>{" "}
        </li>
        <hr />
        <li onClick={closeMenu}>
          <img
            src={theme === "dark" ? sercvIconLight : sercvIcon}
            alt="service icon navbar icon bestsoft.ge bestSoft"
            loading="lazy"
          />
          <Link to="/Service">{TEXTS[language].ourService}</Link>{" "}
        </li>
        <hr />
        <li onClick={closeMenu}>
          <img
            src={theme === "dark" ? priceIconLight : priceIcon}
            alt="priceIcon icon navbar icon bestsoft.ge bestSoft"
            loading="lazy"
          />
          <Link to="/Prices">{TEXTS[language].prices}</Link>{" "}
        </li>
        <hr />
        <li className="dropdown-container" onClick={handleDropdownToggle}>
          <img
            src={theme === "dark" ? aboutIconLight : aboutIcon}
            alt="aboutIcon icon navbar icon bestsoft.ge bestSoft"
            loading="lazy"
          />
          <div className="about-link-container">
            <Link to="/About" onClick={navigateToAbout}>
              {TEXTS[language].about}
            </Link>
            {isMobile && (
              <span className="dropdown-toggle">
                {showDropdown ? " ▲" : " ▼"}
              </span>
            )}
          </div>
          <div
            className={`dropdown-menu ${showDropdown ? "show" : ""} ${theme}`}
          >
            <Link to="/Portfolio" className="dropdown-item portfLink" onClick={closeMenu}>
              {TEXTS[language].projects}
            </Link>
          </div>
        </li>
        <hr />
        <li onClick={closeMenu}>
          <img
            src={theme === "dark" ? contactIconLight : contactIcon}
            alt="contactIcon"
          />
          <Link to="/Contact">{TEXTS[language].contact}</Link>{" "}
        </li>
        <hr />
        <img
          className="mobileImageNavbar"
          alt="logo icon navbar icon bestsoft.ge bestSoft"
          loading="lazy"
          src={mobImage}
        />
      </ul>
    </div>
  );
};

export default Navbar;
