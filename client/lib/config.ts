export type ApiConfig = {
  baseUrl: string;
  apiKey?: string;
  useMock: boolean;
};

const STORAGE_KEY = "monastery360.config";

const envBase = (import.meta as any).env?.VITE_API_URL as string | undefined;

export function getInitialConfig(): ApiConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as ApiConfig;
  } catch {}
  return {
    baseUrl: envBase ?? "",
    apiKey: undefined,
    useMock: !(envBase && envBase.length > 0),
  };
}

export function saveConfig(cfg: ApiConfig) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
}
