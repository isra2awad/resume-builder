import React, { useState } from "react";
import "./compnents.css";

function Education({ educationList, setEducationList }) {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleAddEducation = () => {
    const newEducation = {
      school,
      degree,
      startDate,
      endDate,
    };

    setEducationList((prevList) => [...prevList, newEducation]);
    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
  };

  const handlePrintButton = () => {
    setIsEditing(false);
  };

  const handleEditButton = () => {
    setIsEditing(true);
  };

  return (
    <div className="section">
      <h2>Education</h2>
      {isEditing ? (
        <div className="edit-education">
          <input
            type="text"
            placeholder="School"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
          <input
            type="text"
            placeholder="Degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <input
            type="text"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="text"
          />
          <input
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <button onClick={handlePrintButton}>Print</button>
          <button onClick={handleAddEducation}>Add Education</button>
        </div>
      ) : (
        <>
          <button onClick={handleEditButton}>Edit</button>
        </>
      )}
      <ul>
        {educationList.map((education, index) => (
          <li key={index}>
            <p>School: {education.school}</p>
            <p>Degree: {education.degree}</p>
            <p>Start Date: {education.startDate}</p>
            <p>End Date: {education.endDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
