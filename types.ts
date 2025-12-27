
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  location: string;
  description?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  angle: string;
  image: string;
}

export interface PricingRate {
  category: string;
  rate: number;
  unit: string;
  minInvestment: string;
}
