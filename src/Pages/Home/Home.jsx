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

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={`homeMainCont ${theme}`}>
      <div className={`homeConts ${theme}`}>
        <div className={`homeCont1 ${theme}`}>
          <div className={`homeCont1Texts ${theme}`}>
            <h2>{TEXTS[language].welcomeText}</h2>
            <br />
            <p>{TEXTS[language].weTransform}</p>
          </div>
          <img src={mainPoster} alt="" />
        </div>
        <div className={`homeCont2 ${theme}`}>
          <div className={`homeContTexts ${theme}`}>
            <h1>{TEXTS[language].frontEnd}</h1>
            <p>{TEXTS[language].frontEndDescription}</p>
            <button>{TEXTS[language].learnMore}</button>
          </div>
          <img src={img28} alt="" />
        </div>
        <div className={`homeCont3 ${theme}`}>
          <div className={`homeCont3 ${theme}`}>
            <img src={img29} alt="" />
          </div>
          <div className={`homeContTexts ${theme}`}>
            <h1>{TEXTS[language].backEnd}</h1>
            <p>{TEXTS[language].backEndDescription}</p>
            <button>{TEXTS[language].learnMore}</button>
          </div>
        </div>
        <div className={`homeCont4 ${theme}`}>
          <div className={`homeContTexts ${theme}`}>
            <h1>{TEXTS[language].graphicDesign}</h1>
            <p>{TEXTS[language].graphicDesignDescription}</p>
            <button>{TEXTS[language].learnMore}</button>
          </div>
          <img src={img30} alt="" />
        </div>
        <div className={`homeCont5 ${theme}`}>
          <div className={`homeCont5 ${theme}`}>
            <img src={img31} alt="" />
          </div>
          <div className={`homeContTexts ${theme}`}>
            <h1>{TEXTS[language].uiUxDesign}</h1>
            <p>{TEXTS[language].uiUxDesignDescription}</p>
            <button>{TEXTS[language].learnMore}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
