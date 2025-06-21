import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => (
  <footer className="container-custom bg-gray-800 text-white p-6 mt-10">
    <div className="flex justify-between items-center flex-wrap gap-4">
      <div className="flex items-center justify-center gap-1">
        <FaRegCopyright />
        <p> 2025 Job Finder. All rights reserved.</p>
      </div>
      <div className="flex space-x-4 text-xl">
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaGithub />
        </a>
        <a href="#">
          <FaEnvelope />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
