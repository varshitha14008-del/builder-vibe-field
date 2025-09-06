import type { RequestHandler } from "express";
import type { ArchiveItem, Paginated } from "@shared/api";

const archives: ArchiveItem[] = [
  { id: "folio-ka", title: "Manuscript Folio KA", type: "manuscript", monasteryId: "pemayangtse" },
  { id: "thangka-guru", title: "Thangka of Guru Rinpoche", type: "thangka", monasteryId: "rumtek" },
  { id: "wheel-life", title: "Mural: Wheel of Life", type: "mural", monasteryId: "enchey" },
];

export const handleGetArchives: RequestHandler = (_req, res) => {
  const response: Paginated<ArchiveItem> = { items: archives, total: archives.length };
  res.json(response);
};
