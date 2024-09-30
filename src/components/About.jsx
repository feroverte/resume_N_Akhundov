import React from "react";
import AboutImage from "../assets/secphotojpg.jpg";
import aze from "../assets/azerbaijan.png";
import ru from "../assets/russia.png";
import en from "../assets/united-states.png";
import pg from "../assets/portugal.png";

export default function About() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="Profile"
            className="w-72 h-100 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate Cyber Security Specialist with a focus on
              pentesting. I have a strong foundation in many fields related to
              programming, web development, and social engineering.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-1/12">
                  <img
                    src={aze}
                    alt="Azerbaijani"
                    className="w-10 h-10 transition-transform duration-300 transform hover:scale-110" /* Adjust the size */
                  />
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-yellow-400 to-red-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-full"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-1/12">
                  <img
                    src={en}
                    alt="English"
                    className="w-10 h-10 transition-transform duration-300 transform hover:scale-110" /* Adjust the size */
                  />
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-yellow-400 to-red-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-full"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-1/12">
                  <img
                    src={ru}
                    alt="Russian"
                    className="w-10 h-10 transition-transform duration-300 transform hover:scale-110" /* Adjust the size */
                  />
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-yellow-400 to-red-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-full"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-1/12">
                  <img
                    src={pg}
                    alt="Portuguese"
                    className="w-10 h-10 transition-transform duration-300 transform hover:scale-110" /* Adjust the size */
                  />
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-yellow-400 to-red-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-2/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
