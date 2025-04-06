import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Icon } from '../../utils/icons';
import { motion } from 'framer-motion';
import LanguageSelector from '../LanguageSelector';



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Početna', href: '#home' },
    { name: 'O nama', href: '#about' },
    { name: 'Usluge', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
        <span className="text-2xl font-heading font-bold text-nextpixel-blue">
            Next<span className="text-nextpixel-turquoise">Pixel</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-nextpixel-dark hover:text-nextpixel-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary">
            Kontaktirajte nas
          </a>
          <LanguageSelector />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-nextpixel-dark focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <Icon icon={FaTimes} size={24} aria-hidden="true" /> : <Icon icon={FaBars} size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute w-full"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-nextpixel-dark hover:text-nextpixel-blue transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Kontaktirajte nas
            </a>
            <div className="py-2">
              <LanguageSelector />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
