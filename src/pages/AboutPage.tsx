import { motion } from "framer-motion";
import { Hand, Gem, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/shared/i18n/LanguageContext";
import aboutArt from "@/assets/about-art.jpg";
import processImg from "@/assets/handmade-process.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="container py-16 text-center md:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl font-light text-foreground md:text-5xl"
        >
          <span className="text-gold-gradient font-semibold">Naqshizarr</span> {t("about.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl font-body leading-relaxed text-muted-foreground"
        >
          {t("about.subtitle")}
        </motion.p>
      </section>

      <section className="bg-card py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: Hand, title: t("about.handmade"), desc: t("about.handmade.desc") },
              { icon: Gem, title: t("about.fiber"), desc: t("about.fiber.desc") },
              { icon: Sparkles, title: t("about.miniature"), desc: t("about.miniature.desc") },
              { icon: Heart, title: t("about.philosophy"), desc: t("about.philosophy.desc") },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-xl shadow-card">
            <img src={processImg} alt={t("about.handmade")} className="h-72 w-full object-contain md:h-80" loading="lazy" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-xl shadow-card">
            <img src={aboutArt} alt={t("about.miniature")} className="h-72 w-full object-contain md:h-80" loading="lazy" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
