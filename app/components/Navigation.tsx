'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-amber-500">LDV</span>
            <span className="hidden md:block text-sm font-semibold">Leonardo Da Vinci Medal</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-amber-500 transition font-medium">
              Home
            </Link>
            <Link href="/about" className="hover:text-amber-500 transition font-medium">
              About the Medal
            </Link>
            <Link href="/history" className="hover:text-amber-500 transition font-medium">
              Historical Origin
            </Link>
            <Link href="/laureates" className="hover:text-amber-500 transition font-medium">
              Laureates Timeline
            </Link>
            <Link href="/criteria" className="hover:text-amber-500 transition font-medium">
              Award Criteria
            </Link>
            <Link href="/idea-league" className="hover:text-amber-500 transition font-medium">
              IDEA League
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-blue-900 transition"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 px-4 hover:bg-blue-900 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 px-4 hover:bg-blue-900 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              About the Medal
            </Link>
            <Link
              href="/history"
              className="block py-2 px-4 hover:bg-blue-900 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Historical Origin
            </Link>
            <Link
              href="/laureates"
              className="block py-2 px-4 hover:bg-blue-900 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Laureates Timeline
            </Link>
            <Link
              href="/criteria"
              className="block py-2 px-4 hover:bg-blue-900 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              Award Criteria
            </Link>
            <Link
              href="/idea-league"
              className="block py-2 px-4 hover:bg-blue-900 rounded transition"
              onClick={() => setIsOpen(false)}
            >
              IDEA League
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}