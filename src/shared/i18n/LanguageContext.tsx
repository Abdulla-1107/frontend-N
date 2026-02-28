import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Lang, translations, type TranslationKey } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("naqshizarr-lang") as Lang;
    return saved && ["uz", "en", "ru"].includes(saved) ? saved : "uz";
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("naqshizarr-lang", l);
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translations[key]?.[lang] || key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
