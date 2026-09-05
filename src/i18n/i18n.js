import { createContext, createElement, useContext, useEffect, useState } from "react";
import fr from "./fr";
import ar from "./ar";
import en from "./en";

// Langues disponibles, dans l'ordre d'affichage du sélecteur.
export const LANGUAGES = [
  { code: "fr", label: "FR", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "en", label: "EN", dir: "ltr" },
];

const DICTIONARIES = { fr, ar, en };
const STORAGE_KEY = "brand-site-lang";
export const DEFAULT_LANG = "fr";

const I18nContext = createContext(null);

function getInitialLang() {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && DICTIONARIES[stored]) return stored;
  } catch {
    // localStorage indisponible (navigation privée, etc.) — on ignore.
  }
  return DEFAULT_LANG;
}

function resolve(dict, key) {
  return key
    .split(".")
    .reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), dict);
}

function interpolate(str, vars) {
  if (!vars) return str;
  return Object.keys(vars).reduce(
    (acc, k) => acc.replaceAll(`{{${k}}}`, String(vars[k])),
    str
  );
}

// Fournit la langue courante, le sens d'écriture et la fonction t()
// à toute l'application. Ne contient pas de JSX afin de rester un
// fichier .js (voir createElement plus bas).
export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  useEffect(() => {
    const meta = DICTIONARIES[lang]?.meta;
    const dir = LANGUAGES.find((l) => l.code === lang)?.dir || "ltr";

    document.documentElement.lang = lang;
    document.documentElement.dir = dir;

    if (meta?.title) document.title = meta.title;
    if (meta?.description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", meta.description);
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // localStorage indisponible — la préférence ne sera pas mémorisée.
    }
  }, [lang]);

  function setLang(code) {
    if (DICTIONARIES[code]) setLangState(code);
  }

  // t("hero.title") -> texte simple
  // t("footer.copyright", { year, brand }) -> interpolation {{var}}
  // t("whatsapp.productMessage", { product }) -> valeurs fonction
  function t(key, vars) {
    let value = resolve(DICTIONARIES[lang], key);
    if (value === undefined) value = resolve(DICTIONARIES[DEFAULT_LANG], key);
    if (value === undefined) return key;
    if (typeof value === "function") return value(vars);
    if (typeof value === "string") return interpolate(value, vars);
    return value;
  }

  const dir = LANGUAGES.find((l) => l.code === lang)?.dir || "ltr";
  const value = { lang, dir, setLang, t, languages: LANGUAGES };

  return createElement(I18nContext.Provider, { value }, children);
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n doit être utilisé à l'intérieur de <I18nProvider>.");
  return ctx;
}
