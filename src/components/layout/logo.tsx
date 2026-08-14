import Link from "next/link";
import { Baloo_2 } from "next/font/google";
import { cn } from "@/lib/utils";

const baloo = Baloo_2({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-baloo" });

const TRACK_D = "M 500 40 L 78 40 Q 40 40 40 78 L 40 214 Q 40 252 78 252 L 782 252";
const TRACK_LENGTH = 1381;

export function LogoMark({ className, animated = true }: { className?: string; animated?: boolean }) {
  return (
    <svg
      viewBox="0 0 820 300"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RankVibeZ"
    >
      <defs>
        <path id="rv-track" d={TRACK_D} />
      </defs>

      {/* static frame track */}
      <path d={TRACK_D} fill="none" stroke="#e2323f" strokeOpacity="0.28" strokeWidth="7" strokeLinecap="round" />

      {animated && (
        <>
          {/* running red trail chasing the ball */}
          <path
            d={TRACK_D}
            fill="none"
            stroke="#ff4b4b"
            strokeWidth="7"
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

          {/* traveling ball */}
          <circle r="10" fill="#ff5b5b" style={{ filter: "drop-shadow(0 0 6px #ff4b4b)" }}>
            <animateMotion dur="3.4s" repeatCount="indefinite">
              <mpath href="#rv-track" />
            </animateMotion>
          </circle>
        </>
      )}

      <text
        x="66"
        y="207"
        fontFamily="var(--font-baloo), sans-serif"
        fontWeight={800}
        fontSize="140"
        letterSpacing="-2.5"
        fill="#f5f6fa"
      >
        RankVibeZ
      </text>
    </svg>
  );
}

export function Logo({ className, markClassName }: { className?: string; markClassName?: string }) {
  return (
    <Link href="/" className={cn("group focus-ring inline-flex items-center rounded-md", baloo.variable, className)}>
      <LogoMark className={cn("h-8 w-auto sm:h-9", markClassName)} />
    </Link>
  );
}
