import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Service.css";
import { Helmet } from "react-helmet-async";
import LinkButton from "../../Components/LinkButton/LinkButton";
import { Link } from "react-router-dom";
import BigAnimLogo from "../../Components/BigAnimLogo/BigAnimLogo";
// import serviceImg from "./servImage.png";
// import serviceImg2 from "./serviceImg2.webp";
// import darkImage1 from "./Images/serviceImageDark.png";
// import lightImage1 from "./Images/serviceImage.png";

const Service = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const servicesContent = TEXTS[language]?.services || {
    titleHeader: "Default Title",
    frontend: {},
    backend: {},
    design: {},
    uxui: {},
  };

  return (
    <div id="servicePage" className={`pageService ${theme}`}>
      <Helmet>
        <title>{TEXTS[language].servicesTitle}</title>
        <meta
          name="description"
          content={TEXTS[language].servicesDescription}
        />
        <meta name="keywords" content={TEXTS[language].servicesKeywords} />
        <meta
          name="facebook-domain-verification"
          content="ghhck2ke4iia07bma9rr2q7zny6r10"
        />
      </Helmet>
      <BigAnimLogo />
      {/* <div className="servSect1">
        <img
          alt="serviceImage"
          src={theme === "dark" ? darkImage1 : serviceImg}
          className="image"
        />
      </div> */}
      <h2 className="serviceH2">{servicesContent.titleHeader}</h2>
      <div className="serviceCardsGrid">
        {/* Front-End Service Card */}
        <div className="serviceCard FR">
          <h2>{servicesContent.frontend.title}</h2>
          <h3>{servicesContent.frontend.description}</h3>
          <ul>
            {servicesContent.frontend.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h3>{servicesContent.frontend.uxui.title}</h3>
          <ul>
            {servicesContent.frontend.uxui.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h3>{servicesContent.frontend.optimization.title}</h3>
          <ul>
            {servicesContent.frontend.optimization.features.map(
              (point, index) => (
                <li key={index}>{point}</li>
              )
            )}
          </ul>
          <h3>{servicesContent.frontend.support.title}</h3>
          <ul>
            {servicesContent.frontend.support.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <Link
            to="/Calculation"
            state={{ openCategory: "development", openSubcategory: "frontEnd" }}
          >
            <LinkButton className="priceButton" sectionId="#categories">
              {servicesContent.priceButton}
            </LinkButton>
          </Link>
        </div>

        {/* Backend Service Card */}
        <div className="serviceCard BK">
          <h2>{servicesContent.backend.title}</h2>
          <h3>{servicesContent.backend.description}</h3>
          <ul>
            {servicesContent.backend.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h3>{servicesContent.backend.integration.title}</h3>
          <ul>
            {servicesContent.backend.integration.features.map(
              (point, index) => (
                <li key={index}>{point}</li>
              )
            )}
          </ul>
          <h3>{servicesContent.backend.security.title}</h3>
          <ul>
            {servicesContent.backend.security.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h3>{servicesContent.backend.support.title}</h3>
          <ul>
            {servicesContent.backend.support.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <Link
            to="/Calculation"
            state={{ openCategory: "development", openSubcategory: "backEnd" }}
          >
            <LinkButton className="priceButton" sectionId="#categories">
              {servicesContent.priceButton}
            </LinkButton>
          </Link>
        </div>

        {/* Design Service Card */}
        <div className="serviceCard GD">
          <h2>{servicesContent.design.title}</h2>
          <h3>{servicesContent.design.branding.title}</h3>
          <ul>
            {servicesContent.design.branding.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h3>{servicesContent.design.print.title}</h3>
          <ul>
            {servicesContent.design.print.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h3>{servicesContent.design.marketing.title}</h3>
          <ul>
            {servicesContent.design.marketing.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h3>{servicesContent.design.illustration.title}</h3>
          <ul>
            {servicesContent.design.illustration.features.map(
              (point, index) => (
                <li key={index}>{point}</li>
              )
            )}
          </ul>
          <Link
            to="/Calculation"
            state={{ openCategory: "design", openSubcategory: "graphicDesign" }}
          >
            <LinkButton className="priceButton" sectionId="#categories">
              {servicesContent.priceButton}
            </LinkButton>
          </Link>
        </div>

        {/* UX/UI Service Card */}
        <div className="serviceCard UX">
          <h2>{servicesContent.uxui.title}</h2>
          <h3>{servicesContent.uxui.ux.title}</h3>
          <ul>
            {servicesContent.uxui.ux.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h3>{servicesContent.uxui.ui.title}</h3>
          <ul>
            {servicesContent.uxui.ui.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h3>{servicesContent.uxui.website.title}</h3>
          <ul>
            {servicesContent.uxui.website.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <h3>{servicesContent.uxui.optimization.title}</h3>
          <ul>
            {servicesContent.uxui.optimization.features.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <Link
            to="/Calculation"
            state={{ openCategory: "design", openSubcategory: "webDesign" }}
          >
            <LinkButton className="priceButton" sectionId="#categories">
              {servicesContent.priceButton}
            </LinkButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
