// import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
  // Array for showing skills
  const portfolioItems = [
    {
      id: 1,
      imageSrc: '/skills/eng.png',
      title: 'English Level',
      description: 'My level of English is level B2. I can communicate fluently in English in various senses, understand the content of complex texts and express my thoughts on various topics. I can confidently use the language in everyday settings as well as in business contexts.',
    },
    {
      id: 2,
      imageSrc: '/skills/prog.png',
      title: 'Programming',
      description: 'I have programming skills in C++ and Java SE to develop complex applications. Experience with Java EE in building distributed systems. Familiar with database design (SQL, MySQL, PostgreSQL) and web development (HTML, CSS, JavaScript, React.js, ).',
    },
    {
      id: 3,
      imageSrc: '/skills/solv.png',
      title: 'Problem Solving',
      description: 'My problem-solving experience includes the use of structured methods and tools such as SWOT analysis and cause and effect tree analysis. I strive to find innovative approaches and constantly improve my skills in solving complex problems.',
    },
    {
      id: 4,
      imageSrc: '/skills/leader.png',
      title: 'LeaderShip',
      description: 'In the area of leadership, as an ENTJ (Commander) personality type, I emphasize effective management and strategic thinking. Combining energy and analytical skills, I strive to inspire my team to achieve great results. ',
    },
    {
      id: 5,
      imageSrc: '/skills/gym.png',
      title: 'GYM',
      description: 'I have purpose and discipline in my training, which helps me not only strengthen my body, but also overcome difficulties in everyday life.',
    },
  ];
    return(
        <div>
          
        <div className="aboutme-container">
        <img src="/icons/mxr.png" alt="MXR Logo" className="mxr-logo"/>
        <nav className="navbar">
        <ul>
          <li>
           <Link to="/">Home</Link>
           </li>
          <li>
            <Link to="/aboutme" class ='current'>About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      </div>
      <div className="portfolio-container">
      {portfolioItems.map((item) => (
        <div key={item.id} className="portfolio-item"> {/*unique identification of each element*/}
          <img src={item.imageSrc} alt={`${item.id}`} className="portfolio-image" /> {/*Portfolio item image */}
          <h3>{item.title}</h3>
          <p className='skills-info'>{item.description}</p>
        </div>
      ))}
      </div>
    </div>
    );
}
export default Skills;