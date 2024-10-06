import React, { useContext, useState, useEffect } from "react";
import "./Calculation.css";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";
import { useLocation } from "react-router-dom";
import { useForm, useFormContext } from "../../Hooks/FormContext";
import submitImage from "../Contact/images/submit.png";
import CircleEffect from "../../Components/CircleEffect/CircleEffect";
const CalculationPage = () => {
  const { language } = useContext(LanguageContext);
  const location = useLocation();
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
    submitted,
    selectedServices,
    setSelectedServices,
    setErrors,
  } = useFormContext();
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSubCategories, setExpandedSubCategories] = useState({});

  useEffect(() => {
    if (location.state) {
      const { openCategory, openSubcategory } = location.state;
      if (openCategory && openSubcategory) {
        setExpandedCategories((prev) => ({
          ...prev,
          [openCategory]: true,
        }));
        setExpandedSubCategories((prev) => ({
          ...prev,
          [openSubcategory]: true,
        }));
      }
    }
  }, [location.state]);

  const handleCategoryClick = (category) => {
    setExpandedCategories((prev) => {
      const isCategoryExpanded = prev[category];

      const updatedCategories = {
        ...prev,
        [category]: !isCategoryExpanded,
      };

      if (!isCategoryExpanded) {
        setExpandedSubCategories({});
      }

      return updatedCategories;
    });
  };

  const handleSubCategoryClick = (subCategory) => {
    setExpandedSubCategories((prev) => {
      const isExpanded = prev[subCategory];
      const newExpandedSubCategories = {
        ...prev,
        [subCategory]: !isExpanded,
      };

      Object.keys(newExpandedSubCategories).forEach((key) => {
        if (key !== subCategory) {
          newExpandedSubCategories[key] = false;
        }
      });

      return newExpandedSubCategories;
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedServices((prev) => {
      let updatedServices;

      if (checked) {
        // სერვისი დაემატება, თუ ის უკვე არ არის არჩეული
        updatedServices = [...prev, name];
      } else {
        // სერვისი მოიხსნება, თუ ის არჩეულია
        updatedServices = prev.filter((service) => service !== name);
      }

      // ერორის შემოწმება და წაშლა
      if (updatedServices.length > 0) {
        // თუ მონიშნულია სერვისი, წავშალოთ ერორი
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors.selectedServices;
          return newErrors;
        });
      }

      return updatedServices;
    });
  };

  const CustomIcon = ({ isExpanded }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon ${isExpanded ? "rotate" : ""}`}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <circle cx="12" cy="12.5" r="11.5" fill="white" stroke="#FF6392" />
      <path
        d="M6 10L11.5 16L17 10"
        stroke="#156EB3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="calculation-page">
      <CircleEffect />
      <h1>{TEXTS[language].calculationTitle}</h1>
      <div className="categories" id="categories">
        {/* Design Category */}
        <div className="category">
          <h2 onClick={() => handleCategoryClick("design")}>
            {TEXTS[language].categories.design}{" "}
            <CustomIcon isExpanded={expandedCategories.design} />
          </h2>
          <div
            className={`sub-category-content ${
              expandedCategories.design ? "expand" : ""
            }`}
          >
            {/* Graphic Design Subcategory */}
            <h3 id="GD" onClick={() => handleSubCategoryClick("graphicDesign")}>
              {TEXTS[language].graphicDesign}{" "}
              <CustomIcon isExpanded={expandedSubCategories.graphicDesign} />
            </h3>
            <div
              className={`sub-category-content ${
                expandedSubCategories.graphicDesign ? "expand" : ""
              }`}
            >
              <label>
                <input
                  type="checkbox"
                  name="ლოგოს შექმნა"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.logoCreation}
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ბრენდ-იდენტობის პაკეტი"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.brandIdentityPackage}
              </label>
              <label>
                <div className="width">
                  <input
                    type="checkbox"
                    name="სოციალური მედიის ბრენდინგი"
                    onChange={handleCheckboxChange}
                  />
                </div>
                {TEXTS[language].services2.socialMediaBranding}
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ილუსტრაციები"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.illustrations}
              </label>
            </div>

            {/* Web Design Subcategory */}
            <h3 id="ux" onClick={() => handleSubCategoryClick("webDesign")}>
              {TEXTS[language].categories.webDesign}{" "}
              <CustomIcon isExpanded={expandedSubCategories.webDesign} />
            </h3>
            <div
              className={`sub-category-content ${
                expandedSubCategories.webDesign ? "expand" : ""
              }`}
            >
              <label>
                <input
                  type="checkbox"
                  name="ლენდინგ გვერდი"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.landingPage}
              </label>
              <label>
                <input
                  type="checkbox"
                  name="სივი/პორტფოლიო საიტი"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.cvPortfolioSite}
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ბლოგის საიტი"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.blogSite}
              </label>
            </div>
          </div>
        </div>

        {/* Development Category */}
        <div className="category">
          <h2 onClick={() => handleCategoryClick("development")}>
            {TEXTS[language].categories.development}{" "}
            <CustomIcon isExpanded={expandedCategories.development} />
          </h2>
          <div
            className={`sub-category-content ${
              expandedCategories.development ? "expand" : ""
            }`}
          >
            {/* Front-End Subcategory */}
            <h3
              id="Front-End"
              onClick={() => handleSubCategoryClick("frontEnd")}
            >
              {TEXTS[language].categories.frontEndDevelopment}{" "}
              <CustomIcon isExpanded={expandedSubCategories.frontEnd} />
            </h3>
            <div
              className={`sub-category-content ${
                expandedSubCategories.frontEnd ? "expand" : ""
              }`}
            >
              <label>
                <input
                  type="checkbox"
                  name="CV/Portfolio"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.cvPortfolioSite}
              </label>
              <label>
                <input
                  type="checkbox"
                  name="5 გვერდამდე"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.blogSiteUpTo5Pages}
              </label>
              <label>
                <input
                  type="checkbox"
                  name="5+ გვერდი"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.functionalSite5PlusPages}
              </label>
              <label>
                <input
                  type="checkbox"
                  name="E-commerce"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.eCommerceSite}
              </label>
            </div>

            {/* Back-End Subcategory */}
            <h3 id="Back-End" onClick={() => handleSubCategoryClick("backEnd")}>
              {TEXTS[language].categories.backEndDevelopment}{" "}
              <CustomIcon isExpanded={expandedSubCategories.backEnd} />
            </h3>
            <div
              className={`sub-category-content ${
                expandedSubCategories.backEnd ? "expand" : ""
              }`}
            >
              <label>
                <input
                  type="checkbox"
                  name="ენის თარგმნა"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.languageTranslation}
              </label>
              <label>
                <input
                  type="checkbox"
                  name="თემის ცვლილება"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.themeChange}
              </label>
              <label>
                <input
                  type="checkbox"
                  name="რეგისტრაცია/ავტორიზაცია"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.registrationAuthorization}
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ადმინ პანელი"
                  onChange={handleCheckboxChange}
                />
                {TEXTS[language].services2.adminPanel}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="CalcSection2">
        <form onSubmit={handleSubmit} className="contact-form calcForm">
          <div className="selected-services">
            <textarea
              name="services"
              value={selectedServices.join(", ")}
              readOnly
              placeholder={TEXTS[language].placeholder.selectedServices}
            />
            {errors.selectedServices && (
              <p className="error-message">{errors.selectedServices}</p>
            )}
          </div>
          <div className="column">
            <label htmlFor="email">{TEXTS[language].formLabel.email}:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={TEXTS[language].placeholder.email}
            />
            {errors?.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="column">
            <label htmlFor="phone">{TEXTS[language].formLabel.phone}:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData?.phone}
              onChange={handleChange}
              placeholder={TEXTS[language].placeholder.phone}
            />
            {errors?.phone && <p className="error-message">{errors.phone}</p>}
          </div>
          <div className="message-box">
            <label>
              {TEXTS[language].formLabel.additionalMessage}:
              <textarea
                name="message"
                value={formData?.message || ""}
                onChange={handleChange}
                placeholder={TEXTS[language].placeholder.additionalMessage}
              />
            </label>
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </div>
          <button type="submit" className="submit-button">
            {TEXTS[language].formLabel.submit}
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
      </div>
    </div>
  );
};
export default CalculationPage;
