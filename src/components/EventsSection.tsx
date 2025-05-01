import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const upcomingEvents = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "8:45 AM - 11:30 PM",
    location: "Main Sanctuary"
  },
  {
    id: 2,
    title: "Youth Sunday",
    date: "Every third Sunday of the month",
    time: "8:45 AM - 11:30 PM",
    location: "Main Sanctuary"
  },
  {
    id: 3,
    title: "Youth Picnic",
    date: "Every third Saturday of the month",
    time: "2:00 PM",
    location: "City Park"
  }
];

const EventsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-church-dark">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-church-secondary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join us for these upcoming events and be a part of our church community. 
            There's something for everyone!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-church-primary p-4 flex items-center justify-center">
                  <Calendar className="text-white h-8 w-8" />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-2 text-church-dark">
                    {event.title}
                  </h3>
                  <p className="text-church-primary font-medium mb-4">{event.date}</p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Time:</span> {event.time}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Location:</span> {event.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            asChild
            className="bg-church-primary hover:bg-church-secondary text-white font-medium"
          >
            <Link to="/events" className="flex items-center">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
