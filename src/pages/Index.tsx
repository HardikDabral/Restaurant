
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Calendar, Clock, Award } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar transparent={true} />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop")'
          }}
        ></div>
        <div className="relative z-20 flex items-center justify-center h-full px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              <span className="linear-wipe">Saveur</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10">
              Experience culinary excellence with our seasonal ingredients 
              and innovative techniques
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gold hover:bg-gold-dark text-charcoal font-medium px-8 py-6"
                size="lg"
                asChild
              >
                <Link to="/reservations">Reserve a Table</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white"
                size="lg"
                asChild
              >
                <Link to="/menu">Explore Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">A Unique Dining Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Saveur offers a sophisticated blend of traditional techniques and modern innovation, 
                creating unforgettable culinary moments.
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll className="delay-100">
              <div className="text-center p-6 rounded-lg">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Utensils className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-medium mb-3">Seasonal Menu</h3>
                <p className="text-muted-foreground">
                  Our menu changes with the seasons to showcase the finest locally-sourced ingredients at their peak.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll className="delay-200">
              <div className="text-center p-6 rounded-lg">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-medium mb-3">Award-Winning Chef</h3>
                <p className="text-muted-foreground">
                  Our executive chef brings years of experience from Michelin-starred restaurants around the world.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll className="delay-300">
              <div className="text-center p-6 rounded-lg">
                <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-medium mb-3">Private Events</h3>
                <p className="text-muted-foreground">
                  Host your special occasions in our elegant private dining rooms with customized menus.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Featured Dishes */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif mb-4">Signature Dishes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our most celebrated creations, perfected through artistry and passion.
              </p>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll className="delay-100">
              <div className="menu-card h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop" 
                    alt="Herb-Crusted Lamb" 
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Herb-Crusted Lamb</h3>
                  <p className="text-muted-foreground mb-4">
                    New Zealand lamb with a fresh herb crust, served with roasted root vegetables and red wine reduction.
                  </p>
                  <Link 
                    to="/menu" 
                    className="text-gold hover:text-gold-dark flex items-center font-medium"
                  >
                    View on Menu <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll className="delay-200">
              <div className="menu-card h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559948271-7d5c98d2e951?q=80&w=2070&auto=format&fit=crop" 
                    alt="Truffle Risotto" 
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Truffle Risotto</h3>
                  <p className="text-muted-foreground mb-4">
                    Creamy Arborio rice with seasonal truffles, aged Parmesan, and wild mushrooms.
                  </p>
                  <Link 
                    to="/menu" 
                    className="text-gold hover:text-gold-dark flex items-center font-medium"
                  >
                    View on Menu <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll className="delay-300">
              <div className="menu-card h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1964&auto=format&fit=crop" 
                    alt="Chocolate Symphony" 
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Chocolate Symphony</h3>
                  <p className="text-muted-foreground mb-4">
                    A decadent dessert featuring five textures of chocolate with gold leaf and raspberry coulis.
                  </p>
                  <Link 
                    to="/menu" 
                    className="text-gold hover:text-gold-dark flex items-center font-medium"
                  >
                    View on Menu <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              className="bg-gold hover:bg-gold-dark text-charcoal font-medium"
              size="lg"
              asChild
            >
              <Link to="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Reserve Your Experience</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us for an unforgettable dining experience. Reservations recommended.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-gold hover:bg-gold-dark text-charcoal font-medium"
                  size="lg"
                  asChild
                >
                  <Link to="/reservations">Book a Table</Link>
                </Button>
                <div className="flex items-center space-x-2 text-gold">
                  <Clock className="h-5 w-5" />
                  <span>Open 5:30 PM - 10:00 PM</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
