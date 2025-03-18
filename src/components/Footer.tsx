
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif mb-4">Saveur</h3>
            <p className="text-gray-300 max-w-md">
              Elevating fine dining with seasonal ingredients and creative techniques, 
              offering a sophisticated culinary experience in an elegant atmosphere.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gold mt-0.5" />
                <p className="text-gray-300">
                  123 Gourmet Avenue<br />
                  Culinary District<br />
                  Metropolis, MP 12345
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gold" />
                <p className="text-gray-300">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gold" />
                <p className="text-gray-300">info@saveur-restaurant.com</p>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-gold mt-0.5" />
                <div className="text-gray-300">
                  <p>Monday-Thursday: 5:30 PM - 10:00 PM</p>
                  <p>Friday-Saturday: 5:30 PM - 11:00 PM</p>
                  <p>Sunday: 5:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link>
              <Link to="/menu" className="text-gray-300 hover:text-gold transition-colors">Menu</Link>
              <Link to="/reservations" className="text-gray-300 hover:text-gold transition-colors">Reservations</Link>
              <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link>
            </nav>
            <div className="pt-4">
              <Link 
                to="/reservations"
                className="inline-block px-6 py-3 bg-gold hover:bg-gold-dark transition-colors text-charcoal font-medium rounded"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-400 text-center text-sm">
            © {new Date().getFullYear()} Saveur Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
