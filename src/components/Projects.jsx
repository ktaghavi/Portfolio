import React from 'react';
import MMA_Mystic_Homepage from '../assets/MMA_Mystic_Homepage.png';
import Cyber_Casino_Homepage from '../assets/Cyber_Casino_Homepage.png';
import Toon_Rater_Homepage from '../assets/Toon Rater Homepage.png';


const Projects = () => {
  const projects = [
    {
      name: 'MMA Mystic',
      description: "A sophisticated UFC Fight Predictor tailored for UFC bettors and fight analysts to forecast fight outcomes alongside the model's confidence in its projections.",
      image: MMA_Mystic_Homepage,
      // site: '#',
      git: 'https://github.com/ktaghavi/MMA-Mystic',
      demo: 'https://www.loom.com/share/d32565baabca40ed85a8611aa2a7a058?sid=2c81f9ed-c7cd-4252-aa6f-291376af91b7'
    },
    {
      name: 'Cyber Casino',
      description: "A command-line casino with three different casino game options: slots, roulette, and blackjack.",
      image: Cyber_Casino_Homepage,
      // site: '#',
      git: 'https://github.com/ktaghavi/CyberCasino',
      demo: 'https://www.loom.com/share/dabcd44c70484bd18fb1af7d0b12b088?sid=668dc5aa-3c16-46a1-ba1b-1df785ea8964'
    },
    {
      name: 'Toon Rater',
      description: "A web application facilitating the sharing and evaluation of cartoons to determine their popularity.",
      image: Toon_Rater_Homepage,
      // site: '#',
      git: 'https://github.com/ktaghavi/Toon-Rater',
      demo: 'https://www.loom.com/share/7d5d7530ef3d4148b8c9d157f19b0d69?sid=718e6e00-c429-4eac-8366-028b562e2208'
    },
  ];

  return (
    <div id="projects" className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p>{project.description}</p>
              {/* <a href={project.site} className="text-blue-500 hover:underline">Website</a> */}
              <a href={project.git} className="text-blue-500 hover:underline">GitHub</a>
              <a href={project.demo} className="text-blue-500 hover:underline">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;