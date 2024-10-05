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

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { formData, errors, handleChange, handleSubmit, submitted } =
    useFormContext();
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   subject: "",
  //   message: "",
  // });

  // const [errors, setErrors] = useState({});
  // const [submitted, setSubmitted] = useState(false);

  // const validateEmail = (email) => {
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return regex.test(email);
  // };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });

  //   // შეასრულე ვალიდაცია ყოველი ცვლილებისას
  //   const newErrors = { ...errors };

  //   if (!value.trim()) {
  //     newErrors[name] = TEXTS[language].errors[name];
  //   } else {
  //     delete newErrors[name];
  //   }

  //   if (name === "email" && value.trim() && !validateEmail(value)) {
  //     newErrors.email = TEXTS[language].errors.invalidEmail;
  //   }

  //   if (name === "phone" && value.trim().length < 9) {
  //     newErrors.phone = TEXTS[language].errors.invalidPhoneLength;
  //   } else if (name === "phone") {
  //     delete newErrors.phone;
  //   }

  //   setErrors(newErrors);
  // };

  // const validateForm = () => {
  //   const newErrors = {};

  //   if (!formData.name.trim()) newErrors.name = TEXTS[language].errors.name;
  //   if (!formData.email.trim()) {
  //     newErrors.email = TEXTS[language].errors.emailRequired;
  //   } else if (!validateEmail(formData.email)) {
  //     newErrors.email = TEXTS[language].errors.invalidEmail;
  //   }
  //   if (!formData.phone.trim()) {
  //     newErrors.phone = TEXTS[language].errors.phone;
  //   } else if (formData.phone.trim().length < 9) {
  //     newErrors.phone = TEXTS[language].errors.invalidPhoneLength;
  //   }
  //   if (!formData.subject.trim())
  //     newErrors.subject = TEXTS[language].errors.subject;
  //   if (!formData.message.trim())
  //     newErrors.message = TEXTS[language].errors.message;

  //   setErrors(newErrors);

  //   return Object.keys(newErrors).length === 0;
  // };
  // console.log(TEXTS[language].errors);
  // console.log(language);
  // console.log(errors); // აქ ჩანს თუ შევსებულია errors ობიექტი

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     setSubmitted(true);

  //     // Prepare form data for Formspree
  //     const formDataToSend = {
  //       name: formData.name,
  //       email: formData.email,
  //       phone: formData.phone,
  //       subject: formData.subject,
  //       message: formData.message,
  //     };

  //     try {
  //       const response = await fetch("https://formspree.io/f/xyzgrjly", {
  //         // Correct Formspree endpoint
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formDataToSend),
  //       });

  //       if (response.ok) {
  //         console.log("Form submitted successfully");
  //         // Optionally reset form fields after submission
  //         setFormData({
  //           name: "",
  //           email: "",
  //           phone: "",
  //           subject: "",
  //           message: "",
  //         });

  //         // Show submitted image for 5 seconds
  //         setTimeout(() => {
  //           setSubmitted(false);
  //         }, 5000);
  //       } else {
  //         console.error("Error submitting the form");
  //       }
  //     } catch (error) {
  //       console.error("Submission error:", error);
  //     }
  //   }
  // };

  return (
    <div id="contactPage" className="contact">
      <CircleEffect />
      <div className="servSect1 contactSect1">
        <img
          alt="contactImage"
          src={theme === "dark" ? contactImageDark : contactImage}
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
            <img alt="logo" src={facebook} className="logo" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="logo" src={instagram} className="logo" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="logo" src={Linkedin} className="logo" />
          </a>
        </div>

        <div className="contactLogo">
          <img alt="logo" src={contactLogo} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
