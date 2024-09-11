import React from 'react';
import "./Toggle.css";

const ToggleSwitch = ({ checked, onChange, onClick, image, image2 }) => {
  const sliderStyle = {
    backgroundImage: checked ? `url(${image})` : `url(${image2})`, // Set the background image
    backgroundSize: 'cover',
  };

  return (
    <label className="switch" onClick={onClick}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider round" style={sliderStyle}></span>
    </label>
  );
};

export default ToggleSwitch;