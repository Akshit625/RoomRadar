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

const gehuProperties = [
  {
    ownerKey: "ownerA",
    title: "Low Budget PG Near GEHU East Gate",
    description:
      "Economy PG room with shared kitchen, RO water, and good campus access near Graphic Era Hill University east gate.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3000,
    address: "East Gate Lane 2, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era East Gate",
    nearbyCollege: "Graphic Era Hill University",
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
    ownerKey: "ownerB",
    title: "Hostel Bed Near Graphic Era Main Gate",
    description:
      "Shared hostel bed with clean common areas, 24x7 water, and quick access to Graphic Era main gate.",
    listingMode: "rent",
    propertyType: "hostel",
    price: 3200,
    address: "Bell Road Hostel Block A, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era Main Gate",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 0.8,
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
    title: "Clement Town Shared Flat Near GEHU",
    description:
      "Shared flat with spacious common area, fast internet, and a short commute to Graphic Era Hill University.",
    listingMode: "rent",
    propertyType: "flat",
    price: 3400,
    address: "Flat 2B, Bell Road Extension",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era shuttle stop",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.0,
    bedrooms: 2,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Inverter", "Wi-Fi", "Water Purifier"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0167, 30.2687]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Student PG with Wi-Fi Near GEHU",
    description:
      "Well-kept PG room with shared kitchen, fast Wi-Fi, and daily cleaning near the Graphic Era campus.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3500,
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
    title: "Compact Studio Near Graphic Era",
    description:
      "Private compact studio with attached bathroom, study table, and reliable water supply close to campus.",
    listingMode: "rent",
    propertyType: "studio",
    price: 3600,
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
    ownerKey: "ownerC",
    title: "Economy PG Near Bell Road",
    description:
      "Low-cost PG with basic furnishings, shared bathroom, and secure gates in the Bell Road student area.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3700,
    address: "Bell Road Corner House 12, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era stationery shops",
    nearbyCollege: "Graphic Era Hill University",
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
    title: "Flatshare Near GEHU Shuttle Point",
    description:
      "Shared flat with two bedrooms, stable Wi-Fi, and easy shuttle access to Graphic Era Hill University.",
    listingMode: "rent",
    propertyType: "flat",
    price: 3800,
    address: "Turner Road Flatshare 5, Clement Town",
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
    title: "Girls PG Near Graphic Era Coaching Lane",
    description:
      "Girls PG with secure entry, meals, and clean rooms close to the coaching lanes around Graphic Era.",
    listingMode: "rent",
    propertyType: "pg",
    price: 3900,
    address: "Coaching Lane Girls PG 6, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era coaching street",
    nearbyCollege: "Graphic Era Hill University",
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
    ownerKey: "ownerC",
    title: "Hostel Rooms on Rajawala Road",
    description:
      "Hostel rooms with shared study area and easy transport links to Graphic Era Hill University.",
    listingMode: "rent",
    propertyType: "hostel",
    price: 4000,
    address: "Rajawala Road Hostel 12, Clement Town",
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
    ownerKey: "ownerA",
    title: "Semi-Furnished PG Near GEHU Library",
    description:
      "PG room near the university library, with a shared lounge and reliable filtered water.",
    listingMode: "rent",
    propertyType: "pg",
    price: 4200,
    address: "Library Road House 5, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era library side",
    nearbyCollege: "Graphic Era Hill University",
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
    title: "Affordable Studio on Bell Road",
    description:
      "A value studio apartment with attached bathroom, compact kitchen space, and good connectivity to GEHU.",
    listingMode: "rent",
    propertyType: "studio",
    price: 4300,
    address: "Bell Road Studio 10, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Bell Road photocopy shops",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 0.8,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Kitchenette", "Wi-Fi", "Attached Bath"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0151, 30.2698]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Shared Flat Near GEHU East Side",
    description:
      "Two-bedroom shared flat with modern fittings and quick access to the university’s east-side entry.",
    listingMode: "rent",
    propertyType: "flat",
    price: 4400,
    address: "East Side Flat 9, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era east gate",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 0.9,
    bedrooms: 2,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "Cupboard", "Power Backup"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0162, 30.2721]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Budget Boys PG Near Graphic Era",
    description:
      "Budget PG for boys with study spaces, shared dining, and a short walk to the Graphic Era campus.",
    listingMode: "rent",
    propertyType: "pg",
    price: 4500,
    address: "Bell Road Boys PG 4, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era market side",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 0.6,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "Bike Parking", "RO Water"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0124, 30.2716]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerB",
    title: "Hostel Wing Near Graphic Era Market",
    description:
      "Hostel wing with shared beds, common washroom, and fast access to the Graphic Era market and campus.",
    listingMode: "rent",
    propertyType: "hostel",
    price: 4700,
    address: "Market Wing 2, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era market side",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 0.6,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "CCTV", "Shared Dining"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0128, 30.2711]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerC",
    title: "Student Flat Near Bell Road Junction",
    description:
      "Comfortable student flat with separate study table and quick access to Bell Road transport.",
    listingMode: "rent",
    propertyType: "flat",
    price: 4800,
    address: "Bell Road Junction Flat 7, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Bell Road signal",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 0.8,
    bedrooms: 2,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Wi-Fi", "Inverter", "Cupboard"],
    images: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0140, 30.2709]
    },
    verificationStatus: "verified"
  },
  {
    ownerKey: "ownerA",
    title: "Clement Town Study PG",
    description:
      "PG with dedicated study desks and quiet lanes for students preparing for college exams.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5000,
    address: "Turner Road Study PG 7, Clement Town",
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
    ownerKey: "ownerB",
    title: "GEHU Hill Road Semi-Furnished PG",
    description:
      "Semi-furnished PG with Wi-Fi, inverter, and shared meals for students near the GEHU hill road corridor.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5200,
    address: "Hill Road PG 18, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near GEHU hill road",
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
    ownerKey: "ownerC",
    title: "Budget Apartment Share on Bell Road",
    description:
      "Apartment share with living room and shared kitchen, ideal for small groups studying at GEHU.",
    listingMode: "rent",
    propertyType: "apartment",
    price: 5400,
    address: "Bell Road Apartment Share 3, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era west lane",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 1.0,
    bedrooms: 2,
    bathrooms: 2,
    furnishing: "semi-furnished",
    amenities: ["Inverter", "Wi-Fi", "Parking"],
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
    title: "Meal Included PG Near GEHU",
    description:
      "PG with meals included, housekeeping, and an easy walking route to Graphic Era Hill University.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5600,
    address: "Bell Road Meal PG 11, Clement Town",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Bell Road eateries",
    nearbyCollege: "Graphic Era Hill University",
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
    ownerKey: "ownerB",
    title: "Rooms Near Graphic Era Coaching Lane",
    description:
      "Affordable rooms with study corners, water purifier, and a friendly student community near GEHU.",
    listingMode: "rent",
    propertyType: "pg",
    price: 5900,
    address: "Coaching Lane House 8, Bell Road",
    city: "Dehradun",
    state: "Uttarakhand",
    landmark: "Near Graphic Era coaching lane",
    nearbyCollege: "Graphic Era Hill University",
    distanceFromCollege: 0.7,
    bedrooms: 1,
    bathrooms: 1,
    furnishing: "semi-furnished",
    amenities: ["Study Desk", "Wi-Fi", "RO Water"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    location: {
      type: "Point",
      coordinates: [78.0133, 30.2729]
    },
    verificationStatus: "verified"
  }
];

module.exports = {
  demoUsers,
  gehuProperties
};
