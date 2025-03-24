import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      summary: ''
    },
    education: [
      { id: 1, institution: '', degree: '', graduationYear: '', description: '' }
    ],
    experience: [
      { id: 1, company: '', position: '', startDate: '', endDate: '', description: '' }
    ],
    skills: ['']
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [name]: value
      }
    });
  };

  const addEducation = () => {
    const newId = formData.education.length + 1;
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { id: newId, institution: '', degree: '', graduationYear: '', description: '' }
      ]
    });
  };

  const addExperience = () => {
    const newId = formData.experience.length + 1;
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { id: newId, company: '', position: '', startDate: '', endDate: '', description: '' }
      ]
    });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, '']
    });
  };

  const generateResume = () => {
    // Logic to generate a PDF or printable resume would go here
    console.log('Generating resume with data:', formData);
    alert('Resume generated! (This is a placeholder for the actual PDF generation)');
  };

  return (
    <div className="resume-builder-container">
      <header>
        <h1>Resume Builder</h1>
        <Link to="/tools" className="back-link">Back to Tools</Link>
      </header>

      <div className="resume-form">
        <section className="form-section">
          <h2>Personal Information</h2>
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.personalInfo.name}
              onChange={handlePersonalInfoChange}
            />
          </div>
          
          {/* More personal info fields would go here */}
        </section>

        <section className="form-section">
          <h2>Education</h2>
          {formData.education.map((edu) => (
            <div key={edu.id} className="education-item">
              {/* Education fields would go here */}
              <input type="text" placeholder="Institution" />
            </div>
          ))}
          <button type="button" onClick={addEducation} className="add-button">Add Education</button>
        </section>

        <section className="form-section">
          <h2>Work Experience</h2>
          {formData.experience.map((exp) => (
            <div key={exp.id} className="experience-item">
              {/* Experience fields would go here */}
              <input type="text" placeholder="Company" />
            </div>
          ))}
          <button type="button" onClick={addExperience} className="add-button">Add Experience</button>
        </section>

        <section className="form-section">
          <h2>Skills</h2>
          {formData.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <input type="text" placeholder="Skill" />
            </div>
          ))}
          <button type="button" onClick={addSkill} className="add-button">Add Skill</button>
        </section>

        <div className="form-actions">
          <button type="button" onClick={generateResume} className="generate-button">Generate Resume</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder; 