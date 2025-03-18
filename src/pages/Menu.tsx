
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  dietary?: string[];
};

type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

const Menu = () => {
  const appetizers: MenuItem[] = [
    {
      id: 1,
      name: "Truffle Arancini",
      description: "Risotto croquettes with black truffle and mozzarella",
      price: "$18",
      dietary: ["vegetarian"]
    },
    {
      id: 2,
      name: "Hamachi Crudo",
      description: "Yellowtail, citrus, avocado, radish, chili oil",
      price: "$22",
    },
    {
      id: 3,
      name: "Foie Gras Terrine",
      description: "House-made brioche, port wine reduction, seasonal fruit",
      price: "$24",
    },
    {
      id: 4,
      name: "Heirloom Tomato Salad",
      description: "Burrata, basil, aged balsamic, extra virgin olive oil",
      price: "$19",
      dietary: ["vegetarian", "gluten-free"]
    },
  ];

  const mains: MenuItem[] = [
    {
      id: 5,
      name: "Herb-Crusted Lamb",
      description: "Rack of lamb, root vegetables, mint gremolata, red wine jus",
      price: "$42",
      dietary: ["gluten-free"]
    },
    {
      id: 6,
      name: "Truffle Risotto",
      description: "Arborio rice, wild mushrooms, aged Parmesan, fresh truffle",
      price: "$34",
      dietary: ["vegetarian", "gluten-free"]
    },
    {
      id: 7,
      name: "Pan-Seared Scallops",
      description: "Cauliflower purée, brown butter, capers, lemon",
      price: "$38",
      dietary: ["gluten-free"]
    },
    {
      id: 8,
      name: "Dry-Aged Ribeye",
      description: "45-day aged beef, potato fondant, bone marrow butter, seasonal vegetables",
      price: "$58",
    },
    {
      id: 9,
      name: "Wild Mushroom Pappardelle",
      description: "House-made pasta, forest mushrooms, truffle cream, chives",
      price: "$32",
      dietary: ["vegetarian"]
    },
  ];

  const desserts: MenuItem[] = [
    {
      id: 10,
      name: "Chocolate Symphony",
      description: "Five textures of chocolate, raspberry coulis, gold leaf",
      price: "$16",
      dietary: ["vegetarian"]
    },
    {
      id: 11,
      name: "Vanilla Bean Panna Cotta",
      description: "Seasonal berries, almond tuile, micro mint",
      price: "$14",
      dietary: ["vegetarian", "gluten-free"]
    },
    {
      id: 12,
      name: "Lemon Tart",
      description: "Brûléed meringue, candied citrus, shortbread crust",
      price: "$15",
      dietary: ["vegetarian"]
    },
  ];

  const drinks: MenuItem[] = [
    {
      id: 13,
      name: "Signature Old Fashioned",
      description: "House-infused bourbon, orange bitters, smoked sugar",
      price: "$18",
    },
    {
      id: 14,
      name: "Elderflower Spritz",
      description: "St. Germain, prosecco, soda, fresh lime",
      price: "$16",
    },
    {
      id: 15,
      name: "Barrel-Aged Negroni",
      description: "Gin, Campari, vermouth, orange peel",
      price: "$17",
    },
  ];

  const menuCategories: MenuCategory[] = [
    { id: "appetizers", name: "Appetizers", items: appetizers },
    { id: "mains", name: "Main Courses", items: mains },
    { id: "desserts", name: "Desserts", items: desserts },
    { id: "drinks", name: "Cocktails", items: drinks },
  ];

  const [selectedCategory, setSelectedCategory] = useState("appetizers");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Menu</h1>
            <p className="text-xl text-gray-300">
              Seasonally inspired cuisine featuring the finest ingredients
            </p>
          </div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="bg-secondary p-1">
                  {menuCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="px-6 py-3 data-[state=active]:bg-gold data-[state=active]:text-charcoal"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {menuCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif text-center mb-12">{category.name}</h2>
                    
                    <div className="space-y-10">
                      {category.items.map((item) => (
                        <AnimateOnScroll key={item.id} className="delay-100">
                          <div className="flex flex-col md:flex-row justify-between border-b border-border pb-6">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <h3 className="text-xl font-medium mr-3">{item.name}</h3>
                                {item.dietary && item.dietary.map((diet) => (
                                  <span 
                                    key={diet} 
                                    className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground mr-2"
                                  >
                                    {diet}
                                  </span>
                                ))}
                              </div>
                              <p className="text-muted-foreground">{item.description}</p>
                            </div>
                            <div className="mt-2 md:mt-0 text-lg font-medium text-gold">{item.price}</div>
                          </div>
                        </AnimateOnScroll>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                Ready to Experience Our Menu?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join us for an unforgettable dining experience. 
                We recommend making a reservation in advance.
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

export default Menu;
