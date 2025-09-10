import type { ArchiveItem, CulturalEvent, Monastery, Tour } from "@shared/api";

export const mockMonasteries: Monastery[] = [
  { id: "rumtek", name: "Rumtek Monastery", district: "Gangtok", founded: "18th c.", lat: 27.28861, lng: 88.56139 },
  { id: "enchey", name: "Enchey Monastery", district: "Gangtok", founded: "1909", lat: 27.33593, lng: 88.6192 },
  { id: "pemayangtse", name: "Pemayangtse Monastery", district: "Gyalshing", founded: "1705", lat: 27.3052, lng: 88.2516 },
  { id: "tashiding", name: "Tashiding Monastery", district: "Gyalshing", founded: "17th c.", lat: 27.307, lng: 88.28 },
  { id: "ralang", name: "Ralang Monastery", district: "Namchi", founded: "18th c.", lat: 27.32856, lng: 88.33478 },
  { id: "phodong", name: "Phodong Monastery", district: "Mangan", founded: "18th c.", lat: 27.412567, lng: 88.583914 },
  { id: "phensang", name: "Phensang Monastery", district: "Mangan", founded: "1721", lat: 27.420278, lng: 88.610278 },
  { id: "lingdum", name: "Lingdum (Ranka) Monastery", district: "Gangtok", founded: "2000s", lat: 27.3325, lng: 88.580556 },
  { id: "dubdi", name: "Dubdi Monastery", district: "Gyalshing", founded: "1701", lat: 27.366833, lng: 88.229944 },
];

export const mockTours: Tour[] = [
  { id: "rumtek-en", monasteryId: "rumtek", title: "Rumtek 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Nothgottes-360-panorama.jpg" },
  { id: "pemayangtse-en", monasteryId: "pemayangtse", title: "Pemayangtse 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/ALMA_360_degree_panorama_(pano360-alma).jpg" },
  { id: "enchey-en", monasteryId: "enchey", title: "Enchey 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ram_Mandir_360_View_Nepal.jpg" },
  { id: "tashiding-en", monasteryId: "tashiding", title: "Tashiding 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/KostNixLaden_Bochum_Panorama.jpg" },
  { id: "ralang-en", monasteryId: "ralang", title: "Ralang 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/360-degree_panorama_of_the_ESO_Headquarters_(hqe-pano1).jpg" },
  { id: "phodong-en", monasteryId: "phodong", title: "Phodong 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Night_sky_at_La_Silla_(150121-22-lasilla-360-cc).jpg" },
  { id: "phensang-en", monasteryId: "phensang", title: "Phensang 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Biblioteca_P%C3%BAblica_de_%C3%89vora_-_Hall_de_entrada_(360_panorama).jpg" },
  { id: "lingdum-en", monasteryId: "lingdum", title: "Lingdum (Ranka) 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/ALMA_360_degree_panorama_(pano360-alma).jpg" },
  { id: "dubdi-en", monasteryId: "dubdi", title: "Dubdi 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Nothgottes-360-panorama.jpg" },
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
