import type { RequestHandler } from "express";
import type { Monastery, Paginated } from "@shared/api";

const monasteries: Monastery[] = [
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

export const handleGetMonasteries: RequestHandler = (_req, res) => {
  const response: Paginated<Monastery> = { items: monasteries, total: monasteries.length };
  res.json(response);
};
