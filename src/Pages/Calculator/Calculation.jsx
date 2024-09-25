import React, { useState } from 'react';
import './Calculation.css';

const Calculation = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [customMessage, setCustomMessage] = useState('');
  const [openCategories, setOpenCategories] = useState({
    Design: false,
    Development: false,
  });

  const toggleService = (serviceCategory) => {
    setOpenCategories((prev) => ({
      ...prev,
      [serviceCategory]: !prev[serviceCategory],
    }));
  };

  const handleCheckboxChange = (service) => {
    setSelectedServices((prevSelectedServices) => {
      if (prevSelectedServices.includes(service)) {
        return prevSelectedServices.filter((s) => s !== service);
      } else {
        return [...prevSelectedServices, service];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selected = selectedServices.join(', ') + (customMessage ? ` - ${customMessage}` : '');
    alert(`Selected services: ${selected}`);
  };

  return (
    <div className="calculation-page">
      <h1 className="calculation-title">ფასების კალკულაცია</h1>

      <div className={`service-category ${openCategories['Design'] ? 'open' : ''}`}>
        <h2 onClick={() => toggleService('Design')}>დიზაინი</h2>
        <div className="sub-category">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('Logo Design')}
            />
            ლოგოს დიზაინი
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('Branding Package')}
            />
            ბრენდინგის სრული პაკეტი
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('Business Cards')}
            />
            სავიზიტო ბარათები
          </label>
        </div>
      </div>

      <div className={`service-category ${openCategories['Development'] ? 'open' : ''}`}>
        <h2 onClick={() => toggleService('Development')}>დეველოპმენტი</h2>
        <div className="sub-category">
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('Landing Page')}
            />
            ლენდინგ ფეიჯი (1-5 გვერდი)
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('Portfolio Website')}
            />
            პორტფოლიოს ვებ-გვერდი
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange('E-Commerce')}
            />
            ე-კომერციის საიტი
          </label>
        </div>
      </div>

      <div className="custom-message-container">
        <textarea
          placeholder="დამატებითი კომენტარი..."
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
        />
      </div>

      <div className="submit-section">
        <input
          type="text"
          readOnly
          value={selectedServices.join(', ')}
          className="selected-services"
        />
        <button onClick={handleSubmit} className="submit-button">გაგზავნა</button>
      </div>
    </div>
  );
};

export default Calculation;
