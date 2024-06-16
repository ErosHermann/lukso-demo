import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import the CSS file

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    media: null,
    description: '',
    category: '',
    dateTime: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      const mediaUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        media: { url: mediaUrl, type: file.type },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Retrieve current submissions from localStorage
    const currentSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    // Add new submission
    const updatedSubmissions = [...currentSubmissions, formData];
    // Store updated submissions in localStorage
    localStorage.setItem('formSubmissions', JSON.stringify(updatedSubmissions));
    // Navigate to submissions page
    navigate('/');
  };

  return (
    <div className="form-page">
      <div className="form-container"> 
      <div className="form-group">
        <h1>Create a Bet</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="media">Picture or Video:</label>
            <input type="file" id="media" name="media" accept="image/*,video/*" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select a category</option>
              <option value="category1">Crypto</option>
              <option value="category2">Celebrities</option>
              <option value="category3">Politics</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dateTime">Expiry Date:</label>
            <input type="datetime-local" id="dateTime" name="dateTime" value={formData.dateTime} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="number">Bet Amount:</label>
            <input type="number" id="number" name="number" value={formData.number} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Form;
