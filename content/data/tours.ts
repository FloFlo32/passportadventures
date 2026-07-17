export type Tour = {
  slug: string;
  name: string;
  cardImage: string;
  heroImage: string;
  tagline: string;
  intro: string;
  highlights: { title: string; text: string; image?: string }[];
  included: string[];
  notIncluded: string[];
  extraSections: { title: string; text: string; image?: string }[];
};

export const tours: Tour[] = [
  {
    slug: "summer-madness-2025",
    name: "Summer Madness Cruise",
    cardImage: "/ingested/passportadventures/tour-summer-card.webp",
    heroImage: "/ingested/passportadventures/tour-summer-block.webp",
    tagline:
      "Dive into sun-kissed days, crystal waters, and endless laughter aboard our exclusive Caribbean escape designed for unforgettable summer memories.",
    intro:
      "This unforgettable itinerary is packed with exciting activities and beautiful ports of call for everyone to enjoy. As a guest, you'll have access to a dedicated travel professional who will help guide, advise, and organize every detail as you prepare for this amazing adventure. Set sail on a 7-night Eastern Caribbean cruise aboard the Carnival Breeze this summer. Enjoy luxurious amenities, stunning destinations, nonstop fun, and unforgettable memories for every guest onboard.",
    highlights: [
      { title: "Family Fun Awaits", text: "Award-winning youth programs keep every child entertained and happy onboard." },
      { title: "Flexible Payment", text: "Secure your dream vacation easily with a deposit, flexible installments, and peace of mind." },
      { title: "All-Inclusive Fun", text: "Dining, entertainment, and endless onboard activities are included for everyone to enjoy together." },
      { title: "Lasting Memories", text: "Perfect for group trips, family reunions, or first-time cruisers seeking unforgettable moments." },
    ],
    included: [
      "All meals and snacks",
      "Daily and nightly entertainment",
      "Onboard parties & activities",
      "Game room",
      "Library & book rentals",
      "Board games",
      "Youth clubs",
      "Daily and nightly housekeeping",
      "Ocean transfers to each port",
      "Access to fitness activities",
      "Use of outdoor pools and hot tubs",
      "Poolside activities",
      "Water, lemonade & iced tea",
    ],
    notIncluded: [
      "Shore excursions",
      "Alcoholic beverages",
      "Spa and salon services",
      "Room/food service",
      "Gambling (including Bingo)",
      "Art auction",
      "Gift shop purchases",
      "Photographs",
      "Video arcade",
      "Medical services",
      "Internet access",
      "Transfers (unless air/sea package)",
      "Laundry & dry cleaning",
      "Ship-to-shore calls",
      "Gratuities",
      "Other non-alcoholic beverages",
      "Travel protection (available)",
    ],
    extraSections: [
      {
        title: "Choose Your Cabin Style",
        text: "All prices are for 1st and 2nd guest only and include taxes and port fees. 3rd and 4th guests six months and older pay a reduced fare. All rooms can accommodate up to 4 guests (excludes gratuities and travel insurance).",
      },
      {
        title: "Suite Upgrade Experience",
        text: "Craving extra space and luxury? Upgrade to a suite for more comfort, a private patio, and an elevated experience that makes your cruise unforgettable.",
      },
      {
        title: "Youth Programs",
        text: "Under 2: can participate, no potty training required, parents provide diapers & toiletries. Night Owls (2 to 11): $6.75/hr per child, pickups after 1:00 AM are charged double and forfeit services for the remainder of the cruise. Camp Ocean (2 to 11): kids stay active and engaged with ocean-themed fun and educational activities designed just for them.",
        image: "/ingested/passportadventures/summer-tiny-tots.webp",
      },
      {
        title: "Culinary Delights Await",
        text: "Savor a world of flavors onboard, from authentic Mexican tacos at Blue Cantina to customizable Mongolian Wok dishes and 24/7 freshly baked Pizza Pirate pies, satisfying every craving throughout your cruise.",
        image: "/ingested/passportadventures/summer-ocean-camp.webp",
      },
    ],
  },
  {
    slug: "egypt-2025",
    name: "Egypt 2026",
    cardImage: "/ingested/passportadventures/tour-egypt-card.webp",
    heroImage: "/ingested/passportadventures/tour-egypt-block.webp",
    tagline:
      "Uncover fascinating truths about ancient Egypt, from ingenious inventions to divine temples and timeless traditions that shaped civilization and still captivate travelers across centuries today.",
    intro:
      "People settled in Egypt as early as 6000 B.C. Over time, small villages joined together to become states until two kingdoms emerged: Lower Egypt, which covers the Nile River Delta up to the Mediterranean Sea in the north, and Upper Egypt, which covers the Nile Valley in the south. Around 3100 B.C., a king (later called a pharaoh) united these two lands into one country, and so historians begin the long history of ancient Egypt here. Explore Egypt with our carefully crafted itinerary. Discover iconic monuments, ancient temples, and unforgettable experiences while enjoying seamless travel and luxurious accommodations throughout your journey.",
    highlights: [
      { title: "Seamless Flight Transfers", text: "We'll handle your travel logistics from Cairo to Aswan, ensuring flight arrangements are smooth, comfortable, and perfectly coordinated with your journey." },
      { title: "Inclusive Travel Package", text: "Your package covers flights, hotels, Nile cruise, and guided tours. Prices vary by travel date. Excludes gratuities and any meals not specifically mentioned." },
      { title: "Questions? Contact Our Travel Team", text: "Have questions or need guidance? Contact our friendly team anytime, we're here to help you plan, book, and enjoy your unforgettable Egyptian adventure." },
    ],
    included: ["Flights", "Hotels", "Nile cruise", "Guided tours"],
    notIncluded: ["Gratuities", "Meals not specifically mentioned"],
    extraSections: [
      {
        title: "Quick History of Ancient Egypt",
        text: "The Nile River flows from south to north, so for the ancient Egyptians, the southern part of the country was considered up. Historians divide this long history into different periods, each shaped by the pharaohs who ruled the united kingdoms.",
        image: "/ingested/passportadventures/egypt-history.webp",
      },
      {
        title: "Packing Recommendations",
        text: "Refillable water flask, portable battery pack, cooling face towel, adapters for Egypt, neck fan, hand held fan, compression socks, backpack for daily items, anti-diarrhea medication, pain meds, sun block, light jacket or scarf for women, sports jacket for men, water shoes, cool cotton tops, swimwear, cash for tips and gratuity, and sunglasses or a hat.",
      },
    ],
  },
  {
    slug: "ultimate-greece-experience",
    name: "Ultimate Greece Experience",
    cardImage: "/ingested/passportadventures/tour-summer-block.webp",
    heroImage: "/ingested/passportadventures/tour-greece-block.webp",
    tagline:
      "Explore the beauty and diversity of Greece through fascinating facts. From sunny skies and thousands of islands to mountains, heritage sites, and stunning coastlines, adventure awaits everywhere.",
    intro:
      "Greece has more than 2,000 islands, of which about 170 are inhabited. Some of the easternmost Aegean islands lie just a few miles off the Turkish coast. The country's capital is Athens, which expanded rapidly in the second half of the 20th century. Attica, the area around the capital, is now home to about one third of the country's entire population.",
    highlights: [
      { title: "Discover Greek Wonders", text: "Explore the beauty and diversity of Greece through fascinating facts, from sunny skies and thousands of islands to mountains, heritage sites, and stunning coastlines." },
      { title: "Greek Weather", text: "September is the perfect time of year to visit Greece. Average temperatures in Athens reach a high of 80.6 degrees Fahrenheit and a low of 69.6. October is cooler, with an average high of 71.4 and a low around 62.1 degrees Fahrenheit." },
    ],
    included: [
      "All accommodations listed are at 4 and 5 star resorts",
      "3 nights accommodation in Athens with breakfast",
      "2 nights accommodation in Mykonos with breakfast",
      "2 nights accommodation in Santorini with breakfast",
      "Round trip airport transfers",
      "All port transfers in Athens, Mykonos, and Santorini",
      "Half day Athens sightseeing with the New Acropolis Museum",
      "Ferry tickets Piraeus to Mykonos in economy class",
      "Hydrofoil tickets Mykonos to Santorini and Santorini to Piraeus in economy class",
      "Entrance fees",
      "All taxes and services",
    ],
    notIncluded: [
      "International flights",
      "Gratuity/tips",
      "Travel insurance",
      "Any service not clearly mentioned in the program",
      "City tax, payable directly to the hotel",
    ],
    extraSections: [
      {
        title: "Suggested Flights & Pricing",
        text: "Package cost depends on your travel dates. Deposits are non-refundable and non-transferable. Protect your trip with recommended travel insurance for peace of mind. To reserve the Ultimate Greece Experience, complete the booking form and pay the required fee to begin the seamless reservation process quickly and securely.",
      },
      {
        title: "Hi, My Name is Mesha",
        text: "I am a certified travel planner curating travel experiences for my trusted clients for over 8 years. Curating trips for my clients brings me great satisfaction. I am honored to plan this trip to Greece on your behalf, having personally explored the beautiful Greek Isles. I take pleasure in handling all your payment information and planning a seamless trip so you all have a great time. Feel free to contact me personally if you have questions pertaining to this quote.",
        image: "/ingested/passportadventures/mesha.webp",
      },
    ],
  },
  {
    slug: "wonder-of-the-seas",
    name: "Wonder of the Seas",
    cardImage: "/ingested/passportadventures/tour-wonder-card.webp",
    heroImage: "/ingested/passportadventures/wonder-ocean.webp",
    tagline:
      "Embark on Royal Caribbean's Wonder of the Seas, where endless adventure, world-class dining, and family-friendly excitement meet the most breathtaking destinations at sea.",
    intro:
      "Launched in 2022, Royal Caribbean's Wonder of the Seas stands among the world's largest cruise ships, offering unmatched luxury, excitement, and unforgettable adventures at sea. Join the family fun with the guidance of a dedicated travel professional who helps plan every detail of your unforgettable adventure at sea.",
    highlights: [
      { title: "Endless Family Fun", text: "Zip lines, surf simulators, and splash zones bring endless adventure for every age aboard together." },
      { title: "Global Culinary Journey", text: "Savor gourmet creations, world flavors, and unforgettable meals prepared by talented chefs." },
      { title: "Oceanview Serenity Escape", text: "Experience peaceful mornings, golden sunsets, and panoramic sea views from every part of your cruise." },
      { title: "Unforgettable Evening Magic", text: "Enjoy dazzling shows, live music, and moonlit parties that make every night feel truly extraordinary." },
    ],
    included: [
      "All meals and snacks",
      "Daily and nightly entertainment",
      "Zip lining, water slides, flowrider",
      "Game room",
      "Library & book rentals",
      "Board games",
      "Teen clubs",
      "Daily and nightly housekeeping",
      "Onboard parties & activities",
    ],
    notIncluded: [
      "Shore excursions",
      "Alcoholic beverages",
      "Spa and salon services",
      "Room/food service",
      "Gambling (including Bingo)",
      "Art auction",
      "Gift shop purchases",
      "Photographs",
      "Video arcade",
      "Medical services",
      "Internet access",
      "Transfers (unless air/sea package)",
      "Laundry & dry cleaning",
      "Ship-to-shore calls",
      "Gratuities",
      "Travel protection (available)",
    ],
    extraSections: [
      {
        title: "Activities Galore for the Entire Family",
        text: "Experience the Abyss, one of the tallest slides at sea. The Typhoon is a water slide the entire family can experience together. Enjoy the Aqua Theatre and watch amazing acrobatic shows at the outdoor theatre. Small children can enjoy riding the carousel, and of course, karaoke is a must.",
      },
      {
        title: "Cabin Categories",
        text: "Choose from a 2 Story Suite, a One Bedroom Suite, or a Family Suite, each designed for comfort and space for the whole crew.",
        image: "/ingested/passportadventures/wonder-suite-1.webp",
      },
      {
        title: "Cabin Booking Process",
        text: "To secure your cabin, each traveler must pay a non-refundable $200 deposit, which goes toward your room balance. Payment plans are optional, though full payment is allowed for trips less than 90 days away. Be sure to use your legal name exactly as it appears on your government-issued ID.",
      },
      {
        title: "Travel Document Rules",
        text: "All travelers must present valid documents for boarding. A passport must have at least six months validity, or travelers can show proof of citizenship plus a government-issued photo ID. Acceptable documents include a certified birth certificate, naturalization certificate, citizenship certificate, or U.S. Consular report of birth abroad. Photocopies aren't accepted.",
      },
    ],
  },
];

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}
