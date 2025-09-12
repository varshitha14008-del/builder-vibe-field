/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

export interface DemoResponse {
  message: string;
}

export interface Monastery {
  id: string;
  name: string;
  district?: string;
  founded?: string;
  lat?: number;
  lng?: number;
  heroImageUrl?: string;
  description?: string;
  wikiUrl?: string;
}

export interface Tour {
  id: string;
  monasteryId: string;
  title: string;
  languageCodes: string[]; // e.g., ['en','hi','ne','bo']
  previewImageUrl?: string;
  panoramaUrl?: string; // equirectangular 2:1 panorama URL
}

export interface ArchiveItem {
  id: string;
  title: string;
  type: "manuscript" | "mural" | "thangka" | "audio" | "video" | "photo" | "document";
  monasteryId?: string;
  thumbnailUrl?: string;
  imageUrl?: string;
  description?: string;
  sourceUrl?: string;
}

export interface CulturalEvent {
  id: string;
  title: string;
  dateISO: string; // YYYY-MM-DD
  location?: string;
}

export interface Paginated<T> {
  items: T[];
  total: number;
}
