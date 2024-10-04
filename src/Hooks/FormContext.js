import { createContext, useState } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({ email: "", phone: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate and submit logic
  };

  return (
    <FormContext.Provider value={{ formData, handleChange, handleSubmit, errors }}>
      {children}
    </FormContext.Provider>
  );
};
