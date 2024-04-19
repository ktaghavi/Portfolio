import React from 'react';
import profile_pic from '../assets/profile_pic.png';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-fixed" style={{backgroundImage: `url('your-background-image-url')`}}>
      <div className="text-center p-4 bg-white bg-opacity-90 rounded-lg shadow-lg"> {/* Add a semi-transparent background for readability */}
        <img src={profile_pic} alt="Kamyar Taghavi" className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-blue-500" /> {/* Adjust profile image */}
        <h1 className="text-5xl font-bold text-gray-800 mt-4">Kamyar Taghavi</h1>
        <h3 className="text-3xl text-gray-700">Software Engineer</h3>
        <p className="text-xl text-gray-600 mt-4">I'm a driven software engineer with a solid foundation from Flatiron's coding bootcamp, now deep-diving into advanced development techniques through projects and specialized courses. Each day is dedicated to coding and seeking opportunities where I can contribute significantly, leveraging my technical proficiency and diverse life experiences.</p>
        <div className="flex justify-center gap-4 mt-8"> {/* Adjust buttons container */}
          <a href="contact" className="bg-blue-500 text-white py-2 px-5 rounded-lg text-lg hover:bg-blue-700 transition duration-300">Contact Me</a>
          <a href="resume" className="bg-blue-500 text-white py-2 px-5 rounded-lg text-lg hover:bg-blue-700 transition duration-300">View Resume</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;