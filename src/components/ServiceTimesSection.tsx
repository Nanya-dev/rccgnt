import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServiceTimesSection = () => {
  return (
    <section className="py-20 bg-church-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-church-dark">
            Join Us for Worship
          </h2>
          <div className="w-20 h-1 bg-church-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We invite you to join our worship services and experience the presence of God.
            All are welcome in our community of faith.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <div className="mx-auto bg-church-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Calendar className="text-white h-8 w-8" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-church-dark">Sunday Service</h3>
            <p className="text-gray-700 mb-4">Join us every Sunday for praise, worship, and the Word of God.</p>
            <p className="font-bold text-church-primary mb-2">8:00 AM - 12:30 PM</p>
            <p className="text-gray-600">In-person & Online</p>
          </div>
          
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <div className="mx-auto bg-church-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Clock className="text-white h-8 w-8" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-church-dark">Bible Study</h3>
            <p className="text-gray-700 mb-4">Deepen your understanding of the Word through our weekly Bible study.</p>
            <p className="font-bold text-church-primary mb-2">Tuesday 6:30 PM - 8:00 PM</p>
            <p className="text-gray-600">In-person & Online</p>
          </div>
          
          <div className="bg-white p-8 shadow-lg rounded-lg text-center">
            <div className="mx-auto bg-church-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-white h-8 w-8" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-church-dark">Prayer Meeting</h3>
            <p className="text-gray-700 mb-4">Join us for a powerful time of prayer and intercession.</p>
            <p className="font-bold text-church-primary mb-2">Thursday 6:30 PM - 8:00 PM</p>
            <p className="text-gray-600">In-person & Online</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-church-primary hover:bg-church-secondary text-white font-medium"
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimesSection;
