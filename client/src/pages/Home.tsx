import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Omega, Factory, Hospital, User, Building, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceHighlights, projects } from "../lib/data";
import ProjectCard from "../components/ProjectCard";

const featuredCards = [
  {
    id: 'manufacturing',
    title: 'Manufacturing Equipment Erection',
    description: 'Precision erection of heavy machinery for manufacturing plants with safety and expertise.',
    image: '/assets/images/site-image-1.jpg',
    tags: ['Factory Setup', 'Expert Team', 'Certified'],
    icon: <Factory className="h-5 w-5 text-accent" />
  },
  {
    id: 'datacenter',
    title: 'DATA CENTRE SETUP',
    description: 'Complete infrastructure setup for data centers with precision and reliability.',
    image: '/assets/images/site-image-2.jpg',
    tags: ['Servers', 'Network', 'Cooling'],
    icon: <Database className="h-5 w-5 text-accent" />
  },
  {
    id: 'medical',
    title: 'Medical Equipment Erection',
    description: 'Specialized erection of sensitive medical machinery for hospitals with strict standards compliance.',
    image: '/assets/images/site-image-3.jpg',
    tags: ['Healthcare', 'Precision', 'Sterilized'],
    icon: <Hospital className="h-5 w-5 text-accent" />
  },
  {
    id: 'individual',
    title: 'Small Business Equipment',
    description: 'Custom erection solutions for small businesses and individual equipment users.',
    image: '/assets/images/site-image-4.jpg',
    tags: ['Custom Solutions', 'Affordable', 'Support'],
    icon: <User className="h-5 w-5 text-accent" />
  }
];

const clientTypes = [
  "Manufacturing Industries",
  "Data Centers",
  "Healthcare Facilities",
  "Individual Businesses"
];

const Home = () => {
  const [activeFeaturedCard, setActiveFeaturedCard] = useState(0);
  const [activeClientType, setActiveClientType] = useState(0);

  // Change featured card every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeaturedCard((prev) => (prev + 1) % featuredCards.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Change client type in headline every second
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveClientType((prev) => (prev + 1) % clientTypes.length);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(var(--primary-rgb), 0.85), rgba(var(--primary-dark-rgb), 0.95)), url('/assets/images/site-image-5.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse"></div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="max-w-3xl lg:mr-12">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide border border-white/20 rounded-full bg-white/10 backdrop-blur-sm">
                ESTABLISHED 2022
              </span>
              <h1 className="heading-xl mb-6 leading-tight">
                <span className="text-white">Professional</span> <span className="text-accent font-extrabold">Heavy Equipment</span> <span className="text-white">Erection Services for</span>
                <div className="h-12 md:h-16 overflow-hidden mt-1">
                  <span 
                    className="text-accent font-extrabold block transition-all duration-300"
                    style={{ 
                      transform: `translateY(-${activeClientType * 100}%)`,
                      opacity: 1
                    }}
                  >
                    {clientTypes.map((type, index) => (
                      <span key={index} className="block h-12 md:h-16">{type}</span>
                    ))}
                  </span>
                </div>
              </h1>
              <p className="text-xl mb-6 text-white/90 font-light max-w-2xl leading-relaxed">
                Industrial-grade equipment erection services for:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10 max-w-xl">
                <button 
                  onClick={() => setActiveFeaturedCard(0)} 
                  className="flex items-center space-x-2 bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-left"
                >
                  <Factory className="h-5 w-5 text-accent" />
                  <span className="text-white/90">Manufacturing Industries</span>
                </button>
                <button 
                  onClick={() => setActiveFeaturedCard(1)} 
                  className="flex items-center space-x-2 bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-left"
                >
                  <Database className="h-5 w-5 text-accent" />
                  <span className="text-white/90">Data Centers</span>
                </button>
                <button 
                  onClick={() => setActiveFeaturedCard(2)} 
                  className="flex items-center space-x-2 bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-left"
                >
                  <Hospital className="h-5 w-5 text-accent" />
                  <span className="text-white/90">Healthcare Facilities</span>
                </button>
                <button 
                  onClick={() => setActiveFeaturedCard(3)} 
                  className="flex items-center space-x-2 bg-white/10 px-4 py-3 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors text-left"
                >
                  <User className="h-5 w-5 text-accent" />
                  <span className="text-white/90">Individual Businesses</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-5 mb-10 lg:mb-0">
                <Link href="/services">
                  <Button className="btn-gradient text-lg font-medium group relative">
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
                      Explore Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="glass-effect text-white hover:bg-white/20 text-lg font-medium border-white/20 px-6 py-3">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Featured Equipment Card */}
            <div className="lg:w-2/5 mt-10 lg:mt-0 transform lg:translate-y-6">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={featuredCards[activeFeaturedCard].image}
                    alt={featuredCards[activeFeaturedCard].title} 
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {featuredCards[activeFeaturedCard].icon}
                  <h3 className="text-xl font-bold text-white">{featuredCards[activeFeaturedCard].title}</h3>
                </div>
                <p className="text-white/80 mb-4 h-[60px]">
                  {featuredCards[activeFeaturedCard].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredCards[activeFeaturedCard].tags.map((tag, index) => (
                    <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
                <Link href={`/services#${featuredCards[activeFeaturedCard].id}`}>
                  <Button className="w-full glass-effect text-white hover:bg-white/20 border-white/20">
                    <span className="inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </Link>
              </div>
              
              {/* Card navigation dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {featuredCards.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveFeaturedCard(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeFeaturedCard ? 'bg-accent w-4' : 'bg-white/50'}`}
                    aria-label={`View ${featuredCards[index].title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-dark to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="hidden lg:block absolute right-10 bottom-20 w-32 h-32 rounded-full bg-accent opacity-20 blur-3xl animate-pulse"></div>
        <div className="hidden lg:block absolute right-40 top-20 w-40 h-40 rounded-full bg-accent opacity-10 blur-3xl"></div>
      </section>

      {/* Service Highlights */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg gradient-text mb-4">Specialized Equipment Erection Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              We provide comprehensive solutions for erecting and setting up heavy equipment across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              serviceHighlights.find(s => s.id === 'industrial') || serviceHighlights[0],
              serviceHighlights.find(s => s.id === 'datacenter') || serviceHighlights[0], 
              serviceHighlights.find(s => s.id === 'medical') || serviceHighlights[1]
            ].map((service) => (
              <div key={service.id} className="modern-card p-8 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow transform transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary/30 group-hover:to-accent/30">
                  {service.id === 'industrial' && <Omega className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />}
                  {service.id === 'medical' && <Hospital className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />}
                  {service.id === 'datacenter' && <Database className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />}
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <div className="inline-flex items-center text-primary font-medium hover:text-primary-dark cursor-pointer">
                View all services
                <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Angled Separator */}
      <div className="angle-separator bg-primary"></div>

      {/* About Section */}
      <section 
        id="about" 
        className="relative text-white section-padding overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(var(--primary-rgb), 0.95), rgba(var(--primary-dark-rgb), 0.98))`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-pattern"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-accent opacity-5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wider mb-4">ABOUT US</span>
              <h2 className="heading-lg text-white mb-6">Delivering Excellence Since <span className="text-accent font-bold">2022</span></h2>
              <p className="mb-8 text-white/90 text-lg leading-relaxed">
                Founded in 2022, Sai Vinayaka has quickly established itself as a trusted partner in heavy equipment erection services. We combine technical expertise with a commitment to safety and quality to deliver exceptional results for our clients.
              </p>
              <div className="space-y-5 mb-10">
                <div className="flex items-start bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                  <p className="text-white/90">Experienced team of technical professionals with industry knowledge</p>
                </div>
                <div className="flex items-start bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                  <p className="text-white/90">Strict adherence to safety protocols and industry standards</p>
                </div>
                <div className="flex items-start bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                  <p className="text-white/90">Customized solutions based on client requirements</p>
                </div>
                <div className="flex items-start bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                  <CheckCircle className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                  <p className="text-white/90">Timely project completion with minimum operational disruption</p>
                </div>
              </div>
              <Link href="/contact">
                <Button className="glass-effect hover:bg-white/20 text-white border-white/20 px-6 py-3 text-lg font-medium group">
                  <span className="inline-flex items-center">
                    Get in Touch 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="/assets/images/site-image-2.jpg" 
                  alt="Heavy equipment erection team" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>
              <div className="absolute top-12 -right-10 w-64 h-64 bg-accent/30 rounded-2xl -z-0 hidden lg:block blur-sm"></div>
              <div className="absolute -bottom-12 -left-10 w-64 h-64 bg-primary-dark/50 rounded-2xl -z-0 hidden lg:block blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wider mb-4">OUR PROJECTS</span>
            <h2 className="heading-lg gradient-text mb-4">Featured Work</h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Explore our successful equipment erection projects across different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/projects">
              <Button className="btn-gradient relative group px-8 py-3 text-lg">
                <span className="inline-flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mt-8 text-center">
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to work with us?</h3>
              <p className="mb-6 text-white/90">Contact us today to discuss your heavy equipment erection needs.</p>
              <Link href="/contact">
                <Button className="glass-effect hover:bg-white/20 text-white border-white/20 px-6 py-3 text-lg font-medium">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
