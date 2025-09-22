import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useServiceRequest } from "../contexts/ServiceRequestContext";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { openServiceRequest } = useServiceRequest();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  // Unified NavLink for desktop & mobile
  const NavLink = ({
    to,
    label,
    active,
  }: {
    to: string;
    label: string;
    active: boolean;
  }) => (
    <Link
      href={to}
      onClick={() => closeMobileMenu()}
      className={`block w-full rounded-lg py-2 px-4 transition-colors 
        ${active ? "text-accent font-semibold" : "text-gray-700 hover:text-accent hover:bg-gray-50"}`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            {/* Logo */}
            <div className="flex items-center justify-center h-12 w-12 rounded-lg overflow-hidden hidden sm:flex">
              <img
                src="/assets/logo.svg"
                alt="Sai Vinayaka Enterprises Logo"
                className="h-12 w-12"
              />
            </div>
            <div className="sm:ml-3">
              <h1 className="font-heading font-bold text-2xl gradient-text tracking-tight">
                SAI VINAYAKA ENTERPRISES
              </h1>
              <p className="text-xs font-medium text-gray-600">
                Heavy Equipment Erection Services
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" label="Home" active={isActive("/")} />
          <NavLink to="/services" label="Services" active={isActive("/services")} />
          <NavLink to="/about" label="About" active={isActive("/about")} />
          <NavLink to="/projects" label="Projects" active={isActive("/projects")} />
          <NavLink to="/blog" label="Blog" active={isActive("/blog")} />
          <NavLink to="/contact" label="Contact" active={isActive("/contact")} />
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-neutral-700 focus:outline-none hover:text-accent transition-colors"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

        {/* Contact CTA Button */}
        <div className="hidden lg:block">
          <Button className="btn-gradient group" onClick={() => openServiceRequest()}>
            <span className="flex items-center">
              <PhoneCall className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Request Service
            </span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" label="Home" active={isActive("/")} />
              <NavLink to="/services" label="Services" active={isActive("/services")} />
              <NavLink to="/about" label="About" active={isActive("/about")} />
              <NavLink to="/projects" label="Projects" active={isActive("/projects")} />
              <NavLink to="/blog" label="Blog" active={isActive("/blog")} />
              <NavLink to="/contact" label="Contact" active={isActive("/contact")} />

              <Button
                className="btn-gradient w-full mt-2"
                onClick={() => {
                  closeMobileMenu();
                  openServiceRequest();
                }}
              >
                <span className="flex items-center justify-center">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Request Service
                </span>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
