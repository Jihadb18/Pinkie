import { useStaggerReveal } from "../hooks/useScrollReveal";
import { useI18n } from "../i18n/i18n";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ products, onOpen }) {
  const { t } = useI18n();
  const gridRef = useStaggerReveal(products.length);

  if (products.length === 0) {
    return <p className="product-grid__empty">{t("collection.empty")}</p>;
  }

  return (
    <div className="product-grid" ref={gridRef}>
      {products.map((product, i) => (
        <div
          className="reveal product-grid__item"
          key={product.id}
          style={{ transitionDelay: `${(i % 4) * 70}ms` }}
        >
          <ProductCard product={product} onOpen={onOpen} />
        </div>
      ))}
    </div>
  );
}