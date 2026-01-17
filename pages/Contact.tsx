import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-primary-900 mb-4">Get in Touch</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Ready to book your package or need advice on visas? Our team is here to assist you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-primary-900 text-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mt-20 -mr-20 pointer-events-none"></div>
             
             <h2 className="font-serif text-2xl font-bold mb-8">Contact Information</h2>
             
             <div className="space-y-8">
               <div className="flex items-start space-x-4">
                 <MapPin className="h-6 w-6 text-gold-500 mt-1" />
                 <div>
                   <h3 className="font-bold text-primary-100">Our Office</h3>
                   <p className="text-stone-300 mt-1 text-sm">
                     123 Pilgrim Way, Central District,<br/>
                     London, UK, SW1A 1AA
                   </p>
                 </div>
               </div>

               <div className="flex items-start space-x-4">
                 <Phone className="h-6 w-6 text-gold-500 mt-1" />
                 <div>
                   <h3 className="font-bold text-primary-100">Phone</h3>
                   <p className="text-stone-300 mt-1 text-sm">+44 20 1234 5678</p>
                   <p className="text-stone-300 text-sm text-xs mt-1">(Mon-Fri, 9am - 6pm)</p>
                 </div>
               </div>

               <div className="flex items-start space-x-4">
                 <Mail className="h-6 w-6 text-gold-500 mt-1" />
                 <div>
                   <h3 className="font-bold text-primary-100">Email</h3>
                   <p className="text-stone-300 mt-1 text-sm">info@hitravels.com</p>
                   <p className="text-stone-300 mt-1 text-sm">support@hitravels.com</p>
                 </div>
               </div>
             </div>

             <div className="mt-12 pt-12 border-t border-primary-700">
                <div className="flex items-center space-x-4">
                   <Clock className="h-5 w-5 text-gold-500" />
                   <span className="text-sm font-medium">Response time: usually within 2 hours</span>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" placeholder="jane@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Interested Service</label>
                <select className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                  <option>Umrah Package</option>
                  <option>Hajj Package</option>
                  <option>Women-Only Tour</option>
                  <option>Visa Support</option>
                  <option>Student Services</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" placeholder="Tell us about your travel plans..."></textarea>
              </div>

              <button type="button" className="w-full bg-gold-500 text-white font-bold py-4 rounded-xl hover:bg-gold-600 transition-colors shadow-lg shadow-gold-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};