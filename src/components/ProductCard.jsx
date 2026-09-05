import { useState } from "react";
import { useI18n } from "../i18n/i18n";
import "./ProductCard.css";

export default function ProductCard({ product, onOpen }) {
  const { t } = useI18n();

  const [currentIndex, setCurrentIndex] = useState(0);

  const items = product.items || [];

  if (items.length === 0) return null;

  const currentItem = items[currentIndex];

  const name = t(`products.${currentItem.id}.name`);
  const description = t(`products.${currentItem.id}.description`);

  const previousImage = (e) => {
    e.stopPropagation();

    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();

    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  const selectImage = (e, index) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <article className="product-card">
      {/* IMAGE CAROUSEL */}
      <div className="product-card__image-wrap">
        {currentItem.image ? (
          <img
            src={currentItem.image}
            alt={name}
            className="product-card__image"
            loading="lazy"
          />
        ) : (
          <div className="product-card__image-placeholder">
            {name}
          </div>
        )}

        {currentItem.isNew && (
          <span className="product-card__badge">
            {t("common.new")}
          </span>
        )}

        {items.length > 1 && (
          <>
            <button
              type="button"
              className="product-card__arrow product-card__arrow--prev"
              onClick={previousImage}
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              type="button"
              className="product-card__arrow product-card__arrow--next"
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>

            <div className="product-card__dots">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`product-card__dot ${
                    index === currentIndex
                      ? "product-card__dot--active"
                      : ""
                  }`}
                  onClick={(e) => selectImage(e, index)}
                  aria-label={`Image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* BODY */}
      <button
        type="button"
        className="product-card__body"
        onClick={() =>
              onOpen({
                ...currentItem,
                category: product.category,
              })
            }
      >
        <span className="product-card__top">
          <span className="product-card__name">
            {name}
          </span>

          <span className="product-card__price">
            {currentItem.price} {t("common.currency")}
          </span>
        </span>

        <span className="product-card__desc">
          {description}
        </span>
      </button>
    </article>
  );
}