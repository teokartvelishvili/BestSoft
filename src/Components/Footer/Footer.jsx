import React, { useContext } from "react";
import { ThemeContext } from '../../Hooks/ThemeContext';
import "./Footer.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footerContainer ${theme}`}>
      <div className="footerContent">
        <div><p>&copy; 2024. All rights reserved..</p></div>

      </div>
    </footer>
  );
};

export default Footer;
