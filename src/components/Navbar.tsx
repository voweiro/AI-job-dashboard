"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // ✅ Mobile menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold">AI Job Match</h1>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <ul className={`md:flex space-x-6 hidden`}>
          <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link href="/jobs" className="hover:text-gray-200">Find Job</Link></li>
          <li><Link href="/about" className="hover:text-gray-200">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-200">Contact Us</Link></li>
        </ul>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 pb-4 px-4">
          <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link href="/jobs" className="hover:text-gray-200">Find Job</Link></li>
          <li><Link href="/about" className="hover:text-gray-200">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-200">Contact Us</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
