import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "HTML Developer",
    description: "I have built and maintained various websites using HTML...",
  },
  {
    title: "JavaScript Developer",
    description: "I have experience using JavaScript to create interactive features...",
  },
  {
    title: "React Developer",
    description: "With React, I have created scalable and efficient user interfaces...",
  },
  {
    title: "Java Developer",
    description: "I have used Java for backend development using Spring Boot...",
  },
];

const Experience = () => (
  <section className="py-24 px-6 bg-gray-100" id="experience">
    <div className="max-w-6xl mx-auto">
      <motion.h2 className="text-4xl font-bold mb-12 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        My Experience
      </motion.h2>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
