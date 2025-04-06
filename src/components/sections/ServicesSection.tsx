import React from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaShoppingCart, FaSearch, FaServer, FaCode, FaMobileAlt } from 'react-icons/fa';
import { Icon } from '../../utils/icons';

const ServicesSection: React.FC = () => {
  type IconType = typeof FaDesktop;

interface Service {
  icon: IconType;
  title: string;
  description: string;
}

const services: Service[] = [
    {
      icon: FaDesktop,
      title: 'Web dizajn',
      description: 'Kreiramo vizuelno atraktivne i funkcionalne web stranice koje ostavljaju snažan utisak na posjetioce.'
    },
    {
      icon: FaShoppingCart,
      title: 'E-commerce rješenja',
      description: 'Razvijamo online prodavnice koje povećavaju prodaju i pružaju izvrsno korisničko iskustvo.'
    },
    {
      icon: FaSearch,
      title: 'SEO optimizacija',
      description: 'Optimizujemo vaš sajt za pretraživače kako biste bili vidljivi potencijalnim klijentima.'
    },
    {
      icon: FaServer,
      title: 'Održavanje web stranica',
      description: 'Brinemo o vašoj web stranici, osiguravajući da je uvijek sigurna, ažurna i funkcionalna.'
    },
    {
      icon: FaCode,
      title: 'Razvoj softvera',
      description: 'Razvijamo prilagođena softverska rješenja koja automatizuju procese i povećavaju efikasnost.'
    },
    {
      icon: FaMobileAlt,
      title: 'Responzivni dizajn',
      description: 'Osiguravamo da vaša web stranica izgleda i funkcioniše savršeno na svim uređajima.'
    }
  ];

  return (
    <section id="services" className="section bg-nextpixel-light">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Naše <span className="text-nextpixel-blue">usluge</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-nextpixel-turquoise mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-nextpixel-gray max-w-3xl mx-auto"
          >
            Pružamo širok spektar digitalnih usluga kako bismo pomogli vašem biznisu da raste i napreduje u digitalnom svijetu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-nextpixel-blue mb-4">
                <Icon icon={service.icon} size={36} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-nextpixel-gray">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-block">
            Zatražite ponudu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
