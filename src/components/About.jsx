import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportOptions } from '../utils/animations';

export default function About({ personal }) {
  return (
    <section id="about" className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-dark-800/50">
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
            About Me
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Passionate About{' '}
            <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
              Building
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={fadeInUp}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple to-accent-blue rounded-2xl opacity-20" />
              <div className="absolute inset-4 bg-dark-900 rounded-xl border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-purple/30 to-accent-blue/30 flex items-center justify-center">
                    <span className="text-5xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
                      {personal?.name?.charAt(0) || 'D'}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{personal?.location || 'Remote'}</p>
                </div>
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-4 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan rounded-2xl -z-10 blur-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 leading-relaxed">
              {personal?.bio || 'I am a passionate developer focused on creating elegant solutions to complex problems.'}
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Focus', value: 'Backend Development' },
                { label: 'Experience', value: '5+ Years' },
                { label: 'Location', value: personal?.location || 'Remote' },
                { label: 'Availability', value: 'Open to Work' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full font-medium text-white hover:shadow-lg hover:shadow-accent-purple/25 transition-shadow"
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-white/20 rounded-full font-medium text-white hover:bg-white/5 transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}