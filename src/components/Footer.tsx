import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-6 text-center">
      <a 
        href="https://github.com/bchiang7/v4" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-text-secondary font-mono text-xs hover:text-accent transition-colors"
      >
        <p className="mb-2">Designed & Built by Limuel Portugal </p>
        <p>Inspired by Brittany Chiang</p>
      </a>
    </footer>
  );
};

export default Footer;
