'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for backdrop blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About the Medal' },
    { href: '/history', label: 'Historical Origin' },
    { href: '/laureates', label: 'Laureates Timeline' },
    { href: '/criteria', label: 'Award Criteria' },
    { href: '/idea-league', label: 'IDEA League' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-blue-950/95 backdrop-blur-lg shadow-2xl' 
          : 'bg-blue-950 shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Glow Effect */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              {/* Logo badge */}
              <div className="relative bg-gradient-to-br from-amber-400 to-amber-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-2xl font-serif font-bold text-blue-950">L</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-lg font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                Leonardo Da Vinci Medal
              </div>
              <div className="text-xs text-blue-200 uppercase tracking-wider">
                IDEA League Award
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 group"
              >
                <span className={`font-medium transition-colors ${
                  isActive(item.href) 
                    ? 'text-amber-400' 
                    : 'text-white group-hover:text-amber-400'
                }`}>
                  {item.label}
                </span>
                {/* Animated underline */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform transition-transform origin-left ${
                  isActive(item.href)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-900/50 transition-all relative group"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Golden decorative line */}
        {scrolled && (
          <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50"></div>
        )}

        {/* Mobile Menu - Slide In Animation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1 border-t border-blue-800/50 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-3 px-4 rounded-lg transition-all ${
                  isActive(item.href)
                    ? 'bg-amber-500/20 text-amber-400 font-semibold border-l-4 border-amber-400'
                    : 'text-white hover:bg-blue-900/50 hover:text-amber-400 border-l-4 border-transparent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}