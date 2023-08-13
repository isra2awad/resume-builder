import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Preview from "./components/Preview";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [experienceData, setExperienceData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [previewMode, setPreviewMode] = useState(false);

  const handleEditClick = () => {
    setPreviewMode(false); // Switch back to editing mode
  };

  return (
    <div className="App">
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
          <button onClick={() => setPreviewMode(true)}>Preview</button>
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
