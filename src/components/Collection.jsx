import { useMemo, useState } from "react";
import { products } from "../data/products";
import { useI18n } from "../i18n/i18n";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import ProductModal from "./ProductModal";
import "./Collection.css";

export default function Collection() {
  const { t } = useI18n();
  const [active, setActive] = useState("tous");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (active === "tous") return products;
    return products.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="collection" className="collection-section">
      <div className="container">

        <div className="collection-header">
          <div className="collection-header__content">
            <span className="collection-header__eyebrow">
              {t("collection.eyebrow")}
            </span>

            <h2 className="collection-header__title">
              {t("collection.title")}
            </h2>

            <p className="collection-header__description">
              {t("collection.lede")}
            </p>
          </div>

          <div className="collection-header__line" />
        </div>

        <div className="collection-toolbar">
          <CategoryFilter
            active={active}
            onChange={setActive}
          />
        </div>

        <ProductGrid
          products={filtered}
          onOpen={setSelected}
        />
      </div>

      <ProductModal
        product={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}