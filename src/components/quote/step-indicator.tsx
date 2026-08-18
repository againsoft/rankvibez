import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const stepKeys = ["services", "requirements", "yourDetails"];

export function StepIndicator({ currentStep }: { currentStep: number }) {
  const t = useTranslations("quoteForm.steps");

  return (
    <ol className="flex items-center gap-2 sm:gap-4">
      {stepKeys.map((key, i) => {
        const label = t(key);
        const stepNumber = i + 1;
        const complete = stepNumber < currentStep;
        const active = stepNumber === currentStep;
        return (
          <li key={label} className="flex flex-1 items-center gap-2 last:flex-initial sm:gap-4">
            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors",
                  complete && "border-primary bg-primary text-white",
                  active && "border-primary text-primary",
                  !complete && !active && "border-border-strong text-muted-2"
                )}
              >
                {complete ? <Check size={14} /> : stepNumber}
              </span>
              <span
                className={cn(
                  "hidden text-xs font-medium uppercase tracking-[0.08em] sm:inline",
                  active || complete ? "text-foreground" : "text-muted-2"
                )}
              >
                {label}
              </span>
            </div>
            {stepNumber < stepKeys.length && (
              <span className={cn("h-px flex-1 transition-colors", complete ? "bg-primary" : "bg-border-subtle")} />
            )}
          </li>
        );
      })}
    </ol>
  );
}
