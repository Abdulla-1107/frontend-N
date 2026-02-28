import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Hand, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/shared/hooks/useProducts";
import ProductCard from "@/features/products/ProductCard";
import { ProductCardSkeleton } from "@/shared/ui/ProductCardSkeleton";
import { useLanguage } from "@/shared/i18n/LanguageContext";
import heroImg from "@/assets/hero-tablecloth.jpg";
import processImg from "@/assets/handmade-process.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function HomePage() {
  const { data: products, isLoading } = useProducts();
  const featured = products?.slice(0, 4);
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero — Bold Split Layout */}
      <section className="relative overflow-hidden">
        <div className="container relative z-10 grid min-h-[85vh] items-center gap-8 py-12 md:grid-cols-2 md:py-0">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-5 flex gap-3"
            >
              {[
                { icon: Hand, label: t("hero.badge1") },
                { icon: Gem, label: t("hero.badge2") },
                { icon: Sparkles, label: t("hero.badge3") },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 font-body text-xs text-muted-foreground"
                >
                  <b.icon className="h-3 w-3 text-primary" />
                  {b.label}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-primary"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl font-light leading-[1.1] text-foreground md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {t("hero.title1")}{" "}
              <span className="text-gold-gradient font-semibold">Naqshizarr</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 max-w-lg font-body text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {t("hero.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <Button
                asChild
                size="lg"
                className="gap-2 bg-gold-gradient font-body text-sm uppercase tracking-wider text-primary-foreground shadow-luxury hover:opacity-90"
              >
                <Link to="/products">
                  {t("hero.cta")} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="ornament-pattern absolute -inset-4 -z-10 rounded-2xl opacity-40" />
            <div className="overflow-hidden rounded-2xl shadow-luxury">
              <img
                src={heroImg}
                alt="Naqshizarr hashamatli dasturxon"
                className="aspect-[3/4] w-full object-cover md:aspect-[4/5]"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card/90 px-5 py-3 shadow-card backdrop-blur-sm md:-left-8"
            >
              <p className="font-display text-2xl font-semibold text-primary">70%</p>
              <p className="font-body text-xs text-muted-foreground">{t("hero.badge2")}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="container my-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-light text-foreground md:text-4xl">
              {t("story.title1")} <span className="text-gold-gradient font-semibold">{t("story.title2")}</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="font-body leading-relaxed text-muted-foreground">
              {t("story.p1")}
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="font-body leading-relaxed text-muted-foreground">
              {t("story.p2")}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-xl shadow-card"
          >
            <img
              src={processImg}
              alt="Qo'l mehnati jarayoni"
              className="h-72 w-full object-cover md:h-80"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-card py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              { icon: Hand, title: t("feature.handmade"), desc: t("feature.handmade.desc") },
              { icon: Gem, title: t("feature.silk"), desc: t("feature.silk.desc") },
              { icon: Sparkles, title: t("feature.art"), desc: t("feature.art.desc") },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                custom={i}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-light text-foreground md:text-4xl">
            {t("featured.title1")} <span className="text-gold-gradient font-semibold">{t("featured.title2")}</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-3 font-body text-muted-foreground">
            {t("featured.subtitle")}
          </motion.p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : featured?.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        {!isLoading && (!featured || featured.length === 0) && (
          <p className="text-center font-body text-muted-foreground">{t("featured.empty")}</p>
        )}
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="gap-2 font-body">
            <Link to="/products">
              {t("featured.viewAll")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
