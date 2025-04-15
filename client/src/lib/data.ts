import { Service, Project, Testimonial } from './types';

// Service Highlights
export const serviceHighlights: Service[] = [
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    description: 'Specialized installation of manufacturing and processing machinery for factories.',
    icon: 'engineering',
    imageUrl: '/assets/images/industrial-equipment.jpg',
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
    imageUrl: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1565465295423-68c959a634e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1622633721986-9e816b8f68a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80',
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
    imageUrl: 'https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=450&q=80',
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
    imageUrl: '/assets/images/factory-equipment.jpg',
    category: 'Industrial',
    completedYear: '2023'
  },
  {
    id: '2',
    title: 'Medical Imaging Center',
    description: 'Installation of sensitive medical imaging equipment for a newly constructed hospital wing.',
    imageUrl: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Healthcare',
    completedYear: '2022'
  },
  {
    id: '3',
    title: 'Automated Assembly Line',
    description: 'Setup of a fully automated production line for an electronics manufacturer, including networking and calibration.',
    imageUrl: 'https://images.unsplash.com/photo-1598739156969-0f2cc8a4e272?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Manufacturing',
    completedYear: '2023'
  },
  {
    id: '4',
    title: 'Pharmaceutical Lab Equipment',
    description: 'Installation of specialized laboratory equipment for a pharmaceutical research facility with precise requirements.',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Pharmaceutical',
    completedYear: '2023'
  },
  {
    id: '5',
    title: 'Textile Machinery Setup',
    description: 'Complete installation of textile manufacturing machinery including spinning, weaving, and finishing equipment.',
    imageUrl: 'https://images.unsplash.com/photo-1573495612890-430e48b164df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
    category: 'Textile',
    completedYear: '2022'
  },
  {
    id: '6',
    title: 'Food Processing Line',
    description: 'Setup of an automated food processing and packaging line with strict hygiene requirements.',
    imageUrl: 'https://images.unsplash.com/photo-1589579234096-46edee025e52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
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
