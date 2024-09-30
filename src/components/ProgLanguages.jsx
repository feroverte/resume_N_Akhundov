// Import your SVG icons
import CPlusPlusIcon from "../assets/cplusplus-original.svg";
import HtmlIcon from "../assets/html5-original.svg";
import JavaIcon from "../assets/java-original-wordmark.svg";
import JavaScriptIcon from "../assets/javascript-original.svg";
import PythonIcon from "../assets/python-original.svg";
import TailwindIcon from "../assets/tailwindcss-original.svg";

export default function ProgLanguages() {
  const languages = [
    { title: "Python", percentage: 50, icon: PythonIcon },
    { title: "Java", percentage: 80, icon: JavaIcon },
    { title: "C/C++", percentage: 50, icon: CPlusPlusIcon },
    { title: "JavaScript", percentage: 70, icon: JavaScriptIcon },
    { title: "HTML", percentage: 100, icon: HtmlIcon },
    { title: "CSS", percentage: 100, icon: TailwindIcon },
  ];

  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Programming Languages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {languages.slice(0, 4).map((language, index) => (
            <div
              key={index}
              className="bg-gray-800 px-4 py-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center relative group"
            >
              <img
                src={language.icon}
                alt={`${language.title} icon`}
                className="w-16 h-16 mb-4"
              />

              <p className="mt-2 text-lg font-semibold text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {language.title}
              </p>

              <div className="mt-4 w-full">
                <div className="flex">
                  {Array.from({ length: 6 }).map((_, segmentIndex) => (
                    <div
                      key={segmentIndex}
                      className={`h-4 flex-1 mx-0.5 rounded ${
                        segmentIndex <
                        Math.round((language.percentage / 100) * 6)
                          ? "bg-gradient-to-r from-yellow-400 to-red-500"
                          : "bg-gray-700"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-8">
          {languages.slice(4).map((language, index) => (
            <div
              key={index}
              className="bg-gray-800 px-4 py-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-1/3 flex flex-col items-center justify-center relative group"
            >
              <img
                src={language.icon}
                alt={`${language.title} icon`}
                className="w-16 h-16 mb-4"
              />

              <p className="mt-2 text-lg font-semibold text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {language.title}
              </p>

              <div className="mt-4 w-full">
                <div className="flex">
                  {Array.from({ length: 6 }).map((_, segmentIndex) => (
                    <div
                      key={segmentIndex}
                      className={`h-4 flex-1 mx-0.5 rounded ${
                        segmentIndex <
                        Math.round((language.percentage / 100) * 6)
                          ? "bg-gradient-to-r from-yellow-400 to-red-500"
                          : "bg-gray-700"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
