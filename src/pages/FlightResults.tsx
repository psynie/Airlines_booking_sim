import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Clock, Calendar, DollarSign, ArrowLeft } from "lucide-react";
import { getAirportByCode } from "@/data/airports";
import { toast } from "sonner";

interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  class: string;
  stops: number;
}

const FlightResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { source, destination, date, passengers } = location.state || {};

  const sourceAirport = getAirportByCode(source || "");
  const destAirport = getAirportByCode(destination || "");

  // Generate mock flights
  const generateFlights = (): Flight[] => {
    if (!source || !destination) return [];
    
    const airlines = ["Air India", "IndiGo", "SpiceJet", "Vistara", "Emirates", "Singapore Airlines", "Lufthansa", "British Airways"];
    const flights: Flight[] = [];
    
    for (let i = 0; i < 8; i++) {
      const airline = airlines[i % airlines.length];
      const basePrice = 5000 + Math.random() * 15000;
      
      flights.push({
        id: `FL${1000 + i}`,
        airline,
        flightNumber: `${airline.substring(0, 2).toUpperCase()}${100 + i}`,
        departure: `${6 + i * 2}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        arrival: `${10 + i * 2}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
        duration: `${3 + Math.floor(Math.random() * 5)}h ${Math.floor(Math.random() * 60)}m`,
        price: Math.floor(basePrice),
        class: i % 3 === 0 ? "Business" : "Economy",
        stops: i % 4 === 0 ? 1 : 0,
      });
    }
    
    return flights.sort((a, b) => a.price - b.price);
  };

  const flights = generateFlights();

  const handleBookFlight = (flight: Flight) => {
    navigate("/booking-confirmation", {
      state: {
        flight,
        source,
        destination,
        date,
        passengers,
        sourceAirport,
        destAirport,
      },
    });
  };

  if (!source || !destination) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">No Search Results</h2>
          <p className="text-muted-foreground mb-6">Please perform a flight search first.</p>
          <Button onClick={() => navigate("/")}>Go to Search</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Search
          </Button>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                {sourceAirport?.city} → {destAirport?.city}
              </h1>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {date || "Select date"}
                </span>
                <span>{passengers || 1} Passenger{Number(passengers) > 1 ? 's' : ''}</span>
              </div>
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {flights.length} Flights Found
            </Badge>
          </div>
        </div>
      </div>

      {/* Flight Results */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-6">
          {flights.map((flight) => (
            <Card key={flight.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between flex-wrap gap-6">
                {/* Flight Info */}
                <div className="flex-1 min-w-[300px]">
                  <div className="flex items-center gap-3 mb-4">
                    <Plane className="w-5 h-5 text-primary" />
                    <div>
                      <h3 className="font-bold text-lg">{flight.airline}</h3>
                      <p className="text-sm text-muted-foreground">{flight.flightNumber}</p>
                    </div>
                    <Badge variant={flight.class === "Business" ? "default" : "secondary"}>
                      {flight.class}
                    </Badge>
                    {flight.stops > 0 && (
                      <Badge variant="outline">{flight.stops} Stop</Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <p className="text-2xl font-bold">{flight.departure}</p>
                      <p className="text-muted-foreground">{sourceAirport?.code}</p>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center">
                      <Clock className="w-4 h-4 text-muted-foreground mb-1" />
                      <p className="text-muted-foreground">{flight.duration}</p>
                      <div className="w-full h-px bg-border my-1"></div>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold">{flight.arrival}</p>
                      <p className="text-muted-foreground">{destAirport?.code}</p>
                    </div>
                  </div>
                </div>

                {/* Price & Book */}
                <div className="flex flex-col items-end gap-4">
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <DollarSign className="w-4 h-4" />
                      <span>Starting from</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">
                      ₹{flight.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                  <Button 
                    size="lg" 
                    onClick={() => handleBookFlight(flight)}
                    className="w-full"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightResults;
