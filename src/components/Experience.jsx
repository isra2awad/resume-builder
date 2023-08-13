import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./compnents.css";

function Experience({ experienceData, setExperienceData, previewMode }) {
  const [editMode, setEditMode] = useState(true);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { className, name, value } = e.target;
    setExperienceData((prevJobArr) =>
      prevJobArr.map((job) =>
        job.id === className ? { ...job, [name]: value } : job,
      ),
    );
  };

  const handleAddNew = () => {
    setExperienceData((prevJobArr) =>
      prevJobArr.concat({
        company: "",
        title: "",
        tasks: "",
        start: "",
        end: "",
        id: uuidv4(),
      }),
    );
  };

  const handleDelete = (e) => {
    const jobId = e.target.className;
    setExperienceData((prevJobArr) =>
      prevJobArr.filter((job) => job.id !== jobId),
    );
  };

  return (
    <div className="experience-div content">
      {editMode && !previewMode ? (
        <div className="edit-experience-div">
          <h2 className="form-header">EXPERIENCE </h2>
          {experienceData.map((item) => (
            <div key={item.id} className="form">
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={item.company}
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
              <textarea
                name="tasks"
                placeholder="Tasks"
                value={item.tasks}
                className={item.id}
                onChange={handleChange}
              ></textarea>
              <input
                type="date"
                name="start"
                placeholder="Start Date"
                value={item.start}
                className={item.id}
                onChange={handleChange}
              />
              <input
                type="date"
                name="end"
                placeholder="End Date"
                value={item.end}
                className={item.id}
                onChange={handleChange}
              />
              <button onClick={handleDelete} className={item.id}>
                Delete
              </button>
            </div>
          ))}
          <div className="buttons">
            <button onClick={() => setEditMode(false)} className="button">
              Submit
            </button>
            <button onClick={handleAddNew} className="button">
              + ADD NEW
            </button>
          </div>
        </div>
      ) : (
        <div className="preview">
          <h4 className="submitted-header">EXPERIENCE</h4>

          {experienceData.map((item) => (
            <div className="preview-item" key={item.id}>
              <hr />
              <h4>Job Title: {item.title}</h4>
              <p> Company: {item.company}</p>

              <p>Start Date: {item.start}</p>
              <p>End Date {item.end}</p>

              <p>Job description : {item.tasks}</p>
            </div>
          ))}
        </div>
      )}

      {!editMode && (
        <button onClick={() => setEditMode(true)} className="edit-button">
          EDIT
        </button>
      )}
    </div>
  );
}

export default Experience;
