import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, skillBarVariants, viewportOptions } from '../utils/animations';

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUp}
      custom={index}
      className="mb-6 last:mb-0"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          custom={skill.level}
          variants={skillBarVariants}
          className="h-full bg-gradient-to-r from-accent-purple to-accent-blue rounded-full"
        />
      </div>
      <span className="text-xs text-gray-600 mt-1">{skill.category}</span>
    </motion.div>
  );
}

function SkillIcon({ skill, index }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUp}
      custom={index}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-dark-800 border border-white/10 cursor-default"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 flex items-center justify-center">
        <span className="text-2xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
          {skill.name.charAt(0)}
        </span>
      </div>
      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
      <span className="text-xs text-gray-600">{skill.category}</span>
    </motion.div>
  );
}

export default function Skills({ skills }) {
  const categories = [...new Set(skills?.map(s => s.category) || [])];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-dark-800/50">
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
            Expertise
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Skills &{' '}
            <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <h3 className="text-xl font-semibold text-white mb-8">Skill Proficiency</h3>
            <div className="space-y-2">
              {skills?.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <h3 className="text-xl font-semibold text-white mb-8">By Category</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {categories.map((category, catIndex) => (
                <motion.div
                  key={category}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  variants={fadeInUp}
                  custom={catIndex}
                  className="p-4 rounded-xl bg-dark-900 border border-white/10"
                >
                  <h4 className="text-accent-purple font-medium mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills?.filter(s => s.category === category).map(skill => (
                      <span
                        key={skill.name}
                        className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}