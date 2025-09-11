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
  { id: "rumtek-en", monasteryId: "rumtek", title: "Rumtek 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571629984!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VndFRIUmc.!2m2!1d27.28862027053181!2d88.56148053028257!3f130.1551!4f0!5f0.7820865974627469" },
  { id: "pemayangtse-en", monasteryId: "pemayangtse", title: "Pemayangtse 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571545080!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVoSlhucEFF!2m2!1d27.30518919282202!2d88.25156580066201!3f29.149603!4f0!5f0.7820865974627469" },
  { id: "enchey-en", monasteryId: "enchey", title: "Enchey 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571668266!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0pzTXEzOWdF!2m2!1d27.33593677395685!2d88.61916587167339!3f44.015686!4f0!5f0.7820865974627469" },
  { id: "tashiding-en", monasteryId: "tashiding", title: "Tashiding 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571737830!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6c08zSWc.!2m2!1d27.30891943909927!2d88.29787983128344!3f337.7484!4f0!5f0.7820865974627469" },
  { id: "ralang-en", monasteryId: "ralang", title: "Ralang 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://pannellum.org/images/alma.jpg" },
  { id: "phodong-en", monasteryId: "phodong", title: "Phodong 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://pannellum.org/images/cerro-toco-0.jpg" },
  { id: "phensang-en", monasteryId: "phensang", title: "Phensang 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://pannellum.org/images/alma.jpg" },
  { id: "lingdum-en", monasteryId: "lingdum", title: "Lingdum (Ranka) 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://youtu.be/gpZMxnrKXUg?si=SYGzCl4msURoPve5" },
  { id: "dubdi-en", monasteryId: "dubdi", title: "Dubdi 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://pannellum.org/images/alma.jpg" },
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
