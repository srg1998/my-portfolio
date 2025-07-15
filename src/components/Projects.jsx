"use client";
import { motion } from "motion/react";
import { FaGithub ,FaKaggle } from "react-icons/fa";<FaKaggle />
const projects = [
  {
    title: "Personality Prediction using KNN",
    description:
      "Built a KNN classification model to predict personality traits (introvert/extrovert) using behavioral survey data.",
    tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"],
    link: "https://www.kaggle.com/code/sreerags/personality-prediction",
    type: "kaggle",
  },
  {
    title: "House Price Prediction using Linear Regression",
    description:
      "Built a regression model using Linear Regression to predict house prices based on area, number of bedrooms, and location.",
    tools: ["Python", "Pandas", "Scikit-learn", "Seaborn", "Jupyter"],
    link: "https://www.kaggle.com/code/sreerags/house-price-linear-regression",
    type: "kaggle",
  },
  {
    title: "Student Depression Prediction",
    description:
      "Developed a linear regression model to analyze student depression levels using survey and behavioral data.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    link: "https://github.com/srg1998/studentdepressiondataset",
    type: "github",
  },
  {
    title: "Fertilizer Recommendation using KNN",
    description:
      "Built a KNN classifier to recommend fertilizers based on temperature, humidity, soil and crop type using encoding and scaling techniques.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    link: "https://www.kaggle.com/code/sreerags/optimal-fertilizer",
    type: "kaggle",
  },
  {
    title: "Dynamic Form Generator",
    description:
      "Built a dynamic React web app that generates complex, nested forms with real-time input validation.",
    tools: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/srg1998/dynamic-form",
    type: "github",
  },
  {
    title: "Task Assignment Platform",
    description:
      "Developed a fullstack Next.js + Node.js app for admins to assign tasks and users to update status, with login support.",
    tools: ["Next.js", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://github.com/srg1998/tasks-management",
    type: "github",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="min-h-screen px-4 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600 mb-3 text-sm">{proj.description}</p>

              <div className="flex flex-wrap gap-2 text-xs text-blue-600 font-medium mb-4">
                {proj.tools.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-blue-50 px-2 py-1 rounded-md border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
              >
                {proj.type === "github" ? <FaGithub /> : <FaKaggle />}
                {proj.type === "github" ? "View on GitHub" : "View on Kaggle"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
