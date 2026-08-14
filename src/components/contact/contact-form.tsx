"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { budgetOptions, countryOptions } from "@/data/contact";

const fieldClass =
  "focus-ring w-full rounded-xl border border-border-subtle bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted-2 transition-colors focus:border-primary/50";
const labelClass = "text-xs font-medium uppercase tracking-[0.08em] text-muted-2";

export function ContactForm() {
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
        setError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface flex flex-col items-center gap-4 rounded-3xl p-12 text-center">
        <CheckCircle2 className="text-success" size={40} />
        <h3 className="text-xl font-semibold text-foreground">Thanks — your message is in.</h3>
        <p className="max-w-sm text-sm text-muted">
          A member of the RankVibez team will get back to you shortly to schedule a discovery call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface flex flex-col gap-5 rounded-3xl p-8 sm:p-10">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="name">Name</label>
          <input id="name" name="name" required className={fieldClass} placeholder="Jane Doe" />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="company">Company</label>
          <input id="company" name="company" className={fieldClass} placeholder="Company name" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="email">Work Email</label>
          <input id="email" name="email" type="email" required className={fieldClass} placeholder="you@company.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" className={fieldClass} placeholder="+1 555 000 0000" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="country">Country</label>
          <select id="country" name="country" className={fieldClass} defaultValue="">
            <option value="" disabled>Select country</option>
            {countryOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className={labelClass} htmlFor="service">Service</label>
          <select id="service" name="service" className={fieldClass} defaultValue="">
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="budget">Budget (USD)</label>
        <select id="budget" name="budget" className={fieldClass} defaultValue="">
          <option value="" disabled>Select a budget range</option>
          {budgetOptions.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass} htmlFor="description">Project Description</label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={fieldClass}
          placeholder="Tell us about your business and what you're looking to build."
        />
      </div>

      {error && <p className="text-sm text-danger">{error}</p>}

      <Button type="submit" size="lg" disabled={status === "loading"} className="mt-2">
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
