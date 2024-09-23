import React from 'react';
import { useNavigate } from 'react-router-dom';

const LinkButton = ({ href, sectionId, children, className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigateToSection(navigate, href, sectionId);
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

const navigateToSection = (navigate, href, sectionId) => {
  navigate(href);
  setTimeout(() => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
};

export default LinkButton;
