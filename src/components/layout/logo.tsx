import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logoImage from "../../../public/logo/rankvibe-logo.png";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={logoImage}
      alt="RankVibeZ"
      className={cn("h-8 w-auto", className)}
      priority
    />
  );
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <Link href="/" className={cn("group focus-ring inline-flex items-center rounded-md", className)}>
      <LogoMark className={cn("h-8 w-auto sm:h-9", markClassName)} />
    </Link>
  );
}
