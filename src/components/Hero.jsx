import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, buttonHover } from '../utils/animations';

export default function Hero({ personal }) {
  const [typedText, setTypedText] = useState('');
  const fullText = personal?.tagline || 'Building robust web applications';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 40%)`,
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-accent-purple">
            Available for Work
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="block text-white">Hello, I'm</span>
          <span className="block bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent">
            {personal?.name || 'Developer'}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl text-gray-400 mb-4 font-medium"
        >
          {personal?.title || 'Full Stack Developer'}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-500 mb-10 h-8"
        >
          <span className="typed-text">{typedText}</span>
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={handleScrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full font-semibold text-white shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/50 transition-shadow"
          >
            View My Work
          </motion.button>
          <motion.a
            variants={buttonHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            href="#contact"
            className="px-8 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 transition-colors"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}