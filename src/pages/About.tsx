
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Church leadership data
  const leaders = [
    {
      id: 1,
      name: "Pastor John Smith",
      role: "Senior Pastor",
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Pastor John has been leading our congregation for over 15 years with wisdom and compassion."
    },
    {
      id: 2,
      name: "Mary Johnson",
      role: "Associate Pastor",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Pastor Mary oversees our youth ministry and community outreach programs."
    },
    {
      id: 3,
      name: "Aiyenitaju Daniel Iyanuoluwa",
      role: "Head of Youth Choir",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Daniel leads our worship team with a passion for creating an atmosphere of praise."
    }
  ];

  const missionStatements = [
    "To make heaven.",
    "To take as many people with us.",
    "To have a member of RCCG in every family of all nations.",
    "To accomplish No. 1 above, holiness will be our lifestyle.",
    "To plant churches within five minutes walking distance in every city and town of developing countries and within five minutes driving distance in every city and town of developed countries.",
    "We will pursue these objectives until every Nation in the world is reached for the Lord Jesus Christ."
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <div className="pt-24 pb-16 bg-church-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            About Our Church
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn more about RCCG A New Thing Parish, our mission, vision, and the people who make up our church family.
          </p>
        </div>
      </div>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
                Our Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-church-secondary mx-auto mb-8"></div>
              <div className="bg-church-accent p-8 rounded-lg mb-8">
                <ol className="list-decimal pl-5 space-y-4 text-lg text-gray-700">
                  {missionStatements.map((statement, index) => (
                    <li key={index} className="leading-relaxed">{statement}</li>
                  ))}
                </ol>
              </div>
              
            </div>
            
        
            
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
                Our Values
              </h2>
              <div className="w-20 h-1 bg-church-secondary mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-church-accent p-8 rounded-lg">
                  <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">Faith</h3>
                  <p className="text-gray-700">
                    We believe in the power of faith in God and His Word to transform lives and circumstances.
                  </p>
                </div>
                <div className="bg-church-accent p-8 rounded-lg">
                  <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">Love</h3>
                  <p className="text-gray-700">
                    We are committed to showing Christ's love to everyone, regardless of background or circumstance.
                  </p>
                </div>
                <div className="bg-church-accent p-8 rounded-lg">
                  <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in all we do as a reflection of our devotion to God.
                  </p>
                </div>
                <div className="bg-church-accent p-8 rounded-lg">
                  <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">Service</h3>
                  <p className="text-gray-700">
                    We are dedicated to serving our church family and the broader community with humility and compassion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Church History */}
      <section className="py-20 bg-church-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
              Our History
            </h2>
            <div className="w-20 h-1 bg-church-secondary mx-auto mb-8"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-6 leading-relaxed">
                RCCG A New Thing Parish was established in 2010 with a clear vision from God to create 
                a place where people could experience His transformative power. What began as a small 
                gathering of believers has grown into a vibrant community of faith.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Over the years, we have witnessed countless miracles, lives changed, and souls saved 
                through the faithful preaching of God's Word and the ministry of the Holy Spirit.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to build on the foundation laid by our founding members, 
                always looking forward to what God will do next in our midst. We believe He is 
                constantly doing a new thing among us, as promised in Isaiah 43:19.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
            Our Leadership
          </h2>
          <div className="w-20 h-1 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Meet the dedicated leaders who serve our church community with passion and purpose.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <Card key={leader.id} className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-church-dark mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-church-primary font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-700">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
