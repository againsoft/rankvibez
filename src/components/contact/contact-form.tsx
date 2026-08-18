"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { budgetOptions, countryOptions } from "@/data/contact";

const fieldClass =
  "focus-ring w-full rounded-xl border border-border-subtle bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted-2 transition-colors focus:border-primary/50";
const labelClass = "text-xs font-medium uppercase tracking-[0.08em] text-muted-2";

export function ContactForm() {
  const t = useTranslations("contactForm");
  const tServices = useTranslations("servicesData");
  const tCountries = useTranslations("countries");
  const tBudget = useTranslations("contactData.budgetOptions");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? t("genericError"));
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError(t("genericError"));
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface flex flex-col items-center gap-4 rounded-3xl p-12 text-center">
        <CheckCircle2 className="text-success" size={40} />
        <h3 className="text-xl font-semibold text-foreground">{t("successTitle")}</h3>
        <p className="max-w-sm text-sm text-muted">{t("successDescription")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface flex flex-col gap-5 rounded-3xl p-8 sm:p-10">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="name">{t("nameLabel")}</label>
          <input id="name" name="name" required className={fieldClass} placeholder={t("namePlaceholder")} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="company">{t("companyLabel")}</label>
          <input id="company" name="company" className={fieldClass} placeholder={t("companyPlaceholder")} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="email">{t("emailLabel")}</label>
          <input id="email" name="email" type="email" required className={fieldClass} placeholder={t("emailPlaceholder")} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="phone">{t("phoneLabel")}</label>
          <input id="phone" name="phone" type="tel" className={fieldClass} placeholder={t("phonePlaceholder")} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="country">{t("countryLabel")}</label>
          <select id="country" name="country" className={fieldClass} defaultValue="">
            <option value="" disabled>{t("countryPlaceholder")}</option>
            {countryOptions.map((c) => (
              <option key={c} value={c}>{tCountries(c)}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="service">{t("serviceLabel")}</label>
          <select id="service" name="service" className={fieldClass} defaultValue="">
            <option value="" disabled>{t("servicePlaceholder")}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{tServices(`${s.slug}.name`)}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="budget">{t("budgetLabel")}</label>
        <select id="budget" name="budget" className={fieldClass} defaultValue="">
          <option value="" disabled>{t("budgetPlaceholder")}</option>
          {budgetOptions.map((b) => (
            <option key={b} value={b}>{tBudget(b)}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="description">{t("descriptionLabel")}</label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={fieldClass}
          placeholder={t("descriptionPlaceholder")}
        />
      </div>

      {error && <p className="text-sm text-danger">{error}</p>}

      <Button type="submit" size="lg" disabled={status === "loading"} className="mt-2">
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t("sending")}
          </>
        ) : (
          t("submit")
        )}
      </Button>
    </form>
  );
}
