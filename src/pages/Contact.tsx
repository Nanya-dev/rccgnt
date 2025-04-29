
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We've received your message and will respond shortly.",
    });
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <div className="pt-24 pb-16 bg-church-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out with any questions or prayer requests.
          </p>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-church-secondary mb-8"></div>
              <p className="text-gray-700 mb-8">
                Fill out the form below, and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <Input 
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Your message..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-church-primary hover:bg-church-secondary text-white font-medium px-8"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Church Information */}
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark">
                Church Information
              </h2>
              <div className="w-20 h-1 bg-church-secondary mb-8"></div>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-church-primary w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold mb-2 text-church-dark">
                      Address
                    </h3>
                    <p className="text-gray-700">No 6 Owhor Close Rumuowha Eneka,Port Harcourt.</p>
                    <p className="text-gray-700">Rivers State,Nigeria.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-church-primary w-12 h-12 rounded-full flex items-center justify-center">
                      <Phone className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold mb-2 text-church-dark">
                      Phone
                    </h3>
                    <p className="text-gray-700">(123) 456-7890</p>
                    <p className="text-gray-700">(123) 456-7891 (Office)</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-church-primary w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold mb-2 text-church-dark">
                      Email
                    </h3>
                    <p className="text-gray-700">info@rccganewthing.org</p>
                    <p className="text-gray-700">pastor@rccganewthing.org</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6">
                    <div className="bg-church-primary w-12 h-12 rounded-full flex items-center justify-center">
                      <Clock className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold mb-2 text-church-dark">
                      Office Hours
                    </h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Saturday: Closed</p>
                    <p className="text-gray-700">Sunday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-church-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
            Find Us
          </h2>
          <div className="w-20 h-1 bg-church-secondary mx-auto mb-12"></div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-center p-4">
                <div>
                  <MapPin className="h-12 w-12 text-church-primary mx-auto mb-4" />
                  <h3 className="font-playfair text-xl font-bold mb-2 text-church-dark">
                    Interactive Map Coming Soon
                  </h3>
                  <p className="text-gray-700">
                    We're working on adding an interactive map to help you find us more easily.
                    <br />
                    <span className="font-medium">Location:</span> No 6 Owhor Close Rumuowha Eneka,Port Harcourt. Rivers State,Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
