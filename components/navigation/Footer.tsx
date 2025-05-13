import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-700 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Dev<span className="font-light">Portfolio</span></h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              Full stack developer specializing in creating beautiful, functional, and user-friendly applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:hello@devportfolio.com" aria-label="Email" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#hero" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/#skills" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Skills</Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#blog" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {currentYear} DevPortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}