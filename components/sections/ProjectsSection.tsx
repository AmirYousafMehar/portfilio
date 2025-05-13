'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { getAllProjects } from '@/lib/projects';

const categories = ['All', 'Web', 'Mobile', 'Backend', 'UI/UX'];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const projects = getAllProjects();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="section bg-white dark:bg-dark-800" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="section-title">
            My Recent <span className="text-primary-600">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Here are some of my recent works that showcase my skills and experience in building web and mobile applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {/* {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-dark-600 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-dark-500'
              }`}
            >
              {category}
            </button>
          ))} */}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-primary-100 transition-colors"
                        aria-label="View code on Github"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-primary-100 transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div> */}
              </div>
              <div className="p-6">
                {/* <Link href={`/projects/${project.slug}`} className="block"> */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                {/* </Link> */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-gray-800 dark:text-gray-200 rounded-full text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link href="https://github.com/AmirYousafMehar" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}