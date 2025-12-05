import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <a href="/" className="flex items-center">
        <img
          src="https://www.havenark.in/assets/haven-ark-logo.BsEvOyec.png"
          alt="Haven Ark"
          className="h-8 md:h-10 w-auto object-contain"
        />
      </a>

      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">
          Masterclass
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-gray-600 font-medium hover:text-gray-900">
          Login
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
