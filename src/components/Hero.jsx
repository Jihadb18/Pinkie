import { useEffect, useState } from "react";
import { useI18n } from "../i18n/i18n";
import "./Hero.css";

// ===============================
// HERO IMAGES
// Change these paths/names if needed
// ===============================
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";

const heroImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
];

export default function Hero() {
  const { t } = useI18n();

  const [loaded, setLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // ===============================
  // Hero entrance animation
  // ===============================
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 80);

    return () => clearTimeout(timer);
  }, []);

  // ===============================
  // Automatic image carousel
  // ===============================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="accueil"
      className={`hero ${loaded ? "hero--loaded" : ""}`}
    >
      {/* Decorative elements */}
      <div
        className="hero__deco hero__deco--one"
        aria-hidden="true"
      />

      <div
        className="hero__deco hero__deco--two"
        aria-hidden="true"
      />

      <div className="container hero__inner">

        {/* ===============================
            TEXT
        =============================== */}
        <div className="hero__text">

          <p className="hero__eyebrow">
            {t("hero.eyebrow")}
          </p>

          <h1 className="hero__title">
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
          </h1>

          <p className="hero__desc">
            {t("hero.description")}
          </p>

          <div className="hero__actions">

            <a
              href="#collection"
              className="btn btn-primary"
            >
              {t("common.viewCollection")}
            </a>

            <a
              href="#commander"
              className="btn btn-secondary"
            >
              {t("common.orderNow")}
            </a>

          </div>
        </div>

        {/* ===============================
            IMAGE CAROUSEL
        =============================== */}
        <div className="hero__visual">

          <div className="hero__frame hero__frame--main">

            <div className="hero__carousel">

              {/* Images */}
              {heroImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Handmade accessory ${index + 1}`}
                  className={`hero__image ${
                    index === currentImage
                      ? "hero__image--active"
                      : ""
                  }`}
                />
              ))}

              {/* Navigation dots */}
              <div className="hero__dots">

                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to image ${index + 1}`}
                    className={`hero__dot ${
                      index === currentImage
                        ? "hero__dot--active"
                        : ""
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}

              </div>

            </div>
          </div>

          {/* Decorative pink/sand shape */}
          <div className="hero__frame hero__frame--accent" />

        </div>
      </div>
    </section>
  );
}