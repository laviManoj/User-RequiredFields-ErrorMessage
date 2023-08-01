import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (validateFields()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const validateFields = () => {
    if (currentStep === 1) {
      if (!formData.name || !formData.email) {
        alert("Please fill out all the required fields.");
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.message) {
        alert("Please fill out the required field.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateFields()) {
      // Do something with the form data, e.g., send it to the server
      console.log("Form data:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {currentStep === 1 && (
        <fieldset>
          <legend>Contact Information</legend>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <button onClick={handleNext}>Next</button>
        </fieldset>
      )}

      {currentStep === 2 && (
        <fieldset>
          <legend>Message</legend>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </fieldset>
      )}
    </form>
  );
};

export default MyForm;
