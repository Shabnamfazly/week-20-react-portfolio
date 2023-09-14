import React from 'react'
import "./projects.css"
const projects = [
    {
      title: 'Code Refactor',
      description: 'Code refactoring a website by using semantic html to make it more accessible',
      imageSrc: 'path-to-image1.jpg',
      readmeLink: 'https://github.com/Shabnamfazly/week-1-code-refactor-challenge',
    },
    {
      title: 'Code Quiz',
      description: "A code quiz application using HTML, CSS, and Javascript",
      imageSrc: 'path-to-image2.jpg',
      readmeLink: 'https://github.com/Shabnamfazly/Week-4-Code-Quiz',
    },
    {
        title: 'Workday scheduler',
        description: 'A workday scheduler using jquery and APIs that saves data to the local storage for the purpose of allowing the user manage their time effectively.',
        imageSrc: 'path-to-image1.jpg',
        readmeLink: 'https://github.com/Shabnamfazly/Week-5-Scheduler',
      },
      {
        title: 'Weather Dashboard',
        description: ' An app that displays the weather (temperature, humidity, wind speed, and uv index) of the current day ',
        imageSrc: 'path-to-image2.jpg',
        readmeLink: 'https://github.com/Shabnamfazly/Week-6-Weather-Dashboard',
      },
      {
        title: 'Read Me generator',
        description: 'An application that generates a profession read me file',
        imageSrc: 'path-to-image1.jpg',
        readmeLink: 'https://github.com/Shabnamfazly/Week-9-readme-generator',
      },
      {
        title: 'Social network api',
        description: 'A tool that helps build the backend of a social network website',
        imageSrc: 'path-to-image2.jpg',
        readmeLink: 'https://github.com/Shabnamfazly/week-18-social-network-api',
      },
   
  ];

export default function Projects() {
  return (
    <div>
        <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <a href={project.readmeLink} target="_blank" rel="noopener noreferrer">
            <img src={project.imageSrc} alt={project.title} />
          </a>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
    </div>
  )
}
