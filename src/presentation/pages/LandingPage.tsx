import { useEffect, useState } from "react";
import { BrandLogo } from "../components/BrandLogo";
import { DashboardPreview } from "../components/DashboardPreview";
import { useLandingContent } from "../../application/localization/useLandingContent";

const sectionTargets = [
  "#plataforma",
  "#como-funciona",
  "#para-quien",
  "#contacto",
];

export function LandingPage() {
  const { language, content, changeLanguage } = useLandingContent();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-shell">
      <header
        className={hasScrolled ? "site-header is-scrolled" : "site-header"}
      >
        <BrandLogo />

        <nav className="main-nav" aria-label="Main navigation">
          {content.nav.map((item, index) => (
            <a href={sectionTargets[index]} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div
            className="lang-switch"
            role="group"
            aria-label="Language selector"
          >
            <button
              className={language === "es" ? "active" : ""}
              onClick={() => changeLanguage("es")}
            >
              ES
            </button>
            <span>/</span>
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 id="hero-title">{content.title}</h1>
            <p className="hero-intro">{content.intro}</p>

            <div className="hero-actions">
              <a className="button button-dark" href="#plataforma">
                {content.primaryAction}
              </a>
              <a className="text-link" href="#como-funciona">
                {content.secondaryAction}
              </a>
            </div>
          </div>

          <DashboardPreview content={content} />
        </section>

        <section className="statement" id="plataforma">
          <div className="statement-grid">
            <h2>{content.sectionTitle}</h2>
            <p>{content.sectionText}</p>
          </div>
        </section>

        <section className="modules" id="como-funciona">
          {content.modules.map((module) => (
            <article className="module" key={module.number}>
              <div className="module-number">{module.number}</div>
              <div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="quote-section" id="para-quien">
          <blockquote>“{content.quote}”</blockquote>
        </section>

        <section className="closing" id="contacto">
          <div>
            <p className="eyebrow">{content.ctaEyebrow}</p>
            <h2>{content.ctaTitle}</h2>
            <p>{content.ctaText}</p>
          </div>
          <a className="button button-light" href="mailto:hola@smartfarm.pe">
            {content.ctaAction}
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>Copyright © 2026 SmartFarm / ICHU. Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
