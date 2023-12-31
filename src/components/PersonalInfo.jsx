import { useState } from "react";
import "./compnents.css";
function PersonalInfo({ personalInfo, setPersonalInfo, previewMode }) {
  const [isEditing, setIsEditing] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePrintButton = () => {
    setIsEditing(false); // Disable editing
  };

  const handleEditButton = () => {
    setIsEditing(true); // Enable editing
  };

  return (
    <div className="section">
      <h2>Personal Information</h2>
      {isEditing && !previewMode ? (
        <div className="edit-personal">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={personalInfo.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={personalInfo.lastName}
            onChange={handleInputChange}
          />

          <input
            type="email"
            name="email"
            placeholder="abc@abc.com"
            value={personalInfo.email}
            onChange={handleInputChange}
          />

          <input
            type="phone"
            name="phone"
            placeholder="05XXXXXXX"
            value={personalInfo.phone}
            onChange={handleInputChange}
          />

          <button onClick={handlePrintButton}>Sumbit</button>
        </div>
      ) : (
        <div className="preview">
          <hr />
          <p>First Name: {personalInfo.firstName}</p>
          <p>Last Name: {personalInfo.lastName}</p>
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.phone}</p>
          <button onClick={handleEditButton}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
