import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--color-background-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 520,
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#FDF0E8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C95A14"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M2 20h20" />
            <path d="M4 20V10l8-6 8 6v10" />
            <path d="M9 20v-6h6v6" />
            <path d="M12 4v2" />
          </svg>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: 1.4,
            color: "#C95A14",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          UNDER CONSTRUCTION
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: 42,
            fontWeight: 500,
            letterSpacing: -1.8,
            margin: "0 0 14px",
            color: "var(--color-text-primary)",
          }}
        >
          Oops — this page isn&apos;t ready yet
        </h1>

        {/* Body */}
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.6,
            color: "var(--color-text-secondary)",
            margin: "0 0 32px",
            maxWidth: 420,
          }}
        >
          I&apos;m still building this section. Check back soon — in the
          meantime, feel free to head back home and explore the rest of the
          portfolio.
        </p>

        {/* Actions */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href="/"
            style={{
              padding: "12px 22px",
              background: "#C95A14",
              color: "white",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Back to home
          </Link>
          <Link
            href="/#contact"
            style={{
              padding: "12px 22px",
              background: "transparent",
              color: "var(--color-text-primary)",
              border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
