import React from 'react';

export enum PageType {
  HOME = 'HOME',
  PACKAGES = 'PACKAGES',
  SERVICES = 'SERVICES',
  CONTACT = 'CONTACT'
}

export interface PackageData {
  id: string;
  title: string;
  type: 'umrah' | 'hajj' | 'women-only';
  duration: string;
  price: string;
  features: string[];
  imageUrl: string;
  dates: string;
  isPremium?: boolean;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}