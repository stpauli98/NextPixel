import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Icon } from '../../utils/icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-nextpixel-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Next<span className="text-nextpixel-turquoise">Pixel</span>
            </h3>
            <p className="mb-4 text-gray-300">
              Razvijamo digitalna rješenja koja pokreću vaš biznis. Naš tim stručnjaka posvećen je stvaranju inovativnih web rješenja koja donose rezultate.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">
                <Icon icon={FaFacebook} size={20} aria-hidden="true" />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">
                <Icon icon={FaTwitter} size={20} aria-hidden="true" />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">
                <Icon icon={FaInstagram} size={20} aria-hidden="true" />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">
                <Icon icon={FaLinkedin} size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">Početna</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">O nama</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">Usluge</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Naše usluge</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">Web dizajn</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">Web development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">E-commerce rješenja</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">SEO optimizacija</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-nextpixel-turquoise transition-colors">Održavanje web stranica</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Kontakt informacije</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon icon={FaMapMarkerAlt} className="mt-1 mr-3 text-nextpixel-turquoise" aria-hidden="true" />
                <span className="text-gray-300">Adresa 123, 71000 Sarajevo, Bosna i Hercegovina</span>
              </li>
              <li className="flex items-center">
                <Icon icon={FaPhone} className="mr-3 text-nextpixel-turquoise" aria-hidden="true" />
                <span className="text-gray-300">+387 33 123 456</span>
              </li>
              <li className="flex items-center">
                <Icon icon={FaEnvelope} className="mr-3 text-nextpixel-turquoise" aria-hidden="true" />
                <span className="text-gray-300">info@nextpixel.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {currentYear} NextPixel. Sva prava zadržana.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-400 hover:text-nextpixel-turquoise transition-colors mx-2">Politika privatnosti</a>
              <a href="/terms" className="text-gray-400 hover:text-nextpixel-turquoise transition-colors mx-2">Uslovi korištenja</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
