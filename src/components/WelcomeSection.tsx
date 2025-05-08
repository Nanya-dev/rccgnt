import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const WelcomeSection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  
  // Images for the slideshow
  const images = [
    "/picture 1.jpeg",
    "/picture 2.jpeg",
    "/picture 3.jpeg"
  ];
  
  // Auto rotation for the slideshow
  useEffect(() => {
    if (!api) return;
    
    // Change slide every 5 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [api]);
  
  // Update current slide index when slide changes
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    // Cleanup event listener on unmount
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-church-dark">
              Welcome to <span className="text-church-primary">A New Thing Parish</span>
            </h2>
            <div className="w-20 h-1 bg-church-secondary mb-6"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At RCCG A New Thing Parish, we believe in fostering a community where 
              faith, love, and service converge. Our mission is to bring people to 
              the saving knowledge of Jesus Christ and help them grow spiritually.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Whether you're a long-time believer or just beginning to explore faith, 
              you'll find a warm and welcoming community here. We invite you to join us 
              for worship and discover how God is doing a new thing in your life.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              You are invited to an Extraordinary Worship Experience at the Redeemed Christian Church of God, 
              A New Thing Parish, Port Harcourt Rivers.
            </p>
            <Button 
              asChild
              className="bg-church-primary hover:bg-church-secondary text-white font-medium"
            >
              <Link to="/about">About Our Church</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-church-primary"></div>
              <Carousel className="w-full" setApi={setApi}>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`Church image ${index + 1}`} 
                        className="relative z-10 w-full h-full object-cover aspect-[4/3]"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        current === index ? "bg-church-primary" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    ></button>
                  ))}
                </div>
                <CarouselPrevious variant="outline" className="left-2 bg-white/80 hover:bg-white" />
                <CarouselNext variant="outline" className="right-2 bg-white/80 hover:bg-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
