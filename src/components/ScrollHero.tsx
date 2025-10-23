import { useEffect, useState } from "react";
import airplaneExterior from "@/assets/airplane-exterior.jpg";
import airplaneCockpit from "@/assets/airplane-cockpit.jpg";
import airplaneCabin from "@/assets/airplane-cabin.jpg";
import { Plane } from "lucide-react";

const ScrollHero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight * 2;
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBackgroundImage = () => {
    if (scrollProgress < 0.33) return airplaneExterior;
    if (scrollProgress < 0.66) return airplaneCockpit;
    return airplaneCabin;
  };

  const getTitle = () => {
    if (scrollProgress < 0.33)
      return "Experience Premium Travel";
    if (scrollProgress < 0.66)
      return "Precision in Every Journey";
    return "Luxury Redefined";
  };

  const getSubtitle = () => {
    if (scrollProgress < 0.33)
      return "Discover the world with unmatched comfort";
    if (scrollProgress < 0.66)
      return "Advanced technology for your safety";
    return "First-class excellence at every altitude";
  };

  return (
    <div className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image with Transition */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${getBackgroundImage()})`,
            filter: `brightness(${0.4 + scrollProgress * 0.2})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center px-4 max-w-4xl animate-fade-in">
            <div className="mb-8 inline-block p-4 rounded-full bg-primary/10 backdrop-blur-sm">
              <Plane className="w-12 h-12 text-primary-foreground animate-pulse" />
            </div>
            <h1
              className="text-6xl md:text-8xl font-bold mb-6 text-primary-foreground transition-all duration-700"
              style={{
                opacity: 1 - Math.abs((scrollProgress % 0.33) * 3 - 0.5) * 2,
                transform: `scale(${1 - Math.abs((scrollProgress % 0.33) * 3 - 0.5) * 0.1})`,
              }}
            >
              {getTitle()}
            </h1>
            <p
              className="text-xl md:text-2xl text-primary-foreground/90 transition-all duration-700"
              style={{
                opacity: 1 - Math.abs((scrollProgress % 0.33) * 3 - 0.5) * 2,
              }}
            >
              {getSubtitle()}
            </p>
            <div className="mt-12 text-primary-foreground/60">
              <p className="text-sm animate-bounce">Scroll to explore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollHero;
