// Comprehensive airport data with destination info
export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  type: 'international' | 'domestic';
  attractions?: string[];
  description?: string;
}

export const airports: Airport[] = [
  // Major International Airports
  { code: "JFK", name: "John F. Kennedy International", city: "New York", country: "USA", lat: 40.6413, lng: -73.7781, type: "international", attractions: ["Statue of Liberty", "Central Park", "Times Square"], description: "The city that never sleeps" },
  { code: "LAX", name: "Los Angeles International", city: "Los Angeles", country: "USA", lat: 33.9416, lng: -118.4085, type: "international", attractions: ["Hollywood Sign", "Santa Monica Pier", "Getty Center"], description: "Entertainment capital of the world" },
  { code: "ORD", name: "O'Hare International", city: "Chicago", country: "USA", lat: 41.9742, lng: -87.9073, type: "international", attractions: ["Millennium Park", "Navy Pier", "Willis Tower"], description: "The Windy City" },
  { code: "LHR", name: "London Heathrow", city: "London", country: "UK", lat: 51.4700, lng: -0.4543, type: "international", attractions: ["Big Ben", "Tower Bridge", "British Museum"], description: "Historic capital with royal heritage" },
  { code: "CDG", name: "Charles de Gaulle", city: "Paris", country: "France", lat: 49.0097, lng: 2.5479, type: "international", attractions: ["Eiffel Tower", "Louvre Museum", "Arc de Triomphe"], description: "City of lights and romance" },
  { code: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany", lat: 50.0379, lng: 8.5622, type: "international", attractions: ["Römerberg", "Main Tower", "Palmengarten"], description: "Financial hub of Europe" },
  { code: "AMS", name: "Amsterdam Schiphol", city: "Amsterdam", country: "Netherlands", lat: 52.3105, lng: 4.7683, type: "international", attractions: ["Van Gogh Museum", "Anne Frank House", "Canal Cruises"], description: "City of canals and culture" },
  { code: "DXB", name: "Dubai International", city: "Dubai", country: "UAE", lat: 25.2532, lng: 55.3644, type: "international", attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah"], description: "Luxury and modern architecture" },
  { code: "SIN", name: "Singapore Changi", city: "Singapore", country: "Singapore", lat: 1.3644, lng: 103.9915, type: "international", attractions: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"], description: "Garden city with futuristic skyline" },
  { code: "HKG", name: "Hong Kong International", city: "Hong Kong", country: "China", lat: 22.3080, lng: 113.9185, type: "international", attractions: ["Victoria Peak", "Temple Street Market", "Big Buddha"], description: "East meets West" },
  { code: "NRT", name: "Tokyo Narita", city: "Tokyo", country: "Japan", lat: 35.7720, lng: 140.3929, type: "international", attractions: ["Senso-ji Temple", "Tokyo Tower", "Shibuya Crossing"], description: "Blend of tradition and technology" },
  { code: "ICN", name: "Seoul Incheon", city: "Seoul", country: "South Korea", lat: 37.4602, lng: 126.4407, type: "international", attractions: ["Gyeongbokgung Palace", "N Seoul Tower", "Myeongdong"], description: "K-culture and ancient palaces" },
  { code: "SYD", name: "Sydney Kingsford Smith", city: "Sydney", country: "Australia", lat: -33.9399, lng: 151.1753, type: "international", attractions: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach"], description: "Iconic harbor city" },
  { code: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia", lat: -37.6690, lng: 144.8410, type: "international", attractions: ["Federation Square", "Royal Botanic Gardens", "Great Ocean Road"], description: "Cultural capital of Australia" },
  
  // Indian International Airports
  { code: "DEL", name: "Indira Gandhi International", city: "New Delhi", country: "India", lat: 28.5562, lng: 77.1000, type: "international", attractions: ["Red Fort", "India Gate", "Qutub Minar"], description: "Capital city with Mughal heritage" },
  { code: "BOM", name: "Chhatrapati Shivaji Maharaj International", city: "Mumbai", country: "India", lat: 19.0896, lng: 72.8656, type: "international", attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves"], description: "City of dreams and Bollywood" },
  { code: "BLR", name: "Kempegowda International", city: "Bangalore", country: "India", lat: 13.1986, lng: 77.7066, type: "international", attractions: ["Lalbagh Garden", "Bangalore Palace", "ISKCON Temple"], description: "Silicon Valley of India" },
  { code: "MAA", name: "Chennai International", city: "Chennai", country: "India", lat: 12.9941, lng: 80.1709, type: "international", attractions: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George"], description: "Gateway to South India" },
  { code: "HYD", name: "Rajiv Gandhi International", city: "Hyderabad", country: "India", lat: 17.4627, lng: 78.3268, type: "international", attractions: ["Charminar", "Golconda Fort", "Ramoji Film City"], description: "City of pearls and biryani" },
  { code: "CCU", name: "Netaji Subhas Chandra Bose International", city: "Kolkata", country: "India", lat: 22.6549, lng: 88.4467, type: "international", attractions: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple"], description: "Cultural capital of India" },
  { code: "COK", name: "Cochin International", city: "Kochi", country: "India", lat: 10.1520, lng: 76.4019, type: "international", attractions: ["Fort Kochi", "Chinese Fishing Nets", "Backwaters"], description: "Queen of Arabian Sea" },
  
  // Indian Domestic Airports
  { code: "GOI", name: "Goa International", city: "Goa", country: "India", lat: 15.3800, lng: 74.6333, type: "domestic", attractions: ["Beaches", "Portuguese Churches", "Spice Plantations"], description: "Beach paradise" },
  { code: "PNQ", name: "Pune Airport", city: "Pune", country: "India", lat: 18.5793, lng: 73.9197, type: "domestic", attractions: ["Shaniwar Wada", "Aga Khan Palace", "Osho Ashram"], description: "Oxford of the East" },
  { code: "AMD", name: "Sardar Vallabhbhai Patel International", city: "Ahmedabad", country: "India", lat: 23.0772, lng: 72.6347, type: "domestic", attractions: ["Sabarmati Ashram", "Akshardham Temple", "Kankaria Lake"], description: "Heritage city" },
  { code: "JAI", name: "Jaipur International", city: "Jaipur", country: "India", lat: 26.8242, lng: 75.8122, type: "domestic", attractions: ["Hawa Mahal", "Amber Fort", "City Palace"], description: "Pink City of India" },
  { code: "IXC", name: "Chandigarh International", city: "Chandigarh", country: "India", lat: 30.6735, lng: 76.7884, type: "domestic", attractions: ["Rock Garden", "Sukhna Lake", "Rose Garden"], description: "Planned city" },
  { code: "TRV", name: "Trivandrum International", city: "Thiruvananthapuram", country: "India", lat: 8.4821, lng: 76.9200, type: "domestic", attractions: ["Padmanabhaswamy Temple", "Kovalam Beach", "Napier Museum"], description: "City of festivals" },
  { code: "GAU", name: "Lokpriya Gopinath Bordoloi International", city: "Guwahati", country: "India", lat: 26.1061, lng: 91.5859, type: "domestic", attractions: ["Kamakhya Temple", "Brahmaputra River Cruise", "Assam State Museum"], description: "Gateway to Northeast" },
  { code: "VNS", name: "Lal Bahadur Shastri Airport", city: "Varanasi", country: "India", lat: 25.4524, lng: 82.8592, type: "domestic", attractions: ["Ganges Ghats", "Kashi Vishwanath Temple", "Sarnath"], description: "Spiritual capital" },
  { code: "IXB", name: "Bagdogra Airport", city: "Bagdogra", country: "India", lat: 26.6812, lng: 88.3286, type: "domestic", attractions: ["Darjeeling Tea Gardens", "Tiger Hill", "Mirik Lake"], description: "Gateway to Himalayas" },
  { code: "LKO", name: "Chaudhary Charan Singh International", city: "Lucknow", country: "India", lat: 26.7606, lng: 80.8893, type: "domestic", attractions: ["Bara Imambara", "Rumi Darwaza", "British Residency"], description: "City of Nawabs" },
];

export const getAirportByCode = (code: string): Airport | undefined => {
  return airports.find(a => a.code.toUpperCase() === code.toUpperCase());
};

export const getInternationalAirports = (): Airport[] => {
  return airports.filter(a => a.type === 'international');
};

export const getDomesticAirports = (): Airport[] => {
  return airports.filter(a => a.type === 'domestic');
};
