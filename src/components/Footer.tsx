
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePolicyClick = (policy: string) => {
    console.log(`Opening ${policy} policy`);
    // Add policy page navigation logic here
    alert(`${policy} page will be available soon`);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-beauty-500 to-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-playfair font-bold text-xl text-white">Bella Beauty</span>
            </button>
            <p className="text-gray-400 mb-4">
              Your journey to beauty starts here. 
              Professional beauty services in a cozy atmosphere.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-beauty-500 transition-colors cursor-pointer">
                <span className="text-sm">IG</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-beauty-500 transition-colors cursor-pointer">
                <span className="text-sm">FB</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-beauty-500 transition-colors cursor-pointer">
                <span className="text-sm">TW</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Manicure & Pedicure
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Cosmetology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Massage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Hairstyling
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Hair Coloring
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                >
                  Makeup
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePolicyClick('Privacy Policy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePolicyClick('Terms of Service')}
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>123 Beauty Street, New York, NY 10001</p>
              <button 
                onClick={() => window.open('tel:+15551234567')}
                className="hover:text-white transition-colors block"
              >
                +1 (555) 123-4567
              </button>
              <button 
                onClick={() => window.open('mailto:info@bellabeauty.com')}
                className="hover:text-white transition-colors block"
              >
                info@bellabeauty.com
              </button>
              <p>Mon-Sun: 9:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; {currentYear} Bella Beauty. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button 
              onClick={() => handlePolicyClick('Privacy Policy')}
              className="hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handlePolicyClick('Terms of Service')}
              className="hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => handlePolicyClick('Cookie Policy')}
              className="hover:text-white transition-colors text-sm"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
