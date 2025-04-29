import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img src="/logoo.jpeg" alt="Logo" className="w-10 h-10 mr-3" />{/* Use the logo here */}
              <div>
                <h1 className="font-playfair font-bold text-xl text-church-dark">RCCG</h1>
                <p className="text-xs text-church-primary">A New Thing Parish</p>
              </div>
            </Link>
          </div>
          
          {isMobile ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          ) : (
            <div className="hidden md:flex space-x-8">
              <NavLinks onClick={() => {}} />
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 pt-24 px-4 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 text-center">
          <NavLinks onClick={closeMenu} />
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  onClick: () => void;
}

const NavLinks = ({ onClick }: NavLinksProps) => {
  return (
    <>
      <Link 
        to="/" 
        className="font-medium text-gray-700 hover:text-church-primary transition-colors"
        onClick={onClick}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className="font-medium text-gray-700 hover:text-church-primary transition-colors"
        onClick={onClick}
      >
        About
      </Link>
      <Link 
        to="/services" 
        className="font-medium text-gray-700 hover:text-church-primary transition-colors"
        onClick={onClick}
      >
        Services
      </Link>
      <Link 
        to="/events" 
        className="font-medium text-gray-700 hover:text-church-primary transition-colors"
        onClick={onClick}
      >
        Events
      </Link>
      <Link 
        to="/contact" 
        className="font-medium text-gray-700 hover:text-church-primary transition-colors"
        onClick={onClick}
      >
        Contact
      </Link>
      <Link 
        to="/give-online"
        onClick={onClick}
      >
        <Button 
          variant="default" 
          className="bg-church-primary hover:bg-church-secondary text-white"
        >
          Give Online
        </Button>
      </Link>
    </>
  );
};

export default Navigation;
