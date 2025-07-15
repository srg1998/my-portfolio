"use client";
import { motion } from "motion/react";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2025",
  },
  {
    title: "Certification in AI and Data Science",
    issuer: "TLS Innovisions",
    year: "2025",
  },
  {
    title: "Silver Elite (Python)",
    issuer: "NPTEL",
    year: "2021",
  },
  {
    title: "Workshop on Mastering Git",
    issuer: "DRISHTI",
    year: "2018",
  },
  {
    title: "AWS Fundamentals",
    issuer: "Coursera",
    year: "2020",
  },
  {
    title: "Programming for Everybody",
    issuer: "Coursera",
    year: "2020",
  },
  {
    title: "Data Structures",
    issuer: "Coursera",
    year: "2020",
  },
];

export default function Certifications() {
  return (
    <div id="certifications" className="min-h-screen bg-white px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FaCertificate className="text-blue-600 text-xl" />
              <div>
                <h3 className="font-semibold text-lg">{cert.title}</h3>
                <p className="text-sm text-gray-600">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
