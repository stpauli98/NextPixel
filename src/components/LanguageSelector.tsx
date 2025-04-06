import React, { useEffect, useState } from 'react';

const LanguageSelector: React.FC = () => {
  const [currentLang, setCurrentLang] = useState('sr');

  // Check if language is set in localStorage on component mount
  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  const changeLanguage = (lng: string) => {
    // Save the selected language to localStorage
    localStorage.setItem('selectedLanguage', lng);
    setCurrentLang(lng);
    // Force page refresh to apply translations everywhere
    window.location.reload();
  };

  return (
    <div className="language-selector flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('sr')}
        className={`px-2 py-1 text-sm rounded ${
          currentLang === 'sr' ? 'bg-nextpixel-blue text-white' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        Srpski
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-sm rounded ${
          currentLang === 'en' ? 'bg-nextpixel-blue text-white' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('de')}
        className={`px-2 py-1 text-sm rounded ${
          currentLang === 'de' ? 'bg-nextpixel-blue text-white' : 'bg-gray-200 hover:bg-gray-300'
        }`}
      >
        Deutsch
      </button>
    </div>
  );
};

export default LanguageSelector;
