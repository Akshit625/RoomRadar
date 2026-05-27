const demoUsers = [
  {
    key: "admin",
    name: "RoomRadar Admin",
    email: "admin@roomradar.local",
    password: "admin123",
    role: "admin",
    phone: "9999999999"
  },
  {
    key: "ownerA",
    name: "Aarav Singh",
    email: "aarav.owner@roomradar.local",
    password: "owner123",
    role: "owner",
    phone: "9876543210"
  },
  {
    key: "ownerB",
    name: "Meera Rawat",
    email: "meera.owner@roomradar.local",
    password: "owner123",
    role: "owner",
    phone: "9811223344"
  },
  {
    key: "ownerC",
    name: "Rohit Nautiyal",
    email: "rohit.owner@roomradar.local",
    password: "owner123",
    role: "owner",
    phone: "9897011122"
  },
  {
    key: "student",
    name: "Sara Student",
    email: "student@roomradar.local",
    password: "student123",
    role: "student",
    phone: "9123456789"
  }
];

const dehradunProperties = [
  {
    ownerKey: "ownerA",
    title: "Student PG Near UPES Bidholi",
    description:
      "Fully furnished PG with Wi-Fi, meals, laundry, and daily housekeeping, ideal for students attending UPES Bidholi campus.",
    listingMode: "rent",
    propertyType: "pg",
    price: 9800,
    address: "Bidholi Road, Bidholi",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near UPES Bidholi Gate",
    nearbyCollege: "UPES Bidholi",
    distanceFromCollege: 0.9,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "fully-furnished",
    amenities: ["Wi-Fi", "Meals", "Laundry", "Power Backup"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [77.9649, 30.4162]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Shared Apartment Close to Graphic Era University",
    description:
      "A clean semi furnished apartment for shared student living with fast internet, a modular kitchen, and quick access to Graphic Era University.",
    listingMode: "rent",
    propertyType: "apartment",
    price: 16500,
    address: "Clement Town Road, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era Main Gate",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 1.4,
    bedrooms: 2,
    bathrooms: 2,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "Parking", "Water Purifier", "Geyser"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0134, 30.2697]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Affordable Hostel Beds Near DBS College",
    description:
      "Budget-friendly hostel accommodation with secure entry, study tables, and easy commuting access for students around the DBS campus area.",
    listingMode: "rent",
    propertyType: "hostel",
    price: 7200,
    address: "Karanpur Road, Karanpur",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near DBS PG College",
    nearbyCollege: "DBS College",
    distanceFromCollege: 0.8,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["CCTV", "Wi-Fi", "Mess", "RO Water"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0474, 30.3314]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Studio Flat Near DIT University Mussoorie Road",
    description:
      "Compact studio flat with balcony, fridge, induction setup, and private washroom, suitable for a single student near DIT University.",
    listingMode: "rent",
    propertyType: "studio",
    price: 11800,
    address: "Mussoorie Diversion Road, Makkawala",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near DIT University",
    nearbyCollege: "DIT University",
    distanceFromCollege: 1.2,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "fully-furnished",
    amenities: ["Balcony", "Wi-Fi", "Fridge", "Power Backup"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0725, 30.4007]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Family House for Sale Near Prem Nagar",
    description:
      "Spacious independent house in a calm neighborhood with parking, terrace space, and strong road access near the Prem Nagar education hub.",
    listingMode: "sale",
    propertyType: "house",
    price: 7200000,
    address: "Prem Nagar Main Road, Prem Nagar",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Prem Nagar Market",
    nearbyCollege: "Uttaranchal University",
    distanceFromCollege: 2.4,
    bedrooms: 3,
    bathrooms: 2,
    furnishing: "semi-furnished",
    amenities: ["Parking", "Terrace", "Water Storage", "Power Backup"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [77.9987, 30.3348]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Girls PG Near Uttaranchal University",
    description:
      "Safe girls PG with biometric entry, meals, housekeeping, and walking access to Uttaranchal University, designed for comfortable student stays.",
    listingMode: "rent",
    propertyType: "pg",
    price: 8900,
    address: "Arcadia Grant Road, Selaqui",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Uttaranchal University shuttle point",
    nearbyCollege: "Uttaranchal University",
    distanceFromCollege: 1.6,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "fully-furnished",
    amenities: ["Meals", "CCTV", "Wi-Fi", "Housekeeping"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [77.9354, 30.3871]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Economy PG Rooms in Clement Town Lane 1",
    description:
      "Budget student PG with simple furnished rooms, shared kitchen access, and a short commute to colleges in Clement Town.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3200,
    address: "Lane 1, Turner Road, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Clement Town Market",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.6,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "RO Water", "Study Table"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0298, 30.2757]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Low Budget Hostel Beds near Graphic Era Gate",
    description:
      "Shared hostel beds for students who want a low monthly budget and easy walking access to Graphic Era University.",
    listingMode: "rent",
    propertyType: "hostel",
    price: 3500,
    address: "Bell Road Hostel Block A, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Opposite Graphic Era side lane",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.7,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "Mess", "CCTV"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0118, 30.2708]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Single Room PG at Bell Road Corner",
    description:
      "Affordable single room setup with fan, cupboard, and quiet study environment close to the main Bell Road student area.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3800,
    address: "Bell Road Corner House 12, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era stationery shops",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.9,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "Cupboard", "Bike Parking"],
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0146, 30.2716]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Students Nest PG on Subhash Nagar Road",
    description:
      "Compact PG rooms with meals and laundry support, good for first-year students studying near Clement Town and Bell Road.",
    listingMode: "rent",
    propertyType: "pg",
    price: 4100,
    address: "Subhash Nagar Link Road, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near ISBT to Clement Town turn",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 2.2,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Meals", "Laundry", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0248, 30.2662]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Shared Flat Beds near Graphic Era University",
    description:
      "Shared flat with separate study desks, inverter backup, and a practical price for students wanting a Bell Road address.",
    listingMode: "rent",
    propertyType: "flat",
    price: 4300,
    address: "Flat 2B, Bell Road Extension, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era transport stop",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 1.1,
    bedrooms: 2,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Inverter", "Wi-Fi", "Water Purifier"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0167, 30.2687]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Boys PG by Clement Town Parade Ground",
    description:
      "Simple boys PG with meal plans, evening security, and easy scooter access to both college campuses in south Dehradun.",
    listingMode: "rent",
    propertyType: "pg",
    price: 4600,
    address: "Parade Ground Side Street, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Clement Town Parade Ground",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.8,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Meals", "CCTV", "Bike Parking"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0315, 30.2794]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Budget Studio near Graphic Era Hill University",
    description:
      "Small private studio with attached washroom and kitchenette for students who prefer personal space without stretching the budget.",
    listingMode: "rent",
    propertyType: "studio",
    price: 4900,
    address: "Rajawala Road Studio 7, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near GEHU shuttle pickup point",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.2,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Attached Bath", "Wi-Fi", "Induction Space"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0078, 30.2809]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Girls Hostel on Bell Road Block B",
    description:
      "Girls hostel with biometric entry, common dining area, and regular housekeeping for students attending nearby Graphic Era classes.",
    listingMode: "rent",
    propertyType: "hostel",
    price: 5100,
    address: "Block B, Bell Road, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Bell Road cafes",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.6,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "fully-furnished",
    amenities: ["Biometric Entry", "Meals", "Wi-Fi", "Housekeeping"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0126, 30.2701]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Clement Town Student Flatshare 1",
    description:
      "Budget flatshare with two beds per room, regular water supply, and a calm residential setting for college routines.",
    listingMode: "rent",
    propertyType: "flat",
    price: 5300,
    address: "Flatshare House 21, Turner Road, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Turner Road crossing",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.7,
    bedrooms: 2,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "Water Storage", "Cupboard"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0284, 30.2738]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Meals Included PG near GEU Library Road",
    description:
      "Student PG with breakfast and dinner included, plus a quick route to Graphic Era University library and coaching lanes.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5500,
    address: "Library Road House 5, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era library side",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.8,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "fully-furnished",
    amenities: ["Meals", "Wi-Fi", "Laundry", "CCTV"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0132, 30.2724]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Hill View Budget Rooms near GEHU Link Road",
    description:
      "Comfortable low-cost rooms with extra ventilation and a quiet neighborhood atmosphere near the Graphic Era Hill University corridor.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5700,
    address: "Link Road House 18, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near GEHU coaching strip",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.1,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "Balcony", "RO Water"],
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0099, 30.2828]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Graphic Era Budget Apartment Share",
    description:
      "Apartment share with separate wardrobe space and inverter backup, aimed at students wanting a slightly larger room near campus.",
    listingMode: "rent",
    propertyType: "apartment",
    price: 5900,
    address: "Apartment Share 3, Bell Road West",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era west lane",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 1.0,
    bedrooms: 2,
    bathrooms: 2,
    furnishing: "semi-furnished",
    amenities: ["Inverter", "Wi-Fi", "Cupboard", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0154, 30.2691]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Quiet PG behind Graphic Era Market",
    description:
      "A clean PG behind the student market stretch with evening security, stable Wi-Fi, and a manageable monthly rent.",
    listingMode: "rent",
    propertyType: "pg",
    price: 6100,
    address: "Market Back Lane 9, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Behind Graphic Era market",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.5,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "fully-furnished",
    amenities: ["Wi-Fi", "CCTV", "Housekeeping"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0121, 30.2719]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Clement Town Girls PG with Laundry",
    description:
      "Girls PG with laundry service, meals, and a secure entry setup suited to students living near the Clement Town academic corridor.",
    listingMode: "rent",
    propertyType: "pg",
    price: 6400,
    address: "Clement Town Girls House 4, Turner Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Turner Road bakery lane",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.5,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "fully-furnished",
    amenities: ["Laundry", "Meals", "Wi-Fi", "CCTV"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0273, 30.2763]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Two Seater Hostel near GEHU Shuttle Point",
    description:
      "Two seater hostel room with attached balcony and water purifier access, ideal for students who want to share costs near GEHU.",
    listingMode: "rent",
    propertyType: "hostel",
    price: 6600,
    address: "Shuttle Point Hostel 6, Rajawala Link",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near GEHU shuttle point",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.0,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Balcony", "RO Water", "Wi-Fi", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0088, 30.2813]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Bell Road Student Studio Lite",
    description:
      "Compact studio layout with attached bathroom and study corner, useful for students who need privacy near Graphic Era University.",
    listingMode: "rent",
    propertyType: "studio",
    price: 6900,
    address: "Studio Lite House 8, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Bell Road photocopy shops",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.9,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Study Table", "Wi-Fi", "Attached Bath"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0141, 30.2682]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Graphic Era Hill Budget Flatshare 2",
    description:
      "Shared flat in a calm residential block with inverter backup and practical furnishing for students attending classes nearby.",
    listingMode: "rent",
    propertyType: "flat",
    price: 7100,
    address: "Flatshare 2, Lower Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near lower Clement Town crossing",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.9,
    bedrooms: 2,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Inverter", "Wi-Fi", "Water Storage"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0309, 30.2722]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Meals and WiFi PG near Bell Road Signal",
    description:
      "Fully serviced PG with meals, Wi-Fi, and regular cleaning for students who want to stay close to Bell Road coaching and campus routes.",
    listingMode: "rent",
    propertyType: "pg",
    price: 7300,
    address: "Bell Road Signal House 11, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Bell Road signal",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.7,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "fully-furnished",
    amenities: ["Meals", "Wi-Fi", "Cleaning", "CCTV"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0139, 30.2704]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Clement Town Twin Sharing Rooms Deluxe",
    description:
      "Twin sharing student rooms with larger wardrobes, brighter interiors, and fast access to both Clement Town and Bell Road.",
    listingMode: "rent",
    propertyType: "pg",
    price: 7600,
    address: "Twin Sharing House 16, Turner Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Turner Road pharmacy",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.4,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "fully-furnished",
    amenities: ["Wardrobe", "Wi-Fi", "Laundry", "Meals"],
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0261, 30.2744]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Premium Budget Studio near Graphic Era Main Road",
    description:
      "Private studio in the student belt with attached kitchenette and stronger furnishing while still staying under a modest budget.",
    listingMode: "rent",
    propertyType: "studio",
    price: 7900,
    address: "Main Road Studio 10, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era main road",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.8,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "fully-furnished",
    amenities: ["Kitchenette", "Wi-Fi", "Power Backup", "Attached Bath"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0151, 30.2698]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Student Saver PG near Clement Town Clock Point",
    description:
      "Reliable budget PG with shared balcony, filtered water, and easy transport access toward Graphic Era and central Clement Town.",
    listingMode: "rent",
    propertyType: "pg",
    price: 4800,
    address: "Clock Point House 3, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Clement Town clock point",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.9,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Filtered Water", "Wi-Fi", "Balcony"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0324, 30.2779]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Affordable Paying Guest near Graphic Era Hill Link",
    description:
      "Neat paying guest rooms with basic furnishings and shared meals, positioned for students moving between Clement Town and GEHU routes.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5200,
    address: "Hill Link House 14, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near GEHU link road",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.3,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Meals", "Wi-Fi", "Study Desk"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0109, 30.2834]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Graphic Era University Budget PG Plus",
    description:
      "Popular student PG with regular cleaning, coolers in summer, and a walkable Bell Road location near the university zone.",
    listingMode: "rent",
    propertyType: "pg",
    price: 6800,
    address: "Bell Road PG Plus 22, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era canteen road",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.6,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "fully-furnished",
    amenities: ["Cleaning", "Cooler", "Wi-Fi", "Meals"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0128, 30.2711]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Budget PG near Graphic Era East Gate",
    description:
      "Simple student PG with shared dining space, filtered water, and walking-friendly access to Graphic Era University classes.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3000,
    address: "East Gate House 2, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era east gate",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.9,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["RO Water", "Study Table", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0162, 30.2728]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Value Hostel Rooms near GEHU Ridge Road",
    description:
      "Practical hostel rooms with secure entry and a quiet ridge-side setting for students attending Graphic Era Hill University.",
    listingMode: "rent",
    propertyType: "hostel",
    price: 3050,
    address: "Ridge Road Hostel 3, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near GEHU ridge road",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.2,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["CCTV", "RO Water", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0085, 30.2844]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Clement Town Study PG Block C",
    description:
      "Low-cost PG option with dedicated study desks and regular cleaning for students balancing classes and coaching schedules.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3150,
    address: "Block C House 7, Turner Road, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Turner Road tuition lane",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.7,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Study Desk", "Cleaning", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0279, 30.2756]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Bell Road Saver Hostel Wing 2",
    description:
      "Shared hostel wing with simple storage, common washrooms, and a dependable budget for Graphic Era students.",
    listingMode: "rent",
    propertyType: "hostel",
    price: 3250,
    address: "Saver Wing 2, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Bell Road photocopy cluster",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.8,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "Cupboard", "CCTV"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0148, 30.2715]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Graphic Era Commuter PG House 4",
    description:
      "Student PG with bike parking and quick campus access for commuters who still want an affordable monthly rent.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3400,
    address: "Commuter House 4, Bell Road Extension",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era shuttle stop",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 1.0,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Bike Parking", "Wi-Fi", "RO Water"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0171, 30.2699]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Hill Campus Budget Beds House 9",
    description:
      "Twin-sharing student beds with a calm neighborhood feel and easy routes toward Graphic Era Hill University.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3550,
    address: "Budget Beds House 9, Rajawala Link",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near GEHU bus stand",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.1,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "Study Desk", "Balcony"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0092, 30.2822]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Girls PG near Graphic Era Coaching Street",
    description:
      "Secure girls PG with shared meals and evening guard support close to the Bell Road coaching and campus stretch.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3650,
    address: "Coaching Street House 6, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era coaching street",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.7,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Meals", "CCTV", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0133, 30.2729]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Turner Road Basic Flatshare 5",
    description:
      "Basic flatshare with water storage and shared kitchen space for students wanting a Clement Town address at a low cost.",
    listingMode: "rent",
    propertyType: "flat",
    price: 3800,
    address: "Flatshare 5, Turner Road, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Turner Road general store",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.6,
    bedrooms: 2,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Shared Kitchen", "Water Storage", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0291, 30.2746]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Bell Road Student Rooms Block D",
    description:
      "Budget-friendly block with attached cupboards, cooler points, and a quick walk to Graphic Era University.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3950,
    address: "Block D House 10, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Bell Road momo lane",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.8,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Cupboard", "Cooler Point", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0143, 30.2706]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "GEHU Affordable Studio Annex",
    description:
      "Compact studio annex with private washroom and study corner near Graphic Era Hill University access roads.",
    listingMode: "rent",
    propertyType: "studio",
    price: 4200,
    address: "Studio Annex 2, Rajawala Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near GEHU access road",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.3,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Attached Bath", "Wi-Fi", "Study Desk"],
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0115, 30.2817]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Graphic Era Group Stay House 3",
    description:
      "Shared stay option with practical room layouts and stable internet for small student groups near Bell Road.",
    listingMode: "rent",
    propertyType: "hostel",
    price: 4400,
    address: "Group Stay House 3, Bell Road West",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era west gate",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 1.1,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "CCTV", "Mess"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0165, 30.2688]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Clement Town Minimal PG House 8",
    description:
      "Minimal furnished PG with common balcony and a clean setup for students living around the Clement Town corridor.",
    listingMode: "rent",
    propertyType: "pg",
    price: 4550,
    address: "Minimal House 8, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Clement Town clock tower",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.8,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Balcony", "Wi-Fi", "RO Water"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0318, 30.2768]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Graphic Era Market Side PG House 11",
    description:
      "Market-side PG with regular cleaning and strong student convenience for food, notes, and short campus walks.",
    listingMode: "rent",
    propertyType: "pg",
    price: 4700,
    address: "Market Side House 11, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era market side",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.6,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Cleaning", "Wi-Fi", "Cupboard"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0124, 30.2716]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Rajawala Link Students Hostel 12",
    description:
      "Student hostel with shared meal service and quick access to Graphic Era Hill University through Rajawala link roads.",
    listingMode: "rent",
    propertyType: "hostel",
    price: 4850,
    address: "Hostel 12, Rajawala Link",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Rajawala link turn",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.0,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Meals", "Wi-Fi", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0101, 30.2829]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Bell Road Shared Studio Pocket",
    description:
      "Shared studio pocket with an attached bath and basic pantry setup for students who want privacy at a lower price.",
    listingMode: "rent",
    propertyType: "studio",
    price: 5050,
    address: "Studio Pocket 4, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Bell Road pocket lane",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.9,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Attached Bath", "Pantry Space", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0157, 30.2695]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Clement Town Exam Prep PG",
    description:
      "Quiet PG tailored for exam prep with focused study desks, good lighting, and a calm lane in Clement Town.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5250,
    address: "Exam Prep House 9, Turner Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Turner Road coaching rooms",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.5,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Study Desk", "Wi-Fi", "RO Water"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0287, 30.2751]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Graphic Era University Student Nest 14",
    description:
      "Neat student nest with meal support and practical storage space near the Bell Road student neighborhood.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5400,
    address: "Student Nest 14, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era student market",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.7,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Meals", "Wi-Fi", "Cupboard"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0131, 30.2713]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "GEHU Twin Share Rooms House 15",
    description:
      "Twin-share rooms with regular cleaning and a neighborhood that stays active with student movement near GEHU.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5550,
    address: "Twin Share House 15, Rajawala Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near GEHU twin share cluster",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.2,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Cleaning", "Wi-Fi", "Balcony"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0107, 30.2811]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Bell Road Compact Flatshare House 16",
    description:
      "Compact flatshare with shared kitchen and inverter support, suited to students staying close to Graphic Era University.",
    listingMode: "rent",
    propertyType: "flat",
    price: 5700,
    address: "Flatshare House 16, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era bus route",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 1.0,
    bedrooms: 2,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Shared Kitchen", "Inverter", "Wi-Fi"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0168, 30.2701]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Graphic Era Hill Road Budget PG Prime",
    description:
      "Well-kept PG with meal plan and decent storage, positioned on a useful route toward Graphic Era Hill University.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5850,
    address: "Hill Road Prime 18, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near GEHU hill road prime stretch",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.4,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Meals", "Wi-Fi", "Laundry"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0120, 30.2837]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Bell Road Academic PG House 19",
    description:
      "Academic-friendly PG with bright rooms and study support amenities close to Graphic Era University’s main student belt.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5950,
    address: "Academic House 19, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era academic lane",
    nearbyCollege: "Graphic Era University",
    distanceFromCollege: 0.8,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Study Desk", "Wi-Fi", "Cleaning"],
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0140, 30.2709]
    },
    verificationStatus: "verified"
  }
];

module.exports = {
  demoUsers,
  dehradunProperties
};
