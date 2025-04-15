import { Link } from "wouter";
import { ArrowRight, CheckCircle, Omega, Factory, Hospital, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceHighlights, projects, testimonials } from "../lib/data";
import ProjectCard from "../components/ProjectCard";
import TestimonialCard from "../components/TestimonialCard";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative bg-primary text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1624029769761-8d7e3573682a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=800&q=80" 
            alt="Heavy equipment installation" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Professional Heavy Equipment Erection Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Industrial-grade installation solutions for businesses, hospitals, manufacturers, and individual users.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services">
                <Button className="bg-accent hover:bg-accent-dark px-6 py-3 rounded shadow font-medium transition duration-300 text-white">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-primary hover:bg-neutral-200 px-6 py-3 rounded shadow font-medium transition duration-300">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary-dark to-transparent"></div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary-light bg-opacity-10 text-primary rounded-full text-sm font-medium mb-3">OUR EXPERTISE</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Specialized Equipment Erection Services</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              We provide comprehensive solutions for installing and setting up heavy equipment across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.slice(0, 4).map((service) => (
              <div key={service.id} className="equipment-card bg-white border border-neutral-200 rounded-lg p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-14 h-14 bg-primary-light bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                  {service.id === 'industrial' && <Omega className="h-6 w-6 text-primary" />}
                  {service.id === 'medical' && <Hospital className="h-6 w-6 text-primary" />}
                  {service.id === 'manufacturing' && <Factory className="h-6 w-6 text-primary" />}
                  {service.id === 'individual' && <User className="h-6 w-6 text-primary" />}
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <a className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
                View all services
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Angled Separator */}
      <div className="angle-separator bg-primary"></div>

      {/* About Section */}
      <section id="about" className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-3">ABOUT US</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Delivering Excellence Since 2022</h2>
              <p className="mb-6 text-neutral-100">
                Founded in 2022, Sai Vinayaka has quickly established itself as a trusted partner in heavy equipment erection services. We combine technical expertise with a commitment to safety and quality to deliver exceptional results for our clients.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <p>Experienced team of technical professionals with industry knowledge</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <p>Strict adherence to safety protocols and industry standards</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <p>Customized solutions based on client requirements</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <p>Timely project completion with minimum operational disruption</p>
                </div>
              </div>
              <Link href="/contact">
                <Button variant="outline" className="inline-block bg-white text-primary hover:bg-neutral-200 px-6 py-3 rounded shadow font-medium transition duration-300">
                  Get in Touch
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1601152888061-b4c0cffd1480?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80" 
                  alt="Heavy equipment installation team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-8 -right-8 w-48 h-48 bg-accent rounded-lg -z-0 hidden lg:block"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary rounded-lg -z-0 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary-light bg-opacity-10 text-primary rounded-full text-sm font-medium mb-3">OUR PROJECTS</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Featured Work</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Explore our successful equipment erection projects across different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded shadow transition duration-300">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary-light bg-opacity-10 text-primary rounded-full text-sm font-medium mb-3">TESTIMONIALS</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Hear from our satisfied clients about their experience working with Sai Vinayaka.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
