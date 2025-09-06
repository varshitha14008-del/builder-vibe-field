import type { RequestHandler } from "express";
import type { Paginated, Tour } from "@shared/api";

const tours: Tour[] = [
  { id: "rumtek-en", monasteryId: "rumtek", title: "Rumtek 360° Tour", languageCodes: ["en", "hi", "bo"] },
  { id: "enchey-en", monasteryId: "enchey", title: "Enchey 360° Tour", languageCodes: ["en"] },
];

export const handleGetTours: RequestHandler = (_req, res) => {
  const response: Paginated<Tour> = { items: tours, total: tours.length };
  res.json(response);
};
