import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto hidden sm:block">
              <rect width="50" height="50" rx="5" fill="hsl(var(--primary))"/>
              <path d="M10 25C10 17.268 16.268 11 24 11H40V39H24C16.268 39 10 32.732 10 25Z" fill="hsl(var(--primary-foreground))"/>
              <path d="M18 20L32 20" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
              <path d="M18 25L28 25" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
              <path d="M18 30L32 30" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div className="ml-3">
              <h1 className="font-heading font-bold text-2xl text-primary">SAI VINAYAKA</h1>
              <p className="text-xs text-secondary">Heavy Equipment Erection Services</p>
            </div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/">
            <a className={`font-medium ${isActive("/") ? "text-primary" : "hover:text-primary"}`}>Home</a>
          </Link>
          <Link href="/services">
            <a className={`font-medium ${isActive("/services") ? "text-primary" : "hover:text-primary"}`}>Services</a>
          </Link>
          <Link href="/about">
            <a className={`font-medium ${isActive("/about") ? "text-primary" : "hover:text-primary"}`}>About</a>
          </Link>
          <Link href="/projects">
            <a className={`font-medium ${isActive("/projects") ? "text-primary" : "hover:text-primary"}`}>Projects</a>
          </Link>
          <Link href="/contact">
            <a className={`font-medium ${isActive("/contact") ? "text-primary" : "hover:text-primary"}`}>Contact</a>
          </Link>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-neutral-700 focus:outline-none" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
        
        {/* Contact CTA Button */}
        <Link href="/contact">
          <Button className="hidden lg:inline-block bg-accent hover:bg-accent text-white font-medium">
            Get Quote
          </Button>
        </Link>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link href="/">
                <a 
                  className={`font-medium py-2 px-4 rounded ${isActive("/") ? "bg-neutral-100" : "hover:bg-neutral-100"}`}
                  onClick={closeMobileMenu}
                >
                  Home
                </a>
              </Link>
              <Link href="/services">
                <a 
                  className={`font-medium py-2 px-4 rounded ${isActive("/services") ? "bg-neutral-100" : "hover:bg-neutral-100"}`}
                  onClick={closeMobileMenu}
                >
                  Services
                </a>
              </Link>
              <Link href="/about">
                <a 
                  className={`font-medium py-2 px-4 rounded ${isActive("/about") ? "bg-neutral-100" : "hover:bg-neutral-100"}`}
                  onClick={closeMobileMenu}
                >
                  About
                </a>
              </Link>
              <Link href="/projects">
                <a 
                  className={`font-medium py-2 px-4 rounded ${isActive("/projects") ? "bg-neutral-100" : "hover:bg-neutral-100"}`}
                  onClick={closeMobileMenu}
                >
                  Projects
                </a>
              </Link>
              <Link href="/contact">
                <a 
                  className={`font-medium py-2 px-4 rounded ${isActive("/contact") ? "bg-neutral-100" : "hover:bg-neutral-100"}`}
                  onClick={closeMobileMenu}
                >
                  Contact
                </a>
              </Link>
              <Link href="/contact">
                <a 
                  className="bg-accent text-white font-medium text-center py-2 px-4 rounded shadow"
                  onClick={closeMobileMenu}
                >
                  Get Quote
                </a>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
