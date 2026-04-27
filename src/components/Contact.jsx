import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportOptions } from '../utils/animations';

function AnimatedInput({ label, type = "text", name, value, onChange, placeholder, required = false, isTextarea = false }) {
  const [focused, setFocused] = useState(false);

  const inputProps = {
    name,
    value,
    onChange,
    placeholder,
    required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className: `w-full bg-dark-800 border rounded-xl px-4 py-3 text-white placeholder-gray-600 outline-none transition-all duration-300 ${
      focused 
        ? 'border-accent-purple shadow-lg shadow-accent-purple/20' 
        : 'border-white/10 focus:border-white/20'
    }`
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUp}
      className="relative"
    >
      <motion.label
        animate={{
          y: focused || value ? -24 : 0,
          scale: focused || value ? 0.85 : 1,
          color: focused ? '#8b5cf6' : '#9ca3af'
        }}
        className="absolute left-4 top-3 text-sm pointer-events-none origin-left"
      >
        {label}
      </motion.label>
      {isTextarea ? (
        <textarea
          {...inputProps}
          rows={5}
          className={`${inputProps.className} pt-4 resize-none`}
        />
      ) : (
        <input
          type={type}
          {...inputProps}
          className={`${inputProps.className} pt-4`}
        />
      )}
    </motion.div>
  );
}

export default function Contact({ contact, personal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
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
            Get In Touch
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            Let's{' '}
            <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={staggerContainer}
          className="grid md:grid-cols-5 gap-8"
        >
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Let's talk</h3>
              <p className="text-gray-400">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
            
            <div className="space-y-4">
              <motion.a
                href={`mailto:${personal?.email}`}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-dark-800 border border-white/10 hover:border-accent-purple/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white">{personal?.email}</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-dark-800 border border-white/10"
              >
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white">{personal?.location || 'Remote'}</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="md:col-span-3 space-y-4"
          >
            <AnimatedInput
              label="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
            
            <AnimatedInput
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
            
            <AnimatedInput
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              isTextarea
            />

            <motion.button
              type="submit"
              disabled={isSubmitting || submitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                submitted
                  ? 'bg-green-500 text-white'
                  : 'bg-gradient-to-r from-accent-purple to-accent-blue text-white hover:shadow-lg hover:shadow-accent-purple/50'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : submitted ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message Sent!
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}