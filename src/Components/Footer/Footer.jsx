import React, { useContext } from "react";
import { ThemeContext } from '../../Hooks/ThemeContext';
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import { Link } from "react-router-dom";
import "./Footer.css";
import BSLogo from '../../Assets/BSLogo.png'
import InstagramIcon from '../../Assets/InstagramIcon.png'
import FacebookIcon from '../../Assets/FacebookIcon.png';
import LinkedinIcon from '../../Assets/LinkedInIcon.png' ;
import LocationIcon from '../../Assets/LocationIcon.png'
import LocationIcondark from '../../Assets/LocationIcondark.png'
import PhoneIcon from '../../Assets/PhoneIcon.png'
import PhoneIcondark from '../../Assets/PhoneIconDark.png'
import MobileIcon from '../../Assets/MobileIcon.png';
import MobileIconDark from '../../Assets/MobileIconDark.png';
import EmailIcon from '../../Assets/EmailIcon.png'
import EmailIconDark from '../../Assets/EmailIconDark.png'
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
                <li>{TEXTS[language].links}</li>
                <li><Link to="/">{TEXTS[language].home}</Link> </li>
                <li><Link to="/Service">{TEXTS[language].service}</Link> </li>
                <li><Link to="/About">{TEXTS[language].about}</Link> </li>
                <li><Link to="/Contact">{TEXTS[language].contact}</Link> </li>
            </ul>
        </div>
        <div className={`footerContent3 ${theme}`}>
          <ul>
          {TEXTS[language].contactInfo}
            <li> 
            <img
                alt="logo"
                src={theme === "dark" ? LocationIcondark : LocationIcon}
                className="logo"></img>
                <p>{TEXTS[language].geoTB}</p>
            </li>
            <li> 
            <img
                alt="logo"
                src={theme === "dark" ? MobileIconDark : MobileIcon}
                className="logo"></img>
                <p>+995 555 500 500</p>
            </li>
            <li> 
            <img
                alt="logo"
                src={theme === "dark" ? PhoneIcondark : PhoneIcon}
                className="logo"></img>
                <p>+995 032 500 500</p>
            </li>
            <li> 
            <img
                alt="logo"
                src={theme === "dark" ? EmailIconDark : EmailIcon}
                className="logo"></img>
                <p>BestSoft@gmail.com</p>
            </li>

          </ul>
        </div>
        


      </div>
      <div className="copyRight"><p> Copyright &copy; BestSoft 2024</p></div>
    </footer>
  );
};

export default Footer;
