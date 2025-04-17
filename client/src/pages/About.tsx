import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Award, Clock, Settings, Shield, Users } from "lucide-react";
import { useServiceRequest } from "../contexts/ServiceRequestContext";

const About = () => {
  const { openServiceRequest } = useServiceRequest();
  
  return (
    <>
      {/* About Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-3">ABOUT US</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Journey Since 2022
            </h1>
            <p className="text-xl opacity-90">
              Get to know Sai Vinayaka Enterprises - your trusted partner for heavy equipment erection services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6 text-neutral-800">Our Story</h2>
              <p className="text-neutral-600 mb-4">
                Founded in 2022, Sai Vinayaka Enterprises emerged from a vision to bridge the gap in professional heavy equipment erection services across industries. Our founder, with over 15 years of experience in industrial equipment erection, recognized the need for a specialized service provider focused exclusively on equipment erection.
              </p>
              <p className="text-neutral-600 mb-4">
                Starting with a small team of technical experts, we have grown steadily by delivering exceptional service quality and building strong client relationships. Today, we serve diverse industries including manufacturing, healthcare, pharmaceuticals, and more.
              </p>
              <p className="text-neutral-600 mb-4">
                Our commitment to technical excellence, safety standards, and client satisfaction has established us as a trusted name in the equipment erection sector in just a short time.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/assets/images/colleagues-safety-equipment-working.jpg" 
                alt="Sai Vinayaka Enterprises team at work" 
                className="rounded-lg shadow-lg object-cover h-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-4 rounded-lg shadow-lg">
                <p className="font-heading font-bold text-xl">Established 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Mission & Vision</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-light bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                  <path d="M8 12L11 15L16 10"/>
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-center">Our Mission</h3>
              <p className="text-neutral-600 text-center">
                To provide industries with exceptional equipment erection services that maximize operational efficiency, ensure safety, and minimize downtime. We aim to be the most reliable partner for our clients through technical excellence and personalized service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-primary-light bg-opacity-10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12"/>
                  <path d="M12 22V12M12 12L16 16M12 12L8 16"/>
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-center">Our Vision</h3>
              <p className="text-neutral-600 text-center">
                To become the leading equipment erection service provider nationally, setting new industry standards for quality, safety, and customer satisfaction. We envision building long-term partnerships with our clients as their trusted advisor for all equipment erection needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              These principles guide everything we do at Sai Vinayaka Enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <div className="w-14 h-14 bg-primary-light bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Safety First</h3>
              <p className="text-neutral-600">
                We prioritize the safety of our team, clients, and equipment above all else, adhering to the highest safety standards.
              </p>
            </div>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <div className="w-14 h-14 bg-primary-light bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Excellence</h3>
              <p className="text-neutral-600">
                We strive for excellence in every project, delivering the highest quality work that meets or exceeds expectations.
              </p>
            </div>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <div className="w-14 h-14 bg-primary-light bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Client-Focused</h3>
              <p className="text-neutral-600">
                We put our clients at the center of everything we do, tailoring our solutions to their specific needs.
              </p>
            </div>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <div className="w-14 h-14 bg-primary-light bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Technical Expertise</h3>
              <p className="text-neutral-600">
                We continuously develop our technical knowledge to provide the most effective solutions for complex equipment erection projects.
              </p>
            </div>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <div className="w-14 h-14 bg-primary-light bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Timeliness</h3>
              <p className="text-neutral-600">
                We respect our clients' time by adhering to project schedules and completing equipment erection projects on or before deadlines.
              </p>
            </div>
            
            <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
              <div className="w-14 h-14 bg-primary-light bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 10v12"/>
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Integrity</h3>
              <p className="text-neutral-600">
                We conduct our business with honesty, transparency, and ethical standards, building trust with every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Work With Sai Vinayaka Enterprises</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
            Let our expert team handle your equipment erection needs with precision and care.
          </p>
          <Button 
            className="bg-accent hover:bg-accent-dark text-white font-medium px-6 py-3 rounded shadow"
            onClick={() => openServiceRequest()}
          >
            Request Service Today
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
