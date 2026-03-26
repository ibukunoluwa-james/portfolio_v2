export default function About() {
  const skills = [
    { name: "React / Next.js", pct: 90 },
    { name: "TypeScript", pct: 85 },
    { name: "Tailwind CSS", pct: 95 },
    { name: "HTML / CSS", pct: 95 },
    { name: "Node.js", pct: 80 },
  ];

  const extraSkills = [
    "GraphQL",
    "Redux",
    "Jest",
    "CI/CD",
    "REST APIs",
    "WebSockets",
  ];

  return (
    <section
      id="about"
      style={{
        background: "var(--color-background-primary)",
        padding: "88px 52px",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
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
          ABOUT ME
        </div>
        <h2
          style={{
            fontSize: 42,
            fontWeight: 500,
            letterSpacing: -1.8,
            lineHeight: 1.05,
            margin: "0 0 12px",
          }}
        >
          Crafting digital experiences with purpose
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "var(--color-text-secondary)",
            margin: 0,
          }}
        >
          A passionate developer who loves making beautiful, functional things
        </p>
      </div>

      {/* Two Column Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.05fr)",
          gap: 48,
        }}
        className="about-grid"
      >
        {/* Left Column — Bio */}
        <div>
          <h3 style={{ fontSize: 21, fontWeight: 500, marginTop: 0, marginBottom: 18 }}>
            Hi, I&apos;m Jordan
          </h3>
          {[
            "I'm a full-stack developer with a passion for creating seamless digital experiences. With over 3 years of experience, I specialize in building modern web applications that are both beautiful and performant.",
            "My approach combines clean code, thoughtful design, and a user-first mindset. I believe the best products are built when design and development work hand in hand.",
            "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sharing what I've learned with the developer community.",
          ].map((text, i) => (
            <p
              key={i}
              style={{
                fontSize: 14,
                color: "var(--color-text-secondary)",
                lineHeight: 1.85,
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              {text}
            </p>
          ))}

          {/* Stats Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginTop: 32,
            }}
          >
            {[
              { num: "3+", label: "Years exp." },
              { num: "50+", label: "Projects" },
              { num: "20+", label: "Clients" },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--color-background-secondary)",
                  border: "0.5px solid var(--color-border-tertiary)",
                  borderRadius: 12,
                  padding: "20px 8px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 26, fontWeight: 500, color: "#C95A14" }}>
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--color-text-tertiary)",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Skills Panel */}
        <div
          style={{
            background: "var(--color-background-secondary)",
            border: "0.5px solid var(--color-border-tertiary)",
            borderRadius: 12,
            padding: 28,
          }}
        >
          <h4
            style={{
              fontSize: 15,
              fontWeight: 500,
              marginTop: 0,
              marginBottom: 24,
            }}
          >
            Technical skills
          </h4>

          {/* Skill Bars */}
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              style={{ marginBottom: i < skills.length - 1 ? 18 : 0 }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <span style={{ fontSize: 13, color: "var(--color-text-primary)" }}>
                  {skill.name}
                </span>
                <span style={{ fontSize: 13, color: "var(--color-text-tertiary)" }}>
                  {skill.pct}%
                </span>
              </div>
              <div
                style={{
                  height: 3,
                  background: "var(--color-border-tertiary)",
                  borderRadius: 999,
                }}
              >
                <div
                  style={{
                    height: 3,
                    width: `${skill.pct}%`,
                    background: "#C95A14",
                    borderRadius: 999,
                  }}
                />
              </div>
            </div>
          ))}

          {/* Also Experienced With */}
          <div
            style={{
              borderTop: "0.5px solid var(--color-border-tertiary)",
              paddingTop: 20,
              marginTop: 22,
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: "var(--color-text-tertiary)",
                marginBottom: 10,
              }}
            >
              Also experienced with
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {extraSkills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: 11,
                    borderRadius: 999,
                    padding: "4px 10px",
                    border: "0.5px solid var(--color-border-tertiary)",
                    background: "var(--color-background-primary)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr !important; }
          section#about { padding: 64px 24px !important; }
        }
      `}</style>
    </section>
  );
}
