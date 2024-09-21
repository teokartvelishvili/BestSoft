import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Service.css";
import darkImage1 from "./Images/serviceImageDark.png";
import lightImage1 from "./Images/serviceImage.png";
import Image1 from "./Images/image 1.png";
import Image2 from "./Images/image 2.png";
import Image3 from "./Images/image 3.png";
import Image4 from "./Images/image 4.png";
import Buttons from "../../Components/Button/Buttons";
import lineDark from "./Images/Line dark.png";
import lineLight from "./Images/Line light.png";

const Service = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`pageService ${theme}`}>
      <div className="servSect1">
        <img
          alt="serviceImage"
          src={theme === "dark" ? darkImage1 : lightImage1}
          className="image"
        />
      </div>
      <div className="servSect2">
        <div className="servText">
          <h1>{TEXTS[language].frontEnd}</h1>
          <p>{TEXTS[language].frontEndDescription}</p>
        </div>
        <div className="servBox servBox1">
          <div className="overview-container">
            <div className="overview-section">
              <h3 className="overview-title">{TEXTS[language].overview}</h3>
              <ul>
                <li>{TEXTS[language].overview1}</li>
                <li>{TEXTS[language].overview2}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].technologies}</h3>
              <ul>
                <li>{TEXTS[language].technologies1}</li>
                <li>{TEXTS[language].technologies2}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].keyFeatures}</h3>
              <ul>
                <li>{TEXTS[language].keyFeatures1}</li>
                <li>{TEXTS[language].keyFeatures2}</li>
                <li>{TEXTS[language].keyFeatures3}</li>
                <li>{TEXTS[language].keyFeatures4}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].process}</h3>
              <ul>
                <li>{TEXTS[language].process1}</li>
                <li>{TEXTS[language].process2}</li>
                <li>{TEXTS[language].process3}</li>
                <li>{TEXTS[language].process4}</li>
                <li>{TEXTS[language].process5}</li>
              </ul>
            </div>
          </div>
          <img className="boxImage" src={Image1} alt="img" />
        </div>
        <Buttons />
        <img
          className="lineServ"
          src={theme === "dark" ? lineDark : lineLight}
          alt="line"
        />
      </div>

      <div className="servSect2 servSect3">
        <div className="servText">
          <h1>{TEXTS[language].backEnd}</h1>
          <p>{TEXTS[language].backEndDescription}</p>
        </div>
        <div className="servBox servBox2">
          <img className="boxImage" src={Image2} alt="img" />
          <div className="overview-container">
            <div className="overview-section">
              <h3 className="overview-title">{TEXTS[language].overview}</h3>
              <ul>
                <li>{TEXTS[language].overview1}</li>
                <li>{TEXTS[language].overview2}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].technologiesUsed}</h3>
              <ul>
                <li>{TEXTS[language].technologiesUsed1}</li>
                <li>{TEXTS[language].technologiesUsed2}</li>
                <li>{TEXTS[language].technologiesUsed3}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].keyFeatures}</h3>
              <ul>
                <li>{TEXTS[language].keyFeatures1}</li>
                <li>{TEXTS[language].keyFeatures2}</li>
                <li>{TEXTS[language].keyFeatures3}</li>
                <li>{TEXTS[language].keyFeatures4}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].process}</h3>
              <ul>
                <li>{TEXTS[language].process1}</li>
                <li>{TEXTS[language].process2}</li>
                <li>{TEXTS[language].process3}</li>
                <li>{TEXTS[language].process4}</li>
                <li>{TEXTS[language].process5}</li>
              </ul>
            </div>
          </div>
        </div>
        <Buttons />
        <img
          className="lineServ"
          src={theme === "dark" ? lineDark : lineLight}
          alt="line"
        />
      </div>

      <div className="servSect2">
        <div className="servText">
          <h1>{TEXTS[language].graphicDesign}</h1>
          <p>{TEXTS[language].graphicDesignDescription}</p>
        </div>
        <div className="servBox servBox1">
          <div className="overview-container">
            <div className="overview-section">
              <h3 className="overview-title">{TEXTS[language].overview}</h3>
              <ul>
                <li>{TEXTS[language].overview1}</li>
                <li>{TEXTS[language].overview2}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].servicesOffered}</h3>
              <ul>
                <li>{TEXTS[language].servicesOffered1}</li>
                <li>{TEXTS[language].servicesOffered2}</li>
                <li>{TEXTS[language].servicesOffered3}</li>
                <li>{TEXTS[language].servicesOffered4}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].keyFeatures}</h3>
              <ul>
                <li>{TEXTS[language].keyFeatures1}</li>
                <li>{TEXTS[language].keyFeatures2}</li>
                <li>{TEXTS[language].keyFeatures3}</li>
                <li>{TEXTS[language].keyFeatures4}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].process}</h3>
              <ul>
                <li>{TEXTS[language].process1}</li>
                <li>{TEXTS[language].process2}</li>
                <li>{TEXTS[language].process3}</li>
                <li>{TEXTS[language].process4}</li>
                <li>{TEXTS[language].process5}</li>
              </ul>
            </div>
          </div>
          <img className="boxImage" src={Image3} alt="img" />
        </div>
        <Buttons />
        <img
          className="lineServ"
          src={theme === "dark" ? lineDark : lineLight}
          alt="line"
        />
      </div>

      <div className="servSect2">
        <div className="servText">
          <h1>{TEXTS[language].uxUiDesign}</h1>
          <p>{TEXTS[language].uxUiDesignDescription}</p>
        </div>
        <div className="servBox servBox1">
          <div className="overview-container">
            <div className="overview-section">
              <h3 className="overview-title">{TEXTS[language].overview}</h3>
              <ul>
                <li>{TEXTS[language].overview1}</li>
                <li>{TEXTS[language].overview2}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].toolsUsed}</h3>
              <ul>
                <li>{TEXTS[language].toolsUsed1}</li>
                <li>{TEXTS[language].toolsUsed2}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].keyFeatures}</h3>
              <ul>
                <li>{TEXTS[language].keyFeatures1}</li>
                <li>{TEXTS[language].keyFeatures2}</li>
                <li>{TEXTS[language].keyFeatures3}</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>{TEXTS[language].process}</h3>
              <ul>
                <li>{TEXTS[language].process1}</li>
                <li>{TEXTS[language].process2}</li>
                <li>{TEXTS[language].process3}</li>
                <li>{TEXTS[language].process4}</li>
                <li>{TEXTS[language].process5}</li>
              </ul>
            </div>
          </div>
          <img className="boxImage" src={Image4} alt="img" />
        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default Service;
