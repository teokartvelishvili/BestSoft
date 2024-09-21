import "./Buttons.css";
import React, { useContext } from "react";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";

const Buttons = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="buttons">
      <button className="ourTeamBtn">{TEXTS[language].meetTeam} </button>
      <button className="contactBtn"> {TEXTS[language].contact}</button>
    </div>
  );
};

export default Buttons;
