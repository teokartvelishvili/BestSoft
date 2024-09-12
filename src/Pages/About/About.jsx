import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from '../../Hooks/LanguageContext';
import { TEXTS } from "../../Hooks/Languages";
import "./About.css";
import TeamMember from '../../Components/TeamMember/TeamMember';
import aboutPoster from '../../Assets/aboutPagePoster.png';
import aboutPosterdark from '../../Assets/aboutPagePosterDark.png';
import nino from '../../Assets/nino.png';

const About = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`aboutMainCont ${theme}`}>
      <div className={`aboutConts ${theme}`}>
        <div className={`aboutCont1 ${theme}`}>
          <img
            alt="logo"
            src={theme === "dark" ? aboutPosterdark : aboutPoster}
            className="logo"
          />
        </div>
        <div className={`aboutCont2 ${theme}`}>
  <h1>About Us</h1>
  <p>
    BestSoft was born out of the shared vision and passion of four best friends: Nino Barjadze, Ani Beroshvili, Teona Kartvelishvili, and Mariam Lavrelashvili. With diverse backgrounds in front-end development, back-end development, graphic design, and UX/UI design, we combined our unique skills and expertise to create a company dedicated to delivering top-notch digital solutions.

    From our humble beginnings, we've grown into a trusted partner for businesses of all sizes, helping them to navigate the ever-evolving digital landscape. Our journey started in a small home office, fueled by late-night brainstorming sessions and an unwavering belief in the power of technology and creativity.

    Each project has been a new opportunity to learn, innovate, and push the boundaries of what's possible in web design and development.

    At the core of BestSoft is our commitment to excellence, innovation, and integrity. We believe that every business, no matter how big or small, deserves a digital presence that reflects its unique identity and values. That's why we take the time to understand our clients' visions and transform them into impactful digital experiences.

    Our team is more than just a group of colleagues; we're a family united by a shared mission to create and inspire. We pride ourselves on our collaborative approach, working closely with our clients to ensure that every project not only meets but exceeds their expectations.

    BestSoft is not just a company; it's a testament to what can be achieved when passion, friendship, and expertise come together. We are excited about the future and look forward to continuing our journey, one innovative solution at a time.
  </p>
</div>

<div className={`aboutCont3 ${theme}`}>
  <h1>Our Mission and Vision</h1>
  <p>
    At BestSoft, we envision a world where technology and creativity seamlessly integrate to transform ideas into impactful digital experiences. We strive to be at the forefront of innovation, crafting solutions that not only meet the needs of today but anticipate the challenges of tomorrow. Our vision is to empower businesses to achieve their full potential through cutting-edge digital solutions that are as functional as they are beautiful.

    <br /><br />At BestSoft, our mission is to deliver innovative and high-quality digital solutions that empower businesses to succeed in an ever-evolving digital landscape. We are dedicated to transforming our clients' visions into reality through a blend of cutting-edge technology, creative design, and strategic insight. Our core principles guide us to:

    <br /><br /><strong>1. Deliver Excellence:</strong> We strive to exceed expectations by producing exceptional work that meets the highest standards of quality and functionality.
    <br /><strong>2. Foster Innovation:</strong> We embrace new ideas and technologies, constantly pushing the boundaries to create innovative solutions that drive progress.
    <br /><strong>3. Build Strong Partnerships:</strong> We prioritize building lasting relationships with our clients through transparency, trust, and a deep understanding of their unique needs.
    <br /><strong>4. Enhance User Experiences:</strong> We are committed to designing user-centric digital products that are both visually appealing and highly functional, ensuring an optimal experience for all users.
    <br /><strong>5. Promote Growth:</strong> We support our clients' growth by providing scalable and adaptable solutions that can evolve with their business.
    <br /><strong>6. Cultivate a Creative Environment:</strong> We foster a culture of creativity and collaboration, encouraging our team to bring fresh perspectives and ideas to every project.
    <br /><strong>7. Commit to Sustainability:</strong> We are dedicated to implementing sustainable practices and creating solutions that have a positive impact on society and the environment.

    Our mission is to be a trusted partner for businesses seeking to enhance their digital presence, providing them with the tools and expertise they need to thrive in the digital age. At BestSoft, we are passionate about turning ideas into impactful digital experiences, one innovative solution at a time.
  </p>
</div>


        

        <div className={`aboutUsCont ${theme}`}>
          <h1>Meet Our Team</h1>
          <p>At BestSoft, our strength lies in our talented and diverse team. Meet the creative minds who bring your visions to life. Each member of our team is a specialist in their field, working together to deliver exceptional digital solutions. We are passionate about what we do, and we are here to help you succeed.</p>

           <TeamMember
        name="Nino Barjadze"
        title="UX/UI Designer, Graphic Designer"
        bio="Nino is a talented graphic designer who brings creativity and innovation to every project. She excels in creating unique and compelling designs."
        image={nino}
        portfolioLink="https://nino-portfolio.com"
        contactLink="https://nino-contact.com"
        socialMediaLinks={['https://facebook.com/nino', 'https://instagram.com/nino', 'https://linkedin.com/nino']}
        className={`nino ${theme}`} // Custom className
        id="nino" // Custom ID
      />

          {/* Repeat for Teona and Mari with different socialLinks */}
        </div>
      </div>
    </div>
  );
};

export default About;
