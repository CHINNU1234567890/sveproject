export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  completedYear: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  text: string;
  rating: number;
  avatarUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
  readTime: number;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
}
