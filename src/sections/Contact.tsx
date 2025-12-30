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
          
          <p className="text-text-secondary text-sm mb-12 italic opacity-75">
            💡 The button below opens your email client with a professional template. Feel free to customize or replace the message with your own.
          </p>
          
          <button
            onClick={() => {
              const email = "limuelportugal@gmail.com";
              const subject = "Business Inquiry - Portfolio Review";
              const body = "Dear Limuel,\n\nI hope this message finds you well. I recently reviewed your portfolio and was impressed by your work and technical expertise.\n\nI would like to discuss potential collaboration opportunities or learn more about your services. Please let me know when you might be available for a brief conversation.\n\nThank you for your time, and I look forward to hearing from you.\n\nBest regards";
              
              // Try Gmail web compose first (more reliable)
              const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              
              // Open Gmail in new tab
              window.open(gmailUrl, '_blank');
              
              // Fallback: also try mailto for users with email clients
              setTimeout(() => {
                const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoLink;
              }, 100);
            }}
            className="inline-block px-8 py-4 border border-accent text-accent font-mono rounded hover:bg-accent/10 transition-colors duration-300 cursor-pointer"
          >
            Say Hello
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
