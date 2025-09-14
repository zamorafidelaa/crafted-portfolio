import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section
    className="relative py-24 px-6 max-w-6xl mx-auto text-center font-sans bg-pink-100 text-gray-900 rounded-3xl shadow-md mt-20 mb-20 scroll-mt-36"
    id="about"
  >
    <motion.h2
      className="text-4xl md:text-5xl font-bold mb-8 tracking-tight"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      About Me
    </motion.h2>

    <motion.p
      className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      I am a{" "}
      <span className="font-semibold text-purple-600">
        D3 Informatics Management student
      </span>{" "}
      at Universitas Nasional PASIM Bandung through the{" "}
      <span className="font-semibold text-purple-600">
        Pemberdayaan Umat Berkelanjutan Scholarship
      </span>{" "}
      program. I have completed various programming training and gained
      hands-on experience in developing responsive and user-friendly web
      applications. Proficient in{" "}
      <span className="font-semibold text-purple-600">
        Java, C, JavaScript, Spring Boot, Node.js, Express.js, React.js,
        MySQL, and PostgreSQL
      </span>
      . Equipped with strong teamwork, communication, and problem-solving
      skills, I am highly motivated to continuously grow and contribute in
      the field of web development.
    </motion.p>

    <motion.div
      className="mt-10 h-1 w-24 bg-purple-400 mx-auto rounded-full"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    />
  </section>
);

export default About;
