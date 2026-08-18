import Link from "next/link";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.875rem", letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6 }}>
            Error 404
          </p>
          <h1 style={{ fontSize: "2rem", fontWeight: 600, marginTop: "0.5rem" }}>Page not found.</h1>
          <Link href="/" style={{ display: "inline-block", marginTop: "1.5rem", color: "#e2323f" }}>
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  );
}
