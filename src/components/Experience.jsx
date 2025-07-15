"use client";
import { motion } from "motion/react";
import { HiOutlineBriefcase } from "react-icons/hi";

export default function Experience() {
  const jobs = [
    {
      role: "ML & Data Science Intern",
      company: "TLS Innovisions",
      duration: "Mar 2025 – Present",
      details: [
        "Built and trained ML models on real-world datasets.",
        "Used Python, Scikit-learn, and Pandas for data preprocessing and modeling.",
        "Collaborated with AI team to build deployable prototypes."
      ],
    },
    {
      role: "Software Engineer",
      company: "Sketchbrahma Technologies",
      duration: "May 2024 – Aug 2024",
      details: [
        'Built "Me@Titan" employee platform using Next.js & Redux.',
        "Implemented polished UI from Figma design.",
        "Optimized performance and UX."
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Tutorcomp",
      duration: "Jan 2024 – May 2024",
      details: [
        "Developed microservices & APIs for Connect App.",
        "Integrated LiveKit for real-time video sessions.",
        "Built whiteboard with Excalidraw."
      ],
    },
  ];

  return (
    <div id="experience" className="min-h-screen bg-white px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-gray-300">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`mb-16 flex items-start w-full ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              } relative`}
            >
              {/* Dot */}
              <span className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white z-10 shadow" />

              {/* Card */}
              <div className="w-full md:w-1/2 lg:w-1/3 p-5 bg-blue-50 rounded-lg shadow hover:shadow-lg transition duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <HiOutlineBriefcase className="text-xl text-blue-600" />
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                </div>
                <p className="text-gray-600 italic text-sm">
                  {job.company} • {job.duration}
                </p>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700 text-sm">
                  {job.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
