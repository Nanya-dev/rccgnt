import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Users, Mic, Heart, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const Events = () => {
  const upcomingEvents = [
     {
      id: 1,
      title: "Hour of Worship: Avalanche of Glory 2.0",
      date: "May 25, 2025",
      time: "4:00 PM",
      location: "Church Auditorium, No. 6 Owhor Close, Rumuowha, Eneka, Port Harcourt",
      description: "Join us for an extraordinary worship experience with Host: Pst. Anieken Elijah. Featuring Dynamic voices, Oke sax, Mrs. Nkiru, Love and light crew and more.",
      icon: <Music className="h-8 w-8 text-white" />,
      featured: true
    }
    {
      id: 2,
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
      description: "A monthly get-to-gether designed to empower and equip our youth to live boldly for Christ.",
      icon: <Users className="h-8 w-8 text-white" />
    },
    {
      id: 3,
      title: "Jesus feeds the nation",
      date: "Every first Sunday of the month",
      time: "8:45 AM - 11:30 AM",
      location: "Main Sanctuary",
      description: "Join us as we serve our community through distributing food, clothing, and sharing the love of Christ.",
      icon: <Heart className="h-8 w-8 text-white" />
    }
  
  ];
   // Find featured event (Hour of Worship)
  const featuredEvent = upcomingEvents.find(event => event.featured)

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

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16 bg-gradient-to-br from-purple-800 to-red-600">
          <div className="container mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-2xl overflow-hidden max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 flex items-center">
                  <img 
                    src="/lovable-uploads/165d87c0-97b9-4b2a-b65d-4aba504e7d1f.png" 
                    alt="Hour of Worship: Avalanche of Glory 2.0" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="p-8 text-white flex flex-col justify-center">
                  <h2 className="text-3xl font-playfair font-bold mb-4">
                    {featuredEvent.title}
                  </h2>
                  <div className="mb-4 flex items-start">
                    <Calendar className="h-5 w-5 text-white/80 mr-2 mt-0.5" />
                    <p>{featuredEvent.date}</p>
                  </div>
                  <div className="mb-4 flex items-start">
                    <Clock className="h-5 w-5 text-white/80 mr-2 mt-0.5" />
                    <p>{featuredEvent.time}</p>
                  </div>
                  <div className="mb-6 flex items-start">
                    <MapPin className="h-5 w-5 text-white/80 mr-2 mt-0.5 flex-shrink-0" />
                    <p>{featuredEvent.location}</p>
                  </div>
                  <p className="mb-6">{featuredEvent.description}</p>
                  <Button className="bg-white text-purple-800 hover:bg-white/90 font-medium self-start">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 bg-church-secondary mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {upcomingEvents.filter(event => !event.featured).map((event) => (
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

            <div className="bg-church-accent p-8 rounded-lg mb-8">
              <h3 className="font-playfair text-xl font-bold mb-3 text-church-dark">
                Hour of Worship: Avalanche of Glory 2.0
              </h3>
              <p className="text-gray-700 mb-4">
               Join us on Sunday, May 25th at 4:00 PM for our special Hour of Worship event.
               The theme is "Avalanche of Glory 2.0" and will be hosted by Pastor Anieken Elijah.
              </p>
            </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-church-accent p-8 rounded-lg mb-8">
              <h3 className="font-playfair text-xl font-bold mb-3 text-church-dark">
                Bible Study Series
              </h3>
              <p className="text-gray-700 mb-4">
                Join us every Tuesday at 5:30 PM.
              </p>
            </div>
            
            <div className="bg-church-accent p-8 rounded-lg">
              <h3 className="font-playfair text-xl font-bold mb-3 text-church-dark">
                Youth Picnic
              </h3>
              <p className="text-gray-700 mb-4">
                Our youth picnic holds every third Saturday of the month.
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
