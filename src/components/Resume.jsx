import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-xl">
        <h2 className="text-4xl font-bold mb-4">Download My Resume</h2>
        <p className="text-gray-600 mb-8">
          Want a detailed overview of my skills, projects, and experience? Feel
          free to download my resume below.
        </p>
        <a
          href="/Sreerag_cv.pdf"
          download
          className="inline-block px-6 py-3 text-white bg-black rounded hover:bg-gray-800 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
