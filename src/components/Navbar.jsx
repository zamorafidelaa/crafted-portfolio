import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white font-heading">Zaamora</h1>

        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white z-50 bg-white/20 p-2 rounded-lg shadow hover:bg-white/30 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav
          className={`md:hidden absolute top-16 right-6 bg-white/90 text-gray-800 rounded-xl shadow-xl transition-all duration-300 w-48 ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-4 text-right font-medium">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
