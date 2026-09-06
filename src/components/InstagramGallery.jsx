import { site } from "../config/site";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useI18n } from "../i18n/i18n";
import "./InstagramGallery.css";

const TILE_COUNT = 6;

export default function InstagramGallery() {
  const { t } = useI18n();
  const ref = useScrollReveal();

  return (
    <section id="instagram" className="section instagram">
      <div className="container reveal" ref={ref}>
        <div className="instagram__header">
          <div>
            <p className="eyebrow">{t("instagram.eyebrow")}</p>
            <h2 className="section-title">{site.instagramHandle}</h2>
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            {t("instagram.cta")}
          </a>
        </div>

        <div className="instagram__grid">
          {Array.from({ length: TILE_COUNT }).map((_, i) => (
            <div className="instagram__tile" key={i}>
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
