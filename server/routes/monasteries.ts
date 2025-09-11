import type { RequestHandler } from "express";
import type { Monastery, Paginated } from "@shared/api";

const monasteries: Monastery[] = [
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

export const handleGetMonasteries: RequestHandler = (_req, res) => {
  const response: Paginated<Monastery> = { items: monasteries, total: monasteries.length };
  res.json(response);
};
