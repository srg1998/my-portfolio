"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

const sections = [
  "experience",
  "projects",
  "certifications",
  "skills",
  "resume",
  "contact",
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY !== lastScrollY) {
        setShow(currentY < lastScrollY);
        setLastScrollY(currentY);
      }

      const offset = window.innerHeight / 2;

      const allSections = ["hero", ...sections];

      for (let section of allSections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow`}
    >
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Home Icon */}
        <button
          onClick={() => scrollTo("hero")}
          className={`text-2xl ${
            currentSection === "hero"
              ? "text-black"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <FaHome />
        </button>

        {/* Menu Toggle for Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-5 text-lg font-semibold">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollTo(section)}
                className={`transition-colors ${
                  currentSection === section
                    ? "text-black"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-end px-4 pb-4 gap-4 text-md font-semibold">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollTo(section)}
                className={`transition-colors ${
                  currentSection === section
                    ? "text-black"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
