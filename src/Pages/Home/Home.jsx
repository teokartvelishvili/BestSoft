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
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <HelmetProvider>
      <div id="home" className={`homeMainCont ${theme}`}>
        <Helmet>
          <title>{TEXTS[language].welcomeText} | BestSoft</title>
          <meta name="description" content={TEXTS[language].weTransform} />
          <meta
            name="keywords"
            content="BestSoft, software, development, services,ვებსაიტების დამზადება, დიზაინი, პროგრამირება, გრაფიკული დიზაინი,პროგრამული უზრუნველყოფა, დეველოპმენტი, ვებ-გვერდები, მობილური აპლიკაციები, BestSoft"
          />
        </Helmet>

        <div className={`homeConts ${theme}`}>
          <div className={`homeCont1 ${theme}`}>
            <div className={`homeCont1Texts ${theme}`}>
              <h2>{TEXTS[language].welcomeText}</h2>
              <br />
              <img
                src={mainPoster}
                alt="Main software solutions poster from BestSoft"
                className="dsNone"
              />
              <p>{TEXTS[language].weTransform}</p>
            </div>
            <img
              src={mainPoster}
              alt="Main software solutions poster from BestSoft"
              className="dsBlock"
            />
          </div>

          <div className={`homeCont2 ${theme}`}>
            <div className={`homeContTexts ${theme}`}>
              <h1>{TEXTS[language].webSites} </h1>
              <h5>({TEXTS[language].frontEnd})</h5>
              <p>{TEXTS[language].frontEndDescription}</p>
              <img
                src={img28}
                alt="HTML, JavaScript, PHP development example"
                className="dsNone"
              />
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
              <h1>{TEXTS[language].appHelp}</h1>
              <h5>({TEXTS[language].backEnd})</h5>
              <p>{TEXTS[language].backEndDescription}</p>
              <img
                src={img29}
                alt="Backend development process"
                className="dsNone"
                loading="lazy"
              />
              <LinkButton
                href="/Service"
                sectionId="#backEnd"
                className="mobButton"
              >
                {TEXTS[language].learnMore}
              </LinkButton>
            </div>
            <img
              src={img29}
              alt="computer"
              loading="lazy"
              className="dsBlock"
            />
          </div>

          <div className={`homeCont4 ${theme}`}>
            <div className={`homeContTexts ${theme}`}>
              <h1>{TEXTS[language].graphicDesign}</h1>
              <p>{TEXTS[language].graphicDesignDescription}</p>
              <img
                src={img30}
                alt="Graphic design example from BestSoft"
                loading="lazy"
                className="dsNone"
              />
              <LinkButton
                href="/Service"
                sectionId="#graphic"
                className="mobButton"
              >
                {TEXTS[language].learnMore}
              </LinkButton>
            </div>
            <img
              src={img30}
              alt="Graphic design example from BestSoft"
              loading="lazy"
              className="dsBlock"
            />
          </div>

          <div className={`homeCont5 ${theme}`}>
            <div className={`homeContTexts ${theme}`}>
              <h1>{TEXTS[language].uiUxDesign}</h1>
              <p>{TEXTS[language].uiUxDesignDescription}</p>
              <img
                src={img31}
                alt="UI/UX design preview from BestSoft"
                loading="lazy"
                className="dsNone"
              />
              <LinkButton href="/Service" sectionId="#ux" className="mobButton">
                {TEXTS[language].learnMore}
              </LinkButton>
            </div>
            <img
              src={img31}
              alt="UI/UX design preview from BestSoft"
              loading="lazy"
              className="dsBlock"
            />
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
