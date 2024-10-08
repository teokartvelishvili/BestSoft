import "./TeamMember.css";
import React from "react";
import FbIcon from "../../Assets/FacebookIcon.png";
import InstIcon from "../../Assets/InstagramIcon.png";
import LinkdIcon from "../../Assets/LinkedInIcon.png";
import { useContext } from "react";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import { useNavigate } from "react-router-dom"; // დაამატე ეს ნაწილი React Router-ისთვის

const TeamMember = ({
  name,
  title,
  bio,
  image,
  portfolioLink,
  contactLink,
  socialMediaLinks,
  className = "",
  id = "",
}) => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate(); // ჰუკი ნავიგაციისთვის

  const getSocialIcon = (link) => {
    if (link.includes("facebook.com")) {
      return FbIcon;
    } else if (link.includes("instagram.com")) {
      return InstIcon;
    } else if (link.includes("linkedin.com")) {
      return LinkdIcon;
    } else {
      return null; // სხვა ლინკების შემთხვევაში დამატებით შეგიძლია დაამატო სხვა აიკონები ან გაუმკლავდე სხვანაირად
    }
  };

  const handleContactClick = () => {
    navigate("/contact"); // გადადით contact გვერდზე

    setTimeout(() => {
      const contactSection = document.getElementById("contactForm");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className={`teamMember ${className}`} id={id}>
      <div className="teamMemberImage">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="teamMemberInfo">
        <h1>{title}</h1>
        <h2>{name}</h2>
        <p>{bio}</p>
        <div className="socialMediaLinks">
          <h2>{TEXTS[language].socialMediaLinks}</h2>
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={getSocialIcon(link)}
                alt="social-icon bestSoft about page"
                loading="lazy"
              />
            </a>
          ))}
        </div>
        <button
          className="portfBtn"
          onClick={() => window.open(portfolioLink, "_blank")}
        >
          {TEXTS[language].portfolio}
        </button>
        <br />
        <button className="contactBtn" onClick={handleContactClick}>
          {TEXTS[language].contact}
        </button>
      </div>
    </div>
  );
};

export default TeamMember;
