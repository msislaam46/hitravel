import React from 'react';
import { Check, Calendar, Clock } from 'lucide-react';
import { PackageData } from '../types';

interface PackageCardProps {
  data: PackageData;
  onBook: () => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ data, onBook }) => {
  return (
    <div className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border ${data.isPremium ? 'border-gold-400' : 'border-stone-100'} flex flex-col`}>
      {data.isPremium && (
        <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wide shadow-md">
          Premium Selection
        </div>
      )}
      
      <div className="relative h-64 overflow-hidden">
        <img 
          src={data.imageUrl} 
          alt={data.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 text-white">
          <span className={`inline-block px-2 py-1 mb-2 rounded text-xs font-bold uppercase tracking-wider ${data.type === 'women-only' ? 'bg-pink-500' : 'bg-emerald-600'}`}>
            {data.type === 'women-only' ? 'Women Only' : data.type}
          </span>
          <h3 className="font-serif text-2xl font-bold">{data.title}</h3>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-6 text-sm text-stone-500">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4 text-gold-600" />
            <span>{data.dates}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-gold-600" />
            <span>{data.duration}</span>
          </div>
        </div>

        <div className="space-y-3 mb-8 flex-grow">
          {data.features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <Check className="h-4 w-4 text-emerald-600 mt-1 shrink-0" />
              <span className="text-stone-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-stone-400 uppercase">Starting from</span>
            <span className="text-xl font-serif font-bold text-primary-900">{data.price}</span>
          </div>
          <button 
            onClick={onBook}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              data.isPremium 
                ? 'bg-gold-500 text-white hover:bg-gold-600' 
                : 'bg-primary-900 text-white hover:bg-primary-800'
            }`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};