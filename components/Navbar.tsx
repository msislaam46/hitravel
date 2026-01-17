import React, { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  navigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, navigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: PageType.HOME },
    { label: 'Packages', value: PageType.PACKAGES },
    { label: 'Other Services', value: PageType.SERVICES },
    { label: 'Contact Us', value: PageType.CONTACT },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => navigate(PageType.HOME)}
            className="flex items-center space-x-2 group"
          >
            <div className="bg-primary-900 text-white p-2 rounded-full group-hover:bg-primary-800 transition-colors">
              <Plane className="h-6 w-6" />
            </div>
            <div className="flex flex-col items-start">
              <span className="font-serif text-2xl font-bold text-primary-900 leading-none">Hi Travels</span>
              <span className="text-xs text-gold-600 uppercase tracking-widest font-medium">Luxury Journeys</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => navigate(item.value)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.value
                    ? 'text-primary-900 font-bold border-b-2 border-primary-900'
                    : 'text-stone-600 hover:text-primary-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate(PageType.PACKAGES)}
              className="bg-primary-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-800 transition-all shadow-md hover:shadow-lg"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-600 hover:text-primary-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  navigate(item.value);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === item.value
                    ? 'bg-primary-50 text-primary-900'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-primary-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};