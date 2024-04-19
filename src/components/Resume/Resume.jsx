import React from 'react';
import Pdf from "./Pdf.pdf";


const Resume = () => {
  return (
  <div>
    <p>Resume</p>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="shadow-lg p-4 bg-white">
        <iframe
          src={Pdf}
          title="Resume"
          width="400"
          height="600"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  </div>
  );
};

export default Resume;
