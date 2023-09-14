import React from 'react'
import "../Resume/style.css"

export default function Resume() {
 const resumeUrl = 'https://pdf.ac/24A23v'; 

  return (
    <div className="resume-container">
      <h1 className="resume-heading">Resume</h1>
      
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        Click here to view my resume
      </a>

      <div className="resume-section">
        
      </div>
    </div>
  );
}

