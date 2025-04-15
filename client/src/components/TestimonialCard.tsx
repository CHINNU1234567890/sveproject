import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, StarHalf, Quote } from 'lucide-react';
import { Testimonial } from '../lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="text-accent fill-current h-4 w-4" />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="text-accent fill-current h-4 w-4" />);
    }
    
    return stars;
  };

  return (
    <Card className="modern-card hover:border-accent/20 group">
      <CardContent className="p-8 relative">
        {/* Quote icon */}
        <div className="absolute -top-5 -left-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <Quote className="h-5 w-5 text-accent transform -scale-x-100" />
          </div>
        </div>
        
        {/* Stars */}
        <div className="flex items-center mb-6 mt-3">
          <div className="text-accent flex space-x-1">
            {renderStars(testimonial.rating)}
          </div>
        </div>
        
        {/* Testimonial text */}
        <p className="text-gray-700 mb-8 text-lg leading-relaxed font-light">
          "{testimonial.text}"
        </p>
        
        {/* Client info */}
        <div className="flex items-center pt-4 border-t border-gray-100">
          <div className="h-14 w-14 bg-gray-200 rounded-full overflow-hidden mr-4 ring-2 ring-white shadow group-hover:ring-accent/20 transition-all">
            <img 
              src={testimonial.avatarUrl} 
              alt={`${testimonial.name}'s profile`} 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
