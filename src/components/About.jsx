import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section className="py-24 px-6 max-w-4xl mx-auto text-center" id="about">
    <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      About Me
    </motion.h2>
    <motion.p className="text-lg text-gray-800 leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
      I am a web developer with experience in building user interfaces using HTML and creating dynamic, interactive web applications with React and JavaScript...
    </motion.p>
  </section>
);

export default About;
