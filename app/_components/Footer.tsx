export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-background-primary)",
        borderTop: "0.5px solid var(--color-border-tertiary)",
        padding: "28px 52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="footer-bar"
    >
      {/* Logo */}
      <span style={{ fontSize: 14, fontWeight: 500 }}>
        JD<span style={{ color: "#C95A14" }}>.</span>
      </span>

      {/* Copyright */}
      <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>
        &copy; 2025 Jordan Davies. All rights reserved.
      </span>

      {/* Social Links */}
      <div style={{ display: "flex", gap: 24 }}>
        {[
          { label: "GitHub", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "Twitter", href: "#" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontSize: 12,
              color: "var(--color-text-secondary)",
              textDecoration: "none",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .footer-bar {
            flex-direction: column !important;
            text-align: center !important;
            gap: 12px !important;
            padding: 28px 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
