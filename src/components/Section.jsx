import { motion } from 'framer-motion';
import { fadeInUp, viewportOptions } from '../utils/animations';

export default function Section({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={fadeInUp}
      className={`min-h-screen px-6 py-20 md:px-12 lg:px-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}