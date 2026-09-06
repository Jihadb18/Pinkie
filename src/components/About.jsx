import { site } from "../config/site";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useI18n } from "../i18n/i18n";
import "./About.css";

export default function About() {
  const { t } = useI18n();
  const ref = useScrollReveal();

  return (
    <section id="apropos" className="section about">
      <div className="container about__inner reveal" ref={ref}>
       <div className="about__visual">
  <div className="about__frame">
    <div className="about__placeholder">
      <img 
        src="src/assets/aboutus.png" 
        alt="About Us" 
        className="about__image" 
      />
    </div>
  </div>

  <span className="about__accent" />
</div>

        <div className="about__text">
          <p className="eyebrow">{t("about.eyebrow")}</p>

          <h2 className="section-title">
            {t("about.title")}
          </h2>

          <p className="about__lede">
            {t("about.lede", { brand: site.brandName })}
          </p>

          <div className="about__divider" />

          <p className="about__body">
            {t("about.body")}
          </p>
        </div>
      </div>
    </section>
  );
}