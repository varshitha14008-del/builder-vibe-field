import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LangCode = "en" | "hi" | "ne" | "bo"; // English, Hindi, Nepali, Tibetan (bo)

export const LANGS: { code: LangCode; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "ne", label: "Nepali", native: "नेपाली" },
  { code: "bo", label: "Tibetan", native: "བོད་སྐད་" },
];

const STORAGE_KEY = "monastery360.lang";

const translations: Record<LangCode, Record<string, string>> = {
  en: {
    interactiveMap: "Interactive Map",
    virtualTours: "Virtual Tours",
    audioGuide: "Audio Guide",
    connected: "Connected",
    mockData: "Mock Data",
    connectData: "Connect Data",
  },
  hi: {
    interactiveMap: "इ��टरैक्टिव मानचित्र",
    virtualTours: "वर्चुअल टूर",
    audioGuide: "ऑडियो गाइड",
    connected: "कनेक्टेड",
    mockData: "मॉक डेटा",
    connectData: "डेटा जोड़ें",
  },
  ne: {
    interactiveMap: "अन्टरक्रियात्मक नक्सा",
    virtualTours: "भर्चुअल भ्रमण",
    audioGuide: "अडियो गाइड",
    connected: "जोडियो",
    mockData: "मक डेटा",
    connectData: "डाटा जोड्नुहोस्",
  },
  bo: {
    interactiveMap: "འཆར་རོལ་ས་བཀོད་",
    virtualTours: "བརྡུངས་སྤེལ་གནས་བརྙན་",
    audioGuide: "སྒྲ་ཉན་ལམ་སྟོན་",
    connected: "སྦྲེལ་བ་",
    mockData: "དཔེ་གཞི་",
    connectData: "གཞི་གྲངས་སྦྲེལ་",
  },
};

interface Ctx {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(() => (localStorage.getItem(STORAGE_KEY) as LangCode) || "en");
  useEffect(() => localStorage.setItem(STORAGE_KEY, lang), [lang]);
  const setLang = (l: LangCode) => setLangState(l);
  const t = (key: string) => translations[lang][key] ?? translations.en[key] ?? key;
  const value = useMemo(() => ({ lang, setLang, t }), [lang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
