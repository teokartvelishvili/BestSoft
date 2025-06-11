import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { TEXTS } from "../../Hooks/Languages.js";
import { LanguageContext } from "../../Hooks/LanguageContext.js";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { Helmet } from "react-helmet-async";
import BigAnimLogo from "../../Components/BigAnimLogo/BigAnimLogo";
import blueprintImage from "./my projects/blueprint.jpg";
import clipboardImage from "./my projects/9.jpg";
import clipboardImage2 from "./my projects/8.jpg";
import clipboardImage3 from "./my projects/7.jpg";
import clipboardImage4 from "./my projects/2.jpg";
import clipboardImage5 from "./my projects/3.jpg";
import clipboardImage6 from "./my projects/4.jpg";
import clipboardImage7 from "./my projects/5.jpg";
import clipboardImage8 from "./my projects/6.jpg";
import clipboardImage9 from "./my projects/bagis page.png";
import clipboardImage10 from "./my projects/1.jpg";
import tbc from "./my projects/tbc.jpg";
import trainSite from "./my projects/train.jpg";
import bestSoft from "./my projects/bestSoft.jpg";
import odedoo from "./my projects/Screenshot_20250119_034617_Chrome.jpg";
import pixel from "./my projects/Screenshot_20250119_035546_Chrome.jpg";
import expense from "./my projects/expense.jpeg";
import fishHunt from "./my projects/fishhunt.jpg";
import SoulArt from "./my projects/soulart.jpg";
import Ezobana from "./my projects/ezobana.png";
import Silhoutte from "./my projects/siluete.png";

const Portfolio = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProjectDetails = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const projects = [
     {
      imageUrl: Silhoutte,
      projectTitle: "Silhoutte",
      description:
        "Landing page for handmade items with an elegant design ",
      technologies:
        "Next.js,TypeScript,Responsive Design, Animations,Formspree, Firebase",
      githubLink: "https://github.com/anano303/silhoutte",
      projectLink: "https://silhoutte.vercel.app/",
    },
        {
      imageUrl: SoulArt,
      projectTitle: "SoulArt (Work In Progress)",
      description:
        "E-commerce Platform for painters and users, with adminPanel",
      technologies:
        "Next.js, Nest.js, mongoDB, RestApi, Swagger, Docker, Cloudinary, AWS, BogPay, AIChat, Socket, nodemailer, Auth/ Registration,  GoogleAuth, stripe, paypal",
      githubLink: "https://github.com/anano303/soul-art",
      projectLink: "https://soulart.ge/",
    },
   
    {
      imageUrl: Ezobana,
      projectTitle: "Birthday Celebration Center",
      description:
        "A children's entertainment center platform for booking birthday parties and events, featuring online reservations and party package selection",
      technologies:
        "React, CSS, JavaScript, Formspree, Firebase, Responsive Design",
      githubLink: "https://github.com/anano303/ezobana",
      projectLink: "https://ezobana.vercel.app/",
    },
    {
      imageUrl: fishHunt,
      projectTitle: "FishHunt (Work In Progress)",
      description: "E-commerce Platform for sellers and users, with adminPanel",
      technologies:
        "Next.js, Nest.js, mongoDB,RestApi, Swagger, Docker, Cloudinary, AWS, BogPay, AIChat, Socket, nodemailer, Auth/ Registration,  GoogleAuth, stripe, paypal",
      githubLink: "https://github.com/anano303/FishHunt1",
      projectLink: "https://fishhunt.ge",
    },
    {
      imageUrl: odedoo,
      projectTitle: "Procurement Platform",
      description: "First Georgian Procurement Platform",
      technologies: "Next.js, Python, Node.js, AWS, BogPay",
      githubLink: "https://github.com/anano303/odedo-ani",
      projectLink: "https://odedoo.com/",
    },
    {
      imageUrl: pixel,
      projectTitle: "Pixel Studio",
      description: "Creative photo studio website.",
      technologies: "Next.js, CSS, Cloudinary, Formspree, Firebase",
      githubLink: "https://github.com/anano303/pixelstudio",
      projectLink: "https://pixelstudio.ge",
    },
    {
      imageUrl: expense,
      projectTitle: "Expense App",
      description:
        "The app is designed for managing and organizing expenses, offering full CRUD operations and an admin panel with authentication. It uses Express.js for the backend and React.js for the frontend.",
      technologies:
        "Next.js, Axios, Node.js, Express.js, jsonwebtoken (JWT), dotenv,  MongoDB",
      githubLink: "https://github.com/anano303/expense-app?tab=readme-ov-file",
      projectLink: "https://github.com/anano303/expense-app?tab=readme-ov-file",
    },

    {
      imageUrl: trainSite,
      projectTitle: "Train Railway",
      description:
        "A platform for booking and purchasing train tickets online.",
      technologies: "Angular, Fetch, Axios, PDF Generator, API Integration",
      githubLink: "https://github.com/anano303/train-tickets",
      projectLink: "https://train-tickets-nine.vercel.app/",
    },

    {
      imageUrl: bestSoft,
      projectTitle: "BestSoft",
      description:
        "A website for a software development company, showcasing services and projects using React.",
      technologies: "React, SCSS, Responsive Design, Formspree, Firebase",
      githubLink: "https://github.com/anano303/BestSoft",
      projectLink: "https://bestsoft.vercel.app/",
    },

    {
      imageUrl: blueprintImage,
      projectTitle: "BluePrintStudio",
      description: "Creative design studio website.",
      technologies: "React, CSS, Responsive Design",
      githubLink: "https://github.com/anano303/BluePrintProject2024",
      projectLink: "https://blue-print-project2024.vercel.app/",
    },
    {
      imageUrl: tbc,
      projectTitle: "Tbc concept",
      description:
        "A task-based project for Tbc Academy, featuring carousels built with JavaScript, HTML, and CSS.",
      technologies:
        "JavaScript, HTML, CSS, Carousel Components, Responsive Design",
      githubLink: "https://github.com/anano303/TBC",
      projectLink: "https://anano303.github.io/TBC/",
    },

    {
      imageUrl: clipboardImage,
      projectTitle: "Redberry Knight Cup",
      description:
        "A React-based project featuring local storage and form handling for team management in the Redberry Knight Cup.",
      technologies:
        "React, CSS, Local Storage, Form Handling, State Management",
      githubLink: "https://github.com/anano303/Redberry-knight-cup",
      projectLink: "https://team-4-hazel.vercel.app/",
    },

    {
      imageUrl: clipboardImage4,
      projectTitle: "Photosnap-Multi-Page",
      description: "Creative design studio website.",
      technologies: "HTML, CSS, JS ",
      githubLink: "https://github.com/anano303/photosnap-multi-page",
      projectLink: "https://photosnap-multi-page.vercel.app/index.html",
    },
    {
      imageUrl: clipboardImage6,
      projectTitle: "Tech Page",
      description:
        "A responsive tech landing page showcasing modern design elements, including smooth animations and interactive components.",
      technologies: "HTML, CSS, JavaScript, Carousel, Responsive Design",
      githubLink: "https://github.com/anano303/tech-page",
      projectLink: "https://anano303.github.io/tech-page/index.html",
    },

    {
      imageUrl: clipboardImage2,
      projectTitle: "Advice Generator App",
      description:
        "A simple web app that fetches and displays random advice, built using pure JavaScript and styled with CSS.",
      technologies: "HTML, CSS, JavaScript, API Integration",
      githubLink: "https://github.com/anano303/advice-generator-app-main",
      projectLink: "https://anano303.github.io/advice-generator-app-main/",
    },

    {
      imageUrl: clipboardImage8,
      projectTitle: "Color Game",
      description:
        "An engaging color guessing game that challenges users to identify the correct color code, built with vanilla JavaScript.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/anano303/Game-color",
      projectLink: "https://anano303.github.io/Game-color/",
    },

    {
      imageUrl: clipboardImage10,
      projectTitle: "Tip Calculator",
      description:
        "A tip calculator app that helps users calculate the tip based on the bill amount and selected tip percentage.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/anano303/tip-calculator-app",
      projectLink: "https://anano303.github.io/tip-calculator-app/",
    },

    // {
    //   imageUrl: clipboardImage3,
    //   projectTitle: "Online Shop",
    //   description:
    //     "A basic online shop page with interactive features, built using vanilla JavaScript, HTML, and CSS.",
    //   technologies: "HTML, CSS, JavaScript",
    //   githubLink: "https://github.com/anano303/bachira-online-shop",
    //   projectLink: "https://anano303.github.io/bachira-online-shop/#",
    // },

    // {
    //   imageUrl: clipboardImage5,
    //   projectTitle: "E-Learning Landing Page",
    //   description:
    //     "A beautiful and responsive landing page for an e-learning platform, showcasing modern design and smooth transitions.",
    //   technologies: "HTML, CSS, JavaScript",
    //   githubLink: "https://github.com/anano303/skilled-elearning-landing-page",
    //   projectLink: "https://anano303.github.io/skilled-elearning-landing-page/",
    // },

    {
      imageUrl: clipboardImage7,
      projectTitle: "Calculator",
      description:
        "A simple and functional calculator app built using vanilla JavaScript for educational purposes.",
      technologies: "HTML, CSS, JavaScript",
      githubLink: "https://github.com/anano303/calculator-app-main",
      projectLink: "https://anano303.github.io/calculator-app-main/",
    },

    {
      imageUrl: clipboardImage9,
      projectTitle: "Kinder Garden",
      description:
        "A playful and colorful page designed for a kinder garden, featuring dynamic elements and smooth animations.",
      technologies: "React, CSS, JavaScript",
      githubLink: "https://github.com/anano303/slider-react",
      projectLink: "https://slider-react-nine.vercel.app/",
    },
    // ... remaining projects
  ];

  return (
    <div id="portfolioPage" className={`portfolioo ${theme}`}>
      <Helmet>
        <title>{TEXTS[language].portfolioTitle}</title>
        <meta
          name="description"
          content={TEXTS[language].portfolioDescription}
        />
        <meta name="keywords" content={TEXTS[language].portfolioKeywords} />
        <meta
          name="facebook-domain-verification"
          content="ghhck2ke4iia07bma9rr2q7zny6r10"
        />
      </Helmet>
      <BigAnimLogo />
      <h1 className="portfolioH1">{TEXTS[language].projects}</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className={`project ${theme}`}>
            <div className="projectImageWrapper">
              <img
                className="projectImage"
                src={project.imageUrl}
                alt={project.projectTitle}
                loading="lazy"
              />
            </div>
            <div className="projectContent">
              <div className="textPortfolio">
                <h2>{project.projectTitle}</h2>
              </div>
              <div className="buttons">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectBtn githubBtn"
                >
                  GitHub
                </a>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectBtn liveBtn"
                >
                  Live
                </a>
                <button
                  className="projectBtn detailsBtn"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleProjectDetails(index);
                  }}
                >
                  {expandedProject === index
                    ? TEXTS[language].hideDetails
                    : TEXTS[language].showDetails}
                </button>
              </div>
              {expandedProject === index && (
                <div className="project-details">
                  <div className="project-description">
                    <h3>{TEXTS[language].description}</h3>
                    <p>
                      {language === "ge"
                        ? TEXTS.ge.projectDescriptions[index] ||
                          project.description
                        : project.description}
                    </p>
                  </div>
                  <div className="project-technologies">
                    <h3>{TEXTS[language].technologies}</h3>
                    <p>{project.technologies}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
