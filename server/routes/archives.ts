import type { RequestHandler } from "express";
import type { ArchiveItem, Paginated } from "@shared/api";

const archives: ArchiveItem[] = [
  {
    id: "rumtek-photo",
    title: "Photograph: Rumtek Monastery",
    type: "photo",
    monasteryId: "rumtek",
    thumbnailUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rumtek_Monastery_%28Old%29_Sikkim%2C_India.jpg",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Rumtek_Monastery_%28Old%29_Sikkim%2C_India.jpg",
    description: "Rumtek, the Dharma Chakra Centre, serves as the principal seat of the 16th Karmapa in exile. Rebuilt in the 1960s, it houses sacred relics and embodies the Karma Kagyu lineage's living traditions.",
    sourceUrl: "https://en.wikipedia.org/wiki/Rumtek_Monastery"
  },
  {
    id: "enchey-photo",
    title: "Photograph: Enchey Monastery",
    type: "photo",
    monasteryId: "enchey",
    thumbnailUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Enchey_Monastery_Gangtok.jpg",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Enchey_Monastery_Gangtok.jpg",
    description: "Founded in 1909 above Gangtok, Enchey is a Nyingma monastery renowned for its annual Kagyed Cham mask dances performed before Losoong (Sikkimese New Year).",
    sourceUrl: "https://en.wikipedia.org/wiki/Enchey_Monastery"
  },
  {
    id: "pemayangtse-photo",
    title: "Photograph: Pemayangtse Monastery",
    type: "photo",
    monasteryId: "pemayangtse",
    thumbnailUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pemayangtse_Monastery_Outdoor.jpg",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Pemayangtse_Monastery_Outdoor.jpg",
    description: "Established in 1705 near Pelling, Pemayangtse is among Sikkim's oldest Nyingma monasteries, famed for the intricate wooden model of Zangdok Palri (the celestial abode of Guru Rinpoche).",
    sourceUrl: "https://en.wikipedia.org/wiki/Pemayangtse_Monastery"
  },
  {
    id: "tashiding-photo",
    title: "Photograph: Tashiding Monastery",
    type: "photo",
    monasteryId: "tashiding",
    thumbnailUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tashiding_Monastery.jpg",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Tashiding_Monastery.jpg",
    description: "Tashiding, a sacred Nyingma site founded in the 17th century, lies between the Rathong and Rangeet rivers. It is famed for the Bumchu ceremony, when the sacred water is revealed for divination.",
    sourceUrl: "https://en.wikipedia.org/wiki/Tashiding_Monastery"
  },
  {
    id: "ralang-photo",
    title: "Photograph: Ralang Monastery",
    type: "photo",
    monasteryId: "ralang",
    thumbnailUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ralang_Monastery%2C_Sikkim%2C_India.jpg",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ralang_Monastery%2C_Sikkim%2C_India.jpg",
    description: "Ralang (Palchen Choeling) represents the Karma Kagyu tradition in South Sikkim. The modern complex hosts important cham dances and teachings attracting pilgrims annually.",
    sourceUrl: "https://en.wikipedia.org/wiki/Ralong_Monastery"
  },
  {
    id: "phodong-photo",
    title: "Photograph: Phodong Monastery",
    type: "photo",
    monasteryId: "phodong",
    thumbnailUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Elevated_view_of_Phodang_%22Karma_Thubten_Tashi_ChoKhorling%22_Monastery_at_Phodong%2C_North_Sikkim%2C_India_01.jpg",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Elevated_view_of_Phodang_%22Karma_Thubten_Tashi_ChoKhorling%22_Monastery_at_Phodong%2C_North_Sikkim%2C_India_01.jpg",
    description: "Phodong is a Karma Kagyu monastery north of Gangtok, associated with the Chogyal rulers. It is known for vibrant cham dances and historic murals.",
    sourceUrl: "https://en.wikipedia.org/wiki/Phodong_Monastery"
  },
  {
    id: "phensang-photo",
    title: "Photograph: Phensang Monastery",
    type: "photo",
    monasteryId: "phensang",
    thumbnailUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Phensang_Monastery%2C_Sikkim_India.jpg",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Phensang_Monastery%2C_Sikkim_India.jpg",
    description: "Founded in 1721, Phensang in North Sikkim is celebrated for its annual cham festival performed just before Losoong, drawing local communities together.",
    sourceUrl: "https://en.wikipedia.org/wiki/Phensang_Monastery"
  },
  {
    id: "lingdum-photo",
    title: "Photograph: Lingdum (Ranka) Monastery",
    type: "photo",
    monasteryId: "lingdum",
    thumbnailUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ranka_Monastery_Sikkim.jpg",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ranka_Monastery_Sikkim.jpg",
    description: "The Pal Zurmang Kagyud Institute at Ranka near Gangtok is a modern Kagyu seat distinguished by its grand architecture and training programs for monks.",
    sourceUrl: "https://en.wikipedia.org/wiki/Zurmang_Monastery"
  },
  {
    id: "dubdi-photo",
    title: "Photograph: Dubdi Monastery",
    type: "photo",
    monasteryId: "dubdi",
    thumbnailUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dubdi_Monastery_4.jpg",
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dubdi_Monastery_4.jpg",
    description: "Dubdi at Yuksom (1701) is Sikkim’s oldest monastery, founded soon after the establishment of the kingdom. It remains central to the state’s early religious history.",
    sourceUrl: "https://en.wikipedia.org/wiki/Dubdi_Monastery"
  }
];

export const handleGetArchives: RequestHandler = (_req, res) => {
  const response: Paginated<ArchiveItem> = { items: archives, total: archives.length };
  res.json(response);
};
