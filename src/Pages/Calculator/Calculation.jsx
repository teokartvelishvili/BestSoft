import React, { useState } from "react";
import "./Calculation.css";

const CalculationPage = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedSubCategories, setExpandedSubCategories] = useState({});

  const handleCategoryClick = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSubCategoryClick = (subCategory) => {
    setExpandedSubCategories((prev) => ({
      ...prev,
      [subCategory]: !prev[subCategory],
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedServices((prev) => [...prev, name]);
    } else {
      setSelectedServices((prev) => prev.filter((service) => service !== name));
    }
  };

  return (
    <div className="calculation-page">
      <h1>ფასების კალკულაცია</h1>
      <div className="category">
        <h2 onClick={() => handleCategoryClick("design")}>
          დიზაინი {expandedCategories.design ? "-" : "+"}
        </h2>
        {expandedCategories.design && (
          <div className="sub-category">
            <h3 onClick={() => handleSubCategoryClick("graphicDesign")}>
              გრაფიკული დიზაინი {expandedSubCategories.graphicDesign ? "-" : "+"}
            </h3>
            {expandedSubCategories.graphicDesign && (
              <div>
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
              </div>
            )}

            <h3 onClick={() => handleSubCategoryClick("webDesign")}>
              ვებ დიზაინი {expandedSubCategories.webDesign ? "-" : "+"}
            </h3>
            {expandedSubCategories.webDesign && (
              <div>
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
            )}
          </div>
        )}
      </div>

      <div className="category">
        <h2 onClick={() => handleCategoryClick("development")}>
          დეველოპმენტი {expandedCategories.development ? "-" : "+"}
        </h2>
        {expandedCategories.development && (
          <div className="sub-category">
            <h3 onClick={() => handleSubCategoryClick("frontEnd")}>
              Front-End დეველოპმენტი {expandedSubCategories.frontEnd ? "-" : "+"}
            </h3>
            {expandedSubCategories.frontEnd && (
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="HTML/CSS"
                    onChange={handleCheckboxChange}
                  />
                  HTML/CSS
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="React"
                    onChange={handleCheckboxChange}
                  />
                  React
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="Responsive Design"
                    onChange={handleCheckboxChange}
                  />
                  Responsive Design
                </label>
              </div>
            )}

            <h3 onClick={() => handleSubCategoryClick("backEnd")}>
              Back-End დეველოპმენტი {expandedSubCategories.backEnd ? "-" : "+"}
            </h3>
            {expandedSubCategories.backEnd && (
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="Node.js"
                    onChange={handleCheckboxChange}
                  />
                  Node.js
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="SQL Database"
                    onChange={handleCheckboxChange}
                  />
                  SQL Database
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="API Development"
                    onChange={handleCheckboxChange}
                  />
                  API Development
                </label>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="selected-services">
        <h3>მონიშნული სერვისები:</h3>
        <textarea
          value={selectedServices.join(", ")}
          readOnly
          placeholder="აქ გამოჩნდება მონიშნული სერვისები..."
        />
      </div>
      <div className="message-box">
        <label>
          დამატებითი შეტყობინება:
          <textarea placeholder="აქ შეგიძლიათ დამატებითი შეტყობინება დაამატოთ..." />
        </label>
      </div>
      <button className="submit-button">გაგზავნა</button>
    </div>
  );
};

export default CalculationPage;
