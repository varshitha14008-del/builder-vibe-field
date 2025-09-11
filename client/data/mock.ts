import type { ArchiveItem, CulturalEvent, Monastery, Tour } from "@shared/api";

export const mockMonasteries: Monastery[] = [
  { id: "rumtek", name: "Rumtek Monastery", district: "Gangtok", founded: "18th c.", lat: 27.28861, lng: 88.56139, heroImageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rumtek_Monastery_%28Old%29_Sikkim%2C_India.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Rumtek_Monastery", description: "Seat of the Karmapa (Karma Kagyu); also called the Dharma Chakra Centre." },
  { id: "enchey", name: "Enchey Monastery", district: "Gangtok", founded: "1909", lat: 27.33593, lng: 88.6192, heroImageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Enchey_Monastery_Gangtok.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Enchey_Monastery", description: "Nyingma monastery above Gangtok; known for the annual Kagyed Cham dances." },
  { id: "pemayangtse", name: "Pemayangtse Monastery", district: "Gyalshing", founded: "1705", lat: 27.3052, lng: 88.2516, heroImageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pemayangtse_Monastery_Outdoor.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Pemayangtse_Monastery", description: "One of the oldest Nyingma monasteries in Sikkim near Pelling; famed for the Zangdok Palri model." },
  { id: "tashiding", name: "Tashiding Monastery", district: "Gyalshing", founded: "17th c.", lat: 27.307, lng: 88.28, heroImageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tashiding_Monastery.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Tashiding_Monastery", description: "Sacred Nyingma site between Rathong and Rangeet rivers; hosts the Bumchu ceremony." },
  { id: "ralang", name: "Ralang Monastery", district: "Namchi", founded: "18th c.", lat: 27.32856, lng: 88.33478, heroImageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ralang_Monastery%2C_Sikkim%2C_India.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Ralong_Monastery", description: "Karma Kagyu monastery; the modern complex is Palchen Choeling." },
  { id: "phodong", name: "Phodong Monastery", district: "Mangan", founded: "18th c.", lat: 27.412567, lng: 88.583914, heroImageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Elevated_view_of_Phodang_%22Karma_Thubten_Tashi_ChoKhorling%22_Monastery_at_Phodong%2C_North_Sikkim%2C_India_01.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Phodong_Monastery", description: "Karma Kagyu monastery north of Gangtok; hosts masked cham dances." },
  { id: "phensang", name: "Phensang Monastery", district: "Mangan", founded: "1721", lat: 27.420278, lng: 88.610278, heroImageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Phensang_Monastery%2C_Sikkim_India.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Phensang_Monastery", description: "Historic monastery in North Sikkim; known for annual cham festival before Losoong." },
  { id: "lingdum", name: "Lingdum (Ranka) Monastery", district: "Gangtok", founded: "2000s", lat: 27.3325, lng: 88.580556, heroImageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ranka_Monastery_Sikkim.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Zurmang_Monastery", description: "Pal Zurmang Kagyud Institute at Ranka near Gangtok; modern Kagyu seat." },
  { id: "dubdi", name: "Dubdi Monastery", district: "Gyalshing", founded: "1701", lat: 27.366833, lng: 88.229944, heroImageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dubdi_Monastery_4.jpg", wikiUrl: "https://en.wikipedia.org/wiki/Dubdi_Monastery", description: "Sikkim's oldest monastery at Yuksom; founded soon after the kingdom's establishment." },
];

export const mockTours: Tour[] = [
  { id: "rumtek-en", monasteryId: "rumtek", title: "Rumtek 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571629984!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VndFRIUmc.!2m2!1d27.28862027053181!2d88.56148053028257!3f130.1551!4f0!5f0.7820865974627469" },
  { id: "pemayangtse-en", monasteryId: "pemayangtse", title: "Pemayangtse 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571545080!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREVoSlhucEFF!2m2!1d27.30518919282202!2d88.25156580066201!3f29.149603!4f0!5f0.7820865974627469" },
  { id: "enchey-en", monasteryId: "enchey", title: "Enchey 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571668266!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0pzTXEzOWdF!2m2!1d27.33593677395685!2d88.61916587167339!3f44.015686!4f0!5f0.7820865974627469" },
  { id: "tashiding-en", monasteryId: "tashiding", title: "Tashiding 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571737830!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6c08zSWc.!2m2!1d27.30891943909927!2d88.29787983128344!3f337.7484!4f0!5f0.7820865974627469" },
  { id: "ralang-en", monasteryId: "ralang", title: "Ralang 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571770793!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDh5NUc4RGc.!2m2!1d27.3284964274141!2d88.33524768412993!3f152.78369!4f0!5f0.7820865974627469" },
  { id: "phodong-en", monasteryId: "phodong", title: "Phodong 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571796958!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRGg0OURqV3c.!2m2!1d27.41303405816734!2d88.58375766744783!3f161.06181!4f0!5f0.7820865974627469" },
  { id: "phensang-en", monasteryId: "phensang", title: "Phensang 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://pannellum.org/images/alma.jpg" },
  { id: "lingdum-en", monasteryId: "lingdum", title: "Lingdum (Ranka) 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571880912!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ011T2JkcmdF!2m2!1d27.33118603686677!2d88.5790941249777!3f281.10345!4f0!5f0.7820865974627469" },
  { id: "dubdi-en", monasteryId: "dubdi", title: "Dubdi 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], panoramaUrl: "https://www.google.com/maps/embed?pb=!4v1757571925332!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRFVpdHkxNndF!2m2!1d27.36655288826205!2d88.22999220879571!3f326.35718!4f0!5f0.7820865974627469" },
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
