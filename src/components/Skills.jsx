"use client";
import { motion } from "motion/react";

const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  Frameworks: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
  DataScience: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
  Tools: ["Git", "VS Code", "Postman", "Docker", "Figma"],
  Databases: ["MySQL", "MongoDB"],
  Cloud: ["AWS", "Vercel"],
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-4 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {Object.entries(skills).map(([category, list], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="flex flex-wrap gap-3">
                {list.map((item) => (
                  <li
                    key={item}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
