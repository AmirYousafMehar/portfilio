'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Download, CheckCircle, Calendar, Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    id: 1,
    date: '2023 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    description: 'Leading development of scalable web applications using React, Node.js, and AWS.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 2,
    date: '2020 - 2023',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Developed responsive web applications and RESTful APIs using modern JavaScript frameworks.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 3,
    date: '2018 - 2020',
    title: 'Frontend Developer',
    company: 'Creative Web Agency',
    description: 'Built responsive user interfaces and implemented complex UI features for client websites.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 4,
    date: '2014 - 2018',
    title: 'Bachelor of Computer Science',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in software engineering and web technologies.',
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-white dark:bg-dark-800" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="section-title">
            About <span className="text-primary-600">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get to know me better: my background, experience, and what drives me as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/5989922/pexels-photo-5989922.jpeg"
                alt="About Me"
                fill
                style={{ objectFit: 'cover' }}
                className="transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-600 shadow-xl rounded-lg px-4 py-2 z-10">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary-600">5+</span>
                  <span className="text-sm">Years of Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">I'm John Doe, a Full Stack Developer based in San Francisco</h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm passionate about creating elegant solutions to complex problems, with a focus on user-centric design and scalable architecture. With over 5 years of professional experience, I've worked on everything from small business websites to complex enterprise applications.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I believe in writing clean, maintainable code and continuously learning new technologies. When I'm not coding, you'll find me hiking, reading tech blogs, or contributing to open-source projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Clean Code', icon: <CheckCircle className="w-5 h-5 text-primary-600" /> },
                { label: 'Responsive Design', icon: <CheckCircle className="w-5 h-5 text-primary-600" /> },
                { label: 'Modern Frameworks', icon: <CheckCircle className="w-5 h-5 text-primary-600" /> },
                { label: 'Performance Optimization', icon: <CheckCircle className="w-5 h-5 text-primary-600" /> },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            
            <a href="/resume.pdf" download className="btn btn-primary">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>
        </div>
        
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">My Journey</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.id} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                    }`}
                  >
                    <div className="card p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <span className="block text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 inline-block mr-1" />
                            {item.date}
                          </span>
                          <h4 className="font-bold">{item.title}</h4>
                          <p className="text-sm text-primary-600">{item.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}