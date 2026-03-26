"use client";

import { useState } from "react";

const projects = [
  {
    title: "Analytics Dashboard",
    description:
      "A real-time data visualization platform built for a SaaS client, featuring custom charts, advanced filters, and team collaboration tools. Handles 50k+ events per day with sub-100ms query times.",
    category: "Full-stack",
    color: "#FDF0E8",
    stack: [
      { label: "React", hi: true },
      { label: "Node.js", hi: true },
      { label: "PostgreSQL", hi: false },
      { label: "Tailwind", hi: false },
      { label: "Redis", hi: false },
    ],
    featured: true,
    cols: "span 7",
    thumbH: 240,
  },
  {
    title: "Storefront Platform",
    description:
      "Full-featured e-commerce with product management, cart, Stripe payments, and a custom CMS for store owners.",
    category: "Full-stack",
    color: "#EDF2FB",
    stack: [
      { label: "Next.js", hi: true },
      { label: "TypeScript", hi: true },
      { label: "Stripe", hi: false },
    ],
    featured: false,
    cols: "span 5",
    thumbH: 180,
  },
  {
    title: "UI Component Library",
    description: "",
    category: "Frontend",
    color: "#F0EEFF",
    stack: [
      { label: "React", hi: true },
      { label: "Storybook", hi: false },
    ],
    featured: false,
    cols: "span 4",
    thumbH: 140,
  },
  {
    title: "Habit Tracker App",
    description: "",
    category: "Mobile",
    color: "#EDFAF3",
    stack: [
      { label: "React Native", hi: true },
      { label: "SQLite", hi: false },
    ],
    featured: false,
    cols: "span 4",
    thumbH: 140,
  },
  {
    title: "REST API Boilerplate",
    description: "",
    category: "Backend",
    color: "#FFF8F0",
    stack: [
      { label: "Node.js", hi: true },
      { label: "Docker", hi: false },
    ],
    featured: false,
    cols: "span 4",
    thumbH: 140,
  },
];

const filters = ["All", "Full-stack", "Frontend", "UI/UX"];

function CSSPattern({ color }: { color: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: color,
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: 4,
        padding: 12,
      }}
    >
      {Array.from({ length: 18 }).map((_, i) => (
        <div
          key={i}
          style={{
            borderRadius: 4,
            background:
              i % 3 === 0 ? `rgba(0,0,0,0.06)` : `rgba(0,0,0,0.03)`,
          }}
        />
      ))}
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      style={{
        background: "var(--color-background-tertiary)",
        padding: "88px 52px",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
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
          PROJECTS
        </div>
        <h2
          style={{
            fontSize: 42,
            fontWeight: 500,
            letterSpacing: -1.8,
            margin: "0 0 12px",
          }}
        >
          Things I&apos;ve built
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "var(--color-text-secondary)",
            margin: 0,
          }}
        >
          A selection of projects across design and development
        </p>
      </div>

      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginBottom: 44,
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              fontSize: 12,
              padding: "7px 18px",
              borderRadius: 999,
              border:
                active === f
                  ? "0.5px solid #C95A14"
                  : "0.5px solid var(--color-border-tertiary)",
              background: active === f ? "#C95A14" : "var(--color-background-secondary)",
              color: active === f ? "white" : "var(--color-text-secondary)",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
          gap: 16,
        }}
        className="projects-grid"
      >
        {filtered.map((project) => (
          <div
            key={project.title}
            style={{
              gridColumn: project.cols,
              background: "var(--color-background-primary)",
              border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: 16,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
            className="project-tile"
          >
            {/* Thumbnail */}
            <div
              style={{
                height: project.thumbH,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <CSSPattern color={project.color} />

              {/* Category tag */}
              <span
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 11,
                  background: "white",
                  border: "0.5px solid var(--color-border-tertiary)",
                  borderRadius: 999,
                  padding: "3px 10px",
                }}
              >
                {project.category}
              </span>

              {/* Featured badge */}
              {project.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    fontSize: 11,
                    background: "#C95A14",
                    color: "white",
                    borderRadius: 999,
                    padding: "5px 12px",
                  }}
                >
                  Featured
                </span>
              )}
            </div>

            {/* Body */}
            <div
              style={{
                padding: project.featured ? 22 : 18,
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: project.featured ? 20 : 15,
                  fontWeight: 500,
                  marginBottom: project.description ? 8 : 0,
                }}
              >
                {project.title}
              </div>
              {project.description && (
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.7,
                    flex: 1,
                    margin: 0,
                  }}
                  className={
                    !project.featured && project.cols.includes("4")
                      ? "hide-on-desktop"
                      : ""
                  }
                >
                  {project.description}
                </p>
              )}
            </div>

            {/* Footer */}
            <div
              style={{
                padding: "0 18px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.stack.map((s) => (
                  <span
                    key={s.label}
                    style={{
                      fontSize: 11,
                      borderRadius: 999,
                      padding: "4px 10px",
                      background: s.hi
                        ? "#FDF0E8"
                        : "var(--color-background-secondary)",
                      color: s.hi ? "#7A3209" : "var(--color-text-secondary)",
                      border: `0.5px solid ${
                        s.hi ? "#F4C99A" : "var(--color-border-tertiary)"
                      }`,
                    }}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "0.5px solid var(--color-border-tertiary)",
                  background: "var(--color-background-secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 12,
                  flexShrink: 0,
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="var(--color-text-secondary)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 11L11 1M11 1H3M11 1V9" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div style={{ textAlign: "center", marginTop: 36 }}>
        <a
          href="/projects"
          style={{
            display: "inline-block",
            padding: "12px 32px",
            fontSize: 14,
            borderRadius: 999,
            border: "0.5px solid var(--color-border-primary)",
            color: "var(--color-text-primary)",
            textDecoration: "none",
            background: "transparent",
          }}
        >
          View all projects
        </a>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .project-tile { grid-column: span 1 !important; }
          .hide-on-desktop { display: block !important; }
          section#projects { padding: 64px 24px !important; }
        }
      `}</style>
    </section>
  );
}
