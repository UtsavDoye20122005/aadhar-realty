import type { AmenityId, LandmarkKind, NavLink } from "./types";

export const nav = {
  links: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ] satisfies NavLink[],
  skipToContent: "Skip to content",
  call: "Call",
  whatsapp: "WhatsApp",
  siteVisit: "Site visit",
  menu: "Menu",
  closeMenu: "Close menu",
  openMenu: "Open menu",
} as const;

export const labels = {
  rera: "RERA",
  ready: "Ready to move",
  underConstruction: "Under construction",
  newLaunch: "New launch",
  bhk: "BHK",
  carpet: "Carpet",
  builtUp: "Built-up",
  sqft: "sq ft",
  possession: "Possession",
  price: "Price",
  from: "From",
  to: "to",
  locality: "Locality",
  filters: "Filters",
  clearAll: "Clear all",
  sort: "Sort",
  gridView: "Grid view",
  listView: "List view",
  showing: "Showing",
  of: "of",
  projects: "projects",
  emptyTitle: "No homes match these filters.",
  emptyBody:
    "Widen the budget, drop a locality, or clear possession status — inventories in Lucknow move in bands, not in a single number.",
  applyFilters: "Apply filters",
  closeFilters: "Close filters",
  budget: "Budget",
  possessionStatus: "Possession",
  getDirections: "Get directions",
  openNow: "Open now",
  closedNow: "Closed",
  officeHours: "Office hours",
  seeAllReviews: "See all reviews on Google",
  reviewsHeading: "What buyers in Lucknow actually said",
  enquiryHeading: "Schedule a site visit",
  enquiryBody:
    "We take two people through the sample flat and the sanctioned plan. No coach bus, no token pressure.",
  name: "Full name",
  phone: "Mobile number",
  email: "Email (optional)",
  message: "Anything we should know",
  submit: "Send enquiry",
  submitting: "Sending…",
  successTitle: "We have your request.",
  successBody:
    "Someone from the Vibhuti Khand desk will call you on the same number within one working day.",
  sendAnother: "Send another",
  floorPlans: "Floor plans",
  amenities: "Amenities",
  location: "On the map",
  nearby: "Nearby",
  progress: "Construction progress",
  documents: "Approvals & home loans",
  approvedBanks: "Banks that typically sanction here",
  emiHeading: "EMI, without the brochure maths",
  emiLoan: "Loan amount",
  emiRate: "Interest rate (p.a.)",
  emiTenure: "Tenure",
  emiMonthly: "Monthly EMI",
  emiInterest: "Total interest",
  emiPayable: "Total payable",
  emiPrincipal: "Principal",
  emiYears: "years",
  gallery: "Photographs",
  lightboxPrev: "Previous photograph",
  lightboxNext: "Next photograph",
  lightboxClose: "Close gallery",
  viewProject: "See the inventory",
  featured: "On the floor this month",
  allProjects: "All twelve inventories",
  viewAll: "Open the project desk",
  whatsappPrefill:
    "Hello Aadhar Realty, I am looking at homes in Lucknow and would like inventory details.",
  siteVisitPrefill: (project: string) =>
    `Hello Aadhar Realty, I would like to schedule a site visit for ${project} in Lucknow.`,
  footerQuick: "On this site",
  footerVisit: "Visit the office",
  footerTalk: "Talk to the desk",
} as const;

export const filterCopy = {
  sortPriceAsc: "Price: low to high",
  sortPriceDesc: "Price: high to low",
  sortPossession: "Possession date",
  bhk2: "2 BHK",
  bhk3: "3 BHK",
  bhk4: "4 BHK",
  any: "Any",
  upTo: "Up to",
} as const;

export const formErrors = {
  name: "Please enter your name as it should appear on a site-visit register.",
  phone: "Enter a 10-digit Indian mobile number starting with 6, 7, 8 or 9.",
  email: "That does not look like an email address.",
  generic: "Please check the highlighted fields.",
} as const;

export const meta = {
  titleTemplate: "%s · Aadhar Realty, Lucknow",
  homeTitle: "Aadhar Realty · Homes in Lucknow",
  homeDescription:
    "Independent inventory desk in Gomti Nagar for 2, 3 and 4 BHK homes across Lucknow. RERA-listed projects, site visits from Vibhuti Khand.",
  projectsTitle: "Projects in Lucknow",
  projectsDescription:
    "Filter twelve live inventories in Gomti Nagar, Sushant Golf City, Hazratganj, Aliganj and more — by budget, BHK, locality and possession.",
  aboutTitle: "About the desk",
  aboutDescription:
    "Aadhar Realty has sat in Vibhuti Khand since 2014. How we show homes in Lucknow, and who you actually meet.",
  contactTitle: "Contact the Gomti Nagar office",
  contactDescription:
    "Call, WhatsApp or walk into 14 Vibhuti Khand. Hours, map, and a site-visit form for Aadhar Realty Lucknow.",
} as const;

export const hero = {
  subline:
    "An independent desk in Vibhuti Khand, showing 2, 3 and 4 BHK homes across Lucknow with the sanctioned plan and the RERA entry already on the table.",
  since: "since",
} as const;

export const amenityLabels: Record<AmenityId, string> = {
  clubhouse: "Clubhouse",
  gym: "Gym",
  pool: "Swimming pool",
  "power-backup": "Power backup",
  security: "Gated security",
  "kids-play": "Children's play area",
  "ev-charging": "EV charging",
  rainwater: "Rainwater harvesting",
};

export const landmarkLabels: Record<LandmarkKind, string> = {
  school: "School",
  hospital: "Hospital",
  airport: "Airport",
  metro: "Metro",
  market: "Market",
  park: "Park",
  university: "University",
  station: "Road / station",
};

export const about = {
  lede: "We are an inventory desk, not a marketing office. That difference decides how a visit goes.",
  body: [
    "Aadhar Realty has worked out of the same first-floor room in Vibhuti Khand since 2014. We are a registered agent under Uttar Pradesh RERA, and the registration number is printed at the bottom of every page on this site rather than kept for the fine print.",
    "What we actually keep is a desk of live inventory across Lucknow — Gomti Nagar, Sushant Golf City, Hazratganj, Aliganj, Jankipuram and the Sultanpur Road side. We walk most of these sites ourselves, and the construction notes on a project page come from our last visit rather than from a builder's newsletter.",
    "We are not the cheapest way to buy a flat in this city, and we are not trying to be the fastest. We are trying to be the desk where the carpet-area sheet, the sanctioned plan and the possession date all say the same thing.",
  ],
  approachHeading: "How a visit actually goes",
  approach: [
    {
      title: "The drawing comes with us",
      body: "We bring the sanctioned plan to the sample flat and read it against the room you are standing in. If a wall has moved, you hear it from us first.",
    },
    {
      title: "Two people, one flat",
      body: "A site visit is two of you and one of us, in one flat at a time. There is no coach bus, no group booking desk and no token pressure at the end of it.",
    },
    {
      title: "Delays go in writing",
      body: "If a project is running behind its brochure date, we put the real date in writing on the first visit. It has cost us bookings. We still do it.",
    },
    {
      title: "The bank list is already on the file",
      body: "Every project page lists the banks that typically sanction there, so a loan conversation starts from a real list rather than from a phone call to find out.",
    },
  ],
  officeHeading: "The office",
  officeBody:
    "Fourteen, first floor, Vibhuti Khand. The stairs are on the left of the building, not through the shop. Sunday hours are shorter but they are kept.",
} as const;

export const notFoundCopy = {
  title: "That page is not on this site.",
  body: "The link may be old, or an inventory may have come off the desk. The project list is the best place to start again.",
  action: "Open the project desk",
  home: "Back to the homepage",
} as const;

export const home = {
  approachHeading: "Why buyers come back to this desk",
  featuredHeading: "Three we would show you first",
  featuredIntro:
    "One ready, two under construction, across three localities. The rest of the desk sits behind the link.",
  reviewsIntro:
    "Four buyers, in their own words, including the one whose possession ran late.",
  ctaHeading: "Come and see one.",
  ctaBody:
    "Call the Vibhuti Khand desk, or send a WhatsApp and we will reply with what is actually available in your budget.",
} as const;
