import HeroImage from "../assets/pp.jpg";

export default function Hero({ sectionsRef }) {
  const handleContactClick = () => {
    sectionsRef.Contact.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-center text-white py-16 md:pt-16 lg:pt-32">
      <img
        src={HeroImage}
        alt="Profile pic"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
        Namig Akhundov
      </h1>

      <div className="mt-8 space-x-4">
        <button
          onClick={handleContactClick} // Use the function directly on button click
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact Me
        </button>
        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
}
