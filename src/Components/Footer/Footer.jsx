import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import { Link } from "react-router-dom";
import "./Footer.css";
import LinkButton from "../LinkButton/LinkButton";
import BSLogo from "../../Assets/BSLogo.png";
import InstagramIcon from "../../Assets/InstagramIcon.png";
import FacebookIcon from "../../Assets/FacebookIcon.png";
import LinkedinIcon from "../../Assets/LinkedInIcon.png";
import LocationIcon from "../../Assets/LocationIcon.png";
import LocationIcondark from "../../Assets/LocationIcondark.png";
import PhoneIcon from "../../Assets/PhoneIcon.png";
import PhoneIcondark from "../../Assets/PhoneIconDark.png";
import MobileIcon from "../../Assets/MobileIcon.png";
import MobileIconDark from "../../Assets/MobileIconDark.png";
import EmailIcon from "../../Assets/EmailIcon.png";
import EmailIconDark from "../../Assets/EmailIconDark.png";
const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <footer className={`footerContainer ${theme}`}>
      <div className="footerContents">
        <div className={`footerContent1 ${theme}`}>
          <img
            alt=" bestSoft logo"
            src={BSLogo}
            className="logo"
            loading="lazy"
          ></img>

          <div className={`socialIcons ${theme}`}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt=" Instagram logo"
                src={InstagramIcon}
                loading="lazy"
                className="logo"
              ></img>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Facebook logo"
                src={FacebookIcon}
                loading="lazy"
                className="logo"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Linkedin logo"
                src={LinkedinIcon}
                loading="lazy"
                className="logo"
              ></img>
            </a>
          </div>
        </div>
        <div className={`footerContent2 ${theme}`}>
          <ul className="footerUl">
            <h3>{TEXTS[language].links} </h3>
            <li>
              <Link to="/">
                <LinkButton className="footerLinkButton" sectionId="#home">
                  {TEXTS[language].home}
                </LinkButton>
              </Link>{" "}
            </li>

            <li>
              <Link to="/Service">
                <LinkButton
                  className="footerLinkButton"
                  sectionId="#servicePage"
                >
                  {TEXTS[language].service}
                </LinkButton>
              </Link>{" "}
            </li>

            <li>
              <Link to="/Prices">
                <LinkButton
                  className="footerLinkButton"
                  sectionId="#pricesPage"
                >
                  {TEXTS[language].prices}
                </LinkButton>
              </Link>{" "}
            </li>

            <li>
              <Link to="/About">
                <LinkButton className="footerLinkButton" sectionId="#aboutPage">
                  {TEXTS[language].about}
                </LinkButton>
              </Link>{" "}
            </li>

            <li>
              <Link to="/Contact">
                <LinkButton
                  className="footerLinkButton"
                  sectionId="#contactPage"
                >
                  {TEXTS[language].contact}
                </LinkButton>
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className={`footerContent3 ${theme}`}>
          <ul className="footerUl">
            <h3>{TEXTS[language].contactInfo}</h3>

            <li>
              <img
                alt="BestSoft location logo"
                src={theme === "dark" ? LocationIcondark : LocationIcon}
                loading="lazy"
                className="logo"
              ></img>
              <p>{TEXTS[language].geoTB}</p>
            </li>
            <li>
              <img
                alt="Mobile phone logo icon "
                src={theme === "dark" ? MobileIconDark : MobileIcon}
                className="logo"
                loading="lazy"
              ></img>
              <p>
                {" "}
                <a href="tel:995551000059">+995 551 000 059</a>
              </p>
            </li>
            <li>
              <img
                alt="logo phone icon"
                src={theme === "dark" ? PhoneIcondark : PhoneIcon}
                className="logo"
                loading="lazy"
              ></img>
              <p>
                {" "}
                <a href="tel:995577300480">+995 593 568 663</a>{" "}
              </p>
            </li>
            <li>
              <img
                alt="email icon bestsoft"
                src={theme === "dark" ? EmailIconDark : EmailIcon}
                className="logo"
                loading="lazy"
              ></img>
              <p>
                <a href="mailto:info@bestsoft.ge"> info@bestsoft.ge</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyRight">
        <p> Copyright &copy; BestSoft 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
