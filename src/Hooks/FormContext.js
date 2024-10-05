import React, { createContext, useState, useContext } from "react";
import { TEXTS } from "./Languages";
import { LanguageContext } from "./LanguageContext";

// FormContext შექმნა
const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const { language } = useContext(LanguageContext);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    services: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] = TEXTS[language].errors[name];
    } else {
      delete newErrors[name];
    }

    if (name === "email" && value.trim() && !validateEmail(value)) {
      newErrors.email = TEXTS[language].errors.invalidEmail;
    }

    if (name === "phone" && value.trim().length < 9) {
      newErrors.phone = TEXTS[language].errors.invalidPhoneLength;
    } else if (name === "phone") {
      delete newErrors.phone;
    }

    setErrors(newErrors);
  };

  const validateForm = (page) => {
    const newErrors = {};
    const isContactPage = page === "contact";

    if (isContactPage && !formData.name.trim()) {
      newErrors.name = TEXTS[language].errors.name;
    }
    if (!formData.email.trim()) {
      newErrors.email = TEXTS[language].errors.emailRequired;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = TEXTS[language].errors.invalidEmail;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = TEXTS[language].errors.phone;
    } else if (formData.phone.trim().length < 9) {
      newErrors.phone = TEXTS[language].errors.invalidPhoneLength;
    }
    if (isContactPage && !formData.subject.trim()) {
      newErrors.subject = TEXTS[language].errors.subject;
    }
    if (!formData.message.trim())
      newErrors.message = TEXTS[language].errors.message;

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e, page) => {
    e.preventDefault();
    console.log("Submitting form...");

    if (validateForm(page)) {
      setSubmitted(true);
      console.log("Form is valid, proceeding...");
      const formDataToSend = {
        ...formData,
        services: selectedServices.join(", "), // მონიშნული სერვისები
      };

      console.log("Form data to send:", formDataToSend);

      try {
        const response = await fetch("https://formspree.io/f/xyzgrjly", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSend),
        });

        console.log("Formspree response:", response);
        if (response.ok) {
          console.log("Form submitted successfully");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });

          setSelectedServices([]); // სერვისების დასუფთავება

          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        } else {
          console.error("Error submitting the form", response.statusText);
        }
      } catch (error) {
        console.error("Submission error:", error);
      }
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        errors,
        handleChange,
        handleSubmit,
        submitted,
        selectedServices,
        setSelectedServices,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
