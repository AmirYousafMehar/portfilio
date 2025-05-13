'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 70 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'CI/CD', level: 75 },
      { name: 'AWS', level: 65 },
      { name: 'Testing', level: 80 },
    ],
  },
];

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-700" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="section-title">
            My <span className="text-primary-600">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            I've worked with a variety of technologies and tools in the web development ecosystem, specializing in both frontend and backend technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-8"
            >
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-500 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-xl font-bold text-center mb-8">Technologies I work with</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'JavaScript', icon: '📜' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Express', icon: '🚂' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'Docker', icon: '🐳' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Git', icon: '🔄' },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-600 rounded-xl shadow-md min-w-24 text-center"
              >
                <span className="text-2xl mb-2">{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}