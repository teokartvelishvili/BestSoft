import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./About.css";
import CollapsibleText from "../../Components/CollapsibleText/CollapsibleText";
import TeamMember from "../../Components/TeamMember/TeamMember";
import aboutPoster from "../../Assets/aboutPagePoster.png";
import aboutPosterdark from "../../Assets/aboutPagePosterDark.png";
import ani from "../../Assets/ani.png";
import teo from "../../Assets/teo.png";
import nino from "../../Assets/nino.png";
import mari from "../../Assets/mari.png";
import { Helmet } from "react-helmet-async";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div id="aboutPage" className={`aboutMainCont ${theme}`}>
      <Helmet>
        <title>{TEXTS[language].aboutTitle}</title>
        <meta name="description" content={TEXTS[language].aboutDescription} />
        <meta name="keywords" content={TEXTS[language].aboutKeywords} />
      </Helmet>
      <div className={`aboutConts ${theme}`}>
        <div className={`aboutCont1 ${theme}`}>
          <img
            alt="About BestSoft poster  BestSoft-ის შესახებ პოსტერის სურათი"
            src={theme === "dark" ? aboutPosterdark : aboutPoster}
            loading="lazy"
            className="logo"
          />
        </div>
        <div className={`aboutCont2 ${theme}`}>
          <h1 className="colorPink">{TEXTS[language].aboutUs}</h1>
          <CollapsibleText text={TEXTS[language].aboutP1} />
        </div>

        <div className={`aboutCont3 ${theme}`}>
          <h1 className="colorPink">{TEXTS[language].mission}</h1>
          <CollapsibleText text={TEXTS[language].vision} />
          <CollapsibleText text={TEXTS[language].mission2} />
        </div>

        <div className={`members ${theme}`}>
          <h1 id="aboutUsMainH1"> {TEXTS[language].meetTeam}</h1>
          <CollapsibleText text={TEXTS[language].team} />

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
            title="Full-stack Developer"
            bio={TEXTS[language].teamMembers.teo}
            image={teo}
            portfolioLink="https://teona-kartvelishvili.vercel.app/"
            contactLink="tel:+995551999055"
            socialMediaLinks={[
              "https://www.facebook.com/teo.qartvel",
              "https://www.instagram.com/teo.kartvel?igsh=dnUzODMxcnZzN3p5&utm_source=qr",
              "https://www.linkedin.com/in/teona-kartvelishvili-8a4005257",
            ]}
            className={`member ${theme}`} // Custom className
            id="teo" // Custom ID
          />
          <TeamMember
            name={TEXTS[language].names.nino}
            title="UX/UI Designer, Graphic Designer"
            bio={TEXTS[language].teamMembers.nino}
            image={nino}
            portfolioLink="https://www.instagram.com/nin.illustrations/?igsh=bzk0c2Q4eXc1MTE3&utm_source=qr"
            contactLink="https://nino-contact.com"
            socialMediaLinks={[
              "https://www.facebook.com/ninuca.barjadze/",
              "https://www.instagram.com/nin.illustrations/?igsh=bzk0c2Q4eXc1MTE3&utm_source=qr",
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
            portfolioLink="https://www.instagram.com/"
            contactLink="https://mari-contact.com"
            socialMediaLinks={[
              "https://www.facebook.com/ninuca.barjadze?mibextid=LQQJ4d",
              "https://www.instagram.com/",
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
