import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const WelcomeSection = () => {
  const images = [
    "/picture 1.jpeg", 
    "/picture 2.jpeg",
    "/picture 3.jpeg",   
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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
            <Button 
              asChild
              className="bg-church-primary hover:bg-church-secondary text-white font-medium"
            >
              <Link to="/about">About Our Church</Link>
            </Button>
          </div>
          <div className="md:w-1/2 h-48">
          <div className="relative max-w-md mx-auto">
          <div className="absolute inset-0 border-2 border-church-primary"></div>

              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img 
                      src={image} 
                      alt={`Slide ${index + 1}`} 
                      className="relative z-10 w-full aspect-[4/3]  h-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection
