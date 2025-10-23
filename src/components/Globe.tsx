import { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";

interface GlobeProps {
  source?: string;
  destination?: string;
}

// Worldwide airport coordinates
const airports: { [key: string]: { lat: number; lng: number; name: string } } = {
  // North America
  "JFK": { lat: 40.6413, lng: -73.7781, name: "New York JFK" },
  "LAX": { lat: 33.9416, lng: -118.4085, name: "Los Angeles" },
  "ORD": { lat: 41.9742, lng: -87.9073, name: "Chicago O'Hare" },
  "DFW": { lat: 32.8998, lng: -97.0403, name: "Dallas Fort Worth" },
  "MIA": { lat: 25.7959, lng: -80.2870, name: "Miami" },
  "SFO": { lat: 37.6213, lng: -122.3790, name: "San Francisco" },
  "SEA": { lat: 47.4502, lng: -122.3088, name: "Seattle" },
  "YYZ": { lat: 43.6777, lng: -79.6248, name: "Toronto" },
  "YVR": { lat: 49.1967, lng: -123.1815, name: "Vancouver" },
  "MEX": { lat: 19.4363, lng: -99.0721, name: "Mexico City" },
  
  // Europe
  "LHR": { lat: 51.4700, lng: -0.4543, name: "London Heathrow" },
  "CDG": { lat: 49.0097, lng: 2.5479, name: "Paris Charles de Gaulle" },
  "FRA": { lat: 50.0379, lng: 8.5622, name: "Frankfurt" },
  "AMS": { lat: 52.3105, lng: 4.7683, name: "Amsterdam" },
  "MAD": { lat: 40.4936, lng: -3.5668, name: "Madrid" },
  "FCO": { lat: 41.8003, lng: 12.2389, name: "Rome Fiumicino" },
  "IST": { lat: 41.2753, lng: 28.7519, name: "Istanbul" },
  "MUC": { lat: 48.3537, lng: 11.7750, name: "Munich" },
  "VIE": { lat: 48.1103, lng: 16.5697, name: "Vienna" },
  "ZRH": { lat: 47.4647, lng: 8.5492, name: "Zurich" },
  
  // Asia
  "DXB": { lat: 25.2532, lng: 55.3644, name: "Dubai" },
  "SIN": { lat: 1.3644, lng: 103.9915, name: "Singapore" },
  "HKG": { lat: 22.3080, lng: 113.9185, name: "Hong Kong" },
  "NRT": { lat: 35.7720, lng: 140.3929, name: "Tokyo Narita" },
  "ICN": { lat: 37.4602, lng: 126.4407, name: "Seoul Incheon" },
  "PEK": { lat: 40.0799, lng: 116.6031, name: "Beijing" },
  "PVG": { lat: 31.1443, lng: 121.8083, name: "Shanghai Pudong" },
  "BKK": { lat: 13.6900, lng: 100.7501, name: "Bangkok" },
  "KUL": { lat: 2.7456, lng: 101.7072, name: "Kuala Lumpur" },
  "DEL": { lat: 28.5562, lng: 77.1000, name: "New Delhi" },
  "BOM": { lat: 19.0896, lng: 72.8656, name: "Mumbai" },
  "BLR": { lat: 13.1986, lng: 77.7066, name: "Bangalore" },
  "DOH": { lat: 25.2731, lng: 51.6080, name: "Doha" },
  "AUH": { lat: 24.4330, lng: 54.6511, name: "Abu Dhabi" },
  
  // Oceania
  "SYD": { lat: -33.9399, lng: 151.1753, name: "Sydney" },
  "MEL": { lat: -37.6690, lng: 144.8410, name: "Melbourne" },
  "AKL": { lat: -37.0082, lng: 174.7850, name: "Auckland" },
  "BNE": { lat: -27.3942, lng: 153.1218, name: "Brisbane" },
  
  // South America
  "GRU": { lat: -23.4356, lng: -46.4731, name: "São Paulo" },
  "GIG": { lat: -22.8099, lng: -43.2505, name: "Rio de Janeiro" },
  "EZE": { lat: -34.8222, lng: -58.5358, name: "Buenos Aires" },
  "BOG": { lat: 4.7016, lng: -74.1469, name: "Bogotá" },
  "LIM": { lat: -12.0219, lng: -77.1143, name: "Lima" },
  
  // Africa
  "CAI": { lat: 30.1219, lng: 31.4056, name: "Cairo" },
  "JNB": { lat: -26.1392, lng: 28.2460, name: "Johannesburg" },
  "CPT": { lat: -33.9715, lng: 18.6021, name: "Cape Town" },
  "NBO": { lat: -1.3192, lng: 36.9278, name: "Nairobi" },
  "ADD": { lat: 8.9779, lng: 38.7992, name: "Addis Ababa" },
};

const GlobeComponent = ({ source, destination }: GlobeProps) => {
  const globeEl = useRef<any>();
  const [arcsData, setArcsData] = useState<any[]>([]);

  useEffect(() => {
    if (!source || !destination) return;

    const sourceCode = source.toUpperCase();
    const destCode = destination.toUpperCase();

    const sourceAirport = airports[sourceCode];
    const destAirport = airports[destCode];

    if (!sourceAirport || !destAirport) {
      return;
    }

    setArcsData([
      {
        startLat: sourceAirport.lat,
        startLng: sourceAirport.lng,
        endLat: destAirport.lat,
        endLng: destAirport.lng,
        color: "orange",
      },
    ]);

    // Animate globe to source
    if (globeEl.current) {
      globeEl.current.pointOfView(
        { lat: sourceAirport.lat, lng: sourceAirport.lng, altitude: 2 },
        1000
      );
    }
  }, [source, destination]);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        arcsData={arcsData}
        arcColor={() => "orange"}
        arcDashLength={0.5}
        arcDashGap={0.5}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={2000}
        backgroundColor="rgba(0,0,0,0)"
        atmosphereColor="rgba(30, 144, 255, 0.6)"
        atmosphereAltitude={0.15}
      />
    </div>
  );
};

export default GlobeComponent;
