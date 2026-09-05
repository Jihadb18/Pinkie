import { useI18n } from "../i18n/i18n";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher({ variant = "inline" }) {
  const { lang, setLang, languages } = useI18n();

  return (
    <div className={`lang-switch lang-switch--${variant}`} role="group" aria-label="Choisir la langue / Choose language / اختر اللغة">
      {languages.map((l, i) => (
        <span key={l.code} className="lang-switch__item">
          <button
            type="button"
            className={`lang-switch__btn ${lang === l.code ? "lang-switch__btn--active" : ""}`}
            onClick={() => setLang(l.code)}
            aria-pressed={lang === l.code}
            lang={l.code}
          >
            {l.label}
          </button>
          {i < languages.length - 1 && <span className="lang-switch__sep" aria-hidden="true">|</span>}
        </span>
      ))}
    </div>
  );
}
