function PersonalInfo({ personalInfo, setPersonalInfo }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  return (
    <div className="section">
      <h2>Personal Information</h2>
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
        placeholder="Email"
        value={personalInfo.email}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={personalInfo.phone}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default PersonalInfo;
