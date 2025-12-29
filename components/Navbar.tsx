import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
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
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'AI Consultant', href: '#ai-consultant' },
    { name: 'Access', href: '#access' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className={`font-serif text-2xl tracking-wider ${scrolled ? 'text-gray-800' : 'text-gray-800 md:text-white'}`}>
                Lumière
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest hover:text-primary transition-colors ${scrolled ? 'text-gray-600' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking"
              className="bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-accent transition-colors shadow-md"
            >
              Booking
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-800' : 'text-gray-800 md:text-white'} hover:text-primary focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-full left-0 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 text-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-primary text-white px-3 py-4 rounded-md text-base font-medium mt-4"
            >
              Booking
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
