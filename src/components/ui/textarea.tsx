import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "focus-ring w-full resize-none rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted-2 transition-colors",
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

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & VariantProps<typeof textareaVariants>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, state, ...props }, ref) => {
  return <textarea ref={ref} className={cn(textareaVariants({ state }), className)} {...props} />;
});
Textarea.displayName = "Textarea";
