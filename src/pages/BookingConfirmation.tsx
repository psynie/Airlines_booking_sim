import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Plane, Calendar, Users, CreditCard, Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";
import DestinationInfo from "@/components/DestinationInfo";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { flight, source, destination, date, passengers, sourceAirport, destAirport } = location.state || {};

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmBooking = () => {
    if (!formData.firstName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsConfirmed(true);
    toast.success("Booking confirmed! Check your email for details.");
  };

  if (!flight) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">No Flight Selected</h2>
          <p className="text-muted-foreground mb-6">Please select a flight to book.</p>
          <Button onClick={() => navigate("/")}>Go to Search</Button>
        </Card>
      </div>
    );
  }

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-12">
          <Card className="max-w-3xl mx-auto p-8 text-center">
            <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Booking Confirmed!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your booking reference: <span className="font-bold text-foreground">BK{Date.now().toString().slice(-8)}</span>
            </p>

            <Card className="p-6 bg-muted/50 mb-8">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold mb-4">Flight Details</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Flight:</span> {flight.airline} {flight.flightNumber}</p>
                    <p><span className="text-muted-foreground">Route:</span> {sourceAirport?.city} → {destAirport?.city}</p>
                    <p><span className="text-muted-foreground">Date:</span> {date}</p>
                    <p><span className="text-muted-foreground">Time:</span> {flight.departure} - {flight.arrival}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Passenger Details</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">Name:</span> {formData.firstName} {formData.lastName}</p>
                    <p><span className="text-muted-foreground">Email:</span> {formData.email}</p>
                    <p><span className="text-muted-foreground">Phone:</span> {formData.phone}</p>
                    <p><span className="text-muted-foreground">Passengers:</span> {passengers || 1}</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate("/")} variant="outline" size="lg">
                Book Another Flight
              </Button>
              <Button onClick={() => window.print()} size="lg">
                Download Ticket
              </Button>
            </div>
          </Card>

          {/* Destination Info */}
          <div className="mt-12">
            <DestinationInfo airportCode={destination} />
          </div>
        </div>
      </div>
    );
  }

  const totalPrice = flight.price * (Number(passengers) || 1);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Complete Your Booking
        </h1>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Passenger Details */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-primary" />
                Passenger Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>
            </Card>

            {/* Payment Details */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-primary" />
                Payment Information
              </h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Plane className="w-5 h-5 text-primary mt-1" />
                  <div className="flex-1">
                    <p className="font-semibold">{flight.airline}</p>
                    <p className="text-sm text-muted-foreground">{flight.flightNumber}</p>
                  </div>
                  <Badge>{flight.class}</Badge>
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Route</span>
                    <span className="font-medium">{sourceAirport?.code} → {destAirport?.code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">{date || "Not selected"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Departure</span>
                    <span className="font-medium">{flight.departure}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Arrival</span>
                    <span className="font-medium">{flight.arrival}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{flight.duration}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Base Fare × {passengers || 1}</span>
                    <span>₹{flight.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Taxes & Fees</span>
                    <span>₹{Math.floor(flight.price * 0.15).toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{Math.floor(totalPrice * 1.15).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleConfirmBooking}
                className="w-full"
                size="lg"
              >
                Confirm Booking
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                By confirming, you agree to our terms and conditions
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
