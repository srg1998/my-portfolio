"use client";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

export default function Hero() {
  return (
    <motion.div
      className="min-h-screen flex items-center max-w-7xl mx-auto px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-6 w-full md:flex-row md:justify-between md:items-center">
        {/* Text + Socials */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="text-5xl sm:text-7xl font-bold leading-tight">
            Hi, I’m Sreerag,
            <br />
            ML and Data Engineer
          </div>

          <motion.div
            className="flex gap-8 mt-4 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/srg1998"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-gray-600 hover:text-black text-2xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sreerag-subhash"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-blue-700 hover:text-black text-2xl"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.kaggle.com/sreerags"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-blue-400 hover:text-black text-5xl"
            >
              <SiKaggle />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Image or Arc Background */}
        <div className="hidden md:block md:w-1/2 relative">
          <img
            src="/icons/data.svg" // place this SVG or PNG in /public
            alt="Machine Learning Illustration"
            className="w-full max-w-md mx-auto"
          />
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-100 rounded-l-full -z-10"></div>
        </div>
      </div>
    </motion.div>
  );
}
