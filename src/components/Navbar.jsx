"use client";

import { useState, useEffect } from "react";

const sections = [
  "hero",
  "experience",
  "projects",
  "certifications",
  "resume",
  "contact",
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Navbar hide on scroll down
      if (currentY !== lastScrollY) {
        setShow(currentY < lastScrollY);
        setLastScrollY(currentY);
      }

      // Section tracking
      const offset = window.innerHeight / 2;
      for (let section of sections) {
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
      const yOffset = 0;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow`}
    >
      <div className="max-w-7xl mx-auto flex justify-end px-4 py-5">
        <ul className="flex gap-5 text-lg font-semibold">
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
    </nav>
  );
}
