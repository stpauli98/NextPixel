import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const changeLanguage = (lng: 'sr' | 'en' | 'de') => {
    setLanguage(lng);
  };

  return (
    <div className="language-selector flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('sr')}
        className={`px-2 py-1 text-sm rounded ${
          language === 'sr' ? 'bg-nextpixel-blue text-white' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        Srpski
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-sm rounded ${
          language === 'en' ? 'bg-nextpixel-blue text-white' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('de')}
        className={`px-2 py-1 text-sm rounded ${
          language === 'de' ? 'bg-nextpixel-blue text-white' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        Deutsch
      </button>
    </div>
  );
};

export default LanguageSelector;
