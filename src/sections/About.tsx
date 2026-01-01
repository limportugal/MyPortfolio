import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "PHP", "Laravel", "React", "TypeScript", 
  "MySQL", "JavaScript", "HTML", "CSS", 
  "Tailwind CSS", "Git", "GitHub", "VS Code", "XAMPP"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-24 bg-primary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mr-4">
              <span className="text-accent font-mono text-xl mr-2"></span>
              About Me
            </h2>
            <div className="h-px bg-tertiary flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 text-text-secondary space-y-4">
              <p>
                Hello! I’m Limuel Portugal, a junior software engineer working on company websites and internal platforms, 
                including a digital bulletin board system. I focus on writing clean, maintainable code and delivering practical, user-friendly solutions.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>

              <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="text-accent mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative group">
              <div className="relative z-10">
                <div className="w-full max-w-[300px] aspect-square bg-accent/20 rounded hover:bg-transparent transition-colors duration-300 cursor-pointer">
                  {/* Placeholder for profile image */}
                  {/* <div className="w-full h-full border-2 border-accent rounded flex items-center justify-center text-accent/50">
                     <img 
                        src="/images/2v2_me.png"
                        alt="Me"
                        className="w-full rounded"
                        style={{ 
                          backgroundColor: '#0d1117',
                          imageRendering: 'crisp-edges' as const
                        }}
                    />
                  </div> */}
                </div>
              </div>
              <div className="absolute top-5 left-5 w-full max-w-[300px] aspect-square border-2 border-accent rounded z-0 group-hover:top-4 group-hover:left-4 transition-all duration-300"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
