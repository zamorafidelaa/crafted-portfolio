import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative font-sans overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
