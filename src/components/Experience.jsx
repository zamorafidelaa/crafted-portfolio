import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "C Programming",
    description:
      "Learned the fundamentals of the C language, including algorithms, data structures, and procedural programming concepts.",
    image: "c.jpeg",
  },
  {
    title: "HTML & CSS",
    description:
      "Gained knowledge of web structure and created clean, responsive layouts using HTML and CSS.",
    image: "htmlcss.jpeg",
  },
  {
    title: "JavaScript",
    description:
      "Enhanced web pages with interactivity and dynamic behavior using JavaScript.",
    image: "js.jpeg",
  },
  {
    title: "Tailwind CSS",
    description:
      "Designed and styled modern, responsive UIs in React using Tailwind CSS, leveraging utility-first classes for rapid development.",
    image: "tailwindcss.jpeg",
  },
  {
    title: "Database (MySQL & PostgreSQL)",
    description:
      "Studied relational database concepts, designed tables, and managed data using SQL with MySQL and PostgreSQL.",
    images: ["mysql.jpeg", "postgres.jpeg"],
  },
  {
    title: "React.js",
    description:
      "Explored building modern web interfaces using React, creating reusable components, and managing state effectively.",
    image: "react.jpeg",
  },
  {
    title: "Node.js",
    description:
      "Learned to create simple backend applications with Node.js and Express, including building REST APIs.",
    image: "nodejs.jpeg",
  },
  {
    title: "Java",
    description:
      "Understood Java fundamentals, object-oriented programming, and developed simple backend applications.",
    image: "java.jpeg",
  },
];

const Experience = () => (
  <section className="py-20 px-6 bg-pink-50" id="experience">
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
        My Learning Journey
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white/60 p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-pink-100 flex items-start gap-4 hover:scale-[1.02]"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              type: "spring",
              stiffness: 80,
            }}
          >
            {exp.images ? (
              <div className="flex flex-col items-center gap-1 min-w-[3.5rem]">
                {exp.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${exp.title} ${i + 1}`}
                    className="w-12 h-12 object-contain rounded-lg bg-pink-100 p-2 border border-pink-200"
                  />
                ))}
              </div>
            ) : (
              <img
                src={exp.image}
                alt={exp.title}
                className="w-14 h-14 object-contain rounded-lg bg-pink-100 p-2 border border-pink-200"
              />
            )}
            <div>
              <h3 className="text-2xl font-semibold text-gray-700">
                {exp.title}
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
