import type { RequestHandler } from "express";
import type { CulturalEvent, Paginated } from "@shared/api";

const events: CulturalEvent[] = [
  { id: "lhabab", title: "Lhabab Duchen", dateISO: "2025-11-14", location: "Multiple monasteries" },
  { id: "kagyed", title: "Kagyed Cham (Mask Dance)", dateISO: "2025-12-08", location: "Enchey Monastery" },
  { id: "losoong", title: "Losoong / Namsoong (Sikkimese New Year)", dateISO: "2025-12-30", location: "Statewide, major monasteries" },
  { id: "bumchu", title: "Bumchu (Sacred Water Ritual)", dateISO: "2026-02-08", location: "Tashiding Monastery" },
  { id: "pemayangtse-drupchen", title: "Guru Dragmar Drupchen", dateISO: "2026-02-10", location: "Pemayangtse Monastery" },
  { id: "saga-dawa", title: "Saga Dawa (Buddha’s Birth, Enlightenment, Parinirvana)", dateISO: "2025-06-11", location: "Major monasteries" },
  { id: "pang-lhabsol", title: "Pang Lhabsol (Guardian Deity Mt. Khangchendzonga)", dateISO: "2025-09-06", location: "Statewide, Gangtok" },
  { id: "phodong-cham", title: "Phodong Cham Festival", dateISO: "2025-12-05", location: "Phodong Monastery" },
  { id: "ralang-cheri", title: "Ralang Monastic Gathering", dateISO: "2025-10-20", location: "Ralang Monastery" },
  { id: "losar-prep", title: "Losar Preparations", dateISO: "2026-01-20", location: "Gangtok" },
];

export const handleGetEvents: RequestHandler = (_req, res) => {
  const response: Paginated<CulturalEvent> = { items: events, total: events.length };
  res.json(response);
};
