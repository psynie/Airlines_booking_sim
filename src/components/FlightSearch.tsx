import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Search, Users } from "lucide-react";
import { toast } from "sonner";

interface FlightSearchProps {
  onSearch: (source: string, destination: string) => void;
}

const FlightSearch = ({ onSearch }: FlightSearchProps) => {
  const navigate = useNavigate();
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const handleSearch = () => {
    if (!source || !destination) {
      toast.error("Please enter both source and destination");
      return;
    }
    if (!date) {
      toast.error("Please select a departure date");
      return;
    }
    onSearch(source, destination);
    navigate("/flight-results", {
      state: { source, destination, date, passengers }
    });
  };

  return (
    <Card className="p-8 backdrop-blur-sm bg-card/95 border-border/50 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
        Book Your Flight
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Source */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            From
          </label>
          <Input
            placeholder="e.g., DEL, BOM, JFK, DXB, LHR, SIN"
            value={source}
            onChange={(e) => setSource(e.target.value.toUpperCase())}
            className="border-border bg-background"
          />
        </div>

        {/* Destination */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            To
          </label>
          <Input
            placeholder="e.g., GOI, BLR, CDG, NRT, SYD"
            value={destination}
            onChange={(e) => setDestination(e.target.value.toUpperCase())}
            className="border-border bg-background"
          />
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            Departure Date
          </label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-border bg-background"
          />
        </div>

        {/* Passengers */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            Passengers
          </label>
          <Input
            type="number"
            min="1"
            max="9"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="border-border bg-background"
          />
        </div>
      </div>

      <Button
        onClick={handleSearch}
        className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300"
        size="lg"
      >
        <Search className="w-5 h-5 mr-2" />
        Search Flights
      </Button>
    </Card>
  );
};

export default FlightSearch;
