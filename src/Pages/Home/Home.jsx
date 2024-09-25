import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Home.css";
import mainPoster from "../../Assets/Rectangle 27.png";
import img28 from "../../Assets/Rectangle 28.png";
import img29 from "../../Assets/Rectangle 29.png";
import img30 from "../../Assets/Rectangle 30.png";
import img31 from "../../Assets/Rectangle 31.png";
import LinkButton from "../../Components/LinkButton/LinkButton";
import CircleEffect from "../../Components/CircleEffect/CircleEffect";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`homeMainCont ${theme}`}>
      <CircleEffect />
      <div className={`homeConts ${theme}`}>
        <div className={`homeCont1 ${theme}`}>
          <div className={`homeCont1Texts ${theme}`}>
            <h2>{TEXTS[language].welcomeText}</h2>
            <br />
            <img src={mainPoster} alt="mainPoster" className="dsNone" />
            <p>{TEXTS[language].weTransform}</p>
          </div>
          <img src={mainPoster} alt="mainPoster" className="dsBlock" />
        </div>

        <div className={`homeCont2 ${theme}`}>
          <div className={`homeContTexts ${theme}`}>
            <h1>{TEXTS[language].frontEnd}</h1>
            <p>{TEXTS[language].frontEndDescription}</p>
            <img src={img28} alt="html/js/php" className="dsNone" />
            <LinkButton
              href="/Service"
              sectionId="#frontEnd"
              className="mobButton"
            >
              {TEXTS[language].learnMore}
            </LinkButton>
          </div>
          <img src={img28} alt="html/js/php" className="dsBlock" />
        </div>

        <div className={`homeCont3 ${theme}`}>
          <div className={`homeContTexts ${theme}`}>
            <h1>{TEXTS[language].backEnd}</h1>
            <p>{TEXTS[language].backEndDescription}</p>
            <img src={img29} alt="computer" className="dsNone" />
            <LinkButton
              href="/Service"
              sectionId="#backEnd"
              className="mobButton"
            >
              {TEXTS[language].learnMore}
            </LinkButton>
          </div>
          <img src={img29} alt="computer" className="dsBlock" />
        </div>

        <div className={`homeCont4 ${theme}`}>
          <div className={`homeContTexts ${theme}`}>
            <h1>{TEXTS[language].graphicDesign}</h1>
            <p>{TEXTS[language].graphicDesignDescription}</p>
            <img src={img30} alt="graphicDesign" className="dsNone" />
            <LinkButton
              href="/Service"
              sectionId="#graphic"
              className="mobButton"
            >
              {TEXTS[language].learnMore}
            </LinkButton>
          </div>
          <img src={img30} alt="graphicDesign" className="dsBlock" />
        </div>

        <div className={`homeCont5 ${theme}`}>
          <div className={`homeContTexts ${theme}`}>
            <h1>{TEXTS[language].uiUxDesign}</h1>
            <p>{TEXTS[language].uiUxDesignDescription}</p>
            <img src={img31} alt="UX/UI Design" className="dsNone" />
            <LinkButton href="/Service" sectionId="#ux" className="mobButton">
              {TEXTS[language].learnMore}
            </LinkButton>
          </div>
          <img src={img31} alt="UX/UI Design" className="dsBlock" />
        </div>
      </div>
    </div>
  );
};

export default Home;
