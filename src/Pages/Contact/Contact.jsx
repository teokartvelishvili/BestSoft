import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import { useForm, useFormContext } from "../../Hooks/FormContext";
import "./Contact.css";
import contactImage from "./images/contactPhoto.png";
import contactImageDark from "./images/contactImageDark.png";
import facebook from "./images/Facebook (1).png";
import instagram from "./images/Instagram (1).png";
import Linkedin from "./images/LinkedIn.png";
import contactLogo from "./images/contactLogo.png";
import submitImage from "./images/submit.png";
import CircleEffect from "../../Components/CircleEffect/CircleEffect";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { formData, errors, handleChange, handleSubmit, submitted } =
    useFormContext();

  return (
    <div id="contactPage" className="contact">
      <Helmet>
        <title>{TEXTS[language].contactTitle}</title>
        <meta name="description" content={TEXTS[language].contactDescription} />
        <meta name="keywords" content={TEXTS[language].contactKeywords} />
        <meta name="author" content="BestSoft Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bestsoft.ge/contact" />
        
        {/* Open Graph მეტა თაგები */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TEXTS[language].contactTitle} />
        <meta property="og:description" content={TEXTS[language].contactDescription} />
        <meta property="og:url" content="https://bestsoft.ge/contact" />
        <meta property="og:site_name" content="BestSoft" />
        <meta property="og:image" content="https://bestsoft.ge/logo192.png" />
        <meta property="og:locale" content={language === 'ge' ? 'ka_GE' : 'en_US'} />
        
        {/* Twitter Card მეტა თაგები */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TEXTS[language].contactTitle} />
        <meta name="twitter:description" content={TEXTS[language].contactDescription} />
        <meta name="twitter:image" content="https://bestsoft.ge/logo192.png" />
        
        {/* Contact Page Specific Meta Tags */}
        <meta name="contact:phone" content="+995551999055" />
        <meta name="contact:email" content="info@bestsoft.ge" />
        <meta name="contact:address" content="Tbilisi, Georgia" />
        
        {/* Geo meta tags */}
        <meta name="geo.region" content="GE-TB" />
        <meta name="geo.placename" content="Tbilisi, Georgia" />
        <meta name="geo.position" content="41.7151;44.8271" />
        <meta name="ICBM" content="41.7151, 44.8271" />
        
        {/* Structured Data for Contact Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": TEXTS[language].contactTitle,
            "description": TEXTS[language].contactDescription,
            "url": "https://bestsoft.ge/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "BestSoft",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+995551999055",
                "contactType": "customer service",
                "email": "info@bestsoft.ge",
                "availableLanguage": ["Georgian", "English"],
                "areaServed": "GE"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GE",
                "addressLocality": "Tbilisi",
                "addressRegion": "Tbilisi"
              }
            }
          })}
        </script>
        
        <meta
          name="facebook-domain-verification"
          content="ghhck2ke4iia07bma9rr2q7zny6r10"
        />
      </Helmet>
      <CircleEffect />
      <div className="servSect1 contactSect1">
        <img
          alt="contact bestSoft poster "
          src={theme === "dark" ? contactImageDark : contactImage}
          loading="lazy"
          className="image"
        />
        <div className="border"></div>
      </div>
      <div className="sect2Contact">
        <p className="alignCenter">{TEXTS[language].introText}</p>
        <h1 id="contactForm">{TEXTS[language].reachOut}</h1>

        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">{TEXTS[language].formLabels.name}:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "input-error" : ""}
            // placeholder={TEXTS[language].formPlaceholders.name}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <label htmlFor="email">{TEXTS[language].formLabels.email}:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="abc@gmail.com"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <label htmlFor="phone">{TEXTS[language].formLabels.phone}:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="555 55 55 55 "
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}

          <label htmlFor="subject">{TEXTS[language].formLabels.subject}:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={TEXTS[language].formPlaceholders.subject}
          />
          {errors.subject && <p className="error-message">{errors.subject}</p>}

          <label htmlFor="message">{TEXTS[language].formLabels.message}:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            // placeholder={TEXTS[language].formPlaceholders.message}
          />
          {errors.message && <p className="error-message">{errors.message}</p>}

          <button type="submit" className="submit-button">
            {TEXTS[language].formLabels.submit}
          </button>
        </form>

        {submitted && (
          <div className="submit-overlay">
            <img
              src={submitImage}
              alt={TEXTS[language].submissionSuccess}
              loading="lazy"
              className="submit-image"
            />
          </div>
        )}

        <h1>{TEXTS[language].contactInfoTitle}</h1>
        <div className="contact-details">
          <div>
            <strong>
              <h3>{TEXTS[language].detailsTitle}: </h3>
            </strong>
            <p>{TEXTS[language].address}</p>
            <p>
              {TEXTS[language].phone}
              <a href="tel:995551000059">+ (995) 551 00 00 59</a>{" "}
            </p>
            <p>
              {TEXTS[language].email}
              <a href="mailto:info@bestsoft.ge"> info@bestsoft.ge</a>
            </p>
          </div>
          <div>
            <strong>
              <h3>{TEXTS[language].workingHoursTitle}: </h3>
            </strong>

            <p>{TEXTS[language].workingHours.weekdays}</p>
            <p>{TEXTS[language].workingHours.saturday}</p>
            <p>{TEXTS[language].workingHours.sunday}</p>
          </div>
        </div>
        <div className="contactTextLast">
          <h1>{TEXTS[language].connectWithUsTitle}</h1>
          <p>{TEXTS[language].connectWithUsText}</p>
        </div>
        <div className="socNetworks">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=" facebook bestSoft logo"
              src={facebook}
              loading="lazy"
              className="logo"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="instagram bestSoft logo icon"
              src={instagram}
              loading="lazy"
              className="logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Linkedin bestSoft logo icon"
              src={Linkedin}
              loading="lazy"
              className="logo"
            />
          </a>
        </div>

        <div className="contactLogo">
          <img alt="bestSoft logo icon" src={contactLogo} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
