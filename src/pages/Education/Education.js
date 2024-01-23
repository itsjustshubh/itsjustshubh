import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Allows navigation between routes
import './Education.css'; // Importing CSS for styling
import {education, projects} from '../Content';
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded"; // Importing education data

function Education() {
  const [selectedEducation, setSelectedEducation] = useState(0); // State to track the selected education item
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [hoveredButton, setHoveredButton] = useState(null); // State to track the hovered education item

  // Function to get the specific color for each education item
  const getEducationColor = (index) => {
    return education[index].color || 'white'; // Returns specific color or defaults to white
  };

  // Function to handle rendering description with line breaks
  const renderDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  // State to track if the device is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="education-page">
      <div className="container">
        {/* Conditional Rendering: Slider or Dropdown */}
        {!isMobile ? (
          // Slider for non-mobile devices
          <div className="slider">
            {education.map((edu, index) => (
              <button
                key={index}
                className={`slider-button ${index === selectedEducation ? 'active' : ''}`}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                onClick={() => setSelectedEducation(index)}
              >
                {edu.degree || edu.program || edu.course || edu.board}
              </button>
            ))}
          </div>
        ) : (
          // Dropdown for mobile devices
          <select
            className="education-dropdown"
            value={selectedEducation}
            onChange={(e) => setSelectedEducation(e.target.value)}
          >
            {education.map((edu, index) => (
              <option key={index} value={index}>
                {edu.degree || edu.program || edu.course || edu.board}
              </option>
            ))}
          </select>
        )}

        {/* Education Details */}
        <div className="content" style={{ color: getEducationColor(selectedEducation) }}>
          <img
            src={education[selectedEducation].image}
            alt={`${education[selectedEducation].institution} logo`}
            className="image"
          />
          <div>
            <h2 className="institution">{education[selectedEducation].institution}</h2>
            <p className="period">{education[selectedEducation].period}</p>
            <p className="degree">{education[selectedEducation].degree || education[selectedEducation].program || education[selectedEducation].course || education[selectedEducation].board}</p>
            <p className="description">{renderDescription(education[selectedEducation].description)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
