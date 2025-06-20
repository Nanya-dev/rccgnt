 
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  // Church leadership data
  const leaders = [
    {
      id: 1,
      name: "Pastor Aniekan Elijah N. Udo-Etuk",
      role: "Senior Pastor",
      image: "/h1.jpeg",
      bio: "Pastor Aniekan has been leading our congregation for over a year with wisdom and compassion and God's overwhelming glory."
    },
    {
      id: 2,
      name: "Good women",
      role: "",
      image: "/h2.jpeg",
      bio: "Then the prophet Miriam,Aaron's sister took a tambourine in her hand. All the women followed her playing tambourines and dancing(Exodus 15:20)"
    },
    {
      id: 3,
      name: "Youth Community",
      role: "",
      image: "/h3.jpeg",
      bio: "Jeremiah 1:4-9 ‘.... But the LORD said to me, ‘Do not say, 'I am only a child.' You must go to everyone I send you to and say whatever I command you. Do not be afraid of them, for I am with you and will rescue you,’ declares the LORD."
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
            
            <div className="mb-16">
              <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
                Our Vision
              </h2>
              <div className="w-20 h-1 bg-church-secondary mx-auto mb-8"></div>
              <p className="text-xl text-center text-gray-700 leading-relaxed">
                To be a thriving church community where God is doing a new thing in the lives of individuals, 
                families, and our community, transforming them through the power of the Holy Spirit.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
                Our Values
              </h2>
              <div className="w-20 h-1 bg-church-secondary mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-church-accent p-8 rounded-lg">
                  <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">Holiness</h3>
                  <p className="text-gray-700">
                    We are committed to a lifestyle of holiness as commanded by God in His Word, reflecting His character in all we do.
                  </p>
                </div>
                <div className="bg-church-accent p-8 rounded-lg">
                  <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">Accountability</h3>
                  <p className="text-gray-700">
                    We hold ourselves accountable to God and to one another, ensuring integrity and transparency in all our dealings.
                  </p>
                </div>
                <div className="bg-church-accent p-8 rounded-lg">
                  <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">Resourcefulness</h3>
                  <p className="text-gray-700">
                    We maximize all resources God has given us, using creativity and wisdom to advance His kingdom effectively.
                  </p>
                </div>
                <div className="bg-church-accent p-8 rounded-lg">
                  <h3 className="font-playfair text-xl font-bold mb-4 text-church-dark">Sacrifice</h3>
                  <p className="text-gray-700">
                    We embrace a lifestyle of sacrifice, following Christ's example of giving ourselves fully for God's glory and others' good.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What to Expect - Replacing Church History */}
      <section className="py-20 bg-church-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-church-dark text-center">
              What to Expect
            </h2>
            <div className="w-20 h-1 bg-church-secondary mx-auto mb-8"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Invitation to an Extraordinary Worship Experience at the Redeemed Christian Church of God, A New Thing Parish, Port Harcourt Rivers.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-church-primary mb-3">SUNDAY SERVICE:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Sunday School Starts @8:00am</li>
                  <li>Main Service Starts @8:45am</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-church-primary mb-3">TUESDAY:</h3>
                <p className="text-gray-700">Digging Deep Starts @5:30pm</p>
                <p className="text-gray-700 italic mt-2">• The Holy Spirit Reveals the Mysteries in the undiluted word of God.</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-church-primary mb-3">THURSDAY:</h3>
                <p className="text-gray-700">Faith Clinic Starts @5:30pm</p>
                <p className="text-gray-700 italic mt-2">• The Doctor of all doctors - The Lord Jesus - is still in the Business of doing wonders</p>
              </div>
              
              <p className="text-lg font-medium text-church-secondary mt-8">
                God Bless you as you come in Jesus name! Amen
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
                <div className="relative w-673 h-256 rounded-lg overflow-hidden shadow-sm">
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
