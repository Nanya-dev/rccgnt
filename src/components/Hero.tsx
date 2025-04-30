import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const images = [
  "/s1.jpeg",
  "/s2.jpeg",
  "/s3.jpeg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url('${images[currentImageIndex]}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-church-dark/70 to-church-dark/90"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col items-center justify-center h-full text-center pt-20">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            RCCG <span className="text-church-secondary">A New Thing</span> Parish
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            "Behold, I will do a new thing; now it shall spring forth; shall ye not know it? 
            I will even make a way in the wilderness, and rivers in the desert." - Isaiah 43:19
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              asChild
              className="bg-church-primary hover:bg-church-secondary text-white font-medium px-8 py-6"
            >
              <Link to="/services">Join Us on Sunday</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="bg-gray-800 text-white border-gray-800 font-medium px-8 py-6"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Down arrow for scrolling */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-white"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;