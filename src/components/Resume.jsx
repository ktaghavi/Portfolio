import React from 'react';

const Resume = () => {
  const resumeUrl = 'YOUR_RESUME_PDF_URL_HERE'; // Replace this with the direct link to your resume PDF

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="shadow-lg p-4 bg-white">
        <iframe
          src={resumeUrl}
          title="Resume"
          width="600"
          height="800"
          style={{ border: "none" }}
        ></iframe>
        <div className="text-center mt-4">
          <a
            href={resumeUrl}
            download="Resume.pdf" // Customize the download file name
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
