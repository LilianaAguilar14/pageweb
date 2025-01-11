import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-orange-600 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-0 py-3 flex justify-between items-center">

        <div className="flex items-center">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="h-24"
          />
        </div>

       
        <nav className="hidden md:flex space-x-6 text-white font-medium text-lg">
          <a href="/" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="/about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="/systems" className="hover:text-orange-500 transition">
            Systems
          </a>
          <a href="/clients" className="hover:text-orange-500 transition">
            Clients
          </a>
          <a href="/contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </nav>

       
        <a
          href="/contact"
          className="hidden md:inline-block bg-white text-orange-600 py-2 px-4 rounded-lg text-lg hover:bg-orange-500 transition"
        >
          Get Service
        </a>

       
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-orange-600 text-white space-y-2 px-6 py-4">
          <a href="/" className="block hover:text-orange-500 transition">
            Home
          </a>
          <a href="/about" className="block hover:text-orange-500 transition">
            About
          </a>
          <a href="/systems" className="block hover:text-orange-500 transition">
            Systems
          </a>
          <a href="/clients" className="block hover:text-orange-500 transition">
            Clients
          </a>
          <a href="/contact" className="block hover:text-orange-500 transition">
            Contact
          </a>
          <a
            href="/get-service"
            className="block bg-white text-orange-600 py-2 px-4 rounded-lg text-center hover:bg-orange-500 transition"
          >
            Get Service
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
