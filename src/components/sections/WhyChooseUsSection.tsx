import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLightbulb, FaClock, FaChartLine, FaRocket, FaUsers, FaHeadset } from 'react-icons/fa';
import { Icon } from '../../utils/icons';
import { useTranslate } from '../../context/LanguageContext';

const WhyChooseUsSection: React.FC = () => {
  const { t } = useTranslate();
  type IconType = typeof FaLightbulb;

interface Reason {
  icon: IconType;
  title: string;
  description: string;
}

const reasons: Reason[] = [
    {
      icon: FaLightbulb,
      title: t('whyChooseUs.creativity.title'),
      description: t('whyChooseUs.creativity.description')
    },
    {
      icon: FaRocket,
      title: t('whyChooseUs.fastDelivery.title'),
      description: t('whyChooseUs.fastDelivery.description')
    },
    {
      icon: FaUsers,
      title: t('whyChooseUs.expertTeam.title'),
      description: t('whyChooseUs.expertTeam.description')
    },
    {
      icon: FaHeadset,
      title: t('whyChooseUs.support.title'),
      description: t('whyChooseUs.support.description')
    },
    {
      icon: FaClock,
      title: t('whyChooseUs.deadlines.title'),
      description: t('whyChooseUs.deadlines.description')
    },
    {
      icon: FaCheckCircle,
      title: t('whyChooseUs.quality.title'),
      description: t('whyChooseUs.quality.description')
    },
    {
      icon: FaChartLine,
      title: t('whyChooseUs.results.title'),
      description: t('whyChooseUs.results.description')
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
            {t('whyChooseUs.title').includes('nas') ? (
              <>
                {t('whyChooseUs.title').split('nas')[0]}
                <span className="text-nextpixel-turquoise">nas</span>
                {t('whyChooseUs.title').split('nas')[1]}
              </>
            ) : (
              <>
                {t('whyChooseUs.title').split(' ').slice(0, -1).join(' ')} <span className="text-nextpixel-turquoise">{t('whyChooseUs.title').split(' ').slice(-1)}</span>
              </>
            )}
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
            {t('whyChooseUs.subtitle')}
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
            {t('whyChooseUs.talkAboutProject')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
