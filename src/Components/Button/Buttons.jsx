import "./Buttons.css";
import React, { useContext } from "react";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import LinkButton from "../../Components/LinkButton/LinkButton";

const Buttons = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="buttons">
      <LinkButton href="/about" sectionId="#about" className="ourTeamBtn">
        {TEXTS[language].meetTeam}
      </LinkButton>
      <LinkButton href="/contact" sectionId="#contactForm" className="contactBtn">
        {TEXTS[language].contact}
      </LinkButton>
    </div>
  );
};

export default Buttons;

