import { serviceHighlights } from "../lib/data";
import ServiceCard from "../components/ServiceCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <>
      {/* Services Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-3">OUR SERVICES</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Equipment Solutions
            </h1>
            <p className="text-xl opacity-90 mb-6">
              From initial consultation to final erection, we provide end-to-end equipment erection services customized to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-pattern">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {serviceHighlights.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary-light bg-opacity-10 text-primary rounded-full text-sm font-medium mb-3">OUR PROCESS</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">How We Work</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Our systematic approach ensures efficient and high-quality equipment erection services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full mb-4 font-bold text-xl">1</div>
                <h3 className="font-heading text-xl font-bold mb-2">Initial Consultation</h3>
                <p className="text-neutral-600">We discuss your requirements, assess equipment specifications, and understand your facility constraints.</p>
              </div>
              <div className="hidden lg:block absolute -right-4 top-10 w-8 h-2 bg-primary"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full mb-4 font-bold text-xl">2</div>
                <h3 className="font-heading text-xl font-bold mb-2">Planning & Preparation</h3>
                <p className="text-neutral-600">We develop a detailed erection plan, arrange necessary resources, and prepare the site for equipment setup.</p>
              </div>
              <div className="hidden lg:block absolute -right-4 top-10 w-8 h-2 bg-primary"></div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full mb-4 font-bold text-xl">3</div>
                <h3 className="font-heading text-xl font-bold mb-2">Equipment Erection</h3>
                <p className="text-neutral-600">Our team carefully erects the equipment according to manufacturer specifications and industry standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto text-xl mb-8 opacity-90">
            Contact us today to discuss your equipment erection needs and get a customized quote.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent-dark text-white font-medium px-8 py-4 rounded shadow text-lg">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
