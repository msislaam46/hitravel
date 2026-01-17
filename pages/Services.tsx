import React from 'react';
import { PageType } from '../types';
import { FileCheck, GraduationCap, Plane, Globe, FileText, Building2 } from 'lucide-react';

interface ServicesProps {
  navigate: (page: PageType) => void;
}

export const Services: React.FC<ServicesProps> = ({ navigate }) => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-stone-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="https://picsum.photos/id/192/1920/600" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Support Services</h1>
          <p className="text-stone-300 max-w-2xl text-lg">
            Beyond our luxury tours, we provide essential services to facilitate your global mobility. From complex visa applications to complete student relocation support.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        
        {/* Visa Section */}
        <div className="mb-24">
          <div className="flex items-center mb-10">
            <div className="bg-primary-100 p-4 rounded-full mr-6">
              <FileCheck className="h-10 w-10 text-primary-800" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Visa & Immigration Support</h2>
              <p className="text-stone-500 mt-2">Professional assistance for all your travel documentation needs.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-stone-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Globe className="h-8 w-8 text-gold-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Tourist Visas</h3>
              <p className="text-stone-600 text-sm">
                Assistance with tourist visas for Saudi Arabia (Umrah), Turkey, UAE, UK, USA, and Schengen countries. We review your documents to minimize rejection risks.
              </p>
            </div>
            <div className="border border-stone-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <Building2 className="h-8 w-8 text-gold-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Business Visas</h3>
              <p className="text-stone-600 text-sm">
                Streamlined processing for corporate travelers. Invitation letter guidance and expedited appointments.
              </p>
            </div>
            <div className="border border-stone-200 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <FileText className="h-8 w-8 text-gold-500 mb-4" />
              <h3 className="font-bold text-xl mb-3">Document Attestation</h3>
              <p className="text-stone-600 text-sm">
                Complete service for document legalization and attestation from various embassies and foreign offices.
              </p>
            </div>
          </div>
        </div>

        {/* Student Section */}
        <div>
          <div className="flex items-center mb-10">
            <div className="bg-primary-100 p-4 rounded-full mr-6">
              <GraduationCap className="h-10 w-10 text-primary-800" />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-900">Student Services</h2>
              <p className="text-stone-500 mt-2">Your bridge to global education.</p>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm font-bold text-primary-900">01</div>
                 <div>
                   <h4 className="font-bold text-lg">University Application</h4>
                   <p className="text-stone-600 text-sm">Guidance on selecting the right course and university, and full support with the application process.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm font-bold text-primary-900">02</div>
                 <div>
                   <h4 className="font-bold text-lg">Student Visa Processing</h4>
                   <p className="text-stone-600 text-sm">Expert handling of Tier 4 (UK), F-1 (USA), and other student visa categories.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm font-bold text-primary-900">03</div>
                 <div>
                   <h4 className="font-bold text-lg">Accommodation & Flights</h4>
                   <p className="text-stone-600 text-sm">We help you find safe student housing and book affordable flights for your move.</p>
                 </div>
              </div>
            </div>
            <div className="flex-1">
               <img src="https://picsum.photos/id/20/600/400" alt="Students" className="rounded-xl shadow-xl w-full" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};