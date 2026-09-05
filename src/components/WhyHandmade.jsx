import { useStaggerReveal } from "../hooks/useScrollReveal";
import { useI18n } from "../i18n/i18n";
import "./WhyHandmade.css";

const ICONS = [
  <svg viewBox="0 0 40 40" fill="none" key="handmade">
    <path
      d="M8 24c0-9 5.4-16 12-16s12 7 12 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 24h24v4a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-4Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>,

  <svg viewBox="0 0 40 40" fill="none" key="batches">
    <rect
      x="7"
      y="14"
      width="11"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="22"
      y="9"
      width="11"
      height="19"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>,

  <svg viewBox="0 0 40 40" fill="none" key="detail">
    <path
      d="M20 6l3.6 8.2 8.9 1-6.7 6 1.9 8.8L20 25.8l-7.7 4.2 1.9-8.8-6.7-6 8.9-1L20 6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>,

  <svg viewBox="0 0 40 40" fill="none" key="love">
    <path
      d="M20 30 8 19a6.2 6.2 0 0 1 9.8-7.5L20 13.6l2.2-2.1A6.2 6.2 0 0 1 32 19l-12 11Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>,
];

export default function WhyHandmade() {
  const { t } = useI18n();
  const items = t("why.items");
  const ref = useStaggerReveal(items.length);

  return (
    <section className="section why">
      <div className="container">
        <div className="why__heading">
          <p className="eyebrow">{t("why.eyebrow")}</p>

          <h2 className="section-title">
            {t("why.title")}
          </h2>
        </div>

        <div className="why__grid" ref={ref}>
          {items.map((item, i) => (
            <article
              className="why__card reveal"
              key={item.title}
              style={{
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <span className="why__icon">
                {ICONS[i]}
              </span>

              <div className="why__content">
                <h3 className="why__title">
                  {item.title}
                </h3>

                <p className="why__text">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}