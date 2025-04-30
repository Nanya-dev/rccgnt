import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-church-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">RCCG A New Thing Parish</h3>
            <p className="mb-6 text-gray-300">
              Where God makes all things new. Join us as we worship, grow, and serve together in Christ.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/r/18NgTLjSdP/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-church-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/newthingmedia129?igsh=ZjJpODJqNGlpNDgz" target="_blank" rel="noopener noreferrer" className="text-white hover:text-church-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-church-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com/@rccganewthingparish?si=u3Pl8yrwEkwLlmx7" target="_blank" rel="noopener noreferrer" className="text-white hover:text-church-secondary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-church-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-church-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-church-secondary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-church-secondary transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-church-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Service Times</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-church-secondary" />
                <div>
                  <p className="font-medium">Sunday Service</p>
                  <p className="text-gray-300">8:00 AM - 11:30 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-church-secondary" />
                <div>
                  <p className="font-medium">Bible Study</p>
                  <p className="text-gray-300">Tuesday 5:30 PM - 6:30 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-church-secondary" />
                <div>
                  <p className="font-medium">Faith Clinic</p>
                  <p className="text-gray-300">Thursday 5:30 PM - 6:30 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-church-secondary" />
                <p className="text-gray-300">No 6 Owhor Close Rumuowha Eneka. Port Harcourt,Nigeria</p>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-church-secondary" />
                <p className="text-gray-300">+234 805 501 9445</p>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-church-secondary" />
                <p className="text-gray-300">newthingmedia129@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RCCG A New Thing Parish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
