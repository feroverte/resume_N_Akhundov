import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ProgLanguages from "./components/ProgLanguages";
import Contact from "./components/Contact";

function App() {
  const sectionsRef = {
    Home: useRef(null),
    About: useRef(null),
    Skills: useRef(null),
    "Programming Languages": useRef(null),
    Services: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null), // Added reference for Contact
  };

  return (
    <>
      <Navbar sectionsRef={sectionsRef} />
      <div ref={sectionsRef.Home}>
        <Hero sectionsRef={sectionsRef} /> {/* Pass sectionsRef to Hero */}
      </div>
      <div ref={sectionsRef.About}>
        <About />
      </div>
      <div ref={sectionsRef.Skills}>
        <Skills />
      </div>
      <div ref={sectionsRef["Programming Languages"]}>
        <ProgLanguages />
      </div>
      <div ref={sectionsRef.Services}>
        <Services />
      </div>
      <div ref={sectionsRef.Projects}>
        <Projects />
      </div>
      <div ref={sectionsRef.Contact}>
        <Contact />
      </div>
    </>
  );
}

export default App;
