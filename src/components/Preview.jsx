import React from "react";
import "./compnents.css"; // Import your CSS file

function Preview({ personalInfo, experienceData, educationData, onEditClick }) {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <div className="preview-section">
        <h3>Personal Information</h3>
        <p>First Name: {personalInfo.firstName}</p>
        <p>Last Name: {personalInfo.lastName}</p>
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>
      </div>
      <div className="preview-section">
        <h3>Experience</h3>
        {experienceData.map((item) => (
          <div key={item.id}>
            <h4>Job Title: {item.title}</h4>
            <p>Company: {item.company}</p>
            <p>Start Date: {item.start}</p>
            <p>End Date: {item.end}</p>
            <p>Job Description: {item.tasks}</p>
          </div>
        ))}
      </div>
      <div className="preview-section">
        <h3>Education</h3>
        {educationData.map((item) => (
          <div key={item.id}>
            <h5>{item.school}</h5>
            <p>{item.title}</p>
            {item.date !== "" && <p>Graduated {item.date}</p>}
          </div>
        ))}
      </div>
      <button onClick={onEditClick}>Edit</button>
    </div>
  );
}

export default Preview;
