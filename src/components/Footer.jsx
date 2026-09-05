import { site } from "../config/site";
import { useI18n } from "../i18n/i18n";
import "./Footer.css";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-name">{site.brandName}</span>
          <span className="footer__tag">{t("common.tagline")}</span>
        </div>

        <nav className="footer__nav" aria-label="Navigation du pied de page">
          <a href="#accueil">{t("nav.home")}</a>
          <a href="#collection">{t("nav.collection")}</a>
          <a href="#apropos">{t("nav.about")}</a>
          <a href="#commander">{t("nav.order")}</a>
        </nav>

        <div className="footer__socials">
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            {t("contact.labels.instagram")}
          </a>
          <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            {t("contact.labels.whatsapp")}
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>{t("footer.copyright", { year: YEAR, brand: site.brandName })}</p>
      </div>
    </footer>
  );
}
