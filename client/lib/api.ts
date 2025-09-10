import type { ArchiveItem, CulturalEvent, Monastery, Paginated, Tour } from "@shared/api";
import { getInitialConfig } from "@/lib/config";
import { mockArchives, mockEvents, mockMonasteries, mockTours } from "@/data/mock";

async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const cfg = getInitialConfig();
  if (cfg.useMock || !cfg.baseUrl) throw new Error("USE_MOCK");
  const headers: HeadersInit = { "Content-Type": "application/json", ...(init?.headers || {}) };
  if (cfg.apiKey) (headers as any).Authorization = `Bearer ${cfg.apiKey}`;
  const res = await fetch(`${cfg.baseUrl}${path}`, { ...init, headers });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

export const api = {
  async getMonasteries(): Promise<Paginated<Monastery>> {
    try {
      return await http<Paginated<Monastery>>("/api/monasteries");
    } catch (e) {
      if ((e as Error).message === "USE_MOCK") return { items: mockMonasteries, total: mockMonasteries.length };
      throw e;
    }
  },
  async getTours(): Promise<Paginated<Tour>> {
    try {
      return await http<Paginated<Tour>>("/api/tours");
    } catch (e) {
      if ((e as Error).message === "USE_MOCK") return { items: mockTours, total: mockTours.length };
      throw e;
    }
  },
  async setTourPanorama(id: string, payload: { panoramaUrl: string; previewImageUrl?: string; title?: string }): Promise<Tour> {
    try {
      return await http<Tour>(`/api/tours/${encodeURIComponent(id)}/panorama`, { method: "PUT", body: JSON.stringify(payload) });
    } catch (e) {
      if ((e as Error).message === "USE_MOCK") {
        // Fallback: store in localStorage mapping used by Tours page
        const LS_KEY = "monastery360_tour_scenes";
        try {
          const raw = localStorage.getItem(LS_KEY);
          const stored: Record<string, { title: string; url: string }> = raw ? JSON.parse(raw) : {};
          stored[id] = { title: payload.title || id, url: payload.panoramaUrl };
          localStorage.setItem(LS_KEY, JSON.stringify(stored));
        } catch {}
        // Also update mock copy returned to UI
        const t = (mockTours as Tour[]).find((x) => x.id === id);
        if (t) (t as any).panoramaUrl = payload.panoramaUrl;
        return t as Tour;
      }
      throw e;
    }
  },
  async getArchives(): Promise<Paginated<ArchiveItem>> {
    try {
      return await http<Paginated<ArchiveItem>>("/api/archives");
    } catch (e) {
      if ((e as Error).message === "USE_MOCK") return { items: mockArchives, total: mockArchives.length };
      throw e;
    }
  },
  async getEvents(): Promise<Paginated<CulturalEvent>> {
    try {
      return await http<Paginated<CulturalEvent>>("/api/events");
    } catch (e) {
      if ((e as Error).message === "USE_MOCK") return { items: mockEvents, total: mockEvents.length };
      throw e;
    }
  },
};
