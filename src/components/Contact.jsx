import instpic from "../assets/instagram.png";
import facpic from "../assets/facebook.png";
import linpic from "../assets/linkedin.png";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-950 text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12">Contact Info</h2>

        {/* Phone Information */}
        <div className="flex items-center justify-center mb-5">
          <FaPhoneSquareAlt className="w-8 h-8 mr-2" />

          <span>+994 51 777 73 21</span>
          <FaWhatsappSquare className="w-8 h-8 ml-2" />
        </div>

        {/* Email Information */}
        <div className="flex items-center justify-center mb-5">
          <MdAttachEmail className="w-7 h-7 mr-3" />
          <span>nam1g4khund0v@gmail.com</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center space-x-5">
          <a href="https://www.instagram.com/n4khndv_/?igsh=MTY5czRkOHQwOWthcQ%3D%3D">
            <img
              className="h-10 w-10 transform transition-transform duration-300 ease-in-out hover:scale-110"
              src={instpic}
              alt="Instagram"
            />
          </a>
          <a href="https://www.facebook.com/home.php?_rdr">
            <img
              className="h-10 w-10 transform transition-transform duration-300 ease-in-out hover:scale-110"
              src={facpic}
              alt="Facebook"
            />
          </a>
          <a href="https://www.linkedin.com/in/namig-akhundov-4bb8792ba/">
            <img
              className="h-10 w-10 transform transition-transform duration-300 ease-in-out hover:scale-110"
              src={linpic}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
