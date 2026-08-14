import Image from "next/image";
import { cn } from "@/lib/utils";

export function AvatarPhoto({
  src,
  name,
  size,
  className,
}: {
  src: string;
  name: string;
  size: number;
  className?: string;
}) {
  return (
    <div
      className={cn("relative shrink-0 overflow-hidden rounded-full ring-1 ring-white/10", className)}
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={name} fill sizes={`${size}px`} className="object-cover" />
    </div>
  );
}
