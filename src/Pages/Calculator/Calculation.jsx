import React, { useContext, useState } from "react";
import "./Calculation.css";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { TEXTS } from "../../Hooks/Languages";

const CalculationPage = ({ handleChange, formData, errors, handleSubmit }) => {
  const { language } = useContext(LanguageContext);
  const [selectedServices, setSelectedServices] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSubCategories, setExpandedSubCategories] = useState({});

  const handleCategoryClick = (category) => {
    setExpandedCategories((prev) => {
      const isCategoryExpanded = prev[category];

      const updatedCategories = {
        ...prev,
        [category]: !isCategoryExpanded,
      };

      // თუ კატეგორია იხსნება, დაკეტოს ყველა ქვეკატეგორია
      if (!isCategoryExpanded) {
        // დავხუროთ ყველა ქვეკატეგორია
        setExpandedSubCategories({}); // ყველა ქვეკატეგორია დაკეტილი იქნება
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

      // Close other expanded sub-categories in the same category
      Object.keys(newExpandedSubCategories).forEach((key) => {
        if (key !== subCategory) {
          newExpandedSubCategories[key] = false; // Close other sections
        }
      });

      return newExpandedSubCategories;
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedServices((prev) => [...prev, name]);
    } else {
      setSelectedServices((prev) => prev.filter((service) => service !== name));
    }
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
      <h1>ფასების კალკულაცია</h1>
      <div className="categories">
        <div className="category">
          <h2 onClick={() => handleCategoryClick("design")}>
            დიზაინი <CustomIcon isExpanded={expandedCategories.design} />
          </h2>
          <div
            className={`sub-category-content ${
              expandedCategories.design ? "expand" : ""
            }`}
          >
            <h3 onClick={() => handleSubCategoryClick("graphicDesign")}>
              გრაფიკული დიზაინი{" "}
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
                ლოგოს შექმნა
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ბრენდ-იდენტობის პაკეტი"
                  onChange={handleCheckboxChange}
                />
                ბრენდ-იდენტობის პაკეტი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="სოციალური მედიის ბრენდინგი"
                  onChange={handleCheckboxChange}
                />
                სოციალური მედიის ბრენდინგი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ილუსტრაციები"
                  onChange={handleCheckboxChange}
                />
                ილუსტრაციები
              </label>
            </div>

            <h3 onClick={() => handleSubCategoryClick("webDesign")}>
              ვებ დიზაინი{" "}
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
                ლენდინგ გვერდი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="სივი/პორტფოლიო საიტი"
                  onChange={handleCheckboxChange}
                />
                სივი/პორტფოლიო საიტი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ბლოგის საიტი"
                  onChange={handleCheckboxChange}
                />
                ბლოგის საიტი
              </label>
            </div>
          </div>
        </div>

        <div className="category">
          <h2 onClick={() => handleCategoryClick("development")}>
            დეველოპმენტი{" "}
            <CustomIcon isExpanded={expandedCategories.development} />
          </h2>
          <div
            className={`sub-category-content ${
              expandedCategories.development ? "expand" : ""
            }`}
          >
            <h3 onClick={() => handleSubCategoryClick("frontEnd")}>
              Front-End დეველოპმენტი{" "}
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
                CV/Portfolio საიტი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="5 გვერდამდე"
                  onChange={handleCheckboxChange}
                />
                5 გვერდამდე ბლოგის ტიპის საიტი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="5+ გვერდი"
                  onChange={handleCheckboxChange}
                />
                5+ გვერდი ფუნქციური საიტი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="E-commerce"
                  onChange={handleCheckboxChange}
                />
                E-commerce ტიპის საიტი
              </label>
            </div>

            <h3 onClick={() => handleSubCategoryClick("backEnd")}>
              Back-End დეველოპმენტი{" "}
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
                ენის თარგმნა
              </label>
              <label>
                <input
                  type="checkbox"
                  name="თემის ცვლილება"
                  onChange={handleCheckboxChange}
                />
                თემის ცვლილება
              </label>
              <label>
                <input
                  type="checkbox"
                  name="რეგისტრაცია/ავტორიზაცია"
                  onChange={handleCheckboxChange}
                />
                რეგისტრაცია/ავტორიზაცია
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ადმინ პანელი"
                  onChange={handleCheckboxChange}
                />
                ადმინ პანელი
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="CalcSection2">
        <form onSubmit={handleSubmit} className="contact-form calcForm">
          <div className="selected-services">
            {/* <h3>მონიშნული სერვისები:</h3> */}
            <textarea
              value={selectedServices.join(", ")}
              readOnly
              placeholder="არჩეული სერვისები..."
            />
          </div>
          <div className="column">
            <label htmlFor="email">{TEXTS[language].formLabels.email}:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData?.email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
            />
            {errors?.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="column">
            <label htmlFor="phone">{TEXTS[language].formLabels.phone}:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData?.phone}
              onChange={handleChange}
              placeholder="555 55 55 55 "
            />
            {errors?.phone && <p className="error-message">{errors.phone}</p>}
          </div>
          <div className="message-box">
            <label>
              დამატებითი შეტყობინება:
              <textarea placeholder="დამატებითი მოთხოვნები" />
            </label>
          </div>

          <button className="submit-button">გაგზავნა</button>
        </form>
      </div>
    </div>
  );
};

export default CalculationPage;
