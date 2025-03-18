
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !transparent 
          ? 'bg-background/95 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className={`text-2xl font-serif font-semibold ${
              scrolled || !transparent ? 'text-foreground' : 'text-white'
            }`}>
              Saveur
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`menu-item font-medium ${
                scrolled || !transparent ? 'text-foreground' : 'text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`menu-item font-medium ${
                scrolled || !transparent ? 'text-foreground' : 'text-white'
              }`}
            >
              Menu
            </Link>
            <Link 
              to="/reservations" 
              className={`menu-item font-medium ${
                scrolled || !transparent ? 'text-foreground' : 'text-white'
              }`}
            >
              Reservations
            </Link>
            <Link 
              to="/contact" 
              className={`menu-item font-medium ${
                scrolled || !transparent ? 'text-foreground' : 'text-white'
              }`}
            >
              Contact
            </Link>
            <ThemeToggle />
            <Button 
              className="bg-gold hover:bg-gold-dark text-charcoal font-medium"
              asChild
            >
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} className={`text-foreground`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 bg-background/95 backdrop-blur-md shadow-lg space-y-2">
          <Link 
            to="/" 
            className="block py-2 menu-item"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className="block py-2 menu-item"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link 
            to="/reservations" 
            className="block py-2 menu-item"
            onClick={() => setIsOpen(false)}
          >
            Reservations
          </Link>
          <Link 
            to="/contact" 
            className="block py-2 menu-item"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Button 
            className="w-full mt-4 bg-gold hover:bg-gold-dark text-charcoal font-medium"
            asChild
            onClick={() => setIsOpen(false)}
          >
            <Link to="/reservations">Reserve a Table</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
