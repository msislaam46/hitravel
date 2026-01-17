import React from 'react';
import { ServiceData } from '../types';

interface ServiceCardProps {
  data: ServiceData;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  return (
    <div className="bg-stone-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-100 group">
      <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-900 mb-6 group-hover:scale-110 group-hover:bg-primary-900 group-hover:text-white transition-all duration-300">
        {data.icon}
      </div>
      <h3 className="font-serif text-xl font-bold text-stone-800 mb-3 group-hover:text-primary-900">{data.title}</h3>
      <p className="text-stone-600 leading-relaxed text-sm">
        {data.description}
      </p>
    </div>
  );
};