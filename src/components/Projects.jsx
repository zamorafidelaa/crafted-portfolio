import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "React To-Do App",
    description: "A modern task manager built using React and JavaScript...",
  },
  {
    title: "Personal Portfolio Website",
    description: "I built this portfolio website using React and JavaScript...",
  },
];

const Projects = () => (
  <section className="bg-white py-24 px-6" id="projects">
    <div className="max-w-6xl mx-auto">
      <motion.h2 className="text-4xl font-bold mb-12 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-64 bg-gray-300 rounded mb-4"></div>
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
