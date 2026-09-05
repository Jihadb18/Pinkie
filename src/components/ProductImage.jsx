import "./ProductImage.css";

const ICONS = {
  scrunchies: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="15" stroke="currentColor" strokeWidth="2.4" strokeDasharray="4 5" />
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  ),
  noeuds: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M24 24 8 14a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5l16-10Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M24 24 40 14a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5L24 24Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="3.2" fill="currentColor" />
    </svg>
  ),
  headbands: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M6 30C6 16 14 7 24 7s18 9 18 23"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M6 30v6M42 30v6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  ),
  bonnet: (
    <svg viewBox="0 0 48 48" fill="none">
      <path
        d="M8 12c8 4 8 10 0 14 8 4 8 10 0 14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M40 12c-8 4-8 10 0 14-8 4-8 10 0 14"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  trousse: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="7" y="17" width="34" height="22" rx="6" stroke="currentColor" strokeWidth="2.3" />
      <path d="M14 17c0-6 4.5-10 10-10s10 4 10 10" stroke="currentColor" strokeWidth="2.3" />
    </svg>
  ),
};

const GRADIENTS = [
  "linear-gradient(135deg, #f6e1e4 0%, #eadfd2 100%)",
  "linear-gradient(135deg, #fbeef0 0%, #d9a5ac 100%)",
  "linear-gradient(135deg, #eadfd2 0%, #f3e7de 100%)",
  "linear-gradient(135deg, #f6e1e4 0%, #f3e7de 60%, #d9a5ac 100%)",
];

function hashIndex(str, mod) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % mod;
  return h;
}

export default function ProductImage({ product, name, className = "" }) {
  if (product.image) {
    return (
      <img
        src={product.image}
        alt={name || ""}
        className={`product-image ${className}`}
        loading="lazy"
      />
    );
  }

  const gradient = GRADIENTS[hashIndex(product.id, GRADIENTS.length)];
  const icon = ICONS[product.category] || ICONS.scrunchies;

  return (
    <div
      className={`product-image product-image--placeholder ${className}`}
      style={{ background: gradient }}
      aria-hidden="true"
    >
      <span className="product-image__icon">{icon}</span>
    </div>
  );
}
