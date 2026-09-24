import { photos } from "./photos";
import type { BhkOption, FloorPlan, Project } from "./types";

/**
 * DEMO DATA — NOT REAL INVENTORY.
 *
 * Every project below is fictional: the names, prices, RERA registration
 * numbers, possession dates, unit counts and bank lists are invented for a
 * client demonstration build and must be replaced with the desk's real
 * inventory before this site is shown to buyers or published.
 *
 * Four names (Gomti Courtyard, Aashiana Court, Indira Nagar Heights,
 * Vrindavan Orchard) are carried over from content/reviews.ts so the
 * testimonials refer to projects that exist in this dataset.
 */

function mapUrls(query: string) {
  const q = encodeURIComponent(`${query}, Lucknow, Uttar Pradesh`);
  return {
    mapEmbedUrl: `https://www.google.com/maps?q=${q}&output=embed`,
    mapDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${q}`,
  };
}

function plan(
  bhk: BhkOption,
  carpetAreaSqFt: number,
  builtUpAreaSqFt: number,
  priceInr: number,
): FloorPlan {
  const image =
    bhk === 2 ? photos.plan2 : bhk === 3 ? photos.plan3 : photos.plan4;
  return { bhk, carpetAreaSqFt, builtUpAreaSqFt, priceInr, image };
}

const commonBanks = ["HDFC", "State Bank of India", "ICICI", "LIC Housing"];

export const projects: Project[] = [
  {
    slug: "gomti-courtyard",
    name: "Gomti Courtyard",
    locality: "Gomti Nagar Extension",
    localitySlug: "gomti-nagar-extension",
    status: "under-construction",
    priceMin: 8_900_000,
    priceMax: 16_400_000,
    bhkOptions: [2, 3, 4],
    carpetAreas: [742, 1080, 1465],
    amenities: ["clubhouse", "gym", "pool", "power-backup", "security", "kids-play"],
    floorPlans: [
      plan(2, 742, 968, 8_900_000),
      plan(3, 1080, 1395, 12_600_000),
      plan(4, 1465, 1880, 16_400_000),
    ],
    images: [
      photos.courtyardExt,
      photos.courtyardHall,
      photos.courtyardPool,
      photos.courtyardNight,
    ],
    reraNumber: "UPRERAPRJ884201",
    possessionDate: "2027-06-30",
    landmarks: [
      { name: "Lucknow Public School", kind: "school", distanceKm: 1.2 },
      { name: "Medanta Hospital", kind: "hospital", distanceKm: 3.4 },
      { name: "Munshipulia Metro", kind: "metro", distanceKm: 4.1 },
      { name: "Janeshwar Mishra Park", kind: "park", distanceKm: 2.6 },
    ],
    excerpt:
      "Four low-rise towers around a planted courtyard, five minutes off the Shaheed Path slip road.",
    description:
      "Gomti Courtyard is built as four eight-storey towers around a single planted court, so every flat looks onto greenery rather than onto the next tower. The 3 BHK is the volume seller here and the sample flat is furnished to the sanctioned drawing, not to a larger mock-up. Handover is staged tower by tower from mid-2027.",
    address: "Sector 7, Gomti Nagar Extension, Lucknow 226010",
    totalUnits: 384,
    towers: 4,
    typicalFloors: 8,
    landAcres: 5.2,
    ...mapUrls("Gomti Nagar Extension"),
    constructionProgress: [
      { name: "Excavation and raft", percent: 100, note: "Completed March 2025." },
      { name: "Tower A and B structure", percent: 82, note: "Sixth slab cast." },
      { name: "Tower C and D structure", percent: 44, note: "Third slab cast." },
      { name: "Finishing and services", percent: 12, note: "Mock-up flat complete." },
    ],
    approvedBanks: commonBanks,
  },
  {
    slug: "vatika-riverside",
    name: "Vatika Riverside",
    locality: "Gomti Nagar",
    localitySlug: "gomti-nagar",
    status: "ready",
    priceMin: 11_200_000,
    priceMax: 21_500_000,
    bhkOptions: [3, 4],
    carpetAreas: [1180, 1620],
    amenities: ["clubhouse", "gym", "pool", "power-backup", "security", "rainwater"],
    floorPlans: [
      plan(3, 1180, 1510, 11_200_000),
      plan(4, 1620, 2065, 21_500_000),
    ],
    images: [
      photos.vatikaExt,
      photos.vatikaLiv,
      photos.vatikaKit,
      photos.vatikaBed,
    ],
    reraNumber: "UPRERAPRJ771904",
    possessionDate: "2024-12-31",
    landmarks: [
      { name: "Gomti Riverfront", kind: "park", distanceKm: 1.0 },
      { name: "City Montessori School", kind: "school", distanceKm: 2.2 },
      { name: "Sahara Hospital", kind: "hospital", distanceKm: 3.0 },
      { name: "Badshahnagar Station", kind: "station", distanceKm: 4.6 },
    ],
    excerpt:
      "Ready-to-move 3 and 4 BHK with the riverfront walk at the end of the road.",
    description:
      "Vatika Riverside received its completion certificate in late 2024 and roughly two thirds of the flats are occupied, so you can walk the actual corridors rather than a sample. The 4 BHK corner units carry a wraparound balcony. Registry is immediate and the society is already running its own maintenance.",
    address: "Vipul Khand, Gomti Nagar, Lucknow 226010",
    totalUnits: 212,
    towers: 3,
    typicalFloors: 11,
    landAcres: 3.8,
    ...mapUrls("Vipul Khand, Gomti Nagar"),
    constructionProgress: [
      { name: "Structure", percent: 100, note: "Completed 2023." },
      { name: "Finishing and services", percent: 100, note: "Completed 2024." },
      { name: "Completion certificate", percent: 100, note: "Received December 2024." },
    ],
    approvedBanks: [...commonBanks, "Axis Bank"],
  },
  {
    slug: "golf-city-residences",
    name: "Golf City Residences",
    locality: "Sushant Golf City",
    localitySlug: "sushant-golf-city",
    status: "under-construction",
    priceMin: 14_500_000,
    priceMax: 26_000_000,
    bhkOptions: [3, 4],
    carpetAreas: [1340, 1910],
    amenities: ["clubhouse", "gym", "pool", "power-backup", "security", "ev-charging"],
    floorPlans: [
      plan(3, 1340, 1720, 14_500_000),
      plan(4, 1910, 2440, 26_000_000),
    ],
    images: [photos.golfExt, photos.golfLawn, photos.golfDin, photos.golfBath],
    reraNumber: "UPRERAPRJ912466",
    possessionDate: "2028-03-31",
    landmarks: [
      { name: "Jaipuria School", kind: "school", distanceKm: 1.8 },
      { name: "Amity University", kind: "university", distanceKm: 2.4 },
      { name: "Amausi Airport", kind: "airport", distanceKm: 14.2 },
      { name: "Phoenix Palassio", kind: "market", distanceKm: 6.1 },
    ],
    excerpt:
      "Low-density plots along the golf course, the largest carpet areas on the desk.",
    description:
      "Golf City Residences is the least dense inventory we handle, at roughly 36 units per acre. Frontage units look directly onto the course, which is reflected in the price; the inner row does not, and we will tell you which is which on the site visit. Possession is scheduled for early 2028.",
    address: "Sector B, Sushant Golf City, Lucknow 226030",
    totalUnits: 168,
    towers: 6,
    typicalFloors: 4,
    landAcres: 8.4,
    ...mapUrls("Sushant Golf City"),
    constructionProgress: [
      { name: "Site works", percent: 100, note: "Completed 2025." },
      { name: "Block 1 to 3 structure", percent: 58, note: "Third floor slab." },
      { name: "Block 4 to 6 structure", percent: 21, note: "Plinth complete." },
      { name: "Clubhouse", percent: 8, note: "Foundation underway." },
    ],
    approvedBanks: commonBanks,
  },
  {
    slug: "hazratganj-central",
    name: "Hazratganj Central",
    locality: "Hazratganj",
    localitySlug: "hazratganj",
    status: "ready",
    priceMin: 7_400_000,
    priceMax: 12_900_000,
    bhkOptions: [2, 3],
    carpetAreas: [668, 1015],
    amenities: ["power-backup", "security", "gym"],
    floorPlans: [
      plan(2, 668, 880, 7_400_000),
      plan(3, 1015, 1310, 12_900_000),
    ],
    images: [
      photos.hazratExt,
      photos.hazratApt,
      photos.hazratKit,
      photos.hazratBal,
    ],
    reraNumber: "UPRERAPRJ640118",
    possessionDate: "2023-09-30",
    landmarks: [
      { name: "Hazratganj Market", kind: "market", distanceKm: 0.4 },
      { name: "Civil Hospital", kind: "hospital", distanceKm: 1.1 },
      { name: "Hazratganj Metro", kind: "metro", distanceKm: 0.6 },
      { name: "Charbagh Station", kind: "station", distanceKm: 3.2 },
    ],
    excerpt:
      "A small ready building inside Hazratganj, walking distance to the metro.",
    description:
      "Hazratganj Central is a single ready building of 48 flats, which is unusual for this part of the city where most stock is older. There is no pool and no clubhouse; what you are buying is the address and the metro at the end of the street. Parking is one covered bay per flat, no more.",
    address: "Rani Laxmi Bai Marg, Hazratganj, Lucknow 226001",
    totalUnits: 48,
    towers: 1,
    typicalFloors: 9,
    landAcres: 0.9,
    ...mapUrls("Hazratganj"),
    constructionProgress: [
      { name: "Structure", percent: 100, note: "Completed 2022." },
      { name: "Finishing and services", percent: 100, note: "Completed 2023." },
      { name: "Completion certificate", percent: 100, note: "Received September 2023." },
    ],
    approvedBanks: ["HDFC", "State Bank of India", "Punjab National Bank"],
  },
  {
    slug: "aliganj-sarovar",
    name: "Aliganj Sarovar",
    locality: "Aliganj",
    localitySlug: "aliganj",
    status: "under-construction",
    priceMin: 6_200_000,
    priceMax: 10_800_000,
    bhkOptions: [2, 3],
    carpetAreas: [624, 946],
    amenities: ["power-backup", "security", "kids-play", "rainwater"],
    floorPlans: [
      plan(2, 624, 820, 6_200_000),
      plan(3, 946, 1225, 10_800_000),
    ],
    images: [
      photos.aliganjExt,
      photos.aliganjCourt,
      photos.aliganjLiv,
      photos.aliganjPlay,
    ],
    reraNumber: "UPRERAPRJ805377",
    possessionDate: "2026-12-31",
    landmarks: [
      { name: "Kendriya Vidyalaya", kind: "school", distanceKm: 0.9 },
      { name: "Ram Manohar Lohia Hospital", kind: "hospital", distanceKm: 2.8 },
      { name: "Sector H Market", kind: "market", distanceKm: 0.5 },
      { name: "Kapoorthala", kind: "market", distanceKm: 1.6 },
    ],
    excerpt:
      "The most affordable 2 BHK on the desk, in an established Aliganj sector.",
    description:
      "Aliganj Sarovar sits inside an already-built sector, so the schools, markets and bus routes exist today rather than being promised. The 2 BHK is compact at 624 sq ft carpet and we will not describe it as anything else. Possession is scheduled for the end of 2026.",
    address: "Sector I, Aliganj, Lucknow 226024",
    totalUnits: 296,
    towers: 5,
    typicalFloors: 7,
    landAcres: 4.1,
    ...mapUrls("Aliganj"),
    constructionProgress: [
      { name: "Foundation", percent: 100, note: "Completed 2024." },
      { name: "Tower structure", percent: 71, note: "Fifth slab across all towers." },
      { name: "Brickwork and plaster", percent: 34, note: "Towers 1 and 2 underway." },
      { name: "Finishing and services", percent: 9, note: "Sample flat complete." },
    ],
    approvedBanks: commonBanks,
  },
  {
    slug: "indira-nagar-heights",
    name: "Indira Nagar Heights",
    locality: "Indira Nagar",
    localitySlug: "indira-nagar",
    status: "ready",
    priceMin: 6_800_000,
    priceMax: 11_900_000,
    bhkOptions: [2, 3],
    carpetAreas: [690, 1002],
    amenities: ["gym", "power-backup", "security", "kids-play"],
    floorPlans: [
      plan(2, 690, 905, 6_800_000),
      plan(3, 1002, 1290, 11_900_000),
    ],
    images: [
      photos.indiraExt,
      photos.indiraLiv,
      photos.indiraBed,
      photos.indiraGym,
    ],
    reraNumber: "UPRERAPRJ713082",
    possessionDate: "2025-11-30",
    landmarks: [
      { name: "Bhootnath Market", kind: "market", distanceKm: 1.3 },
      { name: "Indira Nagar Metro", kind: "metro", distanceKm: 2.0 },
      { name: "St. Mary's School", kind: "school", distanceKm: 0.8 },
      { name: "Lekhraj Market", kind: "market", distanceKm: 2.7 },
    ],
    excerpt:
      "Handed over in late 2025, six weeks behind the original brochure date.",
    description:
      "Indira Nagar Heights was handed over in November 2025, six weeks later than the date printed in the original brochure. We put that in writing to buyers on the first visit and we are repeating it here. The building itself is sound, the lifts are commissioned and the society has taken over maintenance.",
    address: "Sector 14, Indira Nagar, Lucknow 226016",
    totalUnits: 144,
    towers: 2,
    typicalFloors: 12,
    landAcres: 2.4,
    ...mapUrls("Indira Nagar"),
    constructionProgress: [
      { name: "Structure", percent: 100, note: "Completed 2024." },
      { name: "Finishing and services", percent: 100, note: "Completed October 2025." },
      { name: "Handover", percent: 100, note: "Began November 2025, six weeks late." },
    ],
    approvedBanks: commonBanks,
  },
  {
    slug: "jankipuram-garden-homes",
    name: "Jankipuram Garden Homes",
    locality: "Jankipuram",
    localitySlug: "jankipuram",
    status: "under-construction",
    priceMin: 5_800_000,
    priceMax: 9_400_000,
    bhkOptions: [2, 3],
    carpetAreas: [612, 898],
    amenities: ["power-backup", "security", "kids-play", "rainwater"],
    floorPlans: [
      plan(2, 612, 800, 5_800_000),
      plan(3, 898, 1160, 9_400_000),
    ],
    images: [photos.jankiExt, photos.jankiInt, photos.jankiKit, photos.jankiYard],
    reraNumber: "UPRERAPRJ858640",
    possessionDate: "2027-09-30",
    landmarks: [
      { name: "Jankipuram Market", kind: "market", distanceKm: 0.7 },
      { name: "Integral University", kind: "university", distanceKm: 3.1 },
      { name: "Sitapur Road", kind: "station", distanceKm: 2.2 },
      { name: "Jankipuram Park", kind: "park", distanceKm: 0.5 },
    ],
    excerpt:
      "Low-rise garden blocks on the Sitapur Road side, five storeys, no lift queues.",
    description:
      "Jankipuram Garden Homes is five-storey walk-up-plus-lift stock laid out as garden blocks rather than towers, which keeps common area charges low. It is the cheapest per square foot we currently show. The trade-off is distance: you are 40 minutes from Hazratganj in traffic.",
    address: "Sector G, Jankipuram, Lucknow 226021",
    totalUnits: 240,
    towers: 8,
    typicalFloors: 5,
    landAcres: 6.0,
    ...mapUrls("Jankipuram"),
    constructionProgress: [
      { name: "Site development", percent: 100, note: "Completed 2025." },
      { name: "Blocks 1 to 4 structure", percent: 64, note: "Fourth slab cast." },
      { name: "Blocks 5 to 8 structure", percent: 28, note: "Plinth complete." },
      { name: "Finishing and services", percent: 6, note: "Not yet started at scale." },
    ],
    approvedBanks: ["HDFC", "State Bank of India", "LIC Housing"],
  },
  {
    slug: "vrindavan-orchard",
    name: "Vrindavan Orchard",
    locality: "Vrindavan Yojna",
    localitySlug: "vrindavan-yojna",
    status: "ready",
    priceMin: 7_900_000,
    priceMax: 14_200_000,
    bhkOptions: [2, 3, 4],
    carpetAreas: [705, 1045, 1380],
    amenities: ["clubhouse", "gym", "power-backup", "security", "kids-play"],
    floorPlans: [
      plan(2, 705, 925, 7_900_000),
      plan(3, 1045, 1345, 11_100_000),
      plan(4, 1380, 1775, 14_200_000),
    ],
    images: [
      photos.vrindExt,
      photos.vrindHall,
      photos.vrindBed,
      photos.vrindGreen,
    ],
    reraNumber: "UPRERAPRJ692355",
    possessionDate: "2025-04-30",
    landmarks: [
      { name: "Sultanpur Road", kind: "station", distanceKm: 1.4 },
      { name: "Shaheed Path", kind: "station", distanceKm: 2.9 },
      { name: "Amausi Airport", kind: "airport", distanceKm: 11.8 },
      { name: "Vrindavan Market", kind: "market", distanceKm: 0.8 },
    ],
    excerpt:
      "Ready stock on Sultanpur Road, the quickest run to the airport we handle.",
    description:
      "Vrindavan Orchard has been occupied since spring 2025 and suits buyers who need the airport or Shaheed Path rather than the old city. All three configurations are still available on resale and first sale. The clubhouse is small and honestly described as such.",
    address: "Sector 6, Vrindavan Yojna, Lucknow 226029",
    totalUnits: 320,
    towers: 5,
    typicalFloors: 9,
    landAcres: 5.6,
    ...mapUrls("Vrindavan Yojna"),
    constructionProgress: [
      { name: "Structure", percent: 100, note: "Completed 2023." },
      { name: "Finishing and services", percent: 100, note: "Completed 2025." },
      { name: "Completion certificate", percent: 100, note: "Received April 2025." },
    ],
    approvedBanks: [...commonBanks, "Bank of Baroda"],
  },
  {
    slug: "shaheed-path-villas",
    name: "Shaheed Path Villas",
    locality: "Shaheed Path",
    localitySlug: "shaheed-path",
    status: "new-launch",
    priceMin: 18_500_000,
    priceMax: 31_000_000,
    bhkOptions: [4],
    carpetAreas: [2140],
    amenities: ["clubhouse", "pool", "power-backup", "security", "ev-charging", "rainwater"],
    floorPlans: [plan(4, 2140, 2720, 18_500_000)],
    images: [
      photos.shaheedExt,
      photos.shaheedLiv,
      photos.shaheedPool,
      photos.shaheedStair,
    ],
    reraNumber: "UPRERAPRJ940712",
    possessionDate: "2029-06-30",
    landmarks: [
      { name: "Shaheed Path", kind: "station", distanceKm: 0.3 },
      { name: "Medanta Hospital", kind: "hospital", distanceKm: 4.2 },
      { name: "Amausi Airport", kind: "airport", distanceKm: 12.5 },
      { name: "Lulu Mall", kind: "market", distanceKm: 5.3 },
    ],
    excerpt:
      "Twenty-four independent villas, launched this quarter, possession 2029.",
    description:
      "Shaheed Path Villas is a new launch of 24 independent four-bedroom villas on individual plots. Launch pricing applies to the first twelve bookings and the builder has not yet broken ground, so everything you are shown is a drawing or a render. We would not call this a low-risk purchase and we say so on the visit.",
    address: "Off Shaheed Path, Lucknow 226030",
    totalUnits: 24,
    towers: 24,
    typicalFloors: 2,
    landAcres: 7.2,
    ...mapUrls("Shaheed Path"),
    constructionProgress: [
      { name: "Approvals", percent: 100, note: "RERA registration complete." },
      { name: "Site clearing", percent: 35, note: "Boundary wall underway." },
      { name: "Villa structures", percent: 0, note: "Not started." },
      { name: "Finishing and services", percent: 0, note: "Not started." },
    ],
    approvedBanks: ["HDFC", "ICICI", "Axis Bank"],
  },
  {
    slug: "aashiana-court",
    name: "Aashiana Court",
    locality: "Aashiana",
    localitySlug: "aashiana",
    status: "ready",
    priceMin: 5_400_000,
    priceMax: 8_600_000,
    bhkOptions: [2, 3],
    carpetAreas: [598, 862],
    amenities: ["power-backup", "security", "kids-play"],
    floorPlans: [
      plan(2, 598, 785, 5_400_000),
      plan(3, 862, 1115, 8_600_000),
    ],
    images: [
      photos.aashianaExt,
      photos.aashianaLiv,
      photos.aashianaDin,
      photos.aashianaYard,
    ],
    reraNumber: "UPRERAPRJ601944",
    possessionDate: "2024-03-31",
    landmarks: [
      { name: "Aashiana Market", kind: "market", distanceKm: 0.6 },
      { name: "Government Girls College", kind: "school", distanceKm: 1.5 },
      { name: "Alambagh Bus Station", kind: "station", distanceKm: 3.8 },
      { name: "Smriti Upvan", kind: "park", distanceKm: 2.1 },
    ],
    excerpt:
      "Small, ready and quiet — the flat we show buyers downsizing from a house.",
    description:
      "Aashiana Court is a settled building from 2024 in an old LDA sector. The 2 BHK is the one we show most often to buyers moving out of a larger family house, because the carpet area sheet is honest and the society is mixed-age rather than all young families. Lift, backup and covered parking are in place.",
    address: "Sector K, Aashiana, Lucknow 226012",
    totalUnits: 96,
    towers: 2,
    typicalFloors: 6,
    landAcres: 1.8,
    ...mapUrls("Aashiana"),
    constructionProgress: [
      { name: "Structure", percent: 100, note: "Completed 2022." },
      { name: "Finishing and services", percent: 100, note: "Completed 2024." },
      { name: "Completion certificate", percent: 100, note: "Received March 2024." },
    ],
    approvedBanks: ["State Bank of India", "LIC Housing", "Punjab National Bank"],
  },
  {
    slug: "vibhuti-khand-residences",
    name: "Vibhuti Khand Residences",
    locality: "Vibhuti Khand",
    localitySlug: "vibhuti-khand",
    status: "under-construction",
    priceMin: 12_800_000,
    priceMax: 19_600_000,
    bhkOptions: [3, 4],
    carpetAreas: [1215, 1690],
    amenities: ["clubhouse", "gym", "pool", "power-backup", "security", "ev-charging"],
    floorPlans: [
      plan(3, 1215, 1560, 12_800_000),
      plan(4, 1690, 2160, 19_600_000),
    ],
    images: [
      photos.vibhutiExt,
      photos.vibhutiHall,
      photos.vibhutiLiv,
      photos.vibhutiPool,
    ],
    reraNumber: "UPRERAPRJ877513",
    possessionDate: "2027-03-31",
    landmarks: [
      { name: "Vibhuti Khand Market", kind: "market", distanceKm: 0.3 },
      { name: "Sahara Hospital", kind: "hospital", distanceKm: 1.9 },
      { name: "Gomti Nagar Station", kind: "station", distanceKm: 2.5 },
      { name: "Janeshwar Mishra Park", kind: "park", distanceKm: 3.4 },
    ],
    excerpt:
      "Three minutes from our own desk, which is why we know this site well.",
    description:
      "Vibhuti Khand Residences is the inventory we can show at the shortest notice, because the site is a three-minute walk from the office. Two towers of 3 and 4 BHK with a basement club. We walk this site most weeks and the construction notes on this page are from our own last visit, not from the builder's newsletter.",
    address: "Vibhuti Khand, Gomti Nagar, Lucknow 226010",
    totalUnits: 176,
    towers: 2,
    typicalFloors: 14,
    landAcres: 2.9,
    ...mapUrls("Vibhuti Khand, Gomti Nagar"),
    constructionProgress: [
      { name: "Basement and raft", percent: 100, note: "Completed 2025." },
      { name: "Tower 1 structure", percent: 88, note: "Twelfth slab cast." },
      { name: "Tower 2 structure", percent: 67, note: "Ninth slab cast." },
      { name: "Finishing and services", percent: 24, note: "Tower 1 plaster underway." },
    ],
    approvedBanks: [...commonBanks, "Axis Bank"],
  },
  {
    slug: "awadh-vihar-signature",
    name: "Awadh Vihar Signature",
    locality: "Awadh Vihar",
    localitySlug: "awadh-vihar",
    status: "new-launch",
    priceMin: 4_900_000,
    priceMax: 8_200_000,
    bhkOptions: [2, 3],
    carpetAreas: [575, 840],
    amenities: ["power-backup", "security", "kids-play", "rainwater"],
    floorPlans: [
      plan(2, 575, 755, 4_900_000),
      plan(3, 840, 1085, 8_200_000),
    ],
    images: [photos.awadhExt, photos.awadhLiv, photos.awadhKit, photos.awadhBed],
    reraNumber: "UPRERAPRJ951208",
    possessionDate: "2029-12-31",
    landmarks: [
      { name: "Awadh Vihar Market", kind: "market", distanceKm: 0.9 },
      { name: "Amausi Airport", kind: "airport", distanceKm: 6.4 },
      { name: "Transport Nagar Metro", kind: "metro", distanceKm: 3.7 },
      { name: "Kanpur Road", kind: "station", distanceKm: 1.2 },
    ],
    excerpt:
      "New launch on the Kanpur Road side, the lowest entry price on the desk.",
    description:
      "Awadh Vihar Signature opened for booking this quarter at the lowest entry price we currently list. It is a long wait: possession is scheduled for the end of 2029 and the builder is newer than the others on this desk. We show it, we explain the risk, and we do not push it.",
    address: "Awadh Vihar Yojna, Kanpur Road, Lucknow 226012",
    totalUnits: 412,
    towers: 6,
    typicalFloors: 11,
    landAcres: 5.9,
    ...mapUrls("Awadh Vihar Yojna"),
    constructionProgress: [
      { name: "Approvals", percent: 100, note: "RERA registration complete." },
      { name: "Excavation", percent: 42, note: "Towers 1 and 2 underway." },
      { name: "Tower structure", percent: 0, note: "Not started." },
      { name: "Finishing and services", percent: 0, note: "Not started." },
    ],
    approvedBanks: ["HDFC", "State Bank of India"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const localities = [...new Set(projects.map((p) => p.locality))].sort();
