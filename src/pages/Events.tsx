
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Users, Mic, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "8:45 AM - 11:30 AM",
      location: "Main Sanctuary",
      description: "Join us for our weekly Sunday worship service featuring praise, worship, and the Word of God.",
      icon: <Calendar className="h-8 w-8 text-white" />
    },
    {
      id: 2,
      title: "Youth Picnic",
      date: "Third Saturday of the month",
      time: "3:00 PM",
      location: "Fellowship Hall",
      description: "A monthly get-to-gether designed to empower and equip our youth to live boldly for Christ.",
      icon: <Users className="h-8 w-8 text-white" />
    },
    {
      id: 3,
      title: "Jesus feeds the nation",
      date: "Every first Sunday of the month",
      time: "8:45 AM - 11:30 AM",
      location: "City Park",
      description: "Join us as we serve our community through distributing food, clothing, and sharing the love of Christ.",
      icon: <Heart className="h-8 w-8 text-white" />
    }
  
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <div className="pt-24 pb-16 bg-church-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Events & Announcements
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with all the events and activities happening at RCCG A New Thing Parish.
          </p>
        </div>
      </div>
      
      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-church-secondary mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-church-primary p-6 flex items-center justify-center">
                  {event.icon}
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold mb-3 text-church-dark">
                    {event.title}
                  </h3>
                  <p className="text-church-primary font-medium mb-4">{event.date}</p>
                  <div className="mb-4 flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <p className="text-gray-700">{event.time}</p>
                  </div>
                  <div className="mb-4 flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <p className="text-gray-700">{event.location}</p>
                  </div>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  <Button className="w-full bg-church-primary hover:bg-church-secondary text-white">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Church Calendar */}
      <section className="py-20 bg-church-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
            Church Calendar
          </h2>
          <div className="w-20 h-1 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Below is our church calendar for the current month. For more details about specific events,
            please contact the church office.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="text-center p-8 border-2 border-dashed border-church-primary rounded-lg">
              <Calendar className="h-16 w-16 text-church-primary mx-auto mb-4" />
              <h3 className="font-playfair text-2xl font-bold mb-4 text-church-dark">
                Calendar Coming Soon
              </h3>
              <p className="text-gray-700 mb-6">
                We're currently updating our online calendar system. Please check back soon for an 
                interactive calendar of all church events and activities.
              </p>
              <p className="text-gray-700">
                In the meantime, you can call the church office at +234 805 501 9445 for information 
                about upcoming events.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Announcements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
            Church Announcements
          </h2>
          <div className="w-20 h-1 bg-church-secondary mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-church-accent p-8 rounded-lg mb-8">
              <h3 className="font-playfair text-xl font-bold mb-3 text-church-dark">
                New Bible Study Series
              </h3>
              <p className="text-gray-700 mb-4">
                Starting May 1st, we'll begin a new Bible study series on the Book of Romans.
                Join us every Wednesday at 6:30 PM in the Fellowship Hall.
              </p>
            </div>
            
            <div className="bg-church-accent p-8 rounded-lg mb-8">
              <h3 className="font-playfair text-xl font-bold mb-3 text-church-dark">
                Volunteer Opportunity
              </h3>
              <p className="text-gray-700 mb-4">
                We need volunteers for our upcoming Community Outreach events..
                Please sign up at the welcome desk or contact the church office if you'd like to help.
              </p>
            </div>
            
            <div className="bg-church-accent p-8 rounded-lg">
              <h3 className="font-playfair text-xl font-bold mb-3 text-church-dark">
                Youth Picnic
              </h3>
              <p className="text-gray-700 mb-4">
                Our youth picnic holds every third Saturday of the month at City Park.
                Bring your favorite dish to share and join us for food, games, and fellowship!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
