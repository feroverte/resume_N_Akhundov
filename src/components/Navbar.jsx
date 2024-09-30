import React, { useState, useEffect, useRef } from "react";
import codepic from "../assets/Code.png";
import skillspic from "../assets/Skills.png";
import servicespic from "../assets/Services.png";
import homepic from "../assets/Home.png";
import aboutpic from "../assets/about.png";
import projectspic from "../assets/Language.png";

function Navbar({ sectionsRef }) {
  const [hoveredItem, setHoveredItem] = useState("");
  const [isSticky, setIsSticky] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSticky(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollToSection = (section) => {
    sectionsRef[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`bg-black text-white px-8 md:px-16 lg:px-24 ${
        isSticky ? "fixed" : "relative"
      } w-full z-10`}
    >
      <div className="container py-4 flex flex-col items-center">
        <div className="flex space-x-8 justify-center">
          {[
            "Home",
            "About",
            "Skills",
            "Programming Languages",
            "Services",
            "Projects",
          ].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="hover:text-gray-400"
              onMouseEnter={() => setHoveredItem(section)}
              onMouseLeave={() => setHoveredItem("")}
              onClick={() => handleScrollToSection(section)}
            >
              <img
                className="w-10 h-10"
                src={
                  section === "Home"
                    ? homepic
                    : section === "About"
                    ? aboutpic
                    : section === "Skills"
                    ? skillspic
                    : section === "Programming Languages"
                    ? codepic
                    : section === "Services"
                    ? servicespic
                    : projectspic
                }
                alt={section}
              />
            </a>
          ))}
        </div>

        <div className="mt-4 h-6">
          <p
            className={`text-yellow-400 text-center text-lg transition-opacity duration-300 ease-in-out ${
              hoveredItem ? "opacity-100" : "opacity-0"
            }`}
          >
            {hoveredItem}
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
