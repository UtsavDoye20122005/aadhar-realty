import type { OpeningHours, SocialLink } from "./types";

export const site = {
  businessName: "Aadhar Realty",
  shortName: "Aadhar",
  city: "Lucknow",
  tagline: "Homes in Lucknow, shown with the paperwork still attached.",
  phoneDisplay: "0522 400 2188",
  phoneTel: "+915224002188",
  whatsappNumber: "919415012188",
  whatsappDisplay: "+91 94150 12188",
  email: "hello@aadharrealty.in",
  addressLines: [
    "14, First Floor, Vibhuti Khand",
    "Gomti Nagar, Lucknow 226010",
    "Uttar Pradesh",
  ],
  addressOneLine:
    "14, First Floor, Vibhuti Khand, Gomti Nagar, Lucknow 226010",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Vibhuti%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%20226010",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Aadhar+Realty+Gomti+Nagar+Lucknow",
  timezone: "Asia/Kolkata",
  establishedYear: 2014,
  reraNumber: "UPRERAAGT12389",
  reraDisclaimer:
    "Aadhar Realty is a registered real estate agent under Uttar Pradesh RERA (Regn. UPRERAAGT12389). Project-wise RERA IDs are printed on each listing. Prices are indicative, exclusive of stamp duty, registration and GST, and may change without notice. Please verify the latest sanctioned plans and allotment terms at the office before you book.",
  credit: "Website by Utsav Doye",
  openingHours: {
    monday: { open: "10:00", close: "19:00", closed: false },
    tuesday: { open: "10:00", close: "19:00", closed: false },
    wednesday: { open: "10:00", close: "19:00", closed: false },
    thursday: { open: "10:00", close: "19:00", closed: false },
    friday: { open: "10:00", close: "19:00", closed: false },
    saturday: { open: "10:00", close: "19:00", closed: false },
    sunday: { open: "11:00", close: "16:00", closed: false },
  } satisfies OpeningHours,
  hoursSummary: "Mon–Sat 10:00–19:00 · Sun 11:00–16:00",
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/aadharrealty.lucknow",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/aadharrealty.lucknow",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@aadharrealty",
    },
  ] satisfies SocialLink[],
} as const;
