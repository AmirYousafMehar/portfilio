'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import profileFakeImage from './assets/images/man.png';
export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Typing animation effect for the subtitle
  useEffect(() => {
    if (!inView) return;
    
    const text = "Full Stack Developer";
    const typingElement = document.getElementById('typing-text');
    
    if (!typingElement) return;
    
    let i = 0;
    typingElement.textContent = '';
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [inView]);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden"
      ref={ref}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-700 z-0" />
      
      {/* Animated background dots/grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 font-medium text-sm">
              Available for new projects
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Hello, I'm 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
                Amir Yousaf
              </span>
            </h1>
            
            <div className="h-10">
              <h2 id="typing-text" className="text-2xl font-mono"></h2>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md">
              I create beautiful, functional, and user-friendly digital experiences with modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Get in touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View my work
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="https://github.com/AmirYousafMehar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/amir-yousaf-29327a1a1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:amiryousafmaher@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-secondary-500 animate-pulse blur-3xl opacity-30" />
              <img 
                src={(profileFakeImage as any).src}
                alt="Developer" 
                className="rounded-3xl h-full w-full object-cover shadow-2xl"
              />
              
              {/* Floating tech badges */}
              <motion.div 
                className="absolute -left-10 top-1/4 bg-white dark:bg-dark-600 shadow-xl rounded-lg px-3 py-2"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <span className="font-semibold">React</span>
              </motion.div>
              
              <motion.div 
                className="absolute -right-10 top-1/2 bg-white dark:bg-dark-600 shadow-xl rounded-lg px-3 py-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <span className="font-semibold">Node.js</span>
              </motion.div>
              
              <motion.div 
                className="absolute left-1/4 -bottom-6 bg-white dark:bg-dark-600 shadow-xl rounded-lg px-3 py-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
              >
                <span className="font-semibold">TypeScript</span>
              </motion.div>

               <motion.div 
                className="absolute left-60 -top-3 bg-white dark:bg-dark-600 shadow-xl rounded-lg px-3 py-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
              >
                <span className="font-semibold">Next js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.a
            href="#projects"
            aria-label="Scroll to projects"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm mb-2">Scroll down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}