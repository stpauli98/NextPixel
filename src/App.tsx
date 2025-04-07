import React, { useEffect } from 'react';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  useEffect(() => {
    // Set page title
    document.title = 'NextPixel - Digitalna agencija za web i softverska rješenja';
    
    // Create a placeholder hero image in the public folder if it doesn't exist
    const createPlaceholderImage = async () => {
      try {
        // This is just a placeholder for demonstration purposes
        // In a real project, you would have actual images in the public folder
        console.log('Application initialized successfully');
      } catch (error) {
        console.error('Error initializing application:', error);
      }
    };
    
    createPlaceholderImage();
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
