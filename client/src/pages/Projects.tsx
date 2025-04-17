import { projects } from "../lib/data";
import ProjectCard from "../components/ProjectCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <>
      {/* Projects Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-3">OUR PROJECTS</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl opacity-90">
              Explore our successful equipment erection projects across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-pattern">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-6 text-neutral-800">Featured Projects</h2>
            <p className="text-neutral-600 max-w-3xl">
              Since our establishment in 2022, we have successfully completed numerous equipment erection projects for clients across industrial, healthcare, manufacturing, and other sectors. Browse through our portfolio to see examples of our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4 text-neutral-800">Our Expertise Areas</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              We specialize in equipment erection services across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="Industrial equipment erection" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Industrial Equipment Erection</h3>
                <p className="text-white text-opacity-90 mb-4">
                  Heavy machinery setup for manufacturing plants
                </p>
                <Link href="/services#industrial">
                  <span className="inline-block bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded text-sm font-medium cursor-pointer">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="Medical equipment" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Medical Equipment</h3>
                <p className="text-white text-opacity-90 mb-4">
                  Precision erection of healthcare machinery
                </p>
                <Link href="/services#medical">
                  <span className="inline-block bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded text-sm font-medium cursor-pointer">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1565103517209-842465ede578?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80" 
                alt="Manufacturing systems" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Manufacturing Systems</h3>
                <p className="text-white text-opacity-90 mb-4">
                  Assembly line and production equipment setup
                </p>
                <Link href="/services#manufacturing">
                  <span className="inline-block bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded text-sm font-medium cursor-pointer">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <p className="text-xl">Satisfied Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-xl">Industries Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-xl">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6 text-neutral-800">Ready to Start Your Project?</h2>
          <p className="max-w-2xl mx-auto text-neutral-600 mb-8">
            Contact us today to discuss your equipment erection needs and join our list of satisfied clients.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent-dark text-white font-medium px-6 py-3 rounded shadow">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Projects;
