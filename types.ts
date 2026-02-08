
export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  tags?: string[];
}

export interface EventQuoteRequest {
  eventType: string;
  guestCount: number;
  durationHours: number;
  additionalInfo?: string;
}

export interface AIRecommendation {
  waitersCount: number;
  captainNeeded: boolean;
  serviceStyle: string;
  tips: string[];
}
