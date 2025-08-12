import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <section
    className="relative pt-32 flex flex-col justify-center items-center min-h-screen px-6 text-center text-white overflow-hidden font-sans"
    id="home"
  >
    <div className="absolute inset-0 -z-10">
      <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 animate-backgroundBlur opacity-30"></div>
    </div>

    <motion.img
      src="image.png"
      alt="Mora"
      className="w-40 h-40 rounded-full object-cover shadow-lg mb-6 border-4 border-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    />

    <motion.h1
      className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg font-heading"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Hello, I'm Mora
    </motion.h1>

    <motion.p
      className="text-2xl md:text-3xl text-white/80 max-w-xl mb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      I design and build modern web experiences using React for frontend and
      Java for backend development.
    </motion.p>

    <motion.div
      className="flex flex-col sm:flex-row gap-4 items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <a
        href="#projects"
        className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:scale-105 transition transform"
      >
        See My Projects
      </a>
      <a
        href="#contact"
        className="border border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-black transition"
      >
        Contact Me
      </a>
    </motion.div>
  </section>
);

export default Home;
