import { useEffect } from "react";
import { buildWhatsAppUrl } from "../config/site";
import { useI18n } from "../i18n/i18n";
import ProductImage from "./ProductImage";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  const { t } = useI18n();

  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  if (!product) return null;

  const name = t(`products.${product.id}.name`);
  const size = t(`products.${product.id}.size`);
  const description = t(`products.${product.id}.description`);
  const whatsappUrl = buildWhatsAppUrl(t("whatsapp.productMessage", { product: name }));

  return (
    <div className="product-modal" role="dialog" aria-modal="true" aria-label={name}>
      <div className="product-modal__backdrop" onClick={onClose} />
      <div className="product-modal__panel">
        <button className="product-modal__close" onClick={onClose} aria-label={t("modal.close")}>
          ×
        </button>

        <div className="product-modal__image">
          <ProductImage product={product} name={name} />
          {product.isNew && <span className="product-modal__badge">{t("common.new")}</span>}
        </div>

        <div className="product-modal__content">
          <p className="product-modal__category">{t(`categories.${product.category}`)}</p>
          <h3 className="product-modal__name">{name}</h3>
          <p className="product-modal__price">
            {product.price} {t("common.currency")}
          </p>
          <p className="product-modal__desc">{description}</p>
          <p className="product-modal__size">
            <strong>{t("modal.sizeLabel")}</strong> {size}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-block"
          >
            {t("modal.orderWhatsapp")}
          </a>
        </div>
      </div>
    </div>
  );
}
