import type { RequestHandler } from "express";
import type { Monastery, Paginated } from "@shared/api";

const monasteries: Monastery[] = [
  { id: "rumtek", name: "Rumtek Monastery", district: "Gangtok", founded: "18th c.", lat: 27.329, lng: 88.62 },
  { id: "enchey", name: "Enchey Monastery", district: "Gangtok", founded: "1909", lat: 27.343, lng: 88.62 },
  { id: "pemayangtse", name: "Pemayangtse Monastery", district: "Gyalshing", founded: "1705", lat: 27.299, lng: 88.248 },
];

export const handleGetMonasteries: RequestHandler = (_req, res) => {
  const response: Paginated<Monastery> = { items: monasteries, total: monasteries.length };
  res.json(response);
};
