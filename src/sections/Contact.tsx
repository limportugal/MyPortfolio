import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-24 bg-primary text-center">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-mono mb-4">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Get In Touch</h2>
          <p className="text-text-secondary text-lg mb-12">
             I’m always open to new opportunities. Whether you have a question or just want to say hello, feel free to reach out—I’ll do my best to get back to you.
          </p>
          
          <a 
            href="limuelportugal@gmail.com" 
            className="inline-block px-8 py-4 border border-accent text-accent font-mono rounded hover:bg-accent/10 transition-colors duration-300"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
