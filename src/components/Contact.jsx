import { site } from "../config/site";
import { useI18n } from "../i18n/i18n";
import "./Contact.css";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div>
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h2 className="section-title">{t("contact.title")}</h2>
        </div>

        <ul className="contact__list">
          <li>
            <span className="contact__label">{t("contact.labels.instagram")}</span>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              {site.instagramHandle}
            </a>
          </li>
          <li>
            <span className="contact__label">{t("contact.labels.whatsapp")}</span>
            <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              +{site.whatsappNumber}
            </a>
          </li>
          {site.email && (
            <li>
              <span className="contact__label">{t("contact.labels.email")}</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          )}
          <li>
            <span className="contact__label">{t("contact.labels.delivery")}</span>
            <span>{t("contact.deliveryInfo")}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
