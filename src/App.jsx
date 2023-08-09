import React, { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
// import Experience from "./components/Experience";
// import Education from "./components/Education";
// import Preview from "./components/Preview";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [experienceList, setExperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);

  return (
    <div className="App">
      <h1>CV Builder App</h1>
      <PersonalInfo
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
      />
      {/* s */}
    </div>
  );
}

export default App;
