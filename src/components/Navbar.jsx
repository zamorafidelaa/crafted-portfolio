import React, { useState } from "react";
import { Menu, X, Home, User, BookOpen, Code, Mail, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "home", icon: <Home size={16} /> },
  { name: "about", icon: <User size={16} /> },
  { name: "certificates", icon: <Award size={16} /> }, // Added certificates
  { name: "experience", icon: <BookOpen size={16} /> },
  { name: "projects", icon: <Code size={16} /> },
  { name: "contact", icon: <Mail size={16} /> },
];

const navVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -10, pointerEvents: "none" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    pointerEvents: "auto",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <header className="fixed top-0 w-full z-50 bg-pink-50/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center text-gray-700 font-semibold text-xl"
        >
          <img
            src="mora.svg"
            alt="logo"
            className="w-10 h-10 bg-pink-300 rounded-full mr-3"
          />
          Zaamora
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {menuItems.map(({ name, icon }) => (
            <a
              key={name}
              href={`#${name}`}
              className="hover:text-pink-600 transition flex items-center space-x-1"
            >
              {icon}
              <span className="capitalize">{name}</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden bg-white p-2 rounded-lg shadow hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navVariants}
              className="md:hidden absolute top-16 right-6 bg-white/95 text-gray-700 rounded-xl shadow-xl w-48 origin-top-right"
            >
              <ul className="flex flex-col space-y-4 p-4 text-right font-medium">
                {menuItems.map(({ name, icon }) => (
                  <li key={name}>
                    <a
                      href={`#${name}`}
                      onClick={toggleMenu}
                      className="hover:text-pink-600 capitalize flex items-center justify-end space-x-2"
                    >
                      <span>{name}</span>
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
