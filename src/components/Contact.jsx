import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => (
  <section className="py-24 px-6 text-center bg-pink-50" id="contact">
    <motion.div
      className="max-w-xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-gray-700">Let's Work Together</h2>
      <p className="text-lg text-gray-600 mb-6">
        Want to collaborate? I'm open for full-time opportunities.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="mailto:morafidela04@gmail.com"
          className="text-gray-700 hover:text-gray-900"
          aria-label="Email"
        >
          <Mail size={28} className="bg-pink-100 p-1 rounded-lg border border-pink-200" />
        </a>
        <a
          href="https://github.com/zamorafidelaa"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-gray-900"
          aria-label="GitHub"
        >
          <Github size={28} className="bg-pink-100 p-1 rounded-lg border border-pink-200" />
        </a>
        <a
          href="https://www.linkedin.com/in/mora-fidela-a57608369/?trk=opento_sprofile_topcard"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 hover:text-gray-900"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} className="bg-pink-100 p-1 rounded-lg border border-pink-200" />
        </a>
      </div>
    </motion.div>
  </section>
);

export default Contact;
