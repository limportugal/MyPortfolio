import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "PHP", "Laravel", "React", "TypeScript", 
  "MySQL", "JavaScript", "HTML", "CSS", 
  "Tailwind CSS", "Git", "GitHub", "VS Code", "XAMPP"
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark-lighter relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolset allowing me to build robust and scalable solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-6 py-3 bg-dark border border-white/5 rounded-xl hover:border-primary/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all cursor-default"
            >
              <span className="text-gray-300 font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
