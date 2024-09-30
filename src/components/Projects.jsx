import coo from "../assets/code.png";

const rojects = [
  {
    id: 1,
    name: "MOLT - Sadarak Web App",
    technologies: "React js, MongoDb, Tailwind CSS",
    image: coo,
    github: "https://github.com/feroverte/sadarak-web-app.git",
  },
  {
    id: 2,
    name: "Run for Life",
    technologies: "React js, React Three, Tailwind CSS",
    image: coo,
    github: "https://github.com/feroverte/sadarak-web-app.git",
  },
  {
    id: 3,
    name: "CGPA Calculator",
    technologies: "React js, Tailwind CSS",
    image: coo,
    github: "https://github.com/feroverte/sadarak-web-app.git",
  },
];

export default function Projects() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Use the correct Projects variable for mapping */}
          {rojects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name} // Include an alt attribute for better accessibility
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
