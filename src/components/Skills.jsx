export default function Skills() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        {/* Skills Container for Two Columns on Large Screens */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Technical Skills Section */}
          <div className="bg-gray-800 px-6 pb-6 text-center rounded-lg transform transition-transform duration-300 hover:scale-105 lg:w-1/2">
            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {/* Skill tags for technical skills */}
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-blue-300 text-blue-800 hover:bg-blue-400 transition-all duration-200 shadow-md">
                Microsoft Office
              </span>
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-green-300 text-green-800 hover:bg-green-400 transition-all duration-200 shadow-md">
                Power BI
              </span>
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-yellow-300 text-yellow-800 hover:bg-yellow-400 transition-all duration-200 shadow-md">
                PDF/WORD Manipulation
              </span>
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-pink-300 text-pink-800 hover:bg-pink-400 transition-all duration-200 shadow-md">
                Windows/Linux
              </span>
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-red-300 text-red-800 hover:bg-red-400 transition-all duration-200 shadow-md">
                Databases
              </span>
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-purple-300 text-purple-800 hover:bg-purple-400 transition-all duration-200 shadow-md">
                Research expertise
              </span>
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-teal-300 text-teal-800 hover:bg-teal-400 transition-all duration-200 shadow-md">
                GitHub
              </span>
            </div>
          </div>

          {/* Professional Skills Section */}
          <div className="bg-gray-800 px-6 pb-6 text-center rounded-lg transform transition-transform duration-300 hover:scale-105 lg:w-1/2">
            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Professional Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {/* Skill tags for professional skills */}
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-purple-300 text-purple-800 hover:bg-purple-400 transition-all duration-200 shadow-md">
                SQL
              </span>
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-indigo-300 text-indigo-800 hover:bg-indigo-400 transition-all duration-200 shadow-md">
                Frontend Development
              </span>
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-fuchsia-300 text-fuchsia-800 hover:bg-fuchsia-400 transition-all duration-200 shadow-md">
                Network Security
              </span>
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-red-300 text-red-800 hover:bg-red-400 transition-all duration-200 shadow-md">
                Information Security
              </span>
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-orange-300 text-orange-800 hover:bg-orange-400 transition-all duration-200 shadow-md">
                Software Engineering
              </span>
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-lime-300 text-lime-800 hover:bg-lime-400 transition-all duration-200 shadow-md">
                Data Analysis
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
