import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Prayer request submitted",
      description: "We've received your request and will pray for you.",
    });
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <section className="py-20 bg-church-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-church-dark">
            Need Prayer?
          </h2>
          <div className="w-20 h-1 bg-church-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We believe in the power of prayer. Submit your prayer request, and our prayer team 
            will lift your needs to God.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
            </div>
            <div className="mb-6">
              <label htmlFor="prayerRequest" className="block text-gray-700 font-medium mb-2">
                Prayer Request
              </label>
              <Textarea 
                id="prayerRequest"
                placeholder="Share your prayer request..."
                required
                className="w-full min-h-[150px]"
              />
            </div>
            <div className="flex justify-center">
              <Button 
                type="submit" 
                className="bg-church-primary hover:bg-church-secondary text-white font-medium px-8"
              >
                Submit Prayer Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
