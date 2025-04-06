import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLightbulb, FaClock, FaChartLine, FaRocket, FaUsers, FaHeadset } from 'react-icons/fa';
import { Icon } from '../../utils/icons';

const WhyChooseUsSection: React.FC = () => {
  type IconType = typeof FaLightbulb;

interface Reason {
  icon: IconType;
  title: string;
  description: string;
}

const reasons: Reason[] = [
    {
      icon: FaLightbulb,
      title: 'Kreativnost',
      description: 'Donosimo svježe i inovativne ideje koje će vašu web stranicu učiniti jedinstvenom.'
    },
    {
      icon: FaRocket,
      title: 'Brza isporuka',
      description: 'Poštujemo rokove i osiguravamo brzu isporuku projekata bez kompromisa u kvaliteti.'
    },
    {
      icon: FaUsers,
      title: 'Stručni tim',
      description: 'Naš tim čine stručnjaci sa dugogodišnjim iskustvom u digitalnoj industriji.'
    },
    {
      icon: FaHeadset,
      title: 'Podrška 24/7',
      description: 'Uvijek smo dostupni za sva vaša pitanja i pružamo kontinuiranu podršku.'
    },
    {
      icon: FaClock,
      title: 'Poštovanje rokova',
      description: 'Posvećeni smo isporuci projekata na vrijeme i u skladu sa dogovorenim budžetom.'
    },
    {
      icon: FaCheckCircle,
      title: 'Kvalitet i pouzdanost',
      description: 'Naša rješenja su testirana i optimizovana za najbolje performanse i korisničko iskustvo.'
    },
    {
      icon: FaChartLine,
      title: 'Fokus na rezultate',
      description: 'Razvijamo rješenja koja donose mjerljive poslovne rezultate i povrat investicije.'
    }
  ];

  return (
    <section id="why-choose-us" className="section bg-nextpixel-dark text-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Zašto odabrati <span className="text-nextpixel-turquoise">nas</span>
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
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Naša misija je pomoći vašem biznisu da raste kroz digitalne inovacije. Evo zašto klijenti biraju NextPixel.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-nextpixel-blue bg-opacity-30 rounded-lg p-8 border border-nextpixel-blue border-opacity-20 hover:border-nextpixel-turquoise transition-colors"
            >
              <div className="text-nextpixel-turquoise mb-4">
                <Icon icon={reason.icon} size={36} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
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
          <a href="#contact" className="btn-secondary inline-block">
            Razgovarajmo o vašem projektu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
