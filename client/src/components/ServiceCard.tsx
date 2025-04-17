import React from 'react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Service } from '../lib/types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={service.imageUrl} 
        alt={service.title} 
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
        <p className="text-neutral-600 mb-4">
          {service.description}
        </p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <ArrowRight className="h-4 w-4 text-accent mr-2 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
            Request Service
            <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
