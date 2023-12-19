import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Array to show the projects
  const projectsData = [
    {
      name: 'ASP.NET Core',
      description:
        'My project is a web-based note management application that provides a convenient and secure environment for storing personal information. The application functionality includes the ability to add, edit and delete notes, providing a flexible and intuitive interface. Through an authentication and registration system, users can securely store their personal notes, ensuring privacy and ease of use.',
      completionTime: 'July 2023',
      githubLink: 'https://github.com/juzzmirha/Notes_Acvelon',
    },
    {
      name: 'Web Project "Online Shop"',
      description:
        'My web project is an online shop for JDM automotive products with information about JDM culture, a blog and a slider. In the store, users can find spare parts and accessories for their Japanese cars. On the blog - share experiences and read JDM news. A slider on the home page highlights current offers and events. A unique combination of store, information and interaction in one place for fans of JDM culture.',
      completionTime: 'June 2022',
      githubLink: 'https://github.com/juzzmirha/JDM',
    },
    {
      name: 'Java EE Spring',
      description:
        'My web project is a testing site where the front end is built on React and the back end is based on Java EE Spring. The site provides users with a convenient environment for taking tests as well as storing results. The front end, built using React, provides an intuitive and responsive interface for users. The back end, based on Java EE Spring, ensures secure and efficient interaction between the front end and the database.',
      completionTime: 'November 2023',
      githubLink: 'https://github.com/juzzmirha/JAVA-EE',
    },
  ];
  

  return (
    <div>
      <div className="aboutme-container">
        <img src="/icons/mxr.png" alt="MXR Logo" className="mxr-logo" />
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutme">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects" className="current">
                Projects
              </Link>
            </li>
            <li>
            <Link to="/certificates" className="current">
                Certificates
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Container for showing pojects */}
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-item">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Completion Time: {project.completionTime}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
