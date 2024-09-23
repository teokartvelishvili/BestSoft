import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./About.css";
import TeamMember from "../../Components/TeamMember/TeamMember";
import aboutPoster from "../../Assets/aboutPagePoster.png";
import aboutPosterdark from "../../Assets/aboutPagePosterDark.png";
import ani from "../../Assets/ani.png";
import teo from "../../Assets/teo.png";
import nino from "../../Assets/nino.png";
import mari from "../../Assets/mari.png";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`aboutMainCont ${theme}`}>
      <div className={`aboutConts ${theme}`}>
        <div className={`aboutCont1 ${theme}`}>
          <img
            alt="logo"
            src={theme === "dark" ? aboutPosterdark : aboutPoster}
            className="logo"
          />
        </div>
        <div className={`aboutCont2 ${theme}`}>
          <h1 className="colorPink">{TEXTS[language].aboutUs}</h1>
          <p>{TEXTS[language].aboutP1}</p>
        </div>

        <div className={`aboutCont3 ${theme}`}>
          <h1 className="colorPink">{TEXTS[language].mission}</h1>
          <p>{TEXTS[language].vision}</p>

          <p>{TEXTS[language].mission2}</p>
        </div>

        <div className={`members ${theme}`}>
          <h1 id="aboutUsMainH1"> {TEXTS[language].meetTeam}</h1>
          <p>{TEXTS[language].team}</p>

          <TeamMember
            name={TEXTS[language].names.ani}
            title="Full-stack Developer"
            bio={TEXTS[language].teamMembers.ani}
            image={ani}
            portfolioLink="https://ani-beroshvili.vercel.app/portfolio"
            contactLink="tel:+995577300480"
            socialMediaLinks={[
              "https://facebook.com/anano303",
              "https://instagram.com/anano303",
              "https://www.linkedin.com/in/ani-beroshvili-7a8998214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            ]}
            className={`member ${theme}`} // Custom className
            id="ani" // Custom ID
          />
          <TeamMember
            name={TEXTS[language].names.teo}
            title="Front-End and Back-End Developer"
            bio={TEXTS[language].teamMembers.teo}
            image={teo}
            portfolioLink="https://nino-portfolio.com"
            contactLink="https://nino-contact.com"
            socialMediaLinks={[
              "https://facebook.com/nino",
              "https://instagram.com/nino",
              "https://linkedin.com/nino",
            ]}
            className={`member ${theme}`} // Custom className
            id="teo" // Custom ID
          />
          <TeamMember
            name={TEXTS[language].names.nino}
            title="UX/UI Designer, Graphic Designer"
            bio={TEXTS[language].teamMembers.nino}
            image={nino}
            portfolioLink="https://https://www.instagram.com/nin.illustrations?igsh=bzk0c2Q4eXc1MTE3&utm_source=qr"
            contactLink="https://nino-contact.com"
            socialMediaLinks={[
              "https://www.facebook.com/ninuca.barjadze?mibextid=LQQJ4d",
              "https://www.instagram.com/nin.illustrations?igsh=bzk0c2Q4eXc1MTE3&utm_source=qr",
              "https://linkedin.com/nino",
            ]}
            className={`member ${theme}`} // Custom className
            id="nino" // Custom ID
          />
          <TeamMember
            name={TEXTS[language].names.mari}
            title="UX/UI Designer, Graphic Designer"
            bio={TEXTS[language].teamMembers.mari}
            image={mari}
            portfolioLink="https://www.instagram.com/nin.illustrations?igsh=bzk0c2Q4eXc1MTE3&utm_source=qr"
            contactLink="https://nino-contact.com"
            socialMediaLinks={[
              "https://www.facebook.com/ninuca.barjadze?mibextid=LQQJ4d",
              "https://www.instagram.com/nin.illustrations?igsh=bzk0c2Q4eXc1MTE3&utm_source=qr",
              "https://linkedin.com/nino",
            ]}
            className={`member ${theme}`} // Custom className
            id="mari" // Custom ID
          />
          {/* Repeat for Teona, ani and Mari with different socialLinks */}
        </div>
      </div>
    </div>
  );
};

export default About;
