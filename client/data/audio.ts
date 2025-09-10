import type { LangCode } from "@/context/I18nContext";

export type AudioTrack = { monasteryId: string; lang: LangCode; title: string; url: string };

// Public Buddhist chant recordings relevant to monastery ambience (Creative Commons / public domain)
export const audioTracks: AudioTrack[] = [
  { monasteryId: "rumtek", lang: "bo", title: "Monastic Chant – Dharani (BO)", url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Buddhism_Shurangama_dharani_chant_120_150.ogg" },
  { monasteryId: "pemayangtse", lang: "bo", title: "Monastic Chant – Maha Piritha (BO)", url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Maha_Piritha_%28Buddhist_chant%29.ogg" },
  { monasteryId: "enchey", lang: "en", title: "Monastic Chant – Dharani (EN)", url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Buddhism_Shurangama_dharani_chant_120_150.ogg" },
];
