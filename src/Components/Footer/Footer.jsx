import React, { useContext } from "react";
import { ThemeContext } from '../../Hooks/ThemeContext';
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import { Link } from "react-router-dom";
import "./Footer.css";
import BSLogo from '../../Assets/BSLogo.png'
import InstagramIcon from '../../Assets/InstagramIcon.png'
import FacebookIcon from '../../Assets/FacebookIcon.png';
import LinkedinIcon from '../../Assets/LinkedInIcon.png' 

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <footer className={`footerContainer ${theme}`}>
      <div className="footerContents">
        <div className={`footerContent1 ${theme}`}>
        <img
                alt="logo"
                src={BSLogo}
                className="logo"></img>

                <div className={`socialIcons ${theme}`}>

                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img
                alt="logo"
                src={InstagramIcon}
                className="logo"></img>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img
                alt="logo"
                src={FacebookIcon}
                className="logo"></img>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img
                alt="logo"
                src={LinkedinIcon}
                className="logo"></img>
                </a>

                </div>
        </div>
        <div className={`footerContent2 ${theme}`}>
          
          <ul>
                <li>Links</li>
                <li><Link to="/">{TEXTS[language].home}</Link> </li>
                <li><Link to="/Service">{TEXTS[language].service}</Link> </li>
                <li><Link to="/About">{TEXTS[language].about}</Link> </li>
                <li><Link to="/Contact">{TEXTS[language].contact}</Link> </li>
            </ul>
        </div>
        <div className={`footerContent3 ${theme}`}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {/* <div><p>&copy; 2024. All rights reserved</p></div> */}


      </div>
    </footer>
  );
};

export default Footer;
