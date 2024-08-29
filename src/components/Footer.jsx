import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 text-white text-center">
  <h2 className="text-xl font-bold mb-4">Contact Me</h2>
  <div className="flex justify-center space-x-6">
    <a href="mailto:email@example.com" className="flex items-center space-x-2 hover:text-gray-400">
      <i className="fas fa-envelope"></i>
      <span>k.macalinao.510984@umindanao.edu.ph</span>
    </a>
    <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-gray-400">
      <i className="fas fa-phone"></i>
      <span>0938-209-9774</span>
    </a>
  </div>
  <p className="mt-4 text-sm">&copy; 2024 KENTUBE. Dawata ko pls.</p>
</footer>

  );
};

export default Footer;