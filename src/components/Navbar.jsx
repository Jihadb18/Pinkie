import { useEffect, useState } from "react";
import { site } from "../config/site";
import { useI18n } from "../i18n/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Navbar.css";

export default function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const LINKS = [
    { href: "#accueil", label: t("nav.home") },
    { href: "#collection", label: t("nav.collection") },
    { href: "#apropos", label: t("nav.about") },
    { href: "#instagram", label: t("nav.instagram") },
    { href: "#commander", label: t("nav.order") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#accueil" className="navbar__brand" onClick={handleLinkClick}>
          <span className="navbar__brand-name">{site.brandName}</span>
          <span className="navbar__brand-tag">{t("common.tagline")}</span>
        </a>

        <nav className="navbar__links" aria-label={t("nav.ariaMain")}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__right">
          <LanguageSwitcher variant="inline" />
          <a href="#commander" className="btn btn-primary navbar__cta">
            {t("common.orderNow")}
          </a>
        </div>

        <button
          className={`navbar__burger ${open ? "navbar__burger--open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}>
        <nav aria-label={t("nav.ariaMobile")}>
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{ transitionDelay: `${i * 45}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <LanguageSwitcher variant="mobile" />
      </div>
    </header>
  );
}
