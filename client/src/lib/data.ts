import { Service, Project, Testimonial } from './types';

// Service Highlights
export const serviceHighlights: Service[] = [
  {
    id: 'industrial',
    title: 'Industrial Equipment',
    description: 'Specialized erection of heavy manufacturing and processing machinery for factories.',
    icon: 'engineering',
    imageUrl: '/assets/images/site-image-1.jpg',
    features: [
      'Heavy manufacturing machinery erection',
      'Equipment positioning and alignment',
      'Production line erection'
    ]
  },
  {
    id: 'medical',
    title: 'Medical Equipment',
    description: 'Precision erection and positioning of sensitive medical machinery for hospitals and clinics.',
    icon: 'local_hospital',
    imageUrl: '/assets/images/site-image-2.jpg',
    features: [
      'Medical equipment erection',
      'Laboratory machinery positioning',
      'Medical equipment positioning'
    ]
  },
  {
    id: 'datacenter',
    title: 'DATA CENTRE SETUP',
    description: 'Comprehensive erection and infrastructure setup for data centers with precision and reliability.',
    icon: 'storage',
    imageUrl: '/assets/images/site-image-3.jpg',
    features: [
      'Server rack erection and installation',
      'Cooling system setup',
      'Power distribution infrastructure'
    ]
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing Systems',
    description: 'Erection of production lines and automated systems for manufacturers.',
    icon: 'factory',
    imageUrl: '/assets/images/site-image-4.jpg',
    features: [
      'Assembly line erection',
      'Robotic system positioning',
      'Production equipment erection'
    ]
  },
  {
    id: 'individual',
    title: 'Individual Equipment',
    description: 'Specialized erection services for individual heavy equipment users and small businesses.',
    icon: 'person',
    imageUrl: '/assets/images/site-image-5.jpg',
    features: [
      'Workshop machinery erection',
      'Small-scale production equipment',
      'Custom equipment positioning'
    ]
  },
  {
    id: 'relocation',
    title: 'Equipment Relocation',
    description: 'Safe and efficient relocation of heavy machinery within or between facilities.',
    icon: 'local_shipping',
    imageUrl: '/assets/images/site-image-1.jpg',
    features: [
      'Disassembly and reassembly',
      'Safe transportation',
      'Equipment repositioning'
    ]
  }
];

// Projects
export const projects: Project[] = [
  {
    id: '1',
    title: 'Factory Equipment Erection',
    description: 'Complete erection of heavy machinery for a manufacturing plant, including precise alignment and positioning.',
    imageUrl: '/assets/images/site-image-1.jpg',
    category: 'Industrial',
    completedYear: '2023'
  },
  {
    id: '2',
    title: 'DATA CENTRE SETUP',
    description: 'Full data center infrastructure setup including server racks, cooling systems, and power management.',
    imageUrl: '/assets/images/site-image-2.jpg',
    category: 'Technology',
    completedYear: '2023'
  },
  {
    id: '3',
    title: 'Medical Imaging Equipment',
    description: 'Precision erection of sensitive medical imaging equipment for a newly constructed hospital wing.',
    imageUrl: '/assets/images/site-image-3.jpg',
    category: 'Healthcare',
    completedYear: '2022'
  },
  {
    id: '4',
    title: 'Automated Assembly Line',
    description: 'Erection of a fully automated production line for an electronics manufacturer, including precise positioning.',
    imageUrl: '/assets/images/site-image-4.jpg',
    category: 'Manufacturing',
    completedYear: '2023'
  },
  {
    id: '5',
    title: 'Textile Machinery Erection',
    description: 'Complete erection of textile manufacturing machinery including spinning, weaving, and finishing equipment.',
    imageUrl: '/assets/images/site-image-5.jpg',
    category: 'Textile',
    completedYear: '2022'
  },
  {
    id: '6',
    title: 'Food Processing Equipment',
    description: 'Erection of an automated food processing and packaging line with strict hygiene requirements.',
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
    text: 'Sai Vinayaka handled the erection of our new production line with remarkable efficiency. Their team was professional, knowledgeable, and ensured minimal disruption to our operations.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    position: 'Director, XYZ Hospital',
    text: 'The technical expertise shown by the Sai Vinayaka team during our hospital expansion was impressive. They erected our critical medical equipment with precision and attention to detail.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  },
  {
    id: '3',
    name: 'Arjun Patel',
    position: 'Owner, Patel Engineering Works',
    text: 'As a small business owner, I was worried about erecting my new workshop equipment. Sai Vinayaka provided personalized service and made the process seamless. Highly recommended!',
    rating: 4.5,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  }
];

export const serviceOptions = [
  { value: "industrial", label: "Industrial Equipment Erection" },
  { value: "medical", label: "Medical Equipment Erection" },
  { value: "datacenter", label: "DATA CENTRE SETUP" },
  { value: "manufacturing", label: "Manufacturing Systems Erection" },
  { value: "individual", label: "Individual Equipment Services" },
  { value: "relocation", label: "Equipment Relocation" },
  { value: "other", label: "Other Services" }
];

// Blog Posts
export const blogPosts = [
  {
    id: "1",
    title: "Safety Best Practices for Heavy Equipment Erection in Industrial Settings",
    slug: "safety-best-practices-heavy-equipment-erection",
    excerpt: "Explore the essential safety protocols and best practices that should be followed during industrial equipment erection to ensure worker safety and project success.",
    content: `<p>Safety is paramount in any heavy equipment erection project. This article outlines the critical safety measures that should be implemented to protect workers and ensure successful equipment installation.</p>
              <h2>Pre-erection Safety Planning</h2>
              <p>Before beginning any equipment erection, a comprehensive safety plan should be developed. This includes site assessment, identifying potential hazards, and establishing emergency procedures.</p>
              <h2>Personal Protective Equipment (PPE)</h2>
              <p>Workers must wear appropriate PPE at all times, including hard hats, safety glasses, high-visibility clothing, steel-toed boots, and gloves. Specialized PPE may be required for specific tasks.</p>
              <h2>Equipment Inspection</h2>
              <p>All lifting equipment, tools, and machinery must be thoroughly inspected before use. Any damaged or worn equipment should be immediately removed from service and replaced.</p>
              <h2>Communication Protocols</h2>
              <p>Clear communication channels must be established between all team members. This includes using standardized hand signals, radio communication, and regular safety briefings.</p>
              <h2>Load Calculation and Management</h2>
              <p>Accurate load calculations are essential before attempting to lift any heavy equipment. Never exceed the rated capacity of lifting equipment, and always account for dynamic forces.</p>
              <h2>Conclusion</h2>
              <p>By implementing these safety best practices, equipment erection projects can be completed efficiently without compromising worker safety or equipment integrity.</p>`,
    imageUrl: "/assets/images/colleagues-safety-equipment-working.jpg",
    date: "April 15, 2025",
    readTime: 7,
    tags: ["Safety", "Industrial", "Best Practices"],
    author: {
      name: "Rajesh Kumar",
      role: "Safety Manager",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    id: "2",
    title: "The Impact of Proper Equipment Erection on Operational Efficiency",
    slug: "impact-proper-equipment-erection-efficiency",
    excerpt: "Learn how properly executed equipment erection directly influences the operational efficiency and lifespan of industrial machinery.",
    content: `<p>The way equipment is erected has a direct and lasting impact on its performance, efficiency, and longevity. This article explores the relationship between professional erection practices and operational outcomes.</p>
              <h2>Alignment and Calibration</h2>
              <p>Proper alignment during erection is crucial for equipment performance. Even minor misalignments can lead to increased vibration, accelerated wear, and higher energy consumption.</p>
              <h2>Foundation and Mounting</h2>
              <p>The foundation and mounting systems must be appropriately designed and constructed to support the equipment's weight, absorb vibrations, and withstand operational forces.</p>
              <h2>Precision in Connection Points</h2>
              <p>Connection points between equipment components must be precisely fitted. This includes electrical connections, hydraulic systems, and mechanical interfaces.</p>
              <h2>Testing and Commissioning</h2>
              <p>Comprehensive testing after erection helps identify and resolve issues before full operation begins, preventing costly downtime and repairs later.</p>
              <h2>Conclusion</h2>
              <p>Investing in professional equipment erection services pays dividends through improved operational efficiency, reduced maintenance costs, and extended equipment lifespan.</p>`,
    imageUrl: "/assets/images/site-image-1.jpg",
    date: "April 10, 2025",
    readTime: 6,
    tags: ["Efficiency", "Maintenance", "Operations"],
    author: {
      name: "Priya Sharma",
      role: "Operations Director",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: "3",
    title: "Specialized Approaches for Medical Equipment Erection in Hospitals",
    slug: "specialized-approaches-medical-equipment-erection",
    excerpt: "Discover the unique considerations and methodologies required when erecting sensitive medical equipment in healthcare environments.",
    content: `<p>Medical equipment erection requires specialized approaches that differ significantly from industrial equipment installation. This article outlines the critical factors to consider when working in healthcare environments.</p>
              <h2>Sterile Environment Maintenance</h2>
              <p>Maintaining sterile conditions during medical equipment erection is crucial. This includes using specialized cleaning protocols, proper attire, and controlled access to installation areas.</p>
              <h2>Infrastructure Integration</h2>
              <p>Medical equipment often needs to integrate with existing hospital infrastructure, including electrical systems, water supply, medical gas systems, and data networks.</p>
              <h2>Regulatory Compliance</h2>
              <p>Medical equipment installation must comply with stringent healthcare regulations and standards. Documentation and validation are essential components of the erection process.</p>
              <h2>Minimal Disruption</h2>
              <p>Equipment erection in hospitals must be planned to minimize disruption to patient care. This often requires working during off-hours and implementing phased installation approaches.</p>
              <h2>Conclusion</h2>
              <p>The erection of medical equipment requires specialized knowledge and approaches to ensure both proper functionality and compliance with healthcare standards and patient safety requirements.</p>`,
    imageUrl: "/assets/images/site-image-3.jpg",
    date: "March 28, 2025",
    readTime: 8,
    tags: ["Healthcare", "Medical Equipment", "Compliance"],
    author: {
      name: "Dr. Suresh Patel",
      role: "Medical Technology Advisor",
      avatarUrl: "https://randomuser.me/api/portraits/men/68.jpg"
    }
  }
];
