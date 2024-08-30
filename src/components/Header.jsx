import React, { useState } from 'react';
import resume from '../assets/images/Resume.png';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-teal-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>

        
        <div className="flex space-x-4">
        <h1 className="text-xl font-bold">Resume</h1>

          <button
            onClick={openModal}
            className="px-4 py-2 bg-teal-700 text-white rounded-lg shadow hover:bg-teal-600 transition-colors flex items-center justify-center"
          >
            <i className="fas fa-eye text-xl"></i>
          </button>

          
          <a 
            href={resume} 
            download="Resume.jpg" 
            className="px-4 py-2 bg-teal-700 text-white rounded-lg shadow hover:bg-teal-600 transition-colors flex items-center justify-center"
          >
            <i className="fas fa-download text-xl"></i>
          </a>
        </div>
      </div>

     
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={resume}
              alt="Resume"
              className="w-full h-auto object-contain"
            />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-lg shadow hover:bg-teal-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
