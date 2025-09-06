import type { LangCode } from "@/context/I18nContext";

export type AudioTrack = { monasteryId: string; lang: LangCode; title: string; url: string };

// Small public domain/sample audio clips for demo
const SAMPLE = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export const audioTracks: AudioTrack[] = [
  { monasteryId: "rumtek", lang: "en", title: "Rumtek Intro (EN)", url: SAMPLE },
  { monasteryId: "rumtek", lang: "hi", title: "Rumtek परिचय (HI)", url: SAMPLE },
  { monasteryId: "rumtek", lang: "ne", title: "Rumtek परिचय (NE)", url: SAMPLE },
  { monasteryId: "rumtek", lang: "bo", title: "Rumtek སློབ་ཚན་ (BO)", url: SAMPLE },
  { monasteryId: "enchey", lang: "en", title: "Enchey Intro (EN)", url: SAMPLE },
  { monasteryId: "pemayangtse", lang: "en", title: "Pemayangtse Intro (EN)", url: SAMPLE },
];
