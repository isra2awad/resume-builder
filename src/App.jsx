import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Preview from "./components/Preview";
import "./App.css";
import "./components/compnents.css";
function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [educationData, setEducationData] = useState([
    {
      university: "",
      major: "",
      date: "",
      grade: "",
      id: uuidv4(),
    },
  ]);

  const [experienceData, setExperienceData] = useState([
    {
      company: "",
      title: "",
      tasks: "",
      start: "",
      end: "",
      id: uuidv4(),
    },
  ]);

  const [previewMode, setPreviewMode] = useState(false);

  const handleEditClick = () => {
    setPreviewMode(false); // Switch back to editing mode
  };

  return (
    <div className="app">
      <h1>CV Builder App</h1>
      {!previewMode ? (
        <>
          <PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
            previewMode={previewMode} // Pass previewMode to PersonalInfo
          />
          <Experience
            experienceData={experienceData}
            setExperienceData={setExperienceData}
            previewMode={previewMode} // Pass previewMode to Experience
          />
          <Education
            educationData={educationData}
            setEducationData={setEducationData}
            previewMode={previewMode} // Pass previewMode to Education
          />
          <button className="button" onClick={() => setPreviewMode(true)}>
            Preview
          </button>
        </>
      ) : (
        <Preview
          personalInfo={personalInfo}
          experienceData={experienceData}
          educationData={educationData}
          onEditClick={handleEditClick} // Pass the edit function to Preview
        />
      )}
    </div>
  );
}

export default App;
