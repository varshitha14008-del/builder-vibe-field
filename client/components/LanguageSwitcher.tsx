import { LANGS, useI18n } from "@/context/I18nContext";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <Select value={lang} onValueChange={(v)=> setLang(v as any)}>
      <SelectTrigger className="h-9 w-[130px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {LANGS.map(l => (
            <SelectItem key={l.code} value={l.code}>{l.native} · {l.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
