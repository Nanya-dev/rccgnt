import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Heart, Church, HandHeart, HandCoins } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface GivingOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accountDetails: {
    bankName: string;
    accountNumber: string;
    accountName: string;
  };
}

const givingOptions: GivingOption[] = [
  {
    id: "building",
    title: "Church Building Project",
    description: "Support the development and expansion of our church facilities",
    icon: <Church className="w-8 h-8 text-church-primary" />,
    accountDetails: {
      bankName: "First Bank",
      accountNumber: "1234567890",
      accountName: "RCCG A New Thing - Building Project"
    }
  },
  {
    id: "tithes",
    title: "Tithes & Offering",
    description: "Give your tithes and offerings to support the ministry",
    icon: <Heart className="w-8 h-8 text-church-primary" />,
    accountDetails: {
      bankName: "First Bank",
      accountNumber: "0987654321",
      accountName: "RCCG A New Thing - Tithes & Offering"
    }
  },
  {
    id: "welfare",
    title: "Welfare Fund",
    description: "Support community outreach and assistance programs",
    icon: <HandHeart className="w-8 h-8 text-church-primary" />,
    accountDetails: {
      bankName: "First Bank",
      accountNumber: "5678901234",
      accountName: "RCCG A New Thing - Welfare"
    }
  }
];

const GiveOnline = () => {
  const [selectedOption, setSelectedOption] = useState<GivingOption | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleOptionClick = (option: GivingOption) => {
    setSelectedOption(option);
    setIsDialogOpen(true);
    
    toast({
      title: `${option.title} selected`,
      description: "Account details are now displayed",
    });
  };

  const handleCopyAccountNumber = () => {
    if (selectedOption) {
      navigator.clipboard.writeText(selectedOption.accountDetails.accountNumber);
      toast({
        title: "Account Number Copied",
        description: "Account number copied to clipboard",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 md:px-16 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-church-dark">
            Give Online
          </h1>
          <div className="w-20 h-1 bg-church-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose a giving option below to receive the account details for your contribution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {givingOptions.map((option) => (
            <Card 
              key={option.id}
              className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-church-primary"
              onClick={() => handleOptionClick(option)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-100 rounded-full">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-3 text-church-dark">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {option.description}
                  </p>
                  <Button 
                    variant="default"
                    className="bg-church-primary hover:bg-church-secondary w-full"
                  >
                    View Account Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedOption && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 font-playfair">
                {selectedOption.icon}
                {selectedOption.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-500">Bank Name</h4>
                <p className="text-lg">{selectedOption.accountDetails.bankName}</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-500">Account Number</h4>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-mono">{selectedOption.accountDetails.accountNumber}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleCopyAccountNumber}
                    className="ml-2"
                  >
                    Copy
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-500">Account Name</h4>
                <p className="text-lg">{selectedOption.accountDetails.accountName}</p>
              </div>
              <div className="pt-4">
                <Button 
                  className="w-full bg-church-primary hover:bg-church-secondary"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
      <Footer />
    </div>
  );
};

export default GiveOnline;