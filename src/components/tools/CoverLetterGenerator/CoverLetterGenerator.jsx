import React, { useState } from 'react';
import Layout from '../../layout/Layout';
import './CoverLetterGenerator.css';

const CoverLetterGenerator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    firstName: '',
    lastName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    website: '',
    
    // Job Details
    jobPosition: '',
    companyName: '',
    hiringManager: '',
    hiringManagerTitle: '',
    companyAddress: '',
    jobDescription: '',
    referral: '',
    
    // Content
    introduction: '',
    achievement1: '',
    achievement2: '',
    skills: '',
    companyResearch: '',
    closing: '',
    
    // Style
    tone: 'professional',
    template: 'modern',
  });

  const [generatedLetter, setGeneratedLetter] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToneSelect = (tone) => {
    setFormData(prev => ({
      ...prev,
      tone
    }));
  };

  const handleTemplateSelect = (template) => {
    setFormData(prev => ({
      ...prev,
      template
    }));
  };

  const generateLetter = () => {
    const { firstName, lastName, jobTitle, email, phone, address, linkedin, website,
            jobPosition, companyName, hiringManager, introduction, achievement1, achievement2,
            skills, companyResearch, closing } = formData;
    
    let letter = `${firstName} ${lastName}
${jobTitle}
${address}
${phone} | ${email}
${linkedin ? `LinkedIn: ${linkedin}` : ''}${website ? `\nWebsite: ${website}` : ''}

${new Date().toLocaleDateString()}

${hiringManager ? `${hiringManager}` : 'Hiring Manager'}
${companyName}
${formData.companyAddress || ''}

Dear ${hiringManager || 'Hiring Manager'},

${introduction || `I am writing to express my strong interest in the ${jobPosition} position at ${companyName}.`}

${achievement1}

${achievement2 ? `${achievement2}\n` : ''}

${skills}

${companyResearch}

${closing || `Thank you for considering my application. I look forward to discussing how my background and skills can benefit ${companyName}.`}

Best regards,
${firstName} ${lastName}`;

    setGeneratedLetter(letter);
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
      if (currentStep === 4) {
        generateLetter();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLetter);
    alert('Cover letter copied to clipboard!');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-pane active">
            <div className="step-title">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h2>Your Information</h2>
            </div>
            <p className="step-subtitle">Enter your personal and contact information that will appear in the header of your cover letter.</p>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="jobTitle">Professional Title*</label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="Frontend Developer"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address*</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Main St, City, State, ZIP"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn URL (Optional)</label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="website">Website/Portfolio (Optional)</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://johndoe.com"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-pane active">
            <div className="step-title">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h2>Job Details</h2>
            </div>
            <p className="step-subtitle">Provide information about the job you're applying for and the company. This helps us personalize your cover letter.</p>

            <div className="form-group">
              <label htmlFor="jobPosition">Position You're Applying For*</label>
              <input
                type="text"
                id="jobPosition"
                name="jobPosition"
                value={formData.jobPosition}
                onChange={handleInputChange}
                placeholder="Senior Frontend Developer"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyName">Company Name*</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Acme Inc."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="hiringManager">Hiring Manager's Name (if known)</label>
              <input
                type="text"
                id="hiringManager"
                name="hiringManager"
                value={formData.hiringManager}
                onChange={handleInputChange}
                placeholder="Jane Smith"
              />
            </div>

            <div className="form-group">
              <label htmlFor="hiringManagerTitle">Hiring Manager's Title (if known)</label>
              <input
                type="text"
                id="hiringManagerTitle"
                name="hiringManagerTitle"
                value={formData.hiringManagerTitle}
                onChange={handleInputChange}
                placeholder="Head of Engineering"
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyAddress">Company Address (if needed)</label>
              <input
                type="text"
                id="companyAddress"
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleInputChange}
                placeholder="456 Business Ave, City, State, ZIP"
              />
            </div>

            <div className="form-group">
              <label htmlFor="jobDescription">Key Requirements from Job Description*</label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                placeholder="Paste key skills, qualifications, or requirements from the job posting that you want to highlight in your cover letter..."
                required
              />
              <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                This helps our AI create a more targeted letter. Try to include 3-5 key requirements from the job posting.
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="referral">How Did You Find This Job? (Optional)</label>
              <input
                type="text"
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleInputChange}
                placeholder="LinkedIn, Company Website, Referral from John Doe"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="step-pane active">
            <div className="step-title">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h2>Letter Content</h2>
            </div>
            <p className="step-subtitle">Customize the content of your cover letter to showcase your relevant experience and skills.</p>

            <div className="form-group">
              <label htmlFor="introduction">Introduction (How you found out about the position & your interest)</label>
              <textarea
                id="introduction"
                name="introduction"
                value={formData.introduction}
                onChange={handleInputChange}
                placeholder="I am writing to express my interest in the [Position] role at [Company], which I discovered through [Source]. With [X] years of experience in [relevant field/skill], I am excited about the opportunity to bring my expertise to your team."
              />
            </div>

            <div className="section-block">
              <div className="block-header">
                <h4>Key Achievements & Experience</h4>
                <div className="block-actions">
                  <button className="btn-icon">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="achievement1">Achievement/Experience 1*</label>
                <textarea
                  id="achievement1"
                  name="achievement1"
                  value={formData.achievement1}
                  onChange={handleInputChange}
                  placeholder="Describe a specific achievement, project, or experience that relates to the job requirements. Use numbers and metrics when possible."
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="achievement2">Achievement/Experience 2</label>
                <textarea
                  id="achievement2"
                  name="achievement2"
                  value={formData.achievement2}
                  onChange={handleInputChange}
                  placeholder="Describe another relevant achievement or experience that showcases your qualifications."
                />
              </div>
            </div>

            <div className="section-block">
              <div className="block-header">
                <h4>Skills & Qualifications</h4>
                <div className="block-actions">
                  <button className="btn-icon">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="skills">Key Skills & Qualifications*</label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="Highlight your most relevant skills and qualifications that match the job requirements. Focus on how these skills can benefit the company."
                  required
                />
              </div>
            </div>

            <div className="section-block">
              <div className="block-header">
                <h4>Company Knowledge</h4>
                <div className="block-actions">
                  <button className="btn-icon">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="companyResearch">Why This Company?*</label>
                <textarea
                  id="companyResearch"
                  name="companyResearch"
                  value={formData.companyResearch}
                  onChange={handleInputChange}
                  placeholder="Show that you've researched the company. Mention specific things about their culture, values, products, or recent achievements that appeal to you."
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="closing">Closing Statement*</label>
              <textarea
                id="closing"
                name="closing"
                value={formData.closing}
                onChange={handleInputChange}
                placeholder="Thank the reader for considering your application. Express enthusiasm about the opportunity to interview and discuss how you can contribute to the company."
                required
              />
            </div>

            <div className="suggestions-container">
              <h3>Suggested Phrases</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Click any phrase to insert it into your current text field.</p>

              <div className="suggestion-category">
                <div className="suggestion-title">Strong Openers</div>
                <div className="suggestion-chips">
                  <div className="suggestion-chip">I am excited to apply for...</div>
                  <div className="suggestion-chip">With [X] years of experience in...</div>
                  <div className="suggestion-chip">As an accomplished professional in...</div>
                  <div className="suggestion-chip">I was thrilled to discover the opportunity...</div>
                </div>
              </div>

              <div className="suggestion-category">
                <div className="suggestion-title">Skills & Achievements</div>
                <div className="suggestion-chips">
                  <div className="suggestion-chip">I successfully implemented...</div>
                  <div className="suggestion-chip">This resulted in a [X]% improvement in...</div>
                  <div className="suggestion-chip">My expertise in [skill] would allow me to...</div>
                  <div className="suggestion-chip">I led a team that delivered...</div>
                </div>
              </div>

              <div className="suggestion-category">
                <div className="suggestion-title">Company Knowledge</div>
                <div className="suggestion-chips">
                  <div className="suggestion-chip">I admire [Company]'s commitment to...</div>
                  <div className="suggestion-chip">Your recent announcement about...</div>
                  <div className="suggestion-chip">I'm particularly impressed by your...</div>
                  <div className="suggestion-chip">Your company values align with my...</div>
                </div>
              </div>

              <div className="suggestion-category">
                <div className="suggestion-title">Strong Closings</div>
                <div className="suggestion-chips">
                  <div className="suggestion-chip">I look forward to discussing how my skills...</div>
                  <div className="suggestion-chip">Thank you for considering my application...</div>
                  <div className="suggestion-chip">I'm excited about the possibility of joining...</div>
                  <div className="suggestion-chip">I would welcome the opportunity to elaborate...</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="step-pane active">
            <div className="step-title">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <h2>Style & Tone</h2>
            </div>
            <p className="step-subtitle">Choose how you want your letter to sound</p>

            <div className="form-group">
              <label>Select Tone</label>
              <div className="tone-options">
                {['professional', 'confident', 'enthusiastic', 'formal'].map(tone => (
                  <div
                    key={tone}
                    className={`tone-option ${formData.tone === tone ? 'active' : ''}`}
                    onClick={() => handleToneSelect(tone)}
                  >
                    {tone.charAt(0).toUpperCase() + tone.slice(1)}
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Select Template</label>
              <div className="template-options">
                {['modern', 'classic', 'creative', 'minimal'].map(template => (
                  <div
                    key={template}
                    className={`template-card ${formData.template === template ? 'active' : ''}`}
                    onClick={() => handleTemplateSelect(template)}
                  >
                    <div className="template-img"></div>
                    <div className="template-name">
                      {template.charAt(0).toUpperCase() + template.slice(1)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="step-pane active">
            <div className="step-title">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h2>Preview & Download</h2>
            </div>
            <p className="step-subtitle">Review your cover letter and make any final adjustments</p>

            <div className="preview-container">
              <div className="preview-header">
                <h3>Generated Cover Letter</h3>
                <div className="preview-actions">
                  <button className="btn btn-secondary" onClick={handleCopy}>
                    <span className="btn-icon-text">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      Copy
                    </span>
                  </button>
                  <button className="btn btn-primary">
                    <span className="btn-icon-text">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF
                    </span>
                  </button>
                </div>
              </div>
              <div className="preview-panel">
                {generatedLetter}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="cover-letter-generator">
        <div className="container">
          <h1>Professional Cover Letter Generator</h1>
          <p className="description">Create a tailored cover letter in minutes with our free, AI-powered builder. No account needed. Perfect for matching your resume and landing more interviews.</p>
          
          <div className="wizard-container">
            <div className="progress-container">
              <div className="progress-steps">
                <div className="progress-bar" style={{ width: `${(currentStep - 1) * 25}%` }}></div>
                {[1, 2, 3, 4, 5].map(step => (
                  <div
                    key={step}
                    className={`step ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
                  >
                    {step}
                  </div>
                ))}
              </div>
              <div className="step-labels">
                <div className={`step-label ${currentStep === 1 ? 'active' : ''}`}>Basic Info</div>
                <div className={`step-label ${currentStep === 2 ? 'active' : ''}`}>Job Details</div>
                <div className={`step-label ${currentStep === 3 ? 'active' : ''}`}>Content</div>
                <div className={`step-label ${currentStep === 4 ? 'active' : ''}`}>Style</div>
                <div className={`step-label ${currentStep === 5 ? 'active' : ''}`}>Preview</div>
              </div>
            </div>

            <div className="step-content">
              {renderStepContent()}
              
              <div className="step-navigation">
                {currentStep > 1 && (
                  <button className="btn btn-secondary" onClick={handleBack}>
                    <span className="btn-icon-text">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                    </span>
                  </button>
                )}
                {currentStep < 5 && (
                  <button className="btn btn-primary" onClick={handleNext}>
                    <span className="btn-icon-text">
                      {currentStep === 1 ? 'Next: Job Details' :
                       currentStep === 2 ? 'Next: Content' :
                       currentStep === 3 ? 'Next: Style' :
                       'Next: Preview'}
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoverLetterGenerator; 