import React from 'react';
import CyberCisco from '../assets/images/Cisco Certified Support Technician Cybersecurity.png';
import CyberIT from '../assets/images/Information Technology Specialist in Cybersecurity.png';
import NetworkingIT from '../assets/images/Information Technology Specialist in Network Security.png';
import myImage from '../assets/images/profileImage.jpg';
import Cap1 from '../assets/images/CapstoneProject.png';
import Cap2 from '../assets/images/CapstoneProject2.png';
import Cap3 from '../assets/images/CapstoneProject3.png';
import proj1 from '../assets/images/busTicket.png';
import proj2 from '../assets/images/TodoList.png';
import resume from '../assets/images/Resume.png';

const MainContent = () => {
  return (
    <main className="container mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg">
      <section id="home" className="mb-12 p-6 bg-white rounded-lg shadow-md flex items-center gap-8">
        <img 
          src={myImage} 
          alt="Kenneth Macalinao" 
          className="w-48 h-48 object-contain rounded-lg shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            HELLO! I AM KENNETH MACALINAO.
          </h2>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            A BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY STUDENT.
          </h2>
          <p className="text-gray-700">
            Motivated college intern eager to showcase my programming skills and expand my knowledge through hands-on opportunities.
          </p>
        </div>
      </section>

      <section id="certification" className="mb-12 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Certification</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-col items-center text-center w-1/2 sm:w-1/3">
            <img 
              src={CyberCisco}  
              alt="Cisco Certified Support Technician Cyber Security" 
              className="w-250 h-250 object-contain shadow-lg mb-4" 
            />
            <p className="text-gray-700">
              Cisco Certified Support Technician Cyber Security obtained in 2024
            </p>
          </div>
          <div className="flex flex-col items-center text-center w-1/2 sm:w-1/3">
            <img 
              src={CyberIT} 
              alt="Information Technology Specialist in Cybersecurity" 
              className="w-250 h-250 object-contain shadow-lg mb-4"  
            />
            <p className="text-gray-700">
              Information Technology Specialist in Cybersecurity obtained in 2024
            </p>
          </div>
          <div className="flex flex-col items-center text-center w-full sm:w-1/3">
            <img 
              src={NetworkingIT}
              alt="Information Technology Specialist in Network Security" 
              className="w-250 h-250 object-contain shadow-lg mb-4"  
            />
            <p className="text-gray-700">
              Information Technology Specialist in Network Security obtained in 2023
            </p>
          </div>
        </div>
      </section>

      <section id="capstone-project" className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Outputs</h2>
        <div className="flex justify-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            Capstone Project
          </h3>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-1/4">
            <img 
              src={Cap1} 
              alt="Dashboard Graph for yearly comparison of data" 
              className="w-full h-48 object-contain rounded-lg shadow-lg mb-4"
            />
            <p className="text-gray-700 text-center">Dashboard Graph for yearly comparison of data</p>
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-1/4">
            <img 
              src={Cap2}
              alt="Customizable Graph Data for a specific data date interpretation" 
              className="w-full h-48 object-contain rounded-lg shadow-lg mb-4"
            />
            <p className="text-gray-700 text-center">Customizable Graph Data for a specific data date interpretation</p>
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-1/4">
            <img 
              src={Cap3} 
              alt="Mapping of the coordinates using Leaflet and OpenStreetMap" 
              className="w-full h-48 object-contain rounded-lg shadow-lg mb-4"
            />
            <p className="text-gray-700 text-center">Mapping of the coordinates using Leaflet and OpenStreetMap</p>
          </div>
        </div>
      </section>

      <section id="lower-year-projects" className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            Lower Year School Projects
          </h3>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-1/4">
            <img 
              src={proj1} 
              alt="A simple bus ticketing system using Visual Basic" 
              className="w-full h-48 object-contain rounded-lg shadow-lg mb-4"
            />
            <p className="text-gray-700 text-center">A simple bus ticketing system using Visual Basic</p>
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-1/3 lg:w-1/4">
            <img 
              src={proj2}
              alt="A simple To-Do List created using JavaScript" 
              className="w-full h-48 object-contain rounded-lg shadow-lg mb-4"
            />
            <p className="text-gray-700 text-center">A simple To-Do List created using JavaScript</p>
          </div>
        </div>
      </section>

      <section id="project" className="p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Resume</h2>
  <div className="flex flex-wrap gap-6 justify-center">
  <div className="flex flex-col items-center text-center w-1/2 sm:w-1/3">
      <img 
        src={resume}  
        alt="Cisco Certified Support Technician Cyber Security" 
        className="w-50 h-50 object-contain shadow-lg mb-4" 
      />
    </div>
  </div>
</section>
    </main>
  );
};

export default MainContent;
