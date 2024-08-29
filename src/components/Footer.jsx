import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-800 p-6 text-white text-center">
      <h2 className="text-xl font-bold mb-4">Contact Me</h2>
      <div className="flex justify-center space-x-6">
        <a 
          href="mailto:email@example.com" 
          className="flex items-center space-x-2 hover:text-teal-400"
        >
          <i className="fas fa-envelope"></i>
          <span>k.macalinao.510984@umindanao.edu.ph</span>
        </a>
        <a 
          href="tel:+1234567890" 
          className="flex items-center space-x-2 hover:text-teal-400"
        >
          <i className="fas fa-phone"></i>
          <span>0938-209-9774</span>
        </a>
        <a 
          href="https://www.facebook.com/kentuckymachenzie" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center space-x-2 hover:text-teal-400"
        >
          <i className="fab fa-facebook-f"></i>
          <span>Facebook</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
