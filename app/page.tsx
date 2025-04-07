'use client'

import React from 'react'

// Layout Components
import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'

// Section Components
import HeroSection from '../src/components/sections/HeroSection'
import AboutSection from '../src/components/sections/AboutSection'
import ServicesSection from '../src/components/sections/ServicesSection'
import PortfolioSection from '../src/components/sections/PortfolioSection'
import WhyChooseUsSection from '../src/components/sections/WhyChooseUsSection'
import ContactSection from '../src/components/sections/ContactSection'

export default function Home() {
  React.useEffect(() => {
    // Set page title
    document.title = 'NextPixel - Digitalna agencija za web i softverska rješenja'
    
    // Create a placeholder hero image in the public folder if it doesn't exist
    const createPlaceholderImage = async () => {
      try {
        // This is just a placeholder for demonstration purposes
        // In a real project, you would have actual images in the public folder
        console.log('Application initialized successfully')
      } catch (error) {
        console.error('Error initializing application:', error)
      }
    }
    
    createPlaceholderImage()
  }, [])
  
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
  )
}
