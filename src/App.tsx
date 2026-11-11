import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesDirectory } from './components/ServicesDirectory';
import { OralHealthSection } from './components/OralHealthSection';
import { EducationSection } from './components/EducationSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OfflineIndicator } from './components/OfflineIndicator';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'servicios', 'informacion', 'galeria', 'educacion', 'ubicacion', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* Top Sticky Technological Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 9 Services Visual Directory (Horizontal Cards + Modal) */}
        <ServicesDirectory
          onNavigateToContact={() => handleNavigate('contacto')}
          onNavigateToLocation={() => handleNavigate('ubicacion')}
        />

        {/* Educational Health Info: "Conoce más sobre tu salud bucal" */}
        <OralHealthSection />

        {/* Independent Photographic Gallery */}
        <GallerySection />

        {/* Education & Academic Commitment: "Educación y salud bucal" */}
        <EducationSection />

        {/* Location & Interactive Google Maps: "Visítanos en UABC Mexicali" */}
        <LocationSection />

        {/* Contact Directory: Large Cards & Details */}
        <ContactSection onNavigateToLocation={() => handleNavigate('ubicacion')} />
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* PWA Offline Connectivity Indicator */}
      <OfflineIndicator />
    </div>
  );
}
