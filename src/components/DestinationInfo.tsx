import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera } from "lucide-react";
import { getAirportByCode } from "@/data/airports";

interface DestinationInfoProps {
  airportCode: string;
}

const DestinationInfo = ({ airportCode }: DestinationInfoProps) => {
  const airport = getAirportByCode(airportCode);

  if (!airport || !airport.attractions) {
    return null;
  }

  // Image URLs from Unsplash for various destinations
  const destinationImages: { [key: string]: string[] } = {
    "DEL": ["https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800", "https://images.unsplash.com/photo-1596423444321-beac6eb86f4f?w=800"],
    "BOM": ["https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800", "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800"],
    "BLR": ["https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800", "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800"],
    "GOI": ["https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800", "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=800"],
    "LHR": ["https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800", "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800"],
    "CDG": ["https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800"],
    "DXB": ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800", "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800"],
    "SIN": ["https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800", "https://images.unsplash.com/photo-1506351421178-63b52a29e1ea?w=800"],
    "NRT": ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800", "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800"],
    "SYD": ["https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800", "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800"],
  };

  const images = destinationImages[airport.code] || ["https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800", "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"];

  return (
    <Card className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-3xl font-bold">Discover {airport.city}</h2>
          <p className="text-muted-foreground">{airport.description}</p>
        </div>
      </div>

      {/* Images */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {images.map((img, idx) => (
          <div key={idx} className="relative aspect-video rounded-lg overflow-hidden group">
            <img
              src={img}
              alt={`${airport.city} attraction ${idx + 1}`}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <Camera className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">{airport.city}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Attractions */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Top Attractions</h3>
        <div className="flex flex-wrap gap-2">
          {airport.attractions.map((attraction, idx) => (
            <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
              {attraction}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default DestinationInfo;
