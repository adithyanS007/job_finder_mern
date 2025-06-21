import { useState } from "react";
import { FaBriefcase, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="container-custom w-full fixed z-50 bg-white shadow p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="lobster-regular  text-2xl font-bold flex items-center gap-2">
        <FaBriefcase size={30} className="text-blue-500" />
        <span>Job Finder</span>
      </div>

      {/* Nav + Button (Desktop) */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex gap-4">
          <Link to="/" className="font-semibold text-md text-gray-600 hover:text-blue-500">Home</Link>
          <Link to="/" className="font-semibold text-md text-gray-600 hover:text-blue-500">Jobs</Link>
          <Link to="/" className="font-semibold text-md text-gray-600 hover:text-blue-500">Messages</Link>
          <Link to="/" className="font-semibold text-md text-gray-600 hover:text-blue-500">Contact</Link>
        </nav>
        <Link
          to="add-job"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Job
        </Link>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden flex gap-5 items-center">
        <Link
          to="add-job"
          className=" w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Job
        </Link>
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 bg-white shadow-md p-4 w-48 rounded mt-2 z-50 md:hidden">
          <nav className="flex flex-col gap-3">
            <Link to="/" onClick={closeMenu} className="text-md font-semibold text-gray-600 hover:text-blue-500">Home</Link>
            <Link to="/" onClick={closeMenu} className="text-md font-semibold text-gray-600 hover:text-blue-500">Jobs</Link>
            <Link to="/" onClick={closeMenu} className="text-md font-semibold text-gray-600 hover:text-blue-500">Messages</Link>
            <Link to="/" onClick={closeMenu} className="text-md font-semibold text-gray-600 hover:text-blue-500">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
