import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Education() {
  const [editMode, setEditMode] = useState(true);
  const [degreeArr, setDegreeArr] = useState([
    {
      school: "",
      title: "",
      date: "",
      id: uuidv4(),
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { className, name, value } = e.target;
    setDegreeArr((prevDegreeArr) =>
      prevDegreeArr.map((degree) =>
        degree.id === className ? { ...degree, [name]: value } : degree,
      ),
    );
  };

  const handleAddNew = () => {
    setDegreeArr((prevDegreeArr) =>
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
    setDegreeArr((prevDegreeArr) =>
      prevDegreeArr.filter((degree) => degree.id !== degreeId),
    );
  };

  return (
    <div className="education-div content">
      {editMode ? (
        <div className="edit-education-div">
          <h4 className="form-header">
            EDUCATION{" "}
            <button onClick={handleSubmit} className="submit-button">
              SUBMIT
            </button>
          </h4>
          {degreeArr.map((item) => (
            <div key={item.id}>
              <input
                type="text"
                name="school"
                placeholder="School"
                value={item.school}
                className={item.id}
                onChange={handleChange}
              />
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={item.title}
                className={item.id}
                onChange={handleChange}
              />
              <input
                type="text"
                name="date"
                placeholder="Date"
                value={item.date}
                className={item.id}
                onChange={handleChange}
              />
              <button onClick={handleDelete} className={item.id}>
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h4 className="submitted-header">EDUCATION</h4>
          <hr />
          {degreeArr.map((item) => (
            <div key={item.id}>
              <h5>{item.school}</h5>
              <p>{item.title}</p>
              {item.date !== "" && <p>Graduated {item.date}</p>}
            </div>
          ))}
        </div>
      )}

      {editMode && (
        <button onClick={handleAddNew} className="add-new-button">
          + ADD NEW
        </button>
      )}

      {!editMode && (
        <button onClick={handleEdit} className="edit-button">
          EDIT
        </button>
      )}
    </div>
  );
}

export default Education;
