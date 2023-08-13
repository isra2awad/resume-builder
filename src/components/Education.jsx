import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Education({ educationData, setEducationData, previewMode }) {
  const [editMode, setEditMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { className, name, value } = e.target;
    setEducationData((prevDegreeArr) =>
      prevDegreeArr.map((degree) =>
        degree.id === className ? { ...degree, [name]: value } : degree,
      ),
    );
  };

  const handleAddNew = () => {
    setEducationData((prevDegreeArr) =>
      prevDegreeArr.concat({
        school: "",
        title: "",
        date: "",
        id: uuidv4(),
      }),
    );
  };

  const handleDelete = (e) => {
    const degreeId = e.target.className;
    setEducationData((prevDegreeArr) =>
      prevDegreeArr.filter((degree) => degree.id !== degreeId),
    );
  };

  return (
    <div className="education-div content">
      {editMode && !previewMode ? (
        <div className="edit-education-div">
          <h2 className="form-header">EDUCATION </h2>

          {educationData.map((item) => (
            <div className="form" key={item.id}>
              <input
                type="text"
                name="university"
                placeholder="University"
                value={item.university}
                className={item.id}
                onChange={handleChange}
              />
              <input
                type="text"
                name="major"
                placeholder="Major"
                value={item.major}
                className={item.id}
                onChange={handleChange}
              />
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={item.date}
                className={item.id}
                onChange={handleChange}
              />
              <input
                type="text"
                name="grade"
                placeholder="Grade"
                value={item.grade}
                className={item.id}
                onChange={handleChange}
              />
              <button onClick={handleDelete} className={item.id}>
                Delete
              </button>
            </div>
          ))}
          <div className="buttons">
            <button onClick={handleSubmit} className="button">
              SUBMIT
            </button>
            <button onClick={handleAddNew} className="button">
              + ADD NEW
            </button>
          </div>
        </div>
      ) : (
        <div className="preview">
          <h4 className="submitted-header">EDUCATION</h4>

          {educationData.map((item) => (
            <div key={item.id}>
              <hr />
              <h4>University: {item.university}</h4>
              <p>Major: {item.major}</p>
              {item.date !== "" && <p>Graduated {item.date}</p>}
            </div>
          ))}
          <button onClick={handleEdit} className="button">
            EDIT
          </button>
        </div>
      )}
    </div>
  );
}

export default Education;
