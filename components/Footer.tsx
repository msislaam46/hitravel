import React from 'react';
import { PageType } from '../types';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  navigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white">Hi Travels Ltd.</h3>
            <p className="text-primary-200 text-sm leading-relaxed max-w-xs">
              Providing spiritual journeys with dignity, luxury, and peace of mind. Specialists in Hajj, Umrah, and exclusive Women-Only tours.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-primary-200 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-primary-200 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => navigate(PageType.HOME)} className="text-primary-100 hover:text-white hover:underline transition-all text-sm">Home</button>
              </li>
              <li>
                <button onClick={() => navigate(PageType.PACKAGES)} className="text-primary-100 hover:text-white hover:underline transition-all text-sm">Hajj & Umrah Packages</button>
              </li>
              <li>
                <button onClick={() => navigate(PageType.PACKAGES)} className="text-primary-100 hover:text-white hover:underline transition-all text-sm">Women's Group Tours</button>
              </li>
              <li>
                <button onClick={() => navigate(PageType.SERVICES)} className="text-primary-100 hover:text-white hover:underline transition-all text-sm">Visa & Student Services</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-primary-100 text-sm">123 Pilgrim Way, Central District, London, UK</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-500 shrink-0" />
                <span className="text-primary-100 text-sm">+44 20 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-500 shrink-0" />
                <span className="text-primary-100 text-sm">info@hitravels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 text-center">
          <p className="text-primary-300 text-xs">
            © {new Date().getFullYear()} Hi Travels Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};