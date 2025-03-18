
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-gold">404</h1>
          <p className="text-2xl text-foreground mb-8">Oops! Page not found</p>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          <Button 
            className="bg-gold hover:bg-gold-dark text-charcoal font-medium"
            size="lg"
            asChild
          >
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
