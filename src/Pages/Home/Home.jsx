import React, { useContext } from "react"
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Home.css";
import mainPoster from '../../Assets/Rectangle 27.png'
import img28 from '../../Assets/Rectangle 28.png'
import img29 from '../../Assets/Rectangle 29.png'
import img30 from '../../Assets/Rectangle 30.png'
import img31 from '../../Assets/Rectangle 31.png'
const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className={`homeMainCont ${theme}`}>
      {/* {TEXTS[language].home} */}
      <div className={`homeConts ${theme}`}>
        <div className={`homeCont1 ${theme}`}>
          <div className={`homeCont1Texts ${theme}`}>
            <h2>Welcome to the BestSoft family!</h2>
            <p>We transform ideas into digital realities. As a close-knit team of four best friends, we are passionate about bringing your vision to life with our comprehensive suite of services.</p>
          </div>
          <img src={mainPoster} alt="" />

        </div>
        <div className={`homeCont2 ${theme}`}>
          <div className={`homeContTexts ${theme}`}>
            <h1>Front-End Development</h1>
            <p>Building responsive, interactive interfaces that provide an excellent user experience.</p>
            <button>Learn more</button>
          </div>
          <img src={img28} alt="" />
        </div>
        <div className={`homeCont3 ${theme}`}>
          <div className={`homeCont3 ${theme}`}><img src={img29} alt="" /></div>


          <div className={`homeContTexts ${theme}`}>
            <h1>Back-End Development</h1>
            <p>Developing robust, scalable, and secure server-side solutions to power your applications.</p>
            <button>Learn more</button>
          </div>
        </div>
        <div className={`homeCont4 ${theme}`}>
          <div className={`homeContTexts ${theme}`}>
            <h1>Graphic Design</h1>
            <p>Creating eye-catching graphics and visual content that leave a lasting impression.</p>
            <button>Learn more</button>
          </div>
          <img src={img30} alt="" />

        </div>
        <div className={`homeCont5 ${theme}`}>
          <div className={`homeCont5 ${theme}`}> <img src={img31} alt="" /></div>

          <div className={`homeContTexts ${theme}`}>
            <h1>UX/UI Design</h1>
            <p>Crafting visually appealing, user-friendly interfaces that reflect your brand identity.</p>
            <button>Learn more</button>
          </div>
        </div>

      </div>



    </div>


  );
};

export default Home;
