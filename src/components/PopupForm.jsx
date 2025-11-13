import React, { useState } from "react";
import "./PopupForm.css";

const PopupForm = ({ onClose, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    language: [],
    email: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "language") {
      setFormData((prev) => {
        const newLang = checked
          ? [...prev.language, value]
          : prev.language.filter((l) => l !== value);
        return { ...prev, language: newLang };
      });
    } else if (type === "checkbox" && name === "terms") {
      setFormData({ ...formData, terms: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("✅ Thank you for submitting!");
      onFormSubmit(formData);
      onClose();
    } else {
      alert("❌ Failed to submit form");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Get Started Today!</h2>
        <p className="subtitle">
          Fill in your details and take control of your tasks.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Language</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="language"
                  value="English"
                  onChange={handleChange}
                />
                English
              </label>
              <label>
                <input
                  type="checkbox"
                  name="language"
                  value="Hindi"
                  onChange={handleChange}
                />
                Hindi
              </label>
              <label>
                <input
                  type="checkbox"
                  name="language"
                  value="Marathi"
                  onChange={handleChange}
                />
                Marathi
              </label>
            </div>
          </div>

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            onChange={handleChange}
            required
          />

          <label className="terms">
            <input
              type="checkbox"
              name="terms"
              onChange={handleChange}
              required
            />
            I agree to the terms and conditions
          </label>

          <button type="submit" className="submit-btn">
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
