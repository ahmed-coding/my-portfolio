import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover, viewportOptions } from '../utils/animations';

function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUp}
      custom={index}
      className="relative"
    >
      <motion.div
        variants={cardHover}
        initial="rest"
        whileHover="hover"
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer p-6 rounded-2xl bg-dark-800 border border-white/10 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-blue/5 opacity-0 hover:opacity-100 transition-opacity" />
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-accent-purple transition-colors">
              {project.title}
            </h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>

          <AnimatePresence>
            {!isExpanded && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-gray-400 text-sm mb-4 line-clamp-2"
              >
                {project.description}
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
            <a
              href={project.link}
              className="text-sm text-accent-purple hover:text-accent-blue transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
            <a
              href={project.github}
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects({ projects }) {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-accent-purple font-medium tracking-wider uppercase text-sm"
          >
            My Work
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A selection of projects I've worked on, showcasing my expertise in Python and Django development.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects?.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}