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
    { name: "Lisa Adams", rating: 5, text: "Very quick response to my initial enquiry and good communication about when to expect a visit. Very professional.", date: "a day ago" },
    { name: "bethany sykes", rating: 5, text: "I was very pleased with the lawn care services I received recently. The team arrived promptly and worked diligently to ensure a thorough and even cut. My lawn looks beautifully maintained, enhancing the overall appearance of my property. I truly appreciate their professionalism and attention to detail. I would highly recommend their services to anyone seeking reliable and excellent grass cutting.", date: "a day ago" },
    { name: "Matt Ward", rating: 5, text: "Great lads, friendly, quick and did exact what I asked for for.", date: "a week ago" },
    { name: "Bill Brooks", rating: 5, text: "We had two patios and two sets of steps laid by Homes2outstanding. The work done by Jake and Tyler was carried out in a conscientious and considerate manner, nothing was too much trouble and we were consulted on any variations to the plan. No hesitation in recommending them and will use them again for any future work.", date: "3 weeks ago" },
    { name: "T C", rating: 5, text: "What can I say!  So happy with the work carried out by the guys.  Jake, Tyler and another guy those name I forget worked incredibly hard in horrible weather.  Tyler you made me chuckle as I worked from home! Thank you all so much.", date: "2 months ago" },
    { name: "Orissa Leow", rating: 5, text: "Thank you for braving the rain and cold and to fit me in to do yet another amazing job!", date: "Edited 2 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Homes 2 Outstanding Ltd | Landscaper in Taunton",
    description: "Professional landscaper in Taunton. 5.0-star rated on Google. Call for a free quote.",
  },
};
