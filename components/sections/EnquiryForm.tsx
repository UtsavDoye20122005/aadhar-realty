"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { formErrors, labels } from "@/content/copy";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, formErrors.name),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, formErrors.phone),
  email: z.union([z.literal(""), z.string().trim().email(formErrors.email)]),
  message: z.string().trim().max(1000).optional(),
});

type Values = z.infer<typeof schema>;

const fieldClass =
  "mt-3 h-11 w-full border border-input bg-background px-3 text-base text-foreground";
const labelClass = "block text-xs tracking-label text-muted-foreground uppercase";
const errorClass = "mt-2 text-sm text-destructive";

/**
 * Validation, error states and the success screen all run in the browser.
 * Nothing is transmitted: there is no endpoint behind this form yet.
 */
export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  if (sent) {
    return (
      <div className="border-t border-border pt-8">
        <h3 className="text-xl">{labels.successTitle}</h3>
        <p className="mt-4 max-w-[52ch] text-pretty text-muted-foreground">
          {labels.successBody}
        </p>
        <button
          type="button"
          onClick={() => {
            reset();
            setSent(false);
          }}
          className="mt-8 inline-flex min-h-11 items-center border border-brass px-7 text-xs tracking-label text-foreground uppercase transition-colors hover:bg-secondary active:translate-y-px"
        >
          {labels.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async () => {
        setSent(true);
      })}
      className="flex flex-col gap-8"
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          {labels.name}
        </label>
        <input
          id="name"
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(fieldClass, errors.name && "border-destructive")}
          {...register("name")}
        />
        {errors.name ? (
          <p id="name-error" className={errorClass}>
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          {labels.phone}
        </label>
        <input
          id="phone"
          inputMode="numeric"
          autoComplete="tel-national"
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={cn(fieldClass, errors.phone && "border-destructive")}
          {...register("phone")}
        />
        {errors.phone ? (
          <p id="phone-error" className={errorClass}>
            {errors.phone.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          {labels.email}
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(fieldClass, errors.email && "border-destructive")}
          {...register("email")}
        />
        {errors.email ? (
          <p id="email-error" className={errorClass}>
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {labels.message}
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-3 w-full border border-input bg-background px-3 py-3 text-base text-foreground"
          {...register("message")}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-11 items-center bg-primary px-7 text-xs tracking-label text-primary-foreground uppercase transition-colors hover:bg-primary/85 active:translate-y-px disabled:opacity-50"
        >
          {isSubmitting ? labels.submitting : labels.submit}
        </button>
      </div>
    </form>
  );
}
