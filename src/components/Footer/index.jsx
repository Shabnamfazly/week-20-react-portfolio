import React from 'react'
import '../Footer/style.css'


export default function Footer() {
 return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/shabnamfazly" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://linkedin.com/in/shabnamfazly" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </footer>
  );
}