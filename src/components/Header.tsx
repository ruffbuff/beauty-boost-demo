
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-beauty-100">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-beauty-500 to-rose-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-playfair font-bold text-xl gradient-text">Bella Beauty</span>
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-beauty-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-beauty-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-beauty-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-beauty-600 transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-beauty-600 transition-colors">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-beauty-500 to-rose-500 hover:from-beauty-600 hover:to-rose-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-beauty-100 bg-white/95 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-left text-gray-700 hover:text-beauty-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-beauty-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-beauty-600 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left text-gray-700 hover:text-beauty-600 transition-colors">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-beauty-600 transition-colors">
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-beauty-500 to-rose-500 hover:from-beauty-600 hover:to-rose-600 text-white px-6 py-2 rounded-full w-fit"
              >
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
