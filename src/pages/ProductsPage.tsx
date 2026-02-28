import { motion } from "framer-motion";
import { useProducts } from "@/shared/hooks/useProducts";
import ProductCard from "@/features/products/ProductCard";
import { ProductCardSkeleton } from "@/shared/ui/ProductCardSkeleton";
import { useLanguage } from "@/shared/i18n/LanguageContext";

export default function ProductsPage() {
  const { data: products, isLoading, isError } = useProducts();
  const { t } = useLanguage();

  return (
    <main className="container py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h1 className="font-display text-3xl font-light text-foreground md:text-5xl">
          <span className="text-gold-gradient font-semibold">{t("products.title")}</span>
        </h1>
        <p className="mt-3 font-body text-muted-foreground">{t("products.subtitle")}</p>
      </motion.div>

      {isError && (
        <p className="text-center font-body text-destructive">{t("products.error")}</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
          : products?.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      {!isLoading && !isError && (!products || products.length === 0) && (
        <div className="py-20 text-center">
          <p className="font-display text-xl text-muted-foreground">{t("products.empty")}</p>
        </div>
      )}
    </main>
  );
}
