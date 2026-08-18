"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { services, serviceCategories, getServiceBySlug } from "@/data/services";
import { StepIndicator } from "./step-indicator";
import { ServiceSelectCard } from "./service-select-card";

const labelClass = "text-xs font-medium uppercase tracking-[0.08em] text-muted-2";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\-.\s\d]{7,20}$/;

type Step = 1 | 2 | 3;
type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = { name?: string; email?: string; phone?: string };

export function QuoteForm() {
  const t = useTranslations("quoteForm");
  const tCategory = useTranslations("serviceCategories");
  const tServiceData = useTranslations("servicesData");
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service");

  const [step, setStep] = useState<Step>(1);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(() =>
    preselected && getServiceBySlug(preselected) ? [preselected] : []
  );
  const [requirements, setRequirements] = useState<Record<string, string>>({});
  const [serviceError, setServiceError] = useState("");

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState("");

  const selectedServices = useMemo(
    () => selectedSlugs.map((slug) => getServiceBySlug(slug)).filter((s): s is NonNullable<typeof s> => Boolean(s)),
    [selectedSlugs]
  );

  function toggleService(slug: string) {
    setServiceError("");
    setSelectedSlugs((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  }

  function goTo(next: Step) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  }

  function handleStep1Next() {
    if (selectedSlugs.length === 0) {
      setServiceError(t("selectServiceError"));
      return;
    }
    goTo(2);
  }

  function validateContactFields() {
    const errors: FieldErrors = {};
    if (!name.trim()) errors.name = t("nameRequired");
    if (!email.trim()) {
      errors.email = t("emailRequired");
    } else if (!emailPattern.test(email.trim())) {
      errors.email = t("emailInvalid");
    }
    if (phone.trim() && !phonePattern.test(phone.trim())) {
      errors.phone = t("phoneInvalid");
    }
    return errors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (selectedSlugs.length === 0) {
      setServiceError(t("selectServiceError"));
      goTo(1);
      return;
    }

    const errors = validateContactFields();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setSubmitError("");
    setStatus("loading");

    try {
      const res = await fetch("/api/quote-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          website,
          serviceSlugs: selectedSlugs,
          requirements,
          name,
          company,
          email,
          phone,
          message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error ?? t("genericError"));
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setSubmitError(t("genericError"));
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="card-surface flex flex-col items-center gap-4 rounded-3xl p-12 text-center"
      >
        <CheckCircle2 className="text-success" size={40} />
        <h3 className="text-xl font-semibold text-foreground">{t("successTitle")}</h3>
        <p className="max-w-sm text-sm text-muted">{t("successDescription")}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface flex flex-col gap-8 rounded-3xl p-8 sm:p-10">
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <StepIndicator currentStep={step} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={{ opacity: 0, x: direction * 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -24 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col gap-6"
        >
          {step === 1 && (
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-lg font-semibold text-foreground">{t("step1Title")}</h2>
                <p className="mt-1.5 text-sm text-muted">{t("step1Description")}</p>
              </div>

              {serviceCategories.map((category) => {
                const categoryServices = services.filter((s) => s.category === category);
                return (
                  <div key={category} className="flex flex-col gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-2">{tCategory(category)}</p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {categoryServices.map((service) => (
                        <ServiceSelectCard
                          key={service.slug}
                          service={service}
                          selected={selectedSlugs.includes(service.slug)}
                          onToggle={() => toggleService(service.slug)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}

              {serviceError && <p className="text-sm text-danger">{serviceError}</p>}
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground">{t("step2Title")}</h2>
                <p className="mt-1.5 text-sm text-muted">{t("step2Description")}</p>
              </div>

              {selectedServices.map((service) => {
                const serviceName = tServiceData(`${service.slug}.name`);
                return (
                  <div key={service.slug} className="flex flex-col gap-2">
                    <label className={labelClass} htmlFor={`req-${service.slug}`}>
                      {serviceName}
                    </label>
                    <Textarea
                      id={`req-${service.slug}`}
                      rows={3}
                      placeholder={t("requirementsPlaceholder", { service: serviceName })}
                      value={requirements[service.slug] ?? ""}
                      onChange={(e) => setRequirements((prev) => ({ ...prev, [service.slug]: e.target.value }))}
                    />
                  </div>
                );
              })}
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground">{t("step3Title")}</h2>
                <p className="mt-1.5 text-sm text-muted">{t("step3Description")}</p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className={labelClass} htmlFor="name">
                    {t("nameLabel")}
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    state={fieldErrors.name ? "error" : "default"}
                    placeholder={t("namePlaceholder")}
                  />
                  {fieldErrors.name && <p className="text-xs text-danger">{fieldErrors.name}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass} htmlFor="company">
                    {t("companyLabel")}
                  </label>
                  <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder={t("companyPlaceholder")} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className={labelClass} htmlFor="email">
                    {t("emailLabel")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    state={fieldErrors.email ? "error" : "default"}
                    placeholder={t("emailPlaceholder")}
                  />
                  {fieldErrors.email && <p className="text-xs text-danger">{fieldErrors.email}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass} htmlFor="phone">
                    {t("phoneLabel")}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    state={fieldErrors.phone ? "error" : "default"}
                    placeholder={t("phonePlaceholder")}
                  />
                  {fieldErrors.phone && <p className="text-xs text-danger">{fieldErrors.phone}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass} htmlFor="message">
                  {t("messageLabel")}
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("messagePlaceholder")}
                />
              </div>

              {submitError && <p className="text-sm text-danger">{submitError}</p>}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between gap-4 border-t border-border-subtle pt-6">
        {step > 1 ? (
          <Button type="button" variant="secondary" onClick={() => goTo((step - 1) as Step)}>
            <ArrowLeft size={16} />
            {t("back")}
          </Button>
        ) : (
          <span />
        )}

        {step < 3 && (
          <Button type="button" onClick={step === 1 ? handleStep1Next : () => goTo(3)}>
            {t("next")}
            <ArrowRight size={16} />
          </Button>
        )}

        {step === 3 && (
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                {t("submitting")}
              </>
            ) : (
              t("sendRequest")
            )}
          </Button>
        )}
      </div>
    </form>
  );
}
