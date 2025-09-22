import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const instructorCertificate = {
  title: "Certificate of Appreciation - Web Programming Training Instructor",
  image: "instructor.png", 
  description:
    "Awarded for serving as a Web Programming (HTML, CSS, JavaScript) Training Instructor at PASIM National University, Bandung. Conducted 16 sessions with 120 minutes per session.",
};

const certificates = [
  {
    title: "Logic and Algorithm Training using the C Programming Language",
    image: "c1.png",
    description:
      "Trained in problem-solving, control structures, and basic algorithms using C.",
  },
  {
    title: "Data Structure Training",
    image: "c2.png",
    description:
      "Learned stack, queue, linked list, and tree implementation in C.",
  },
  {
    title: "Database Training",
    image: "c3.png",
    description:
      "Focused on relational databases, SQL queries, and schema design.",
  },
  {
    title: "Web Programming Training (HTML, CSS, JavaScript)",
    image: "c4.png",
    description:
      "Built interactive web apps using vanilla HTML, CSS, and JavaScript.",
  },
  {
    title: "Fundamental Front-End Programming Training (React)",
    image: "c5.png",
    description:
      "Introduction to React components, props, and state management.",
  },
  {
    title: "Advanced Front-End Training (React, Node.js, Express.js)",
    image: "c6.png",
    description:
      "Full MERN-stack training with advanced front-end optimization.",
  },
  {
    title: "Fullstack Programming Training (React & Java)",
    image: "c7.png",
    description:
      "Created full-stack projects using React for UI and Java (Spring Boot) for backend.",
  },
  {
    title: "GitHub Training",
    image: "c8.png",
    description:
      "Version control training: Git basics, branching, and collaboration via GitHub.",
  },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="bg-white py-24 px-6" id="certificates">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-700"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Certificates
        </motion.h2>

        {/* Highlighted Instructor Certificate */}
        <motion.div
          className="bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 p-6 rounded-2xl shadow-lg border-2 border-pink-200 mb-16 cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onClick={() => setSelected(instructorCertificate)}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.img
              src={instructorCertificate.image}
              alt={instructorCertificate.title}
              className="w-full md:w-1/2 h-64 object-contain rounded-xl border border-pink-300 bg-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {instructorCertificate.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {instructorCertificate.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid of other certificates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-pink-50/70 p-4 rounded-2xl shadow-sm border border-pink-100 cursor-pointer flex flex-col
                        transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={() => setSelected(cert)}
            >
              <motion.img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain rounded-lg border border-pink-200 bg-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4 flex-grow">
                {cert.title}
              </h3>
            </motion.div>
          ))}
        </div>

{/* Modal */}
<AnimatePresence>
  {selected && (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 relative shadow-xl"
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Close yang lebih estetik */}
        <button
          className="absolute top-4 right-4 bg-gray-100 hover:bg-pink-200 text-gray-600 hover:text-pink-700
                     rounded-full p-2 shadow-sm transition-colors duration-300"
          onClick={() => setSelected(null)}
        >
          <X size={20} />
        </button>

        <img
          src={selected.image}
          alt={selected.title}
          className="w-full max-h-96 object-contain rounded-lg border border-pink-200 mb-4"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {selected.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {selected.description}
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
