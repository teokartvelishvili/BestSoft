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
  const { language, setLanguage } = useContext(LanguageContext);

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
          <h1>Front-End Development</h1>
          <p>
            Building responsive, interactive interfaces that provide an
            excellent user experience.
          </p>
        </div>
        <div className="servBox servBox1">
          <div className="overview-container">
            <div className="overview-section">
              <h3 className="overview-title">Overview</h3>
              <ul>
                <li>
                  Introduction to front-end development and its importance.
                </li>
                <li>
                  Explanation of how front-end development enhances user
                  experience and interaction.
                </li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Technologies Used</h3>
              <ul>
                <li>HTML5, CSS3, JavaScript</li>
                <li>
                  Frameworks and libraries: React, Angular, Vue.js, Bootstrap,
                  etc.
                </li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Key Features</h3>
              <ul>
                <li>Responsive design</li>
                <li>Cross-browser compatibility</li>
                <li>Performance optimization</li>
                <li>Accessibility</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Process</h3>
              <ul>
                <li>
                  Initial consultation and understanding client requirements
                </li>
                <li>Wireframing and prototyping</li>
                <li>Design and development</li>
                <li>Testing and quality assurance</li>
                <li>Deployment and support</li>
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
          <h1>Back-End Development</h1>
          <p>
            Developing robust, scalable, and secure server-side solutions to
            power your applications.
          </p>
        </div>
        <div className="servBox servBox2">
          <img className="boxImage" src={Image2} alt="img" />
          <div className="overview-container">
            <div className="overview-section">
              <h3 className="overview-title">Overview</h3>
              <ul>
                <li>
                  Introduction to Back-end development and its importance.
                </li>
                <li>
                  Explanation of how back-end development ensures the
                  functionality and performance of applications.
                </li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Technologies Used</h3>
              <ul>
                <li>Programming languages: Python, Node.js, PHP, Ruby, etc.</li>
                <li>Databases: MySQL, PostgreSQL, MongoDB, etc</li>
                <li>Frameworks: Django, Express, Laravel, etc.</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Key Features</h3>
              <ul>
                <li>Scalability</li>
                <li>Security</li>
                <li>Data managemen</li>
                <li>API integration</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Process</h3>
              <ul>
                <li>
                  Understanding client requirements and architecture planning
                </li>
                <li>Wireframing and prototyping</li>
                <li>Database design and API development</li>
                <li>Server-side logic implementation</li>
                <li>Security measures and performance optimization</li>
                <li>Testing and deployment</li>
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
          <h1>Graphic Design</h1>
          <p>
            Creating eye-catching graphics and visual content that leave a
            lasting impression.
          </p>
        </div>
        <div className="servBox servBox1">
          <div className="overview-container">
            <div className="overview-section">
              <h3 className="overview-title">Overview</h3>
              <ul>
                <li>
                  Introduction to graphic design and its impact on branding and
                  marketing.
                </li>
                <li>
                  Explanation of the importance of visual content in
                  communication.
                </li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Services Offered</h3>
              <ul>
                <li>Logo design</li>
                <li>Branding and identity</li>
                <li>Print design (brochures, flyers, posters, etc.)</li>
                <li>
                  Digital design (social media graphics, website graphics, etc.)
                </li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Key Features</h3>
              <ul>
                <li>Custom and unique designs</li>
                <li>Brand consistency</li>
                <li>High-quality visuals</li>
                <li>Creative and innovative solutions</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Process</h3>
              <ul>
                <li>Initial consultation and understanding client needs</li>
                <li>concept development and sketching</li>
                <li>Design and development</li>
                <li>Design creation and revision</li>
                <li>Final delivery and formats provided</li>
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
          <h1>UX/UI Design</h1>
          <p>
            Crafting visually appealing, user-friendly interfaces that reflect
            your brand identity.
          </p>
        </div>
        <div className="servBox servBox1">
          <div className="overview-container">
            <div className="overview-section">
              <h3 className="overview-title">Overview</h3>
              <ul>
                <li>
                  Introduction to UX/UI design and its significance in creating
                  effective digital experiences.
                </li>
                <li>
                  Explanation of how UX/UI design improves user satisfaction and
                  engagement.
                </li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Technologies and Tools Used</h3>
              <ul>
                <li>Design tools: Sketch, Figma, Adobe XD, InVision, etc.</li>
                <li>Prototyping tools: Axure, Marvel, etc.</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Key Features</h3>
              <ul>
                <li>User research and analysis</li>
                <li>Wireframing and prototyping</li>
                <li>Visual design and branding</li>
              </ul>
            </div>

            <div className="overview-section">
              <h3>Process</h3>
              <ul>
                <li>Understanding user needs and business goals</li>
                <li>Conducting user research and creating personas</li>
                <li>Developing wireframes and prototypes</li>
                <li>
                  Designing user interfaces and conducting usability tests
                </li>
                <li>Iteration and final delivery</li>
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
