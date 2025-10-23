import { Plane, Gift, Calendar, MapPin, Percent } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Offers = () => {
  const festiveOffers = [
    {
      title: "Holiday Season Special",
      description: "Get up to 40% off on international flights",
      validUntil: "Dec 31, 2025",
      discount: "40% OFF",
      icon: Gift,
      destinations: ["Paris", "London", "New York"],
      code: "HOLIDAY40",
    },
    {
      title: "New Year Sale",
      description: "Start the year with amazing travel deals",
      validUntil: "Jan 15, 2026",
      discount: "35% OFF",
      icon: Calendar,
      destinations: ["Dubai", "Singapore", "Tokyo"],
      code: "NEWYEAR35",
    },
    {
      title: "Summer Escape",
      description: "Beat the heat with cool beach destinations",
      validUntil: "Aug 31, 2026",
      discount: "30% OFF",
      icon: MapPin,
      destinations: ["Maldives", "Bali", "Phuket"],
      code: "SUMMER30",
    },
    {
      title: "Weekend Getaway",
      description: "Special rates for weekend travelers",
      validUntil: "Ongoing",
      discount: "25% OFF",
      icon: Percent,
      destinations: ["All Domestic Routes"],
      code: "WEEKEND25",
    },
  ];

  const seasonalDeals = [
    {
      season: "Winter Wonderland",
      routes: "Europe & North America",
      discount: "Up to 50% off",
      period: "Dec 2025 - Feb 2026",
    },
    {
      season: "Spring Break",
      routes: "Caribbean & Mexico",
      discount: "Up to 45% off",
      period: "Mar 2026 - Apr 2026",
    },
    {
      season: "Monsoon Madness",
      routes: "Southeast Asia",
      discount: "Up to 40% off",
      period: "Jun 2026 - Sep 2026",
    },
    {
      season: "Festival of Lights",
      routes: "India & Middle East",
      discount: "Up to 35% off",
      period: "Oct 2026 - Nov 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SkyRoutes
            </span>
          </a>
          <div className="flex gap-6 text-sm font-medium">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="/offers" className="text-primary">
              Offers
            </a>
            <a href="/faq" className="hover:text-primary transition-colors">
              FAQs
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Exclusive Travel Offers
          </h1>
          <p className="text-xl text-muted-foreground">
            Amazing deals and seasonal discounts for your next adventure
          </p>
        </div>
      </section>

      {/* Festive Offers */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Festive & Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {festiveOffers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                      <Badge className="bg-secondary text-secondary-foreground">
                        {offer.discount}
                      </Badge>
                    </div>
                    <CardTitle>{offer.title}</CardTitle>
                    <CardDescription>{offer.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium mb-2">Destinations:</p>
                        <div className="flex flex-wrap gap-2">
                          {offer.destinations.map((dest, idx) => (
                            <Badge key={idx} variant="outline">
                              {dest}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground mb-2">
                          Valid until: {offer.validUntil}
                        </p>
                        <p className="text-sm font-mono bg-muted px-3 py-2 rounded">
                          Code: {offer.code}
                        </p>
                      </div>
                      <Button className="w-full">Book Now</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seasonal Deals */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Seasonal Travel Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalDeals.map((deal, index) => (
              <Card key={index} className="bg-card hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">{deal.season}</CardTitle>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      {deal.discount}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {deal.routes}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{deal.period}</span>
                    <Button variant="outline">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Never Miss a Deal</CardTitle>
              <CardDescription className="text-base">
                Subscribe to our newsletter and get exclusive offers delivered to your inbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary-glow">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
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

export default Offers;
