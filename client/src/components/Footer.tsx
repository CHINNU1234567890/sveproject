import { Link } from "wouter";
import { Facebook, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto mr-3">
                <rect width="50" height="50" rx="5" fill="white"/>
                <path d="M10 25C10 17.268 16.268 11 24 11H40V39H24C16.268 39 10 32.732 10 25Z" fill="hsl(var(--primary))"/>
                <path d="M18 20L32 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 25L28 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 30L32 30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3 className="font-heading font-bold text-xl">SAI VINAYAKA</h3>
            </div>
            <p className="text-neutral-300 mb-4">
              Professional heavy equipment erection services since 2022. Delivering excellence in installation, setup, and calibration.
            </p>
            <p className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              <span>Trusted by industries across India</span>
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="hover:text-accent transition duration-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-accent transition duration-300">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-accent transition duration-300">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="hover:text-accent transition duration-300">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-accent transition duration-300">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#industrial">
                  <a className="hover:text-accent transition duration-300">Industrial Equipment</a>
                </Link>
              </li>
              <li>
                <Link href="/services#medical">
                  <a className="hover:text-accent transition duration-300">Medical Equipment</a>
                </Link>
              </li>
              <li>
                <Link href="/services#manufacturing">
                  <a className="hover:text-accent transition duration-300">Manufacturing Systems</a>
                </Link>
              </li>
              <li>
                <Link href="/services#individual">
                  <a className="hover:text-accent transition duration-300">Individual Equipment</a>
                </Link>
              </li>
              <li>
                <Link href="/services#relocation">
                  <a className="hover:text-accent transition duration-300">Equipment Relocation</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Working Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-neutral-300">
              24/7 Emergency services available for critical equipment needs.
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sai Vinayaka. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy">
                <a className="text-neutral-400 hover:text-white transition duration-300">Privacy Policy</a>
              </Link>
              <Link href="/terms">
                <a className="text-neutral-400 hover:text-white transition duration-300">Terms of Service</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
