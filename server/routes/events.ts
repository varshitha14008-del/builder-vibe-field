import type { RequestHandler } from "express";
import type { CulturalEvent, Paginated } from "@shared/api";

const events: CulturalEvent[] = [
  { id: "lhabab", title: "Lhabab Duchen", dateISO: "2025-11-14", location: "Multiple monasteries" },
  { id: "kagyed", title: "Kagyed Dance", dateISO: "2025-12-08", location: "Enchey" },
  { id: "losar-prep", title: "Losar Preparations", dateISO: "2026-01-20", location: "Gangtok" },
];

export const handleGetEvents: RequestHandler = (_req, res) => {
  const response: Paginated<CulturalEvent> = { items: events, total: events.length };
  res.json(response);
};
