import { Link } from "wouter";
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin, Clock, ArrowRight, Wrench } from "lucide-react";

// Custom FooterLink component to prevent nested anchor tag issues
const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href}>
    <div className="cursor-pointer text-white hover:text-accent transition-all duration-300 flex items-center group">
      <ArrowRight className="h-3 w-0 mr-0 group-hover:w-3 group-hover:mr-1 transition-all duration-300 overflow-hidden text-accent" />
      <span>{label}</span>
    </div>
  </Link>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Solid background to prevent transparency */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>
      
      {/* Decorative blur elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent opacity-5 blur-3xl z-[1]"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary opacity-5 blur-3xl z-[1]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-lg overflow-hidden mr-3 flex items-center justify-center">
                <img src="/assets/logo.svg" alt="Sai Vinayaka Enterprises Logo" className="h-12 w-12" />
              </div>
              <h3 className="font-heading font-bold text-2xl">SAI VINAYAKA ENTERPRISES</h3>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              Professional heavy equipment erection services since 2022. Delivering excellence in erection, setup, and calibration.
            </p>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 transition-colors duration-300 border border-white/5">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 transition-colors duration-300 border border-white/5">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 transition-colors duration-300 border border-white/5">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 pb-2 border-b border-white/10">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/" label="Home" />
              </li>
              <li>
                <FooterLink href="/services" label="Services" />
              </li>
              <li>
                <FooterLink href="/about" label="About Us" />
              </li>
              <li>
                <FooterLink href="/projects" label="Projects" />
              </li>
              <li>
                <FooterLink href="/blog" label="Blog" />
              </li>
              <li>
                <FooterLink href="/contact" label="Contact" />
              </li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 pb-2 border-b border-white/10">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/services#industrial" label="Industrial Equipment" />
              </li>
              <li>
                <FooterLink href="/services#medical" label="Medical Equipment" />
              </li>
              <li>
                <FooterLink href="/services#manufacturing" label="Manufacturing Systems" />
              </li>
              <li>
                <FooterLink href="/services#individual" label="Individual Equipment" />
              </li>
              <li>
                <FooterLink href="/services#relocation" label="Equipment Relocation" />
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 pb-2 border-b border-white/10">Working Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-accent" />
                <div className="flex justify-between w-full">
                  <span>Service Availability:</span>
                  <span className="font-medium">24/7</span>
                </div>
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-accent" />
                <div className="flex justify-between w-full">
                  <span>Days of Operation:</span>
                  <span className="font-medium">365 Days</span>
                </div>
              </li>
            </ul>
            <div className="mt-6 p-3 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-sm text-white">
                Our team is always ready to respond to your equipment erection needs around the clock.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sai Vinayaka Enterprises. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy">
                <div className="cursor-pointer text-white hover:text-accent transition-colors duration-300">
                  Privacy Policy
                </div>
              </Link>
              <Link href="/terms">
                <div className="cursor-pointer text-white hover:text-accent transition-colors duration-300">
                  Terms of Service
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
