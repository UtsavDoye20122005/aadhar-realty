export type ProjectStatus = "ready" | "under-construction" | "new-launch";

export type BhkOption = 2 | 3 | 4;

export type AmenityId =
  | "clubhouse"
  | "gym"
  | "pool"
  | "power-backup"
  | "security"
  | "kids-play"
  | "ev-charging"
  | "rainwater";

export type LandmarkKind =
  | "school"
  | "hospital"
  | "airport"
  | "metro"
  | "market"
  | "park"
  | "university"
  | "station";

export interface Media {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FloorPlan {
  bhk: BhkOption;
  carpetAreaSqFt: number;
  builtUpAreaSqFt: number;
  priceInr: number;
  image: Media;
}

export interface Landmark {
  name: string;
  kind: LandmarkKind;
  distanceKm: number;
}

export interface ConstructionPhase {
  name: string;
  percent: number;
  note: string;
}

export interface Project {
  slug: string;
  name: string;
  locality: string;
  localitySlug: string;
  status: ProjectStatus;
  priceMin: number;
  priceMax: number;
  bhkOptions: BhkOption[];
  carpetAreas: number[];
  amenities: AmenityId[];
  floorPlans: FloorPlan[];
  images: Media[];
  reraNumber: string;
  possessionDate: string;
  landmarks: Landmark[];
  excerpt: string;
  description: string;
  address: string;
  totalUnits: number;
  towers: number;
  typicalFloors: number;
  landAcres: number;
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  constructionProgress: ConstructionPhase[];
  approvedBanks: string[];
}

export interface DayHours {
  open: string;
  close: string;
  closed: boolean;
}

export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type OpeningHours = Record<Weekday, DayHours>;

export interface Review {
  name: string;
  locality: string;
  rating: number;
  date: string;
  body: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  href: string;
}
