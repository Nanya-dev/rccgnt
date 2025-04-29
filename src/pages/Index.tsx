
import React from "react";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import ServiceTimesSection from "@/components/ServiceTimesSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WelcomeSection />
      <ServiceTimesSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
