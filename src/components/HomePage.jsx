import React from 'react';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-fixed" style={{backgroundImage: `url('your-background-image-url')`}}>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">Hi, I'm [Your Name]</h1>
        <p className="text-xl text-gray-300 mt-4">I'm a software engineer specializing in web development.</p>
        <a href="#about" className="mt-8 inline-block bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300">Learn More</a>
      </div>
    </div>
  );
};

export default HomePage;
