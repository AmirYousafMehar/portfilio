'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';
import ThemeToggle from '@/components/theme/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/#hero' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'About', href: '/#about' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-dark-700 shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center gap-2 group"
          >
            <span className="bg-primary-600 text-white p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Code className="w-5 h-5" />
            </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              Amir<span className="font-light">Yousaf</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link animated-underline"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-2 text-dark-700 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-dark-700 shadow-lg"
          >
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="py-2 px-4 text-dark-700 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-600 rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}