import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useCreateContact } from "@/shared/hooks/useCreateContact";
import { useLanguage } from "@/shared/i18n/LanguageContext";
import { toast } from "sonner";
import { Loader2, MapPin, Phone, Mail } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(9).max(20),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(5).max(1000),
});

type ContactForm = z.infer<typeof schema>;

export default function ContactPage() {
  const { mutate, isPending } = useCreateContact();
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(schema) });

  const onSubmit = (data: ContactForm) => {
    mutate({ name: data.name, phone: data.phone, email: data.email, message: data.message }, {
      onSuccess: () => { toast.success(t("contact.success")); reset(); },
      onError: () => { toast.error(t("contact.error")); },
    });
  };

  return (
    <main className="container py-12 md:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
        <h1 className="font-display text-3xl font-light text-foreground md:text-5xl">
          <span className="text-gold-gradient font-semibold">{t("contact.title")}</span>
        </h1>
        <p className="mt-3 font-body text-muted-foreground">{t("contact.subtitle")}</p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">{t("contact.addressLabel")}</h3>
              <p className="font-body text-sm text-muted-foreground">{t("contact.addressValue")}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">{t("contact.phoneLabel")}</h3>
              <p className="font-body text-sm text-muted-foreground">+998 90 123 45 67</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">{t("contact.emailLabel")}</h3>
              <p className="font-body text-sm text-muted-foreground">info@naqshizarr.uz</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-card"
        >
          <div>
            <Label htmlFor="name">{t("contact.name")}</Label>
            <Input id="name" {...register("name")} />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="phone">{t("contact.phone")}</Label>
            <Input id="phone" {...register("phone")} />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">{t("contact.email")}</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="message">{t("contact.message")}</Label>
            <Textarea id="message" rows={4} {...register("message")} />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
          </div>
          <Button type="submit" className="w-full bg-gold-gradient font-body text-sm uppercase tracking-wider text-primary-foreground shadow-luxury hover:opacity-90" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {t("contact.send")}
          </Button>
        </motion.form>
      </div>
    </main>
  );
}
