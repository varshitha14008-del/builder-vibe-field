import type { ArchiveItem, CulturalEvent, Monastery, Tour } from "@shared/api";

export const mockMonasteries: Monastery[] = [
  { id: "rumtek", name: "Rumtek Monastery", district: "Gangtok", founded: "18th c.", lat: 27.329, lng: 88.62 },
  { id: "enchey", name: "Enchey Monastery", district: "Gangtok", founded: "1909", lat: 27.343, lng: 88.62 },
  { id: "pemayangtse", name: "Pemayangtse Monastery", district: "Gyalshing", founded: "1705", lat: 27.299, lng: 88.248 },
];

export const mockTours: Tour[] = [
  { id: "rumtek-en", monasteryId: "rumtek", title: "Rumtek 360° Tour", languageCodes: ["en", "hi", "bo"] },
  { id: "enchey-en", monasteryId: "enchey", title: "Enchey 360° Tour", languageCodes: ["en"] },
];

export const mockArchives: ArchiveItem[] = [
  { id: "folio-ka", title: "Manuscript Folio KA", type: "manuscript", monasteryId: "pemayangtse" },
  { id: "thangka-guru", title: "Thangka of Guru Rinpoche", type: "thangka", monasteryId: "rumtek" },
  { id: "wheel-life", title: "Mural: Wheel of Life", type: "mural", monasteryId: "enchey" },
];

export const mockEvents: CulturalEvent[] = [
  { id: "lhabab", title: "Lhabab Duchen", dateISO: "2025-11-14", location: "Multiple monasteries" },
  { id: "kagyed", title: "Kagyed Dance", dateISO: "2025-12-08", location: "Enchey" },
  { id: "losar-prep", title: "Losar Preparations", dateISO: "2026-01-20", location: "Gangtok" },
];
