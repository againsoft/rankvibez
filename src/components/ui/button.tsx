import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-[0_0_0_1px_rgba(226,50,63,0.4),0_8px_24px_-6px_rgba(226,50,63,0.55)] hover:bg-primary-hover hover:shadow-[0_0_0_1px_rgba(226,50,63,0.55),0_10px_30px_-4px_rgba(226,50,63,0.65)]",
        secondary:
          "border border-border-strong bg-white/[0.03] text-foreground hover:bg-white/[0.07] hover:border-white/20",
        ghost: "text-foreground hover:bg-white/[0.06]",
        outline: "border border-border-subtle text-foreground hover:border-primary/50 hover:bg-primary-soft",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-11 px-6",
        lg: "h-13 px-7 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
  };

export function Button({ className, variant, size, href, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
