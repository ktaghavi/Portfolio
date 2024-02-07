import React from 'react';

const Projects = () => {
  // Assume projects is an array of your project details
  const projects = [
    {
      name: 'Project 1',
      description: 'A brief description of your project.',
      image: 'project-image-url',
      link: '#',
    },
    // Add more projects
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
              <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
