export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  iconName: string;
}

export interface Welder {
  id: string;
  name: string;
  city: string;
  region: string;
  rating: number;
  reviewsCount: number;
  priceFrom: number;
  services: string[];
  isVerified: boolean;
  completedJobs: number;
  avatarUrl?: string;
}

export interface ClientRequest {
  name: string;
  phone: string;
  city: string;
  serviceType: string;
  description: string;
  file?: File;
}

export interface WelderRegistration {
  name: string;
  surname: string;
  phone: string;
  city: string;
  specializations: string[];
  experience: number;
  description: string;
  socialLink?: string;
}
