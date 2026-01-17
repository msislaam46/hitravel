import React from 'react';
import { PageType, PackageData } from '../types';
import { PackageCard } from '../components/PackageCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface PackagesProps {
  navigate: (page: PageType) => void;
}

export const Packages: React.FC<PackagesProps> = ({ navigate }) => {
  const allPackages: PackageData[] = [
    {
      id: 'h1',
      title: 'Premium Umrah Retreat',
      type: 'umrah',
      duration: '10 Days',
      price: '£1,850',
      dates: 'Oct 2024 - Mar 2025',
      imageUrl: '/images/luxury_umra.webp',
      isPremium: true,
      features: ['5-Star Hotels', 'Private Transport', 'Ziyarat Tours', 'Visa Included', 'Buffet Breakfast']
    },
    {
      id: 'h2',
      title: 'Economic Umrah Saver',
      type: 'umrah',
      duration: '12 Days',
      price: '£1,200',
      dates: 'Year Round',
      imageUrl: '/images/anjum.avif',
      features: ['4-Star Hotels', 'Shared Transport', 'Visa Assistance', 'Group Guide']
    },
    {
      id: 'w1',
      title: 'Sisters Sanctuary Tour',
      type: 'women-only',
      duration: '14 Days',
      price: '£2,200',
      dates: 'Feb 2025',
      imageUrl: '/images/df.jpg',
      features: ['Female-Only Guides', 'Luxury Accommodation', 'Wellness Workshops', 'Shopping Excursions', 'Safety First']
    },
    {
      id: 'w2',
      title: 'Women\'s Historical Turkey',
      type: 'women-only',
      duration: '8 Days',
      price: '£1,450',
      dates: 'Apr 2025',
      imageUrl: 'https://picsum.photos/id/1040/800/600', // Castle/Architecture
      features: ['Istanbul & Cappadocia', 'Private Coach', 'Balloon Ride Option', 'Cooking Class']
    },
    {
      id: 'hj1',
      title: 'Hajj 2026 Full Package',
      type: 'hajj',
      duration: '21 Days',
      price: '£9,500',
      dates: 'May - Jun 2026',
      imageUrl: 'https://picsum.photos/id/1036/800/600',
      isPremium: true,
      features: ['Direct Flights', 'VIP Mina Tents', 'Full Board', 'Scholar Accompaniment', 'Pre-Hajj Seminar']
    }
  ];

  // Data for the "Best Time to Visit" Chart
  const temperatureData = [
    { name: 'Jan', temp: 24, visitors: 60 },
    { name: 'Feb', temp: 26, visitors: 70 },
    { name: 'Mar', temp: 30, visitors: 80 },
    { name: 'Apr', temp: 34, visitors: 50 }, // Ramadan usually busy, but hot
    { name: 'May', temp: 38, visitors: 40 },
    { name: 'Jun', temp: 42, visitors: 90 }, // Hajj Season
    { name: 'Jul', temp: 43, visitors: 30 },
    { name: 'Aug', temp: 42, visitors: 30 },
    { name: 'Sep', temp: 40, visitors: 40 },
    { name: 'Oct', temp: 36, visitors: 60 },
    { name: 'Nov', temp: 30, visitors: 70 },
    { name: 'Dec', temp: 26, visitors: 80 },
  ];

  return (
    <div className="bg-stone-50 min-h-screen pb-20">
      <div className="bg-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Packages</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Choose the journey that speaks to your soul. From sacred pilgrimages to empowering women-only adventures.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        {/* <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
           <h3 className="text-xl font-bold text-stone-800 mb-6 font-serif">Best Times for Umrah (Temperature & Crowd)</h3>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart
                 data={temperatureData}
                 margin={{
                   top: 5,
                   right: 30,
                   left: 20,
                   bottom: 5,
                 }}
               >
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} />
                 <YAxis axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} label={{ value: 'Avg Temp (°C)', angle: -90, position: 'insideLeft', fill: '#78716c' }}/>
                 <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    cursor={{fill: '#fce7f3'}}
                 />
                 <Bar dataKey="temp" radius={[4, 4, 0, 0]}>
                    {temperatureData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.temp > 35 ? '#fbbf24' : '#db2777'} />
                    ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
           </div>
           <p className="text-xs text-stone-400 mt-4 text-center">
             * Pink bars indicate milder weather, preferred for comfortable Umrah. Yellow indicates peak summer heat.
           </p>
        </div> */}

        <div className="space-y-16">
          {/* Umrah Section */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
               <div className="h-px bg-stone-300 flex-grow"></div>
               <h2 className="text-3xl font-serif font-bold text-primary-900">Umrah & Hajj</h2>
               <div className="h-px bg-stone-300 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPackages.filter(p => p.type !== 'women-only').map(pkg => (
                <PackageCard key={pkg.id} data={pkg} onBook={() => navigate(PageType.CONTACT)} />
              ))}
            </div>
          </div>

          {/* Women Only Section */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
               <div className="h-px bg-stone-300 flex-grow"></div>
               <h2 className="text-3xl font-serif font-bold text-pink-600">Women-Only Luxury Tours</h2>
               <div className="h-px bg-stone-300 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPackages.filter(p => p.type === 'women-only').map(pkg => (
                <PackageCard key={pkg.id} data={pkg} onBook={() => navigate(PageType.CONTACT)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};