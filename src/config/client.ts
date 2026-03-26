export const client = {
  // Business Details
  name: "Homes 2 Outstanding Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Taunton.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07341 637372",
  email: "",
  website: "",

  // Location
  address: "Taunton",
  city: "Taunton",
  county: "",
  postcode: "",
  basedIn: "Taunton",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Rosemary Maskell", rating: 5, text: "Excellent service and always arrive when they say they will - which can't be said for all companies. I have used H2HO to replace a fence in a tricky area, complete new guttering and replacing outside taps. Prices are very reasonable and the staff hel", date: "3 months ago" },
    { name: "Sue Whiting", rating: 5, text: "Very happy with the work to construct steps to our garden, there was a lot of earth to move but Jake and Tyler did it very quickly and very tidily. Communication was good, always asking our opinion and if we were happy with progress, they …  ", date: "8 months ago" },
    { name: "Louise Wooller", rating: 5, text: "Thank you Jake and Tyler. They have done a fabulous job digging up our old turf ( by hand ) and laying a beautiful new one. The picket fence installed to keep the puppies off the lawn is exactly what we envisioned. They were polite and super professi", date: "5 months ago" },
    { name: "Chris Beattie", rating: 5, text: "Lee and his team really do an outstanding job. They’ve been caring for my lawns for several years now and always do an excellent job. They treat my property with respect, always closing gates and leaving everywhere tidy and looking great. ", date: "5 months ago" },
    { name: "georgia bowey", rating: 5, text: "Excellent service from H2O! They removed a row of trees at my business premises and did a fantastic job. The team were professional, hard-working, and left everything neat and tidy. Highly recommend. ", date: "6 months ago" },
    { name: "T C", rating: 5, text: "What can I say!  So happy with the work carried out by the guys.  Jake, Tyler and another guy those name I forget worked incredibly hard in horrible weather.  Tyler you made me chuckle as I worked from home! Thank you all so much. ", date: "2 months ago" },
    { name: "Chris Pouncey", rating: 5, text: "Slightly small job, re-cementing a washing line that had become uprooted I'm with the terrible recent weather. Tyler came out right on time when they said the would, dug out the old cement …  ", date: "3 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Homes 2 Outstanding Ltd | Landscaper in Taunton",
    description: "Professional landscaper in Taunton. 5.0-star rated on Google. Call for a free quote.",
  },
};
