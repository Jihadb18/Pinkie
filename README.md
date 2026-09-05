# Pinkie — Site vitrine

Site vitrine React + Vite pour une marque d'accessoires en tissu faits main
(scrunchies, nœuds, headbands, satin, trousses). Pas de backend, pas de
base de données, pas de paiement : c'est un catalogue statique avec
commande via WhatsApp / Instagram.

## Démarrer

```bash
npm install
npm run dev
```

Puis ouvrez l'URL affichée (en général http://localhost:5173).

Pour construire la version de production :

```bash
npm run build
npm run preview
```

## Ce qu'il faut modifier en premier

1. **`src/config/site.js`**
   Nom de marque, tagline, numéro WhatsApp (format international sans "+"),
   compte Instagram, email, informations de livraison.

2. **`src/data/products.js`**
   Vos produits : nom, catégorie, prix, description, taille, badge.
   Pour ajouter un produit, copiez un objet existant et modifiez-le.

3. **Vos photos**
   Déposez vos images dans `public/products/` (à créer) puis, dans
   `products.js`, remplacez `image: null` par
   `image: "/products/mon-fichier.jpg"`.
   Tant qu'aucune image n'est fournie, une jolie vignette de remplacement
   (couleur douce + icône) s'affiche automatiquement — le site reste donc
   présentable dès le premier lancement.

4. **Photos du Hero et de la section À propos**
   Ce sont actuellement des cadres de remplacement stylisés
   (`src/components/Hero.jsx` et `src/components/About.jsx`). Remplacez le
   contenu du `<div className="hero__placeholder">` / `about__placeholder`
   par une balise `<img src="..." />` quand vous aurez vos photos.

## Langues (FR / AR / EN)

Le site est trilingue : français (par défaut), arabe (avec bascule RTL
automatique) et anglais.

- **`src/i18n/fr.js`, `en.js`, `ar.js`** — un dictionnaire complet par
  langue (navigation, hero, catégories, chaque produit, à propos,
  pourquoi fait main, Instagram, commande, contact, footer, messages
  WhatsApp). Aucun texte n'est codé en dur dans les composants.
- **`src/i18n/i18n.js`** — le `I18nProvider` et le hook `useI18n()`.
  `t("clé.imbriquée")` récupère une traduction, `t("footer.copyright", { year, brand })`
  permet l'interpolation de variables.
- La langue choisie est sauvegardée dans `localStorage` et restaurée à la
  prochaine visite.
- Sélectionner l'arabe bascule automatiquement `<html dir="rtl" lang="ar">`
  et charge une police adaptée à l'arabe (El Messiri / Cairo) ; le reste
  du site (grilles, boutons, menu mobile) se réoriente tout seul grâce
  aux propriétés CSS logiques (`inset-inline-start/end`, etc.).
- **Pour ajouter un produit**, ajoutez-le dans `src/data/products.js`
  (id, catégorie, prix, image) puis ajoutez son nom/taille/description
  sous `products["<id>"]` dans les **trois** fichiers de langue.
- **Pour ajouter une langue**, dupliquez `en.js`, traduisez toutes les
  clés, puis ajoutez-la à `DICTIONARIES` et `LANGUAGES` dans `i18n.js`.


## Structure

```
src/
  components/   Navbar, Hero, Collection, ProductCard, ProductModal, About,
                WhyHandmade, InstagramGallery, OrderSection, Contact, Footer
  config/       site.js — toute la config (marque, contact, catégories)
  data/         products.js — tous les produits
  hooks/        useScrollReveal.js — animations au scroll
```

Chaque composant a son propre fichier CSS à côté de lui.
