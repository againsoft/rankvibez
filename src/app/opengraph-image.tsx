import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 90,
          background: "#07070b",
          backgroundImage:
            "radial-gradient(circle at 75% 30%, rgba(226,50,63,0.35), transparent 55%), radial-gradient(circle at 20% 80%, rgba(255,138,61,0.25), transparent 50%)",
          color: "#f6f7f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #7a1220, #f04b4b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f4f7ff",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div style={{ fontSize: 32, fontWeight: 800 }}>RankVibeZ</div>
        </div>
        <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.15, maxWidth: 960 }}>
          Build Smarter. Automate Faster. Grow with AI.
        </div>
        <div style={{ fontSize: 26, marginTop: 28, color: "#9498a8", maxWidth: 820 }}>
          AI-driven software, cloud, security and digital growth solutions for modern businesses.
        </div>
      </div>
    ),
    size
  );
}
