"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        height: 62,
        background: "var(--color-background-primary)",
        borderBottom: "0.5px solid var(--color-border-tertiary)",
        padding: "0 52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <a href="#home" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "var(--color-text-primary)",
          }}
        >
          JI
          <span style={{ color: "#C95A14" }}>.</span>
        </span>
      </a>

      {/* Desktop Nav Links */}
      <div
        style={{
          display: "flex",
          gap: 36,
          alignItems: "center",
        }}
        className="nav-links-desktop"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontSize: 13,
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              fontWeight: 400,
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "white",
          background: "#C95A14",
          borderRadius: 999,
          padding: "8px 20px",
          textDecoration: "none",
        }}
        className="nav-cta-desktop"
      >
        Hire me
      </a>

      {/* Hamburger (mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 4,
        }}
        aria-label="Toggle menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-text-primary)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: "absolute",
            top: 62,
            left: 0,
            right: 0,
            background: "var(--color-background-primary)",
            borderBottom: "0.5px solid var(--color-border-tertiary)",
            padding: "16px 52px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            zIndex: 10,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 13,
                color: "var(--color-text-secondary)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: "white",
              background: "#C95A14",
              borderRadius: 999,
              padding: "8px 20px",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Hire me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .nav-links-desktop { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
