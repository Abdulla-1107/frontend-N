import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/shared/types";
import { useLanguage } from "@/shared/i18n/LanguageContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const imgSrc = product.images?.[0] || product.image || "/placeholder.svg";
  const { lang, t } = useLanguage();

  const name =
    lang === "en" && product.name_en
      ? product.name_en
      : lang === "ru" && product.name_ru
        ? product.name_ru
        : product.name_uz;

  return (
    <Link to={`/products/${product.id}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group overflow-hidden rounded-lg bg-card shadow-card transition-shadow hover:shadow-luxury"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imgSrc}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <div className="p-4 md:p-5">
          <h3 className="font-display text-lg font-semibold leading-snug text-card-foreground line-clamp-1">
            {name}
          </h3>
          <p className="mt-1 font-body text-sm font-medium text-primary">
            {Number(product.price).toLocaleString("uz-UZ")} {t("detail.currency")}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
