import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="relative font-sans overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-10 text-center text-sm text-gray-400 border-t bg-white">
        © {new Date().getFullYear()} Mora Fidela. Built with ❤️ using React & Tailwind CSS.
      </footer>
    </main>
  );
};

export default App;
