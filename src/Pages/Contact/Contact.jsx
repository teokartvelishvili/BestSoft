import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Hooks/ThemeContext";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import "./Contact.css";
import contactImage from "./images/contactPhoto.png";
import contactImageDark from "./images/contactImageDark.png";
import facebook from "./images/Facebook (1).png";
import instagram from "./images/Instagram (1).png";
import Linkedin from "./images/LinkedIn.png";
import contactLogo from "./images/contactLogo.png";
import submitImage from "./images/submit.png";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="contact" >
      <div className="servSect1 contactSect1">
        <img
          alt="contactImage"
          src={theme === "dark" ? contactImageDark : contactImage}
          className="image"
        />
        <div className="border"></div>
      </div>
      <div className="sect2Contact">
        <p>
          We're here to help you bring your digital visions to life. Whether you
          have a project in mind, need technical support, or just want to learn
          more about our services, feel free to reach out to us. We look forward
          to hearing from you!
        </p>
        <h1>{TEXTS[language]?.reachOut || "Reach Out to Us"}</h1>

        <form onSubmit={handleSubmit} className="contact-form" id="contactForm">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="E.g. UX/UI Design / Front-End development"
            required
          />
          {errors.subject && <p className="error-message">{errors.subject}</p>}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Text Area"
            required
          />
          {errors.message && <p className="error-message">{errors.message}</p>}

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        {submitted && (
          <div className="submit-overlay">
            <img
              src={submitImage}
              alt="Submission Successful"
              className="submit-image"
            />
          </div>
        )}

        <h1>Our Contact Information</h1>
        <div className="contact-details">
          <div>
            <strong>
              <h3>Details: </h3>
            </strong>
            <p>Address: BestSoft HQ 1234 Tbilisi, Georgia</p>
            <p>Phone: +(995) 555 56 86 63</p>
            <p>Email: contact@bestsoft.com</p>
          </div>
          <div>
            <strong>
              <h3>Working Hours: </h3>
            </strong>

            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="contactTextLast">
          <h1>Connect with Us</h1>
          <p>
            Stay connected and keep up to date with the latest news, updates,
            and projects from BestSoft. Follow us on social media to join our
            community and see how we're transforming digital experiences every
            day.
          </p>
        </div>
        <div className="socNetworks">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img
                alt="logo"
                src={facebook}
                className="logo"></img>
                </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img
                alt="logo"
                src={instagram}
                className="logo"></img>
                </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img
                alt="logo"
                src={Linkedin}
                className="logo"></img>
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
