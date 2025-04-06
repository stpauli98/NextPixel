import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUsers, FaRocket, FaAward } from 'react-icons/fa';
import { Icon } from '../../utils/icons';


const AboutSection: React.FC = () => {
  const features = [
    {
      icon: FaLaptopCode,
      title: 'Stručni tim',
      description: 'Naš tim stručnjaka ima višegodišnje iskustvo u razvoju web i softverskih rješenja.'
    },
    {
      icon: FaUsers,
      title: 'Korisnički fokus',
      description: 'Svaki projekat prilagođavamo specifičnim potrebama klijenata i njihovih korisnika.'
    },
    {
      icon: FaRocket,
      title: 'Brza isporuka',
      description: 'Poštujemo rokove i osiguravamo brzu implementaciju projekata bez kompromisa u kvaliteti.'
    },
    {
      icon: FaAward,
      title: 'Kvalitet',
      description: 'Koristimo najnovije tehnologije i najbolje prakse za razvoj visokokvalitetnih rješenja.'
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ko smo <span className="text-nextpixel-blue">mi</span>
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
            NextPixel je digitalna agencija koja se bavi izradom web stranica, web shopova, 
            SEO optimizacijom, održavanjem web sajtova, kao i razvojem softverskih rješenja po zahtjevu klijenata.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-nextpixel-turquoise rounded-lg opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-nextpixel-blue rounded-lg opacity-20"></div>
              <img 
                src="/about-image.jpg" 
                alt="NextPixel Team" 
                className="relative z-10 rounded-lg shadow-xl w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://placehold.co/600x400/0A2463/FFFFFF?text=NextPixel+Team";
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Digitalna agencija sa strašću za inovacije</h3>
            <p className="text-nextpixel-gray mb-6">
              Od 2015. godine posvećeni smo stvaranju digitalnih rješenja koja pomažu našim klijentima da ostvare svoje poslovne ciljeve. 
              Naš pristup kombinuje tehničku stručnost, kreativnost i duboko razumijevanje poslovnih potreba naših klijenata.
            </p>
            <p className="text-nextpixel-gray mb-8">
              Vjerujemo da uspješna digitalna rješenja moraju biti ne samo tehnički izvrsna, već i prilagođena korisnicima, 
              estetski privlačna i optimizovana za postizanje poslovnih rezultata.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mr-4 text-nextpixel-blue">
                    <Icon icon={feature.icon} size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-nextpixel-gray">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
