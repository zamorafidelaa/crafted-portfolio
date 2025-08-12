import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/20 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-medium text-gray-600 font-heading">
          Zaamora
        </h1>

        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <a href="#home" className="hover:text-gray-800 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-800 transition">
            About
          </a>
          <a href="#experience" className="hover:text-gray-800 transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-gray-800 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-800 transition">
            Contact
          </a>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 z-50 bg-gray-50 p-2 rounded-lg shadow hover:bg-gray-100 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        <nav
          className={`md:hidden absolute top-16 right-6 bg-white/80 text-gray-600 rounded-xl shadow-xl transition-all duration-300 w-48 ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-4 text-right font-medium">
            <li>
              <a
                href="#home"
                onClick={toggleMenu}
                className="hover:text-gray-800"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={toggleMenu}
                className="hover:text-gray-800"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={toggleMenu}
                className="hover:text-gray-800"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="hover:text-gray-800"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="hover:text-gray-800"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
