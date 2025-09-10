import type { RequestHandler } from "express";
import type { Paginated, Tour } from "@shared/api";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(__dirname, "../data/tours.json");

const seed: Tour[] = [
  { id: "rumtek-en", monasteryId: "rumtek", title: "Rumtek 360�� Tour", languageCodes: ["en", "hi", "ne", "bo"], previewImageUrl: undefined, panoramaUrl: undefined },
  { id: "pemayangtse-en", monasteryId: "pemayangtse", title: "Pemayangtse 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], previewImageUrl: undefined, panoramaUrl: undefined },
  { id: "enchey-en", monasteryId: "enchey", title: "Enchey 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], previewImageUrl: undefined, panoramaUrl: undefined },
  { id: "tashiding-en", monasteryId: "tashiding", title: "Tashiding 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], previewImageUrl: undefined, panoramaUrl: undefined },
  { id: "ralang-en", monasteryId: "ralang", title: "Ralang 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], previewImageUrl: undefined, panoramaUrl: undefined },
  { id: "phodong-en", monasteryId: "phodong", title: "Phodong 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], previewImageUrl: undefined, panoramaUrl: undefined },
  { id: "phensang-en", monasteryId: "phensang", title: "Phensang 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], previewImageUrl: undefined, panoramaUrl: undefined },
  { id: "lingdum-en", monasteryId: "lingdum", title: "Lingdum (Ranka) 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], previewImageUrl: undefined, panoramaUrl: undefined },
  { id: "dubdi-en", monasteryId: "dubdi", title: "Dubdi 360° Tour", languageCodes: ["en", "hi", "ne", "bo"], previewImageUrl: undefined, panoramaUrl: undefined },
];

function loadTours(): Tour[] {
  try {
    if (fs.existsSync(DATA_PATH)) {
      const raw = fs.readFileSync(DATA_PATH, "utf-8");
      return JSON.parse(raw) as Tour[];
    }
  } catch {}
  return seed;
}
function saveTours(list: Tour[]) {
  try {
    fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
    fs.writeFileSync(DATA_PATH, JSON.stringify(list, null, 2), "utf-8");
  } catch {}
}

let tours: Tour[] = loadTours();

export const handleGetTours: RequestHandler = (_req, res) => {
  const response: Paginated<Tour> = { items: tours, total: tours.length };
  res.json(response);
};

export const handleSetTourPanorama: RequestHandler = (req, res) => {
  const id = req.params.id;
  const { panoramaUrl, previewImageUrl, title } = req.body as { panoramaUrl?: string; previewImageUrl?: string; title?: string };
  const idx = tours.findIndex((t) => t.id === id);
  if (idx === -1) return res.status(404).json({ error: "Tour not found" });
  if (title) tours[idx].title = title;
  if (typeof previewImageUrl === "string") tours[idx].previewImageUrl = previewImageUrl || undefined;
  if (typeof panoramaUrl === "string") tours[idx].panoramaUrl = panoramaUrl || undefined;
  saveTours(tours);
  res.json(tours[idx]);
};
