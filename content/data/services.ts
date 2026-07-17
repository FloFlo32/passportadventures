export type Service = {
  slug: string;
  name: string;
  description: string;
  price: string;
  image: string;
  bookingLabel: string;
  bookingUrl?: string;
};

export const services: Service[] = [
  {
    slug: "group-trip-planning-150504262",
    name: "Group Trip Planning",
    description:
      "Planning a group trip can be overwhelming, but at Passport Adventures, we make it effortless and enjoyable. Whether it's a family reunion, a girls' getaway, a corporate retreat, or an exciting cruise for 8 or more travelers, we specialize in coordinating seamless group travel experiences. Our services include organizing flights, accommodations, cruises, and all-inclusive resort packages while managing logistics to ensure every member of your group has a stress-free and enjoyable journey. We understand the importance of creating shared memories, and we work closely with you to design an itinerary that balances individual preferences and group activities. With us, you'll enjoy the perfect blend of relaxation, adventure, and connection, turning your group trip into an extraordinary experience for everyone involved.",
    price: "$150.00",
    image: "/ingested/passportadventures/svc-group-trip.webp",
    bookingLabel: "Free Consultation",
  },
  {
    slug: "dream-vacation-planning-150504261",
    name: "Dream Vacation Planning",
    description:
      "Imagine a vacation crafted just for you, where every detail reflects your unique lifestyle, preferences, and budget. At Passport Adventures, we specialize in turning your travel dreams into reality by designing customized itineraries tailored to your specific needs. Whether you're looking for a romantic escape, a family adventure, or a solo retreat, we take the time to understand your vision and ensure every aspect of your trip is meticulously planned. From luxurious accommodations and private tours to personalized recommendations for dining, activities, and excursions, we handle it all with precision and care. With our expertise, you can relax and immerse yourself in an unforgettable travel experience, knowing every detail has been thoughtfully curated just for you.",
    price: "$75.00",
    image: "/ingested/passportadventures/svc-dream-vacation.webp",
    bookingLabel: "Free Consultation",
  },
  {
    slug: "travel-advisor-program-150504263",
    name: "Travel Advisor Program",
    description:
      "Are you passionate about travel and looking for a way to turn it into a rewarding career? Our Travel Advisor program is designed to empower women to build their own home-based travel businesses, providing the tools, training, and support needed to succeed. This opportunity allows you to achieve both time and financial freedom while earning passive income and sharing your love for travel with others. As a travel advisor, you'll have access to exclusive industry insights, partnerships with top vendors, and mentorship from experienced professionals. Whether you're a seasoned traveler or new to the industry, we'll guide you every step of the way, helping you establish a thriving business that aligns with your goals. Discover the freedom to work from anywhere, the joy of helping others plan their dream vacations, and the satisfaction of owning a business that reflects your passion and expertise.",
    price: "$39.00 per month",
    image: "/ingested/passportadventures/svc-advisor-program.webp",
    bookingLabel: "Free Consultation",
  },
  {
    slug: "fun-cruise-adventures-150504264",
    name: "Fun Cruise Adventures",
    description:
      "Escape the hustle and bustle of daily life with a cruise adventure that combines relaxation, entertainment, and exploration. Designed for couples and families, our Fun Cruise Adventures offer the perfect balance of excitement and tranquility. Experience the latest cruise ships equipped with luxurious amenities, world-class dining, and a wide range of onboard activities, from thrilling water slides to relaxing spa treatments. Each cruise is tailored to your preferences, including carefully selected destinations with curated excursions to ensure unforgettable moments both onboard and ashore. Whether you're celebrating a special occasion or simply looking to unwind, our expertly planned cruises provide the ideal setting to recharge, reconnect, and create cherished memories. Let us handle all the details while you focus on enjoying every moment of your incredible journey.",
    price: "",
    image: "/ingested/passportadventures/tour-wonder-card.webp",
    bookingLabel: "Learn More",
    bookingUrl: "https://sites.google.com/view/rclwonder/home",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceGallery = Array.from({ length: 23 }, (_, i) => ({
  src: `/ingested/passportadventures/gallery-${i + 1}.webp`,
  alt: "Passport Adventures client trip photo",
}));
