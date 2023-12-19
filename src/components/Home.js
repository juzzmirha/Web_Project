import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  // Using the routing function
  const navigate = useNavigate();

  // Creating variables for using useState
  const [searchQuery, setSearchQuery] = useState('');

  // This function occurs when the value in the input field changes.
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // This function is called when the form is submitted
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/${searchQuery.toLowerCase()}`);
  };

  return (
    <div className="home-container">
      <div className="search-container">
        <img
          src="/icons/mxr.png"
          alt="Google Logo"
          className="google-logo"
        />
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
            placeholder="Введите поисковой запрос или URL"
          />
          <button type="submit" className="search-button" />
        </form>

        {/* Navigation Shortcuts */}
        <div className="navigation-links">
          {/* Using the Link component to create links */}
          <Link to="/aboutme">
            <button>
              <div className="button-container">
                <img src="/icons/aboutme.png" alt="Projects Logo" className="button-logo" />
                AboutMe
              </div>
            </button>
          </Link>
          <Link to="/projects">
            <button>
              <div className='button-container'>
                <img src="/icons/projects.png" alt="Projects Logo" className="button-logo" />
                Projects
              </div>
            </button>
          </Link>
          <Link to="/certificates">
            <button>
              <div className='button-container'>
                <img src="/icons/cert.png" alt="Projects Logo" className="button-logo" />
                Certificates
              </div>
            </button>
          </Link>

          <Link to="/skills">
            <button>
              <div className='button-container'>
                <img src="/icons/skills.png" alt="Projects Logo" className="button-logo" />
                Skills
              </div>
            </button>
          </Link>
          <button>
            <div className='button-container'>
              <a href="https://www.tiktok.com/@juzzmirha" target="_blank" rel="noopener noreferrer">
                <img src="/icons/tiktok.png" alt="Projects Logo" className="button-logo" />
              </a>
              Blog
            </div>
          </button>
          <button>
            <div className='button-container'>
              <a href="https://www.instagram.com/juzzmirha/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/instagram.png" alt="Projects Logo" className="button-logo" />
              </a>
              Contact
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
