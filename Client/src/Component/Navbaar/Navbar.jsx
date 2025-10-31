import { useState } from "react";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-4xl font-bold font-poppins cursor-pointer">Samarpan</h1>
        
        <button 
          className="md:hidden p-2 border border-gray-400 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        
        <ul className="hidden md:flex gap-6 text-lg font-medium text-gray-700 cursor-pointer">
          <li className="hover:text-blue-600 transition pt-[8px]">Home</li>
          <li className="hover:text-blue-600 transition pt-[8px]">Services</li>
          <li className="hover:text-blue-600 transition pt-[8px]">About</li>
          <li className="hover:text-blue-600 transition pt-[8px]">Contact</li>
          <Link to="/sign">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                Sign Up
              </button>
          </Link>
          <Link to="/login">
          <button className="px-4 py-2 bg-gray-300 text-black rounded-lg shadow-md hover:bg-gray-400 transition">Login</button>
          </Link>
        </ul>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white shadow-lg py-6 absolute w-full left-0 top-16 text-lg font-medium text-gray-700 border-t border-gray-300">
          <li className="py-2 hover:text-blue-600 transition">Home</li>
          <li className="py-2 hover:text-blue-600 transition">Services</li>
          <li className="py-2 hover:text-blue-600 transition">About</li>
          <li className="py-2 hover:text-blue-600 transition">Contact</li>
          <Link to="/sign">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                Sign Up
              </button>
          </Link>
          <Link to="/login">
          <button className="px-4 py-2 bg-gray-300 text-black rounded-lg shadow-md hover:bg-gray-400 transition">Login</button>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
