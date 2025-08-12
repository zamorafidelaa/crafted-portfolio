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
      I’m a passionate web developer who loves crafting visually appealing and
      high-performance websites. My expertise lies in building modern web
      experiences using{" "}
      <span className="font-semibold text-purple-600">React</span> for frontend
      development and{" "}
      <span className="font-semibold text-purple-600">Java</span> for backend
      solutions. I focus on delivering clean, responsive designs that provide
      seamless user experiences — blending creativity with functionality.
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
