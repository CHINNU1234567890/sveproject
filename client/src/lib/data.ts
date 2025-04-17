import { Service, Project, Testimonial } from './types';

// Service Highlights
export const serviceHighlights: Service[] = [
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    description: 'Specialized installation of manufacturing and processing machinery for factories.',
    icon: 'engineering',
    imageUrl: '/assets/images/site-image-1.jpg',
    features: [
      'Manufacturing machinery installation',
      'Heavy equipment relocation',
      'Production line setup'
    ]
  },
  {
    id: 'medical',
    title: 'Medical Equipment',
    description: 'Precision installation of sensitive medical machinery for hospitals and clinics.',
    icon: 'local_hospital',
    imageUrl: '/assets/images/site-image-2.jpg',
    features: [
      'Imaging equipment setup',
      'Laboratory machinery installation',
      'Medical equipment calibration'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Systems',
    description: 'Setup of production lines and automated systems for manufacturers.',
    icon: 'factory',
    imageUrl: '/assets/images/site-image-3.jpg',
    features: [
      'Assembly line installation',
      'Robotic system integration',
      'Production equipment networking'
    ]
  },
  {
    id: 'individual',
    title: 'Individual Equipment',
    description: 'Specialized services for individual heavy equipment users and small businesses.',
    icon: 'person',
    imageUrl: '/assets/images/site-image-4.jpg',
    features: [
      'Workshop machinery setup',
      'Small-scale production equipment',
      'Custom equipment installation'
    ]
  },
  {
    id: 'relocation',
    title: 'Equipment Relocation',
    description: 'Safe and efficient relocation of heavy machinery within or between facilities.',
    icon: 'local_shipping',
    imageUrl: '/assets/images/site-image-5.jpg',
    features: [
      'Disassembly and reassembly',
      'Safe transportation',
      'Recalibration after setup'
    ]
  }
];

// Projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'Factory Equipment Setup',
    description: 'Complete installation of heavy machinery for a manufacturing plant, including precise alignment and calibration.',
    imageUrl: '/assets/images/site-image-1.jpg',
    category: 'Industrial',
    completedYear: '2023'
  },
  {
    id: '2',
    title: 'Medical Imaging Center',
    description: 'Installation of sensitive medical imaging equipment for a newly constructed hospital wing.',
    imageUrl: '/assets/images/site-image-2.jpg',
    category: 'Healthcare',
    completedYear: '2022'
  },
  {
    id: '3',
    title: 'Automated Assembly Line',
    description: 'Setup of a fully automated production line for an electronics manufacturer, including networking and calibration.',
    imageUrl: '/assets/images/site-image-3.jpg',
    category: 'Manufacturing',
    completedYear: '2023'
  },
  {
    id: '4',
    title: 'Pharmaceutical Lab Equipment',
    description: 'Installation of specialized laboratory equipment for a pharmaceutical research facility with precise requirements.',
    imageUrl: '/assets/images/site-image-4.jpg',
    category: 'Pharmaceutical',
    completedYear: '2023'
  },
  {
    id: '5',
    title: 'Textile Machinery Setup',
    description: 'Complete installation of textile manufacturing machinery including spinning, weaving, and finishing equipment.',
    imageUrl: '/assets/images/site-image-5.jpg',
    category: 'Textile',
    completedYear: '2022'
  },
  {
    id: '6',
    title: 'Food Processing Line',
    description: 'Setup of an automated food processing and packaging line with strict hygiene requirements.',
    imageUrl: '/assets/images/site-image-1.jpg',
    category: 'Food & Beverage',
    completedYear: '2023'
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Khanna',
    position: 'Production Manager, ABC Manufacturing',
    text: 'Sai Vinayaka handled the installation of our new production line with remarkable efficiency. Their team was professional, knowledgeable, and ensured minimal disruption to our operations.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    position: 'Director, XYZ Hospital',
    text: 'The technical expertise shown by the Sai Vinayaka team during our hospital expansion was impressive. They installed our critical medical equipment with precision and attention to detail.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: '3',
    name: 'Arjun Patel',
    position: 'Owner, Patel Engineering Works',
    text: 'As a small business owner, I was worried about setting up my new workshop equipment. Sai Vinayaka provided personalized service and made the process seamless. Highly recommended!',
    rating: 4.5,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  }
];

export const serviceOptions = [
  { value: "industrial", label: "Industrial Equipment Installation" },
  { value: "medical", label: "Medical Equipment Installation" },
  { value: "manufacturing", label: "Manufacturing Systems Setup" },
  { value: "individual", label: "Individual Equipment Services" },
  { value: "relocation", label: "Equipment Relocation" },
  { value: "other", label: "Other Services" }
];
