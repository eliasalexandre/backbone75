"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ref, push } from "firebase/database";
import { Controller, useForm } from "react-hook-form";
import { Calendar1, Loader2, Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";

import { databaseGoogleApp } from "@/services/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/form/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/form/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContactConfirmationDrawer } from "@/context/contact-drawer-context";

const categories = ["Blog", "Website", "Land page", "Mobile App", "Outros"];

const contactFormSchema = z.object({
  username: z
    .string()
    .min(5, { message: "O usuário deve ter no mínimo 5 letras." }),
  phone: z.string().length(9),
  email: z.string().email(),
  category: z.string(),
  description: z.string(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { handleOpen } = useContactConfirmationDrawer();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onContact(objects: ContactFormData) {
    try {
      const flowRef = ref(databaseGoogleApp, "customers");

      await push(flowRef, { ...objects });

      handleOpen(true);

      setValue("username", "");
      setValue("phone", "");
      setValue("email", "");
      setValue("category", "");
      setValue("description", "");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      if (e.message.includes("Failed to fetch")) {
        toast("Erro interno do servidor.", {
          description: "tente novamente mais tarde.",
        });
      }

      toast("Ops...", {
        description: e?.message,
      });
    }
  }

  return (
    <form
      id="form"
      className="space-y-6 mt-10"
      onSubmit={handleSubmit(onContact)}
    >
      <div className="flex items-center flex-col md:flex-row gap-3">
        <div className="w-full space-y-2">
          <Label
            htmlFor="username"
            className="text-zinc-400 font-semibold uppercase"
          >
            Nome completo
          </Label>

          <Input.Root>
            <Input.Prefix>
              <User className="size-4 text-zinc-400" />
            </Input.Prefix>

            <Input.Control id="username" {...register("username")} />
          </Input.Root>

          {!!errors?.username && (
            <span className="text-sm text-rose-500">
              {errors.username.message}
            </span>
          )}
        </div>

        <div className="space-y-2 w-full">
          <Label
            htmlFor="category"
            className="sr-only md:not-sr-only text-zinc-400 font-semibold uppercase"
          >
            Categoria da aplicação
          </Label>
          <Controller
            control={control}
            name="category"
            render={({ field }) => (
              <Select
                value={field.value!}
                onValueChange={(value) => field.onChange(value)}
              >
                <SelectTrigger className="gap-2 min-w-52" id="category">
                  <SelectValue placeholder="Categoria da aplicação" />
                </SelectTrigger>

                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} defaultChecked value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />

          {!!errors?.category && (
            <span className="text-sm text-rose-500">
              {errors.category.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center flex-col md:flex-row gap-3">
        <div className="flex-1 space-y-2 w-full">
          <Label
            htmlFor="phone"
            className="sr-only text-zinc-400 font-semibold uppercase"
          >
            Contactos
          </Label>

          <Input.Root>
            <Input.Prefix>
              <Phone className="size-4 text-zinc-400" />
            </Input.Prefix>

            <Input.Control
              placeholder="ex: 923 000 000"
              id="phone"
              type="tel"
              className="placeholder:text-zinc-300"
              {...register("phone")}
            />
          </Input.Root>

          {!!errors?.phone && (
            <span className="text-sm text-rose-500">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="space-y-2 w-full">
          <Input.Root>
            <Input.Prefix>
              <Mail className="size-4 text-zinc-400" />
            </Input.Prefix>

            <Input.Control
              id="email"
              placeholder="Seu email"
              className="placeholder:text-zinc-300"
              type="email"
              {...register("email")}
            />
          </Input.Root>

          {!!errors?.email && (
            <span className="text-sm text-rose-500">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="description"
          className="text-zinc-400 font-semibold uppercase"
        >
          Descreva a sua requisição
        </Label>

        <Textarea
          id="description"
          placeholder="Comece com: Sistema para..."
          className="placeholder:text-zinc-300"
          {...register("description")}
        />

        {!!errors?.description && (
          <span className="text-sm text-rose-500">
            {errors.description.message}
          </span>
        )}
      </div>

      <Button
        disabled={isSubmitting}
        className="w-full h-14 bg-[#eb5757] hover:bg-[#eb5757]/90 text-white text-lg font-semibold uppercase"
        size="lg"
      >
        <span>Agendar Sessão</span>
        {isSubmitting ? (
          <Loader2 className="size-7 animate-spin" />
        ) : (
          <Calendar1 className="size-7" />
        )}
      </Button>
    </form>
  );
}
