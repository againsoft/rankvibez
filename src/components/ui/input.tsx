import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "focus-ring w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted-2 transition-colors",
  {
    variants: {
      state: {
        default: "border-border-subtle focus:border-primary/50",
        error: "border-danger/60 focus:border-danger",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, state, ...props }, ref) => {
  return <input ref={ref} className={cn(inputVariants({ state }), className)} {...props} />;
});
Input.displayName = "Input";
