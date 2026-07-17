export const rating = {
  score: 5,
  reviewCount: 8,
  source: "Google My Business",
};

export type Testimonial = {
  name: string;
  quote: string;
  image?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Roger Granjean",
    quote:
      "Stellar customer service; great communication and understanding of my vacation needs. Customize service for large groups with payment plans. Had a fabulous time in Las Vegas with the guys!!",
    image: "/ingested/passportadventures/testimonial-1.webp",
  },
  {
    name: "Shani C. Brown",
    quote:
      "I've booked a few small travels with Passport Adventures and have a major travel trip in 2019 booked with Passport Adventures. Despite size, the service have been exceptional and reliable. They offered unique concepts to maximize travel arrangements, plus provided recommendations on places to go while on my trip.",
    image: "/ingested/passportadventures/testimonial-2.webp",
  },
  {
    name: "Denise Jacobs Waul",
    quote:
      "I've had the pleasure of taking a trip to Costa Rica which was planned from A to Z by Passport Adventures. It was great to have a travel professional that listened to my interests and delivered the products and excursions that I thoroughly enjoyed. You can rely on Passport Adventures for a FUN vacation.",
    image: "/ingested/passportadventures/testimonial-3.webp",
  },
  {
    name: "Bryan Simpson Ionie Elaine",
    quote:
      "Passport Adventures is responsive and works with my budget when planning my travel. They aptly arrange cruises and international travel for family events, reunions and large gatherings! I have no regrets with their services!",
    image: "/ingested/passportadventures/testimonial-4.webp",
  },
  {
    name: "Annie P Collins",
    quote:
      "I would highly recommend Passport Adventures! I have used their service for two trips (Costa Rica and Bahamian Cruise) and I must say I was impressed with the professionalism, personal attention, follow up and paying attention to details! I will be using Passport adventures again for my upcoming trips!",
    image: "/ingested/passportadventures/testimonial-5.webp",
  },
  {
    name: "Kapricia Birch",
    quote:
      "Thank you Passport Adventures for making traveling easy! Service is excellent, great recommendations with vast options. I can't wait to book my next adventure!",
    image: "/ingested/passportadventures/testimonial-6.webp",
  },
  {
    name: "Elaina Tang",
    quote:
      "I used Passport Adventures for my trip to Jamaica and it was amazing! From the moment I stepped off the plane, everything was already planned and ready for me! All I had to do was sit back and enjoy! My trip included Kingston, Ocho Rios and Montego Bay.",
    image: "/ingested/passportadventures/testimonial-7.webp",
  },
  {
    name: "Joy Mcgann",
    quote:
      "We had a fantastic trip to Cuba! She made sure we received the best deal available. Our visas were already connected to the boarding pass and she helped get extra amenities if possible. We will be using Passport Adventures again!",
    image: "/ingested/passportadventures/testimonial-8.webp",
  },
  {
    name: "Mari Cris",
    quote:
      "I highly recommend Passport Adventures. Mesha is a great agent that was always patient, kind, caring and a lovely person to work with. Mesha helped my wife and I book a Mediterranean cruise along with a few excursions and it was a dream come true.",
  },
  {
    name: "Jurnee Gunter",
    quote:
      "Excellent service!!! Highly recommend!!! We took a 12 day trip around Italy and the Greek Islands it was truly amazing and passport adventures took care of us every step of the way! 10/10",
    image: "/ingested/passportadventures/testimonial-9.webp",
  },
  {
    name: "Brittany Moses",
    quote:
      "My family and I went on the 11 day Mediterranean Cruise. The most amazing experience all thanks to Passport Adventures. Everything was handled for us weeks prior to even boarding. Looking forward to the next adventure with these folks. I highly recommend!",
  },
];

export type GoogleReview = {
  author: string;
  date: string;
  comment: string;
};

export const googleReviews: GoogleReview[] = [
  {
    author: "Marcia Anderson",
    date: "26 June 2026",
    comment:
      "Prompt and professional response, fully engaged and responsive to inquiries. Recommendations were provided based on the information I provided. Highly recommend...",
  },
  {
    author: "Kyla Ferguson",
    date: "25 June 2026",
    comment:
      "Passport Adventures Travel, LLC provided outstanding service from start to finish. The planning process was seamless, communication was excellent, and every detail...",
  },
  {
    author: "Elaina Tang",
    date: "25 June 2026",
    comment:
      "I can't recommend this travel agent enough! I had an unexpected emergency that required a last-minute change to my travel plans, and she handled everything flawlessly...",
  },
  {
    author: "Leo Empress",
    date: "25 June 2026",
    comment:
      "I want to give a huge shoutout to my amazing travel agent Mesha with Passport Adventures Travel for making this entire Cruise experience so smooth from start to finish...",
  },
  {
    author: "charlie furze",
    date: "25 June 2026",
    comment: "Excellent service!",
  },
  {
    author: "Michelle Lindo",
    date: "25 June 2026",
    comment: "Try it & you will love it. Passport Adventures- the way to go. Excellent service.",
  },
  {
    author: "Omain Bell",
    date: "25 June 2026",
    comment:
      "I had a fantastic experience with passport adventures travel. Mesha handled every detail of my trip professionally and efficiently. Communication was clear, acc...",
  },
  {
    author: "Angela Yap Chung",
    date: "24 June 2026",
    comment: "Mesha is super professional and always so helpful! I would recommend using this company to book any future travel arrangements!",
  },
];
