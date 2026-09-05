import { categoryIds } from "../config/site";
import { useI18n } from "../i18n/i18n";
import "./CategoryFilter.css";

export default function CategoryFilter({ active, onChange }) {
  const { t } = useI18n();

  return (
    <div className="category-filter" role="tablist" aria-label={t("collection.filterAriaLabel")}>
      {categoryIds.map((id) => (
        <button
          key={id}
          role="tab"
          aria-selected={active === id}
          className={`category-filter__btn ${active === id ? "category-filter__btn--active" : ""}`}
          onClick={() => onChange(id)}
        >
          {t(`categories.${id}`)}
        </button>
      ))}
    </div>
  );
}
