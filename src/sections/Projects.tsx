import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Philigox.site",
    description: "A responsive business website for Phillogix Systems Inc., showcasing their POS solutions, core services, mission & vision, and nationwide support presence. The site highlights key offerings and company information in a clear and professional layout.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind"],
    link: "https://phillogix.site",
    github: "#",
    images: ["/images/Phillogix.png", "/images/my_pic.jpg"] // Changed to array
  },
  {
    title: "Bulletin.board.site",
    description: "A Laravel + React bulletin board app for company communications. Authorized users can manage, approve, and disapprove announcements, while subscribers receive notifications for events, holidays, and memos.",
    tags: ["Laravel", "PHP", "MySQL", "Tailwind", "React", "TypeScript", "Node.js"],
    link: "https://bulletin.ideaserv.site",
    github: "https://github.com/limportugal/bulletin_board",
    images: ["/images/my_pic.jpg"] // Changed to array
  }
];

// Slideshow component for multiple images
const ProjectSlideshow: React.FC<{ images: string[], title: string, link: string }> = ({ images, title, link }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnyLoaded, setHasAnyLoaded] = useState(false);

  // Auto-advance slideshow every 3 seconds
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  const handleImageLoad = () => {
    setHasAnyLoaded(true);
  };

  const handleImageError = () => {
    // Individual image errors don't affect hasAnyLoaded state
    // Only set to false if no images have loaded yet
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 1) {
    // Single image - no slideshow
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative rounded overflow-hidden group">
        <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <div className="w-full aspect-video bg-tertiary flex items-center justify-center border border-tertiary rounded overflow-hidden relative">
          <img
            src={images[0]}
            alt={`${title} screenshot`}
            className="object-cover w-full h-full"
            onLoad={() => handleImageLoad()}
            onError={() => handleImageError()}
          />
          {/* Fallback content - only show if image hasn't loaded */}
          {!hasAnyLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-text-secondary font-mono text-sm z-5">
              Project Screenshot
            </div>
          )}
        </div>
      </a>
    );
  }

  // Multiple images - slideshow
  return (
    <div className="relative w-full h-full rounded overflow-hidden group">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <div className="w-full aspect-video bg-tertiary flex items-center justify-center border border-tertiary rounded overflow-hidden relative">
          {/* Render all images with absolute positioning for smooth fade transitions */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad()}
              onError={() => handleImageError()}
            />
          ))}
          {/* Fallback content - only show if no images have loaded */}
          {!hasAnyLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-text-secondary font-mono text-sm z-5">
              Project Screenshots
            </div>
          )}
        </div>
      </a>
      
      {/* Navigation arrows */}
      <button
        onClick={(e) => {
          e.preventDefault();
          goToPrevious();
        }}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronLeft size={16} />
      </button>
      
      <button
        onClick={(e) => {
          e.preventDefault();
          goToNext();
        }}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronRight size={16} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex ? 'bg-accent scale-110' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <div 
          className="h-full bg-accent transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentIndex + 1) / images.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

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
                <ProjectSlideshow images={project.images} title={project.title} link={project.link} />
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

                <ul className={`flex flex-wrap gap-2 text-text-secondary font-mono text-sm mb-8 ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className={`flex gap-4 ${index % 2 === 1 ? 'justify-start' : 'justify-end'}`}>
                  {/* <a href={project.github} className="text-text-primary hover:text-accent transition-colors">
                    <Github size={20} />
                  </a> */}
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
