import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-gray-900 scroll-smooth overflow-x-clip">
      <Navbar />
      <main className="scroll-smooth">
        <section id="hero" className="scroll-mt-20">
          <Hero />
        </section>

        <section id="experience" className="scroll-mt-20">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="certifications" className="pt-20 scroll-mt-20">
          <Certifications />
        </section>

        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        <section id="resume" className="scroll-mt-20">
          <Resume />
        </section>
      </main>

      <Footer />
    </div>
  );
}
