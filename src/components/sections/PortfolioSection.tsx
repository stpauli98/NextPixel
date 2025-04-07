import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslate } from '../../context/LanguageContext';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const PortfolioSection: React.FC = () => {
  const { t } = useTranslate();
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: t('portfolio.category.webShop'),
      image: '/images/e-commerc.png',
      description: t('portfolio.project1.description')
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: t('portfolio.category.webDesign'),
      image: '/images/corporate-website.png',
      description: t('portfolio.project2.description')
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      category: t('portfolio.category.software'),
      image: '/images/pm-app.png',
      description: t('portfolio.project3.description')
    },
    {
      id: 4,
      title: t('portfolio.project4.title'),
      category: 'seo',
      image: '/images/seo-optim.png',
      description: t('portfolio.project4.description')
    },
    {
      id: 5,
      title: t('portfolio.project5.title'),
      category: t('portfolio.category.software'),
      image: '/images/mobile-app.png',
      description: t('portfolio.project5.description')
    },
    {
      id: 6,
      title: t('portfolio.project6.title'),
      category: t('portfolio.category.webDesign'),
      image: '/images/redesign.png',
      description: t('portfolio.project6.description')
    }
  ];

  const categories = [
    t('portfolio.category.all'), 
    t('portfolio.category.webDesign'), 
    t('portfolio.category.webShop'), 
    'seo', 
    t('portfolio.category.software')
  ];
  const [activeCategory, setActiveCategory] = useState(t('portfolio.category.all'));

  const filteredProjects = activeCategory === t('portfolio.category.all') 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t('portfolio.title').includes('radovi') ? (
              <>
                {t('portfolio.title').split('radovi')[0]}
                <span className="text-nextpixel-blue">radovi</span>
                {t('portfolio.title').split('radovi')[1]}
              </>
            ) : (
              <>
                {t('portfolio.title').split(' ')[0]} <span className="text-nextpixel-blue">{t('portfolio.title').split(' ').slice(1).join(' ')}</span>
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
            className="text-lg text-nextpixel-gray max-w-3xl mx-auto"
          >
            {t('portfolio.subtitle')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 mx-2 mb-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-nextpixel-blue text-white'
                  : 'bg-gray-100 text-nextpixel-gray hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg h-full flex flex-col"
            >
              <div className="w-full h-64 overflow-hidden bg-white flex items-center justify-center p-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`${project.title === 'E-commerce Platform' ? 'h-64 w-auto object-contain' : 'w-full h-full object-cover'} transition-transform duration-500 group-hover:scale-110`}
                  style={project.title === 'E-commerce Platform' ? { objectPosition: 'center' } : {}}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://placehold.co/600x400/0A2463/FFFFFF?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-nextpixel-dark to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <span className="inline-block mt-3 text-nextpixel-turquoise text-sm font-medium">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
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
            {t('portfolio.startProject')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
