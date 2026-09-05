// ─────────────────────────────────────────────────────────────
// CONFIGURATION DU SITE — coordonnées et identité (non traduites)
// Les textes affichés (tagline, messages WhatsApp, etc.) vivent
// dans src/i18n/{fr,ar,en}.js pour rester traduisibles.
// ─────────────────────────────────────────────────────────────

export const site = {
  // Identité — le nom de marque reste identique dans les 3 langues
  brandName: "Pinkie",

  // Numéro WhatsApp au format international, SANS le "+", SANS espaces
  // Exemple : "212600000000" pour le Maroc
  whatsappNumber: "212600000000",

  // Compte Instagram
  instagramHandle: "@Pinkie",
  instagramUrl: "https://instagram.com/Pinkie",

  // Email (optionnel — laissez vide "" pour le masquer)
  email: "contact@Pinkie.com",

  // Localisation (utilisée telle quelle, non traduite — nom de ville)
  location: "Casablanca, Maroc",
};

// Construit l'URL WhatsApp avec un message pré-rempli (déjà traduit)
export function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

// Identifiants de catégories — doivent correspondre à ceux utilisés
// dans src/data/products.js et aux clés "categories" des fichiers i18n.
export const categoryIds = ["tous", "scrunchies", "noeuds", "headbands", "satin", "trousse"];
