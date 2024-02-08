import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; // Assuming you have a Navbar component
import HomePage from './components/HomePage.jsx';
import Projects from './components/Projects.jsx';
import Stack from './components/Stack.jsx';
import ContactForm from './components/ContactForm.jsx';
import Resume from './components/Resume.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/resume" element={<Resume />} />       
        </Routes>
        <Navbar />
      </div>
    </BrowserRouter>
  );
};

export default App;