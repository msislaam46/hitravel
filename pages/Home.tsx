import React from 'react';
import { PageType } from '../types';
import { ArrowRight, Star, Shield, Heart, Globe, GraduationCap, FileCheck } from 'lucide-react';
import { PackageCard } from '../components/PackageCard';
import { ServiceCard } from '../components/ServiceCard';

interface HomeProps {
  navigate: (page: PageType) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate }) => {
  
  const featuredPackages = [
    {
      id: 'h1',
      title: 'Luxury Umrah Retreat',
      type: 'umrah' as const,
      duration: '10 Days',
      price: '£1,850',
      dates: 'Oct 2024 - Mar 2025',
      imageUrl: '/images/luxury_umra.webp', // Architecture/Sky
      isPremium: true,
      features: ['5-Star Hotel Steps from Haram', 'Private Transport', 'Guided Ziyarat Tours', 'Visa Processing Included']
    },
    {
      id: 'w1',
      title: 'Sisters Sanctuary Tour',
      type: 'women-only' as const,
      duration: '14 Days',
      price: '£2,200',
      dates: 'Feb 2025',
      imageUrl: '/images/df.jpg', // Serene water/nature
      features: ['Female-Only Guides', 'Luxury Accommodation', 'Wellness & Spiritual Workshops', 'Safe Group Environment']
    },
    {
      id: 'h2',
      title: 'Hajj 2026 Early Bird',
      type: 'hajj' as const,
      duration: '21 Days',
      price: '£9,500',
      dates: 'May - Jun 2026',
      imageUrl: '/images/hajj.jpg', // Snowy mountains/white aesthetic
      features: ['Direct Flights', 'VIP Mina Tents', 'Full Board Meals', 'Scholar Accompaniment']
    }
  ];

  const secondaryServices = [
    {
      id: 's1',
      title: 'Visa Support',
      description: 'Expert immigration assistance for Umrah, Tourist, and Student visas. We handle the paperwork so you can travel with ease.',
      icon: <FileCheck className="h-7 w-7" />
    },
    {
      id: 's2',
      title: 'Student Services',
      description: 'Comprehensive support for international students, including university applications, accommodation, and travel arrangements.',
      icon: <GraduationCap className="h-7 w-7" />
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/dubai.jpg" // Forest/Calm scenery
            alt="Spiritual Journey" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white text-sm tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
            Experience the Divine
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Journeys of Faith, <br/>
            <span className="text-gold-400 italic font-light">Defined by Luxury</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Specializing in premium Hajj & Umrah packages and exclusive Women-Only tours designed for comfort, spirituality, and sisterhood.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate(PageType.PACKAGES)}
              className="w-full sm:w-auto px-8 py-4 bg-gold-500 text-white rounded-full font-semibold hover:bg-gold-600 transition-all shadow-lg hover:shadow-gold-500/30 text-lg"
            >
              Explore Packages
            </button>
            <button 
              onClick={() => navigate(PageType.CONTACT)}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all text-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Featured Packages (Priority 1 & 2) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">Curated Spiritual Journeys</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Choose from our most popular packages, meticulously planned to ensure your focus remains entirely on your worship and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map(pkg => (
              <PackageCard key={pkg.id} data={pkg} onBook={() => navigate(PageType.CONTACT)} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate(PageType.PACKAGES)}
              className="inline-flex items-center space-x-2 text-primary-900 font-semibold hover:text-gold-600 transition-colors border-b border-primary-900 hover:border-gold-600 pb-1"
            >
              <span>View All Packages</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Women Focus */}
      <section className="py-24 bg-primary-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-gold-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/images/womentour.jpg" // Group of people/abstract
                alt="Women Group Tour" 
                className="rounded-t-[10rem] rounded-b-3xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center space-x-2 mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-gold-500 fill-current" />)}
                </div>
                <p className="text-sm font-serif italic text-stone-600">"The women-only tour was a life-changing experience. Safe, luxurious, and spiritually uplifting."</p>
                <p className="text-xs font-bold text-primary-900 mt-2">- Sarah A.</p>
              </div>
            </div>

            <div>
              <span className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2 block">Our Specialization</span>
              <h2 className="font-serif text-4xl font-bold text-primary-900 mb-6">Women-Only Group Tours</h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                We understand the unique needs of female travelers. Our women-only groups provide a safe, supportive, and luxurious environment to explore the world and perform Umrah. Build lasting friendships and deepen your faith in the company of like-minded sisters.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary-600">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Safety & Comfort First</h4>
                    <p className="text-sm text-stone-500">Secure accommodations and private transport exclusively for women.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary-600">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Sisterhood & Support</h4>
                    <p className="text-sm text-stone-500">Travel with a supportive community and experienced female guides.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary-600">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">Cultural Immersion</h4>
                    <p className="text-sm text-stone-500">Curated experiences that respect privacy while offering deep exploration.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <button 
                  onClick={() => navigate(PageType.PACKAGES)}
                  className="bg-primary-900 text-white px-8 py-3 rounded-full hover:bg-primary-800 transition-colors"
                >
                  View Women's Packages
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Services (Priority 3 & 4) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-bold text-stone-800 mb-4">Beyond Travel</h2>
              <p className="text-stone-500">
                Hi Travels Ltd. is more than just a tour operator. We provide comprehensive support services to ensure every aspect of your international journey is seamless.
              </p>
            </div>
            <button 
              onClick={() => navigate(PageType.SERVICES)}
              className="hidden md:block text-primary-900 font-semibold hover:underline mt-4 md:mt-0"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryServices.map(service => (
              <ServiceCard key={service.id} data={service} />
            ))}
          </div>
          
          <div className="md:hidden mt-8 text-center">
             <button 
              onClick={() => navigate(PageType.SERVICES)}
              className="text-primary-900 font-semibold hover:underline"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="https://picsum.photos/id/1029/1920/800" alt="pattern" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold mb-6">Ready to Embark on Your Journey?</h2>
          <p className="text-stone-300 mb-8 text-lg">
            Whether it's the sacred pilgrimage of a lifetime or a new academic adventure, we are here to guide you every step of the way.
          </p>
          <button 
            onClick={() => navigate(PageType.CONTACT)}
            className="px-10 py-4 bg-white text-stone-900 rounded-full font-bold hover:bg-gold-500 hover:text-white transition-all duration-300"
          >
            Start Planning Today
          </button>
        </div>
      </section>
    </div>
  );
};