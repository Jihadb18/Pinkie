import { site, buildWhatsAppUrl } from "../config/site";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useI18n } from "../i18n/i18n";
import "./OrderSection.css";

export default function OrderSection() {
  const { t } = useI18n();
  const ref = useScrollReveal();
  const whatsappUrl = buildWhatsAppUrl(t("whatsapp.defaultMessage"));

  return (
    <section id="commander" className="section order">
      <div className="container">
        <div className="order__panel reveal" ref={ref}>
          <p className="eyebrow eyebrow--light">{t("order.eyebrow")}</p>
          <h2 className="order__title">{t("order.title")}</h2>
          <p className="order__desc">{t("order.description")}</p>

          <div className="order__actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              {t("order.ctaWhatsapp")}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-secondary--light"
            >
              {t("order.ctaInstagram")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
