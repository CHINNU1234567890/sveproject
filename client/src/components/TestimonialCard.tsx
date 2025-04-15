import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, StarHalf } from 'lucide-react';
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
      stars.push(<Star key={`star-${i}`} className="text-accent fill-current" />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="text-accent fill-current" />);
    }
    
    return stars;
  };

  return (
    <Card className="bg-white rounded-lg shadow-md p-6">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <div className="text-accent flex">
            {renderStars(testimonial.rating)}
          </div>
        </div>
        <p className="text-neutral-700 mb-6 italic">
          "{testimonial.text}"
        </p>
        <div className="flex items-center">
          <div className="h-12 w-12 bg-neutral-200 rounded-full overflow-hidden mr-4">
            <img 
              src={testimonial.avatarUrl} 
              alt={`${testimonial.name}'s profile`} 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm text-neutral-500">{testimonial.position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
