export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const cardHover = {
  rest: { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)" },
  hover: { 
    scale: 1.02, 
    boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.3)",
    transition: { duration: 0.3 }
  }
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 }
};

export const viewportOptions = {
  once: true,
  margin: "-50px"
};

export const skillBarVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1, ease: "easeOut", delay: 0.2 }
  })
};