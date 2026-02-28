import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useCreateOrder } from "@/shared/hooks/useCreateOrder";
import { useLanguage } from "@/shared/i18n/LanguageContext";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const orderSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(9).max(20),
  address: z.string().trim().min(5).max(300),
  email: z.string().email().optional().or(z.literal("")),
  oferta: z.boolean().refine((v) => v),
});

type OrderForm = z.infer<typeof orderSchema>;

interface Props {
  open: boolean;
  onClose: () => void;
  productId: string;
  quantity: number;
}

export default function OrderModal({ open, onClose, productId, quantity }: Props) {
  const { mutate, isPending } = useCreateOrder();
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
    defaultValues: { oferta: false },
  });

  const oferta = watch("oferta");

  const onSubmit = (data: OrderForm) => {
    mutate(
      {
        fullName: data.fullName,
        phone: data.phone,
        address: data.address,
        email: data.email || undefined,
        oferta: data.oferta,
        items: [{ productId, quantity }],
      },
      {
        onSuccess: () => { toast.success(t("order.success")); reset(); onClose(); },
        onError: () => { toast.error(t("order.error")); },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md bg-background">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{t("order.title")}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="fullName">{t("order.fullName")}</Label>
            <Input id="fullName" {...register("fullName")} placeholder={t("order.fullNamePh")} />
            {errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName.message}</p>}
          </div>
          <div>
            <Label htmlFor="phone">{t("order.phone")}</Label>
            <Input id="phone" {...register("phone")} placeholder={t("order.phonePh")} />
            {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
          </div>
          <div>
            <Label htmlFor="address">{t("order.address")}</Label>
            <Input id="address" {...register("address")} placeholder={t("order.addressPh")} />
            {errors.address && <p className="mt-1 text-xs text-destructive">{errors.address.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">{t("order.email")}</Label>
            <Input id="email" type="email" {...register("email")} placeholder={t("order.emailPh")} />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
          </div>
          <div className="flex items-start gap-2">
            <Checkbox id="oferta" checked={oferta} onCheckedChange={(v) => setValue("oferta", !!v, { shouldValidate: true })} />
            <Label htmlFor="oferta" className="text-sm leading-snug text-muted-foreground">{t("order.oferta")}</Label>
          </div>
          {errors.oferta && <p className="text-xs text-destructive">{errors.oferta.message}</p>}
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {t("order.submit")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
