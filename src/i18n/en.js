export default {
  meta: {
    title: "Pinkie — Handmade Accessories",
    description:
      "Handmade fabric accessories — scrunchies, bows, headbands, bonnets and pouches, handcrafted in small batches.",
  },

  common: {
    tagline: "",
    new: "New",
    viewCollection: "Shop the collection",
    orderNow: "Order now",
    currency: "DH",
  },

  nav: {
    home: "Home",
    collection: "Collection",
    about: "About",
    instagram: "Instagram",
    order: "Order",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    ariaMain: "Main navigation",
    ariaMobile: "Mobile navigation",
    ariaFooter: "Footer navigation",
  },

  hero: {
    eyebrow: "One-of-a-kind pieces, made by hand",
    titleLine1: "Small pieces,",
    titleLine2: "made with love.",
    description:
      "Handmade accessories to add a soft and colorful touch to your everyday life — scrunchies, bows, headbands, and pouches, hand-sewn in small batches.",
    imagePlaceholder: "Your product photo here",
  },

  categories: {
    tous: "All",
    scrunchies: "Scrunchies",
    noeuds: "Bows",
    headbands: "Headbands",
    bonnet: "Bonnet",
    trousse: "Pouches",
  },

  collection: {
    eyebrow: "The collection",
    title: "Every piece, hand-sewn",
    lede: "Scrunchies, bows, headbands, bonnets, and pouches — small batches designed to last and to please.",
    empty: "No products in this category at the moment.",
    filterAriaLabel: "Filter products by category",
  },

  products: {
    "scr-01": {
      name: "Scrunchie",
      size: "Large",
      description: "A large, soft, and elegant satin scrunchie, available in several colors.",
    },
    "scr-02": {
      name: "Scrunchie",
      size: "Large",
      description: "A large, soft, and elegant satin scrunchie, available in several colors.",
    },
    "scr-03": {
      name: "Scrunchie",
      size: "Large",
      description: "A large, soft, and elegant satin scrunchie, available in several colors.",
    },
    "scr-04": {
      name: "Scrunchie",
      size: "Large",
      description: "A large, soft, and elegant satin scrunchie, available in several colors.",
    },
    "noe-01": {
      name: "Scrunchies with Bow",
      size: "One size with hanging ribbon",
      description: "A magnificent satin scrunchie adorned with a large elegant bow, ideal for adding a chic and sophisticated touch to your hairstyles.",
    },
    "noe-02": {
      name: "Scrunchies with Bow",
      size: "One size with hanging ribbon",
      description: "A magnificent satin scrunchie adorned with a large elegant bow, ideal for adding a chic and sophisticated touch to your hairstyles.",
    },
    "noe-03": {
      name: "Scrunchies with Bow",
      size: "One size with hanging ribbon",
      description: "A magnificent satin scrunchie adorned with a large elegant bow, ideal for adding a chic and sophisticated touch to your hairstyles.",
    },
    "hb-01": {
      name: "Headbands",
      size: "One size stretchy",
      description: "A trendy, flexible, and comfortable headband, perfect for holding hair back while bringing a stylish touch to your daily routine.",
    },
    "hb-02": {
      name: "Headbands",
      size: "One size stretchy",
      description: "A trendy, flexible, and comfortable headband, perfect for holding hair back while bringing a stylish touch to your daily routine.",
    },
    "hb-03": {
      name: "Headbands",
      size: "One size stretchy",
      description: "A trendy, flexible, and comfortable headband, perfect for holding hair back while bringing a stylish touch to your daily routine.",
    },
    "b-01": {
      name: "Satin Night Bonnet",
      size: "One size with adjustable elastic and tie ribbon",
      description: "A soft and protective satin night bonnet, designed to preserve hair hydration, reduce frizz, and prevent breakage during sleep.",
    },
    "b-02": {
      name: "Satin Night Bonnet",
      size: "One size with adjustable elastic and tie ribbon",
      description: "A soft and protective satin night bonnet, designed to preserve hair hydration, reduce frizz, and prevent breakage during sleep.",
    },
    "tr-01": {
      name: "Makeup Pouches / Bags",
      size: "Standard zipped",
      description: "A pretty, practical, and compact makeup bag, perfect for storing your beauty essentials stylishly every day.",
    },
    "tr-02": {
      name: "Makeup Pouches / Bags",
      size: "Standard zipped",
      description: "A pretty, practical, and compact makeup bag, perfect for storing your beauty essentials stylishly every day.",
    },
  },

about: {
    eyebrow: "About",
    title: "A hand-stitched project, made with care",
    lede: "{{brand}} is an artisanal project born from the desire to create soft and feminine fabric accessories, designed to add a touch of color to everyday life.",
    body: "Every scrunchie, bow, headband, bonnet, or pouch is cut, sewn, and finished by hand, piece by piece. All our creations are made upon reservation (to order) to ensure high quality and special care for each piece. Fabrics are carefully chosen, with no mass production—only unique pieces made with love and care just for you. We also provide delivery services across all regions of Morocco.",
    imagePlaceholder: "Workshop / lifestyle photo",
  },

  why: {
    eyebrow: "Why handmade",
    title: "What makes each piece unique",
    items: [
      { title: "Handmade", text: "Every piece is cut and sewn by hand, one by one." },
      { title: "Small batches", text: "Limited quantities to keep each creation special." },
      { title: "Every detail counts", text: "Careful finishes and attentively selected fabrics." },
      { title: "Created with love", text: "A passion for handmade, from fabric choice to shipping." },
    ],
  },

  instagram: {
    eyebrow: "On Instagram",
    cta: "Follow us on Instagram",
  },

  order: {
    eyebrow: "Order",
    title: "Like a piece? Contact us directly to place your order.",
    description: "No online ordering for now — everything happens via direct message, for a simple and personalized exchange.",
    ctaWhatsapp: "Order on WhatsApp",
    ctaInstagram: "Contact us on Instagram",
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's stay in touch",
    labels: {
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      email: "Email",
      delivery: "Delivery",
    },
    deliveryInfo: "Delivery available everywhere in Morocco. In-person pickup available by appointment.",
  },

  modal: {
    sizeLabel: "Available size:",
    orderWhatsapp: "Order on WhatsApp",
    close: "Close",
  },

  footer: {
    copyright: "© 2026 Pinkie. Handmade with love.",
  },

  whatsapp: {
    defaultMessage: "Hello, I would like to know more about your creations.",
    productMessage: ({ product } = {}) =>
      `Hello, I am interested in the product "${product}". Is it still available?`,
  },
};