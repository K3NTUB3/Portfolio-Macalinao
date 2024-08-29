import React from 'react';
import resume from '../assets/images/Resume.png';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <a 
          href={resume} 
          download="Resume.jpg" 
          className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
