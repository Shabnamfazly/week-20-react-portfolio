import React from 'react'
import '../Contact/style.css'


export default function Contact() {
  return (
     <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <form className="contact-form">
        <input
          type="text"
          className="contact-input"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="contact-input"
          placeholder="Your Email"
        />
        <textarea
          className="contact-textarea"
          placeholder="Your Message"
          rows="4"
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
}

