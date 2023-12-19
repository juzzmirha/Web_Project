import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  // Creating "selectedImage" and function with useState
  const [selectedImage, setSelectedImage] = useState(null);

  // Array for pictures
  const pictures = [
    '/pictures/1.jpeg',
    '/pictures/2.jpeg',
    '/pictures/3.jpeg',
    '/pictures/4.jpeg',
    '/pictures/5.jpeg',
    '/pictures/6.jpeg',
  ];

  return (
    <div>
      <div className="aboutme-container">
        <img src="/icons/mxr.png" alt="MXR Logo" className="mxr-logo" />
        {/* Creating the navigation between pages */}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutme" className="current">About</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/certificates">Certificates</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="aboutme-content">
        <h1>About</h1>
        <p>
          I'm a frontend developer based in
          <br />
          sunny Almaty, Kazakhstan.
        </p>
        <p>
          Since 2020, I've enjoyed programming. <br />
          I started learning HTML & CSS; it was interesting, <br />
          so after at the university, I started learning web development.<br />
          Besides programming, I love photography.<br />
        </p>
      </div>

      <img src="/pictures/miras.jpg" alt="Photograph of Miras" className="profile-image" />
      <hr />

      {/* Function to watch the pictures */}
      <div className="pictures-container">
        {pictures.map((picture, index) => (
          <img
            key={index} // primary key for picture
            src={picture} // way of pictures
            alt={`Photograph ${index + 1}`} // number of pictures
            className="picture"
            onClick={() => setSelectedImage(picture)} 
          />
        ))}
      </div>


      {/* Function of modal window of pictures */}
      {selectedImage && (
        <div className="modal-container" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Selected Photograph"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default AboutMe;
