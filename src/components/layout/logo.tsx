import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logoImage from "../../../public/logo/rankvibe-logo.png";

const TRACK_D = "M 6 145 L 6 45 Q 6 8 46 8 L 337 8";
const TRACK_LENGTH = 454;

export function LogoMark({ className, animated = true }: { className?: string; animated?: boolean }) {
  return (
    <span className={cn("relative inline-block aspect-[600/162] h-8", className)}>
      <Image src={logoImage} alt="RankVibeZ" fill className="object-contain" priority />

      {animated && (
        <svg viewBox="0 0 600 162" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <path id="rv-track" d={TRACK_D} />
          </defs>

          <path
            d={TRACK_D}
            fill="none"
            stroke="#ff4b4b"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${TRACK_LENGTH * 0.14} ${TRACK_LENGTH}`}
            style={{ filter: "drop-shadow(0 0 5px #ff4b4b)" }}
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to={-TRACK_LENGTH}
              dur="3.4s"
              repeatCount="indefinite"
            />
          </path>

          <circle r="7" fill="#ff5b5b" style={{ filter: "drop-shadow(0 0 6px #ff4b4b)" }}>
            <animateMotion dur="3.4s" repeatCount="indefinite">
              <mpath href="#rv-track" />
            </animateMotion>
          </circle>
        </svg>
      )}
    </span>
  );
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <Link href="/" className={cn("group focus-ring inline-flex items-center rounded-md", className)}>
      <LogoMark className={cn("h-8 w-auto sm:h-9", markClassName)} />
    </Link>
  );
}
