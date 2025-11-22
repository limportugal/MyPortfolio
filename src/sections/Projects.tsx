import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Philigox.site",
    description: "A comprehensive web platform built with modern technologies. Features a robust backend and intuitive user interface. Designed to handle complex data interactions and provide a seamless user experience.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    link: "https://phillogix.site",
    github: "#",
    image: "/images/Phillogix.png"
  },
  {
    title: "Bulletin.board.site",
    description: "An interactive bulletin board application allowing users to post and manage content in real-time. Implements secure authentication and real-time updates using WebSockets.",
    tags: ["React", "TypeScript", "Node.js", "Socket.io"],
    link: "https://bulletin.ideaserv.site",
    github: "#",
    image: "/images/bulletin-board.png"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-24 bg-primary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mr-4">
            <span className="text-accent font-mono text-xl mr-2"></span>
            Some Things I've Built
          </h2>
          <div className="h-px bg-tertiary flex-grow max-w-xs"></div>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}
            >
              {/* Project Image Area */}
              <div className={`md:col-span-7 relative ${index % 2 === 1 ? 'md:col-start-6' : 'md:col-start-1'} row-start-1`}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative rounded overflow-hidden group">
                  <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <div className="w-full aspect-video bg-tertiary flex items-center justify-center border border-tertiary rounded overflow-hidden">
                     <img
                       src={project.image}
                       alt={`${project.title} screenshot`}
                       className="object-cover w-full h-full"
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.style.display = 'none';
                         const parent = target.parentElement;
                         if (parent) {
                           parent.innerHTML = '<div class="text-text-secondary font-mono text-sm">Project Screenshot</div>';
                         }
                       }}
                     />
                  </div>
                </a>
              </div>

              {/* Project Content */}
              <div className={`md:col-span-6 relative z-20 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-7 md:row-start-1'}`}>
                <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    {project.title}
                  </a>
                </h3>
                
                <div className="bg-secondary p-6 rounded shadow-xl text-text-secondary mb-6 hover:shadow-2xl transition-shadow">
                  <p>{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-4 text-text-secondary font-mono text-sm mb-8 ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className={`flex gap-4 ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                  <a href={project.github} className="text-text-primary hover:text-accent transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
