import React from 'react';
import profile_pic from '../assets/profile_pic.png';


const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-fixed" style={{backgroundImage: `url('your-background-image-url')`}}>
      <div className="text-center">
        <img src = {profile_pic} className="profile-img"/>
        <h1 className="text-5xl font-bold text-black">Kamyar Taghavi</h1>
        <h3 className="text-3xl text-black">Software Engineer</h3>
        <p className="text-xl text-gray-300 mt-4">"I'm a driven software engineer with a solid foundation from Flatiron's coding bootcamp, now deep-diving into advanced development techniques through projects and specialized courses. Each day is dedicated to coding and seeking opportunities where I can contribute significantly, leveraging my technical proficiency and diverse life experiences."</p>
        <a href="contact" className="mt-8 inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300">Contact Me</a>
        <a href="resume" className="mt-8 inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300">View Resume</a>
      </div>
    </div>
  );
};

export default HomePage;
