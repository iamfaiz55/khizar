'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-white text-3xl font-extrabold tracking-wide">
            JobTracker
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            <Link
              href="/"
              className="text-white hover:text-yellow-300 transition font-semibold text-lg"
            >
              Imports
            </Link>
            <Link
              href="/all"
              className="text-white hover:text-yellow-300 transition font-semibold text-lg"
            >
              Jobs
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-r from-blue-700 to-indigo-700 rounded-b-md shadow-lg py-4">
            <Link
              href="/"
              className="block px-4 py-2 text-white hover:bg-yellow-300 hover:text-blue-900 rounded transition font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Imports
            </Link>
            <Link
              href="/all"
              className="block px-4 py-2 mt-1 text-white hover:bg-yellow-300 hover:text-blue-900 rounded transition font-semibold text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Jobs
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
