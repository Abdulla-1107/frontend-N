import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useProductById } from "@/shared/hooks/useProducts";
import { useLanguage } from "@/shared/i18n/LanguageContext";
import OrderModal from "@/features/order/OrderModal";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, isError } = useProductById(id || "");
  const [qty, setQty] = useState(1);
  const [orderOpen, setOrderOpen] = useState(false);
  const { t, lang } = useLanguage();

  const getName = (p: typeof product) => {
    if (!p) return "";
    if (lang === "en" && p.name_en) return p.name_en;
    if (lang === "ru" && p.name_ru) return p.name_ru;
    return p.name_uz;
  };

  const getDesc = (p: typeof product) => {
    if (!p) return "";
    if (lang === "en" && p.description_en) return p.description_en;
    if (lang === "ru" && p.description_ru) return p.description_ru;
    return p.description_uz;
  };

  if (isError) {
    return (
      <main className="container py-20 text-center">
        <p className="font-body text-destructive">{t("detail.notFound")}</p>
        <Button asChild variant="outline" className="mt-4">
          <Link to="/products">{t("detail.back2")}</Link>
        </Button>
      </main>
    );
  }

  const imgSrc = product?.images?.[0] || product?.image || "/placeholder.svg";

  return (
    <main className="container py-10 md:py-16">
      <Link to="/products" className="mb-6 inline-flex items-center gap-1 font-body text-sm text-muted-foreground transition-colors hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> {t("detail.back")}
      </Link>

      <div className="grid gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden rounded-xl shadow-card">
          {isLoading ? (
            <Skeleton className="aspect-square w-full" />
          ) : (
            <img src={imgSrc} alt={getName(product)} className="aspect-square w-full object-cover" />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-20 w-full" />
            </div>
          ) : (
            <>
              <h1 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                {getName(product)}
              </h1>
              <p className="mt-3 font-display text-2xl font-medium text-primary">
                {Number(product?.price).toLocaleString("uz-UZ")} {t("detail.currency")}
              </p>
              <p className="mt-6 font-body leading-relaxed text-muted-foreground">
                {getDesc(product)}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="font-body text-sm text-muted-foreground">{t("detail.qty")}</span>
                <div className="flex items-center rounded-md border border-border">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-muted">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="flex h-10 w-12 items-center justify-center font-body text-sm text-foreground">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-muted">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <Button
                size="lg"
                className="mt-8 w-full bg-gold-gradient font-body text-sm uppercase tracking-wider text-primary-foreground shadow-luxury hover:opacity-90 md:w-auto"
                onClick={() => setOrderOpen(true)}
              >
                {t("detail.order")}
              </Button>
            </>
          )}
        </motion.div>
      </div>

      {product && (
        <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} productId={product.id} quantity={qty} />
      )}
    </main>
  );
}
