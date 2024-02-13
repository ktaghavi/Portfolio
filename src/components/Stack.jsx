import React from 'react';
import '../App.css'
import JS_logo from '../assets/JS_logo.svg';
import Python_logo from '../assets/Python_logo.svg';
import HTML_logo from '../assets/HTML_logo.svg';
import CSS_logo from '../assets/CSS_logo.svg';
import SQL_logo from '../assets/SQL_logo.png';
import React_logo from '../assets/React_logo.png';
import Flask_logo from '../assets/Flask_logo.png';
import Tailwind_logo from '../assets/Tailwind_logo.png';
import Figma_logo from '../assets/Figma_logo.png';
import VSC_logo from '../assets/VSC_logo.png';

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
    <div className="stack-container">
      <h2 className="title">Tech Stack</h2>
      <div className="skills-list">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{skillCategory.category}</h3>
            {skillCategory.items.map((item, itemIndex) => (
              <a key={itemIndex} href={item.url} target="_blank" rel="noopener noreferrer" className="skill-card">
                <img src={item.logo} alt={`${item.name} logo`} className="logo-img" />
                <span className="skill-name">{item.name}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;