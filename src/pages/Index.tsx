import { useState } from "react";
import ScrollHero from "@/components/ScrollHero";
import FlightSearch from "@/components/FlightSearch";
import Globe from "@/components/Globe";
import { Plane } from "lucide-react";

const Index = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSearch = (sourceCity: string, destinationCity: string) => {
    setSource(sourceCity);
    setDestination(destinationCity);
    
    // Scroll to globe
    const globeSection = document.getElementById("globe-section");
    if (globeSection) {
      globeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SkyRoutes
            </span>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#search" className="hover:text-primary transition-colors">
              Search
            </a>
            <a href="#globe-section" className="hover:text-primary transition-colors">
              Routes
            </a>
          </div>
        </div>
      </nav>

      {/* Scroll Hero Section */}
      <ScrollHero />

      {/* Search Section */}
      <section id="search" className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <FlightSearch onSearch={handleSearch} />
        </div>
      </section>

      {/* Globe Section */}
      <section id="globe-section" className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              Explore Flight Routes
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch your journey come to life on our interactive globe
            </p>
          </div>
          <Globe source={source} destination={destination} />
          
          {source && destination && (
            <div className="mt-8 text-center animate-fade-in">
              <div className="inline-block px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
                <p className="text-sm font-medium">
                  <span className="text-primary">{source}</span>
                  {" → "}
                  <span className="text-secondary">{destination}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Plane className="w-5 h-5 text-primary" />
            <span className="font-bold">SkyRoutes</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Connecting the world, one flight at a time
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
