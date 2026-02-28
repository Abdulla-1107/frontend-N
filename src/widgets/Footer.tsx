import { Link } from "react-router-dom";
import { useLanguage } from "@/shared/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="font-display text-2xl font-semibold tracking-wider">
              <span className="text-gold-gradient">Naqshizarr</span>
            </Link>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-muted-foreground">
              {t("footer.desc")}
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-display text-base font-semibold text-foreground">{t("footer.pages")}</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li><Link to="/products" className="transition-colors hover:text-primary">{t("nav.products")}</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary">{t("nav.about")}</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-primary">{t("nav.contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-display text-base font-semibold text-foreground">{t("footer.contactTitle")}</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>{t("footer.phone")} +998 90 123 45 67</li>
              <li>Email: info@naqshizarr.uz</li>
              <li>{t("contact.addressValue")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Naqshizarr. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
