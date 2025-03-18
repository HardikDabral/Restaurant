
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Clock, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Reservations = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [guests, setGuests] = useState<string>("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();

  const times = [
    "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", 
    "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Reservation Confirmed",
        description: `Your table for ${guests} on ${date ? format(date, "MMMM d, yyyy") : ""} at ${time} has been reserved.`,
      });
      
      // Reset form
      setDate(undefined);
      setTime(undefined);
      setGuests("2");
      setName("");
      setEmail("");
      setPhone("");
      setSpecialRequests("");
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Make a Reservation</h1>
            <p className="text-xl text-gray-300">
              Reserve your table for an unforgettable dining experience
            </p>
          </div>
        </div>
      </section>
      
      {/* Reservation Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimateOnScroll className="p-6 bg-card rounded-lg shadow-md border border-border">
                <h2 className="text-2xl font-serif mb-6">Reserve Your Table</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "MMMM d, yyyy") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today;
                          }}
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {times.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests</Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="special">Special Requests</Label>
                    <textarea
                      id="special"
                      rows={3}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gold hover:bg-gold-dark text-charcoal font-medium"
                    disabled={!date || !time || !name || !email || !phone || isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Reserve Now"}
                  </Button>
                </form>
              </AnimateOnScroll>
              
              <AnimateOnScroll>
                <div className="space-y-8">
                  <div className="p-6 bg-card rounded-lg shadow-md border border-border">
                    <h3 className="text-xl font-medium mb-4 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-gold" />
                      Hours
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Monday - Thursday</span>
                        <span>5:30 PM - 10:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Friday - Saturday</span>
                        <span>5:30 PM - 11:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>5:00 PM - 9:00 PM</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-card rounded-lg shadow-md border border-border">
                    <h3 className="text-xl font-medium mb-4 flex items-center">
                      <Users className="mr-2 h-5 w-5 text-gold" />
                      Large Parties
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      For parties of more than 10 guests, please contact us directly to arrange your reservation.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-gold mr-2">Phone:</span>
                        <span>(555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gold mr-2">Email:</span>
                        <span>reservations@saveur-restaurant.com</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop" 
                      alt="Restaurant interior" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
      
      {/* Policies Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <h2 className="text-2xl font-serif text-center mb-8">Reservation Policies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Cancellations</h3>
                  <p className="text-muted-foreground">
                    We ask that cancellations be made at least 24 hours in advance. 
                    Late cancellations may incur a fee of $25 per person.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Late Arrivals</h3>
                  <p className="text-muted-foreground">
                    We hold reservations for 15 minutes past the reserved time. 
                    After 15 minutes, we may release your table to waiting guests.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Dress Code</h3>
                  <p className="text-muted-foreground">
                    Smart casual attire is requested. We respectfully ask that guests 
                    refrain from wearing athletic wear, shorts, and flip-flops.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Special Occasions</h3>
                  <p className="text-muted-foreground">
                    Please let us know if you're celebrating a special occasion, 
                    and we'll do our best to make your experience memorable.
                  </p>
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

export default Reservations;
