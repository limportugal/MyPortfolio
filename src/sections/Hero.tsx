import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-24 bg-primary">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-mono mb-5 ml-1">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-4 tracking-tight">
            Limuel Portugal.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-text-secondary mb-8 tracking-tight">
            I build things for the web.
          </h2>
          <p className="text-text-secondary max-w-xl text-lg mb-12 leading-relaxed">
            Hi, I’m Limuel Portugal. I build web applications and internal tools using Laravel and React
          </p>
          <a 
            href="#projects" 
            className="inline-block px-8 py-4 border border-accent text-accent font-mono rounded hover:bg-accent/10 transition-colors duration-300"
          >
            Check out my work!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
