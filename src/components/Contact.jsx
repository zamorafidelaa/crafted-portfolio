import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, type: "spring" } }),
};

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

      <div className="flex justify-center space-x-6 mt-6">
        {[ 
          { icon: <Mail size={28} />, link: "mailto:morafidela04@gmail.com", label: "Email" },
          { icon: <Github size={28} />, link: "https://github.com/zamorafidelaa", label: "GitHub" },
          { icon: <Linkedin size={28} />, link: "https://www.linkedin.com/in/mora-fidela-a57608369/?trk=opento_sprofile_topcard", label: "LinkedIn" }
        ].map((item, index) => (
          <motion.a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="bg-pink-100 p-3 rounded-lg border border-pink-200 text-gray-700 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Contact;
