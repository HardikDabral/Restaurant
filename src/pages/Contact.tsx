
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond to your inquiry shortly.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <AnimateOnScroll>
                <div>
                  <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Have a question, feedback, or want to make a reservation? 
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-gold hover:bg-gold-dark text-charcoal font-medium"
                      disabled={!name || !email || !subject || !message || isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll>
                <div className="space-y-8">
                  <h2 className="text-2xl font-serif mb-6">Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-gold mr-4 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium mb-2">Address</h3>
                        <p className="text-muted-foreground">
                          123 Gourmet Avenue<br />
                          Culinary District<br />
                          Metropolis, MP 12345
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone className="h-5 w-5 text-gold mr-4 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium mb-2">Phone</h3>
                        <p className="text-muted-foreground">
                          Reservations: (555) 123-4567<br />
                          General Inquiries: (555) 765-4321
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Mail className="h-5 w-5 text-gold mr-4 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium mb-2">Email</h3>
                        <p className="text-muted-foreground">
                          Reservations: reservations@saveur-restaurant.com<br />
                          General Inquiries: info@saveur-restaurant.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Clock className="h-5 w-5 text-gold mr-4 mt-1" />
                      <div>
                        <h3 className="text-lg font-medium mb-2">Hours</h3>
                        <div className="text-muted-foreground">
                          <div className="flex justify-between mb-1">
                            <span>Monday - Thursday:</span>
                            <span>5:30 PM - 10:00 PM</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span>Friday - Saturday:</span>
                            <span>5:30 PM - 11:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span>5:00 PM - 9:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="rounded-lg overflow-hidden h-72 shadow-md">
                      {/* Google Maps Embed */}
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <p className="text-muted-foreground">Map Loading...</p>
                        {/* Ideally replace with actual Google Maps embed */}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl font-serif mb-6">Ready to Dine With Us?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Make a reservation today and experience our exceptional cuisine
              </p>
              <Button 
                className="bg-gold hover:bg-gold-dark text-charcoal font-medium"
                size="lg"
                asChild
              >
                <a href="/reservations">Reserve a Table</a>
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
