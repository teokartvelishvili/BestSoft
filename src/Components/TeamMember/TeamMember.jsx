// TeamMember.jsx
import React from 'react';

const TeamMember = ({ name, title, bio, image, portfolioLink, contactLink, socialMediaLinks, className = "", id = "" }) => {
  return (
    <div className={`teamMember ${className}`} id={id}>
      <div className="teamMemberImage">
        <img src={image} alt={name} />
      </div>
      <div className="teamMemberInfo">
        <h1>{title}</h1>
        <h2>{name}</h2>
        <p>{bio}</p>
        <div className="socialMediaLinks">
          <h2>Social Media Links:</h2>
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={link}>
              <img src="/path-to-icon.png" alt="social-icon" />
            </a>
          ))}
        </div>
        <button onClick={() => window.location.href = portfolioLink}>Portfolio</button>
        <button onClick={() => window.location.href = contactLink}>Contact Us</button>
      </div>
    </div>
  );
};

export default TeamMember;
