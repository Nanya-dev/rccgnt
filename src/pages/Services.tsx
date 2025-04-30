import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Users, Heart, BookOpen, Music, Sparkles } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <div className="pt-24 pb-16 bg-church-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Worship Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join us for worship and experience the presence of God in our services.
          </p>
        </div>
      </div>
      
      {/* Weekly Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
            Weekly Services
          </h2>
          <div className="w-20 h-1 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            We invite you to join us for any of our weekly services.
            Each service is designed to help you connect with God and grow in your faith.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-church-accent rounded-lg p-8 flex">
              <div className="mr-6">
                <div className="bg-church-primary w-16 h-16 rounded-full flex items-center justify-center">
                  <Calendar className="text-white h-8 w-8" />
                </div>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-2 text-church-dark">
                  Sunday Worship Service
                </h3>
                <p className="text-church-primary font-medium mb-4">8:00 AM - 11:30 PM</p>
                <p className="text-gray-700 mb-4">
                  Our main weekly gathering for worship, praise, prayer, and teaching from God's Word.
                  Join us for a powerful time in God's presence.
                </p>
                <p className="text-gray-600">Location: Main Sanctuary</p>
              </div>
            </div>
            
            <div className="bg-church-accent rounded-lg p-8 flex">
              <div className="mr-6">
                <div className="bg-church-primary w-16 h-16 rounded-full flex items-center justify-center">
                  <BookOpen className="text-white h-8 w-8" />
                </div>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-2 text-church-dark">
                  Bible Study
                </h3>
                  <p className="text-church-primary font-medium mb-4">Tuesday 5:30 PM - 6:30 PM</p>
                <p className="text-gray-700 mb-4">
                  An interactive study of the Bible where we dig deeper into God's Word to gain
                  understanding and practical application for everyday life.
                </p>
                <p className="text-gray-600">Location: Fellowship Hall</p>
              </div>
            </div>
            
            <div className="bg-church-accent rounded-lg p-8 flex">
              <div className="mr-6">
                <div className="bg-church-primary w-16 h-16 rounded-full flex items-center justify-center">
                  <Sparkles className="text-white h-8 w-8" />
                </div>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-2 text-church-dark">
                 Faith Clinic
                </h3>
                <p className="text-church-primary font-medium mb-4">Thursday 5:30 PM - 6:30 PM</p>
                <p className="text-gray-700 mb-4">
                  Join us for a time of corporate prayer as we intercede for our church,
                  community, nation, and world. Experience the power of united prayer.
                </p>
                <p className="text-gray-600">Location: Fellowship Hall</p>
              </div>
            </div>
            
            <div className="bg-church-accent rounded-lg p-8 flex">
              <div className="mr-6">
                <div className="bg-church-primary w-16 h-16 rounded-full flex items-center justify-center">
                  <Users className="text-white h-8 w-8" />
                </div>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-2 text-church-dark">
                  Youth Sunday
                </h3>
                <p className="text-church-primary font-medium mb-4"> Every third Sunday of the month 8:00 PM - 12:30 PM</p>
                <p className="text-gray-700 mb-4">
                  A dynamic service designed specifically for our youth to worship,
                  learn, and grow together in a relevant and engaging environment.
                </p>
                <p className="text-gray-600">Location: Youth Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Services */}
      <section className="py-20 bg-church-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
            Special Services
          </h2>
          <div className="w-20 h-1 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Throughout the year, we hold special services to celebrate important
            occasions in the Christian calendar.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="mx-auto bg-church-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Music className="text-white h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">
                Praise Night
              </h3>
              <p className="text-gray-700">
                A special night dedicated to worship and praise,
                featuring our worship team and guest ministers.
                Held quarterly.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="mx-auto bg-church-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-white h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">
                Communion Service
              </h3>
              <p className="text-gray-700">
                A sacred time of remembering Christ's sacrifice
                through the Lord's Supper. Held on the first
                Sunday of each month.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="mx-auto bg-church-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Calendar className="text-white h-8 w-8" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">
                Holiday Services
              </h3>
              <p className="text-gray-700">
                Special services for Easter, Christmas, and other
                important celebrations in the Christian calendar.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
              What to Expect
            </h2>
            <div className="w-20 h-1 bg-church-secondary mx-auto mb-8"></div>
            
            <div className="bg-church-accent p-8 rounded-lg mb-8">
              <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">
                Worship Style
              </h3>
              <p className="text-gray-700 mb-4">
                Our worship combines contemporary and traditional elements, featuring a live band,
                choir, and congregational singing. We believe in creating an atmosphere where
                everyone can connect with God through worship.
              </p>
            </div>
            
            <div className="bg-church-accent p-8 rounded-lg mb-8">
              <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">
                Teaching
              </h3>
              <p className="text-gray-700 mb-4">
                Our messages are Bible-based, practical, and relevant to everyday life.
                We believe in the transformative power of God's Word and aim to present it
                in a way that is both challenging and encouraging.
              </p>
            </div>
            
            <div className="bg-church-accent p-8 rounded-lg mb-8">
              <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">
                Children's Ministry
              </h3>
              <p className="text-gray-700 mb-4">
                We provide age-appropriate classes for children during our Sunday services,
                where they can learn about God in a fun and engaging environment.
                All our children's workers are trained and vetted for safety.
              </p>
            </div>
            
            <div className="bg-church-accent p-8 rounded-lg">
              <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">
                Dress Code
              </h3>
              <p className="text-gray-700 mb-4">
                We have no formal dress code. Some members dress casually while others prefer
                more formal attire. We welcome you to come as you are and be comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
