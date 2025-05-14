import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => (
  <section className="py-24 px-6 text-center bg-gray-50" id="contact">
    <motion.div className="max-w-xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
      <p className="text-lg text-gray-700 mb-6">
        Want to collaborate? I'm open for freelance and full-time opportunities.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:your.email@example.com" className="text-gray-700 hover:text-black"><Mail size={28} /></a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-black"><Github size={28} /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-black"><Linkedin size={28} /></a>
      </div>
    </motion.div>
  </section>
);

export default Contact;
