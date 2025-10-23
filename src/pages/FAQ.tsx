import { Plane } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a flight?",
      answer: "Simply enter your departure and destination cities in the search form on our homepage, select your preferred dates, and click search. You'll see available flights and can complete your booking in just a few clicks.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, and various digital wallets. All transactions are secured with industry-standard encryption.",
    },
    {
      question: "Can I change or cancel my booking?",
      answer: "Yes, you can modify or cancel your booking through the 'My Bookings' section. Cancellation fees and change fees vary depending on the fare type and airline policy. Flexible fares typically allow free changes.",
    },
    {
      question: "What is your baggage policy?",
      answer: "Baggage allowances vary by airline and fare class. Economy class typically includes 1 carry-on bag and 1 checked bag (up to 23kg). Business and First class passengers usually receive additional allowances. Check your booking confirmation for specific details.",
    },
    {
      question: "How early should I arrive at the airport?",
      answer: "We recommend arriving at least 2 hours before domestic flights and 3 hours before international flights. This allows sufficient time for check-in, security screening, and boarding.",
    },
    {
      question: "Do you offer travel insurance?",
      answer: "Yes, we offer comprehensive travel insurance options during the booking process. Coverage includes trip cancellation, medical emergencies, lost baggage, and flight delays.",
    },
    {
      question: "What if my flight is delayed or cancelled?",
      answer: "In case of delays or cancellations, we'll notify you immediately via email and SMS. You'll be automatically rebooked on the next available flight, or you can request a full refund if you prefer not to travel.",
    },
    {
      question: "Can I select my seat in advance?",
      answer: "Yes, seat selection is available during booking or anytime before your flight through 'My Bookings'. Some premium seats may require an additional fee, while standard seat selection is free for most fares.",
    },
    {
      question: "Do you have a mobile app?",
      answer: "Yes, our mobile app is available for iOS and Android. You can search flights, manage bookings, check-in online, and receive real-time flight updates. Download it from the App Store or Google Play.",
    },
    {
      question: "How do I add special meal requests?",
      answer: "Special meal requests (vegetarian, vegan, kosher, halal, etc.) can be added during booking or by contacting our customer service at least 24 hours before departure.",
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
            <a href="/offers" className="hover:text-primary transition-colors">
              Offers
            </a>
            <a href="/faq" className="text-primary">
              FAQs
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about booking, travel, and our services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-8">
            Our customer support team is available 24/7 to help you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@skyroutes.com"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-glow transition-colors font-medium"
            >
              Email Support
            </a>
            <a
              href="tel:+1234567890"
              className="px-6 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors font-medium"
            >
              Call Us
            </a>
          </div>
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

export default FAQ;
