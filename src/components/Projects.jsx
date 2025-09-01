import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "C – Zamora's Shoes",
    description:
      "A C language project to manage shoe inventory, applying basic data structures and algorithms.",
    image: "/images/projects/zamora-shoes.png",
    github: "https://github.com/zamorafidelaa/ZAMORA-S-SHOES.git",
  },
  {
    title: "HTML, CSS & JavaScript – Zamoranime",
    description:
      "An interactive anime-themed website built with HTML, CSS, and JavaScript, integrated with an external API for dynamic content.",
    image: "vid.mp4",
    github: "https://github.com/zamorafidelaa/MORA_FIDELA.git",
  },
  {
    title: "React Fundamentals – Zamora Beauty Guide",
    description:
      "A beauty tips web app built with React fundamentals, focusing on component-based design and state management.",
    image: "vidtwo.mp4",
    github: "https://github.com/zamorafidelaa/zamora-beauty-guide.git",
    live: "https://zamora-beauty-guide.vercel.app",
  },
  {
    title: "Advanced React – Zamora Kicks Care",
    description:
      "A sneaker care guide with advanced React patterns, custom hooks, and optimized rendering.",
    image: "kicks.png",
    github: "https://github.com/zamorafidelaa/Zamora-Kicks-Care.git",
  },
  {
    title: "React + Java – ZamoraGG Food",
    description:
      "A full-stack food ordering platform using React for frontend and Java for backend APIs.",
    image: "ggfood.png",
    github: "https://github.com/zamorafidelaa/ZamoraGG-Food",
  },
];

const Projects = () => (
  <section className="bg-white py-24 px-6" id="projects">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-gray-700"
        initial={{ opacity: 0, y: -30, letterSpacing: "0.2em", scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, letterSpacing: "0em", scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 80,
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-pink-50/70 p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-pink-100 flex flex-col"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.image.endsWith(".mp4") ? (
                <video
                  src={project.image}
                  className="w-full rounded-lg border border-pink-200 mb-4 h-auto max-h-96 object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-96 object-contain rounded-lg border border-pink-200 mb-4 bg-white"
                />
              )}
            </motion.div>

            <h3 className="text-2xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="mt-4 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-pink-600 hover:text-pink-800 transition"
                >
                  <Github size={18} /> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
