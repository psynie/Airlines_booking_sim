import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface GlobeProps {
  source?: string;
  destination?: string;
}

const Globe = ({ source, destination }: GlobeProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [isTokenSet, setIsTokenSet] = useState(false);

  const cityCoordinates: { [key: string]: [number, number] } = {
    "new york": [-74.006, 40.7128],
    "jfk": [-73.7781, 40.6413],
    "london": [-0.1276, 51.5074],
    "lhr": [-0.4543, 51.4700],
    "paris": [2.3522, 48.8566],
    "cdg": [2.5479, 49.0097],
    "tokyo": [139.6917, 35.6895],
    "nrt": [140.3929, 35.7720],
    "dubai": [55.2708, 25.2048],
    "dxb": [55.3644, 25.2532],
    "singapore": [103.8198, 1.3521],
    "sin": [103.9915, 1.3644],
    "los angeles": [-118.2437, 34.0522],
    "lax": [-118.4085, 33.9416],
    "sydney": [151.2093, -33.8688],
    "syd": [151.1753, -33.9399],
  };

  const getCityCoordinates = (city: string): [number, number] | null => {
    const normalized = city.toLowerCase().trim();
    return cityCoordinates[normalized] || null;
  };

  useEffect(() => {
    if (!mapContainer.current || !isTokenSet) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      projection: "globe",
      zoom: 1.5,
      center: [30, 15],
      pitch: 0,
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      "top-right"
    );

    map.current.on("style.load", () => {
      map.current?.setFog({
        color: "rgb(25, 50, 90)",
        "high-color": "rgb(15, 30, 60)",
        "horizon-blend": 0.3,
      });
    });

    const secondsPerRevolution = 180;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    let userInteracting = false;

    function spinGlobe() {
      if (!map.current) return;

      const zoom = map.current.getZoom();
      if (!userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n) => n });
      }
    }

    map.current.on("mousedown", () => {
      userInteracting = true;
    });

    map.current.on("mouseup", () => {
      userInteracting = false;
      spinGlobe();
    });

    map.current.on("moveend", () => {
      spinGlobe();
    });

    spinGlobe();

    return () => {
      map.current?.remove();
    };
  }, [isTokenSet, mapboxToken]);

  useEffect(() => {
    if (!map.current || !source || !destination || !isTokenSet) return;

    const sourceCoords = getCityCoordinates(source);
    const destCoords = getCityCoordinates(destination);

    if (!sourceCoords || !destCoords) {
      toast.error("City not found. Try: New York, London, Paris, Tokyo, Dubai, Singapore, Los Angeles, Sydney");
      return;
    }

    // Remove existing layers and sources
    if (map.current.getLayer("route")) map.current.removeLayer("route");
    if (map.current.getSource("route")) map.current.removeSource("route");

    // Add arc line
    map.current.addSource("route", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [sourceCoords, destCoords],
        },
      },
    });

    map.current.addLayer({
      id: "route",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#FFB800",
        "line-width": 3,
        "line-opacity": 0.8,
      },
    });

    // Add markers
    new mapboxgl.Marker({ color: "#1E40AF" })
      .setLngLat(sourceCoords)
      .setPopup(new mapboxgl.Popup().setText(source))
      .addTo(map.current);

    new mapboxgl.Marker({ color: "#FFB800" })
      .setLngLat(destCoords)
      .setPopup(new mapboxgl.Popup().setText(destination))
      .addTo(map.current);

    // Fit bounds
    const bounds = new mapboxgl.LngLatBounds();
    bounds.extend(sourceCoords);
    bounds.extend(destCoords);
    map.current.fitBounds(bounds, { padding: 100, duration: 2000 });

    toast.success(`Route displayed: ${source} → ${destination}`);
  }, [source, destination, isTokenSet]);

  if (!isTokenSet) {
    return (
      <div className="relative w-full h-[600px] flex items-center justify-center bg-card/50 rounded-lg border border-border">
        <div className="max-w-md w-full px-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Enter Mapbox Token</h3>
          <p className="text-muted-foreground mb-4 text-center text-sm">
            Get your free token at{" "}
            <a
              href="https://mapbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="pk.eyJ1..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="bg-background"
            />
            <Button
              onClick={() => {
                if (mapboxToken) {
                  setIsTokenSet(true);
                  toast.success("Token set successfully!");
                } else {
                  toast.error("Please enter a valid token");
                }
              }}
              className="w-full bg-primary hover:bg-primary-glow"
            >
              Initialize Globe
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px]">
      <div
        ref={mapContainer}
        className="absolute inset-0 rounded-lg shadow-xl overflow-hidden"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/20 rounded-lg" />
    </div>
  );
};

export default Globe;
