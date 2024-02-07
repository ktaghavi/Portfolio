import React from 'react';
import JS_logo from 'src/assets/JS_logo.svg';
import Python_logo from 'src/assets/Python_logo.svg';
import HTML_logo from 'src/assets/HTML_logo.svg';
import CSS_logo from 'src/assets/CSS_logo.svg';
import SQL_logo from 'src/assets/SQL_logo.svg';
import React_logo from 'src/assets/React_logo.png';
import Flask_logo from 'src/assets/Flask_logo.png';
import Tailwind_logo from 'src/assets/Tailwind_logo.png';
import Figma_logo from 'src/assets/Figma_logo.svg';
import VSC_logo from 'src/assets/VSC_logo.png';

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", logo: JS_logo },
      { name: "Python", url: "https://docs.python.org/3//", logo: Python_logo },
      { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", logo: HTML_logo },
      { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", logo: CSS_logo },
      { name: "SQL", url: "https://developer.mozilla.org/en-US/docs/Glossary/SQL", logo: SQL_logo }
    ],
  },
  {
    category: "Frameworks/Libraries",
    items: [
      { name: "React", url: "https://react.dev/", logo: React_logo },
      { name: "Flask", url: "https://flask.palletsprojects.com/en/3.0.x/", logo: Flask_logo },
      { name: "TailwindCSS", url: "https://tailwindcss.com/", logo: Tailwind_logo }
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Figma", url: "https://www.figma.com/", logo: Figma_logo },
      { name: "VSCode", url: "https://code.visualstudio.com/", logo: VSC_logo },
    ],
  },
];

const Stack = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Tech Stack</h2>
      {skills.map((skillCategory, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{skillCategory.category}</h3>
          <div className="flex flex-wrap justify-center">
            {skillCategory.items.map((item, itemIndex) => (
              <a key={itemIndex} href={item.url} target="_blank" rel="noopener noreferrer" className="m-2 flex flex-col items-center">
                <img src={item.logo} alt={`${item.name} logo`} className="w-16 h-16 object-contain" />
                <span className="mt-2 text-sm text-gray-700">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stack;