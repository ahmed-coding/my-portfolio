import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolio.json';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => scrollTo('home')} className="text-xl font-bold bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
          AH
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm font-medium capitalize transition-colors ${
                activeSection === item ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <a
          href="/Ahmed_Hamzah_Resume.pdf"
          download
          className="px-4 py-2 text-sm bg-gradient-to-r from-accent-purple to-accent-blue rounded-full font-medium text-white hover:opacity-90 transition-opacity"
        >
          Download CV
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const { personal } = portfolioData;
  const [typedText, setTypedText] = useState('');
  const fullText = personal?.tagline || '';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 40%)`
      }} />

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-accent-cyan">
            Available for Work
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
          <span className="block text-white">I'm</span>
          <span className="block bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent">
            {personal?.name}
          </span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto">
          {personal?.title}
        </motion.p>

        <motion.p variants={fadeInUp} className="text-lg text-gray-500 mb-8 h-8">
          <span>{typedText}</span>
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full font-semibold text-white">
            View My Work
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5">
            Get In Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

function About() {
  const { personal, summary, languages } = portfolioData;

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
          <span className="text-accent-purple font-medium tracking-wider uppercase text-sm">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">{personal?.bio}</p>
            <p className="text-gray-400 leading-relaxed">{summary?.highlight}</p>

            <div className="flex flex-wrap gap-2 pt-4">
              {languages?.map((lang, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">
                  {lang.name} - {lang.level}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 gap-4">
            {summary?.achievements?.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-accent-purple font-medium">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
          <span className="text-accent-purple font-medium tracking-wider uppercase text-sm">Career</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Work <span className="text-accent-blue">Experience</span></h2>
        </motion.div>

        <div className="space-y-8">
          {experience?.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-dark-800 border border-white/10 hover:border-accent-purple/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-accent-purple mt-1">{exp.company} | {exp.location}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{exp.duration}</span>
              </div>
              <p className="text-gray-400 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.highlights?.map((highlight, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-300">
                    <span className="w-2 h-2 mt-2 rounded-full bg-accent-blue flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
          <span className="text-accent-purple font-medium tracking-wider uppercase text-sm">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Featured <span className="text-accent-cyan">Projects</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project, i) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.3)" }}
              className="p-6 rounded-2xl bg-dark-800 border border-white/10 cursor-pointer transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech?.slice(0, 4).map((t, j) => (
                  <span key={j} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <a href={project.link} className="text-sm text-accent-purple hover:text-accent-blue">Live Demo</a>
                <a href={project.github} className="text-sm text-gray-400 hover:text-white">Code</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const { skills } = portfolioData;
  const categories = Object.keys(skills || {});

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
          <span className="text-accent-purple font-medium tracking-wider uppercase text-sm">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Skills & <span className="text-accent-purple">Technologies</span></h2>
        </motion.div>

        {categories?.map((category, catIndex) => (
          <motion.div key={category} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-12">
            <h3 className="text-xl font-semibold text-accent-blue mb-6 capitalize">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills[category]?.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center cursor-default"
                >
                  <p className="font-medium text-white">{skill.name}</p>
                  <div className="mt-2 h-1 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-accent-purple to-accent-blue rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const { personal, contact } = portfolioData;

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-dark-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <span className="text-accent-purple font-medium tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">Let's <span className="text-accent-cyan">Connect</span></h2>
          <p className="text-gray-400 mb-8">Have a project in mind or want to collaborate? Feel free to reach out!</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href={`mailto:${personal?.email}`} className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full font-semibold text-white">
              {personal?.email}
            </a>
            <a href={`tel:${personal?.phone}`} className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5">
              {personal?.phone}
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href={`https://${personal?.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href={`https://${personal?.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href={`mailto:${personal?.email}`} className="text-gray-400 hover:text-white transition-colors">Email</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="py-8 px-6 bg-dark-800/50 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-white">{personal?.name}</p>
          <p className="text-gray-500 text-sm">{personal?.title}</p>
        </div>
        <p className="text-gray-500 text-sm">© 2026 {personal?.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function Design1() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent-purple border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}