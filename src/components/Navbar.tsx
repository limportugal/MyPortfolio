import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-accent font-mono text-2xl font-bold border-2 border-accent p-1 rounded hover:bg-accent/10 transition-colors">
          DevByLim
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ol className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="font-mono text-sm text-text-primary hover:text-accent transition-colors">
                  {/* <span className="text-accent mr-1">0{index + 1}.</span> */}
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a href="/resume.pdf" className="px-4 py-2 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/10 transition-colors">
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-accent focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-y-0 right-0 w-2/3 bg-secondary shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-mono text-lg text-text-primary hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-accent block text-center text-sm mb-1">0{index + 1}.</span>
                {link.name}
              </a>
            ))}
            <a href="/resume.pdf" className="px-8 py-3 border border-accent text-accent font-mono rounded hover:bg-accent/10">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
