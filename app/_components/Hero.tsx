export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background: "var(--color-background-primary)",
        padding: "72px 52px 80px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left Column */}
        <div>
          {/* Status Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              borderRadius: 999,
              background: "var(--color-background-secondary)",
              border: "0.5px solid var(--color-border-tertiary)",
              padding: "6px 14px",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#4CAF50",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
              Available for new projects
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: 64,
              fontWeight: 500,
              letterSpacing: -3,
              lineHeight: 1.0,
              marginBottom: 8,
              marginTop: 0,
            }}
            className="hero-name"
          >
            <span style={{ color: "var(--color-text-primary)" }}>James</span>
            <br />
            <span style={{ color: "#C95A14" }}>Ibukunoluwa</span>
          </h1>

          {/* Role */}
          <p
            style={{
              fontSize: 19,
              color: "var(--color-text-secondary)",
              letterSpacing: -0.3,
              marginBottom: 22,
              marginTop: 0,
            }}
          >
            Full-Stack Developer &amp; Designer
          </p>

          {/* Bio */}
          <p
            style={{
              fontSize: 15,
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: 460,
              marginBottom: 40,
              marginTop: 0,
            }}
          >
            I craft elegant digital experiences that blend beautiful design with
            powerful functionality — specializing in modern web applications that
            users love.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 52,
            }}
            className="hero-buttons"
          >
            <a
              href="#projects"
              style={{
                background: "#C95A14",
                color: "white",
                borderRadius: 999,
                padding: "13px 30px",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                border: "none",
              }}
            >
              View my work
            </a>
            <a
              href="#contact"
              style={{
                background: "transparent",
                color: "var(--color-text-primary)",
                borderRadius: 999,
                padding: "13px 30px",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                border: "0.5px solid var(--color-border-primary)",
              }}
            >
              Get in touch
            </a>
          </div>

          {/* Stats Row */}
          <div
            style={{
              display: "flex",
              gap: 48,
              alignItems: "flex-start",
            }}
          >
            {[
              { num: "3+", label: "Years experience" },
              { num: "50+", label: "Projects shipped" },
              { num: "20+", label: "Happy clients" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 48,
                }}
              >
                {i > 0 && (
                  <div
                    style={{
                      width: 0.5,
                      height: 40,
                      background: "var(--color-border-tertiary)",
                      flexShrink: 0,
                      marginRight: 0,
                    }}
                  />
                )}
                <div>
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 500,
                      letterSpacing: -0.5,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--color-text-tertiary)",
                      marginTop: 3,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — Profile Card */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              background: "var(--color-background-secondary)",
              border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: 24,
              padding: "32px 28px",
              width: 300,
              position: "relative",
              textAlign: "center",
            }}
            className="hero-card"
          >
            {/* Top-right badge */}
            <div
              style={{
                position: "absolute",
                top: -18,
                right: -28,
                background: "var(--color-background-primary)",
                border: "0.5px solid var(--color-border-tertiary)",
                borderRadius: 12,
                padding: "9px 15px",
                fontSize: 12,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#C95A14",
                  display: "inline-block",
                }}
              />
              Open to work
            </div>

            {/* Bottom-left badge */}
            <div
              style={{
                position: "absolute",
                bottom: -18,
                left: -28,
                background: "var(--color-background-primary)",
                border: "0.5px solid var(--color-border-tertiary)",
                borderRadius: 12,
                padding: "9px 15px",
                fontSize: 12,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#C95A14"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Top-rated freelancer
            </div>

            {/* Avatar */}
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "#C95A14",
                color: "white",
                fontSize: 24,
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              JD
            </div>

            {/* Name */}
            <div style={{ fontSize: 17, fontWeight: 500, marginBottom: 4 }}>
              Jordan Davies
            </div>

            {/* Role */}
            <div
              style={{
                fontSize: 13,
                color: "var(--color-text-secondary)",
                marginBottom: 22,
              }}
            >
              Full-Stack Developer &amp; Designer
            </div>

            {/* Divider */}
            <div
              style={{
                height: 0.5,
                background: "var(--color-border-tertiary)",
                marginBottom: 18,
              }}
            />

            {/* Skills pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 7,
                justifyContent: "center",
              }}
            >
              {[
                { label: "React", highlighted: true },
                { label: "Node.js", highlighted: true },
                { label: "Next.js", highlighted: true },
                { label: "TypeScript", highlighted: false },
                { label: "UI/UX", highlighted: false },
                { label: "Figma", highlighted: false },
              ].map((skill) => (
                <span
                  key={skill.label}
                  style={{
                    fontSize: 11,
                    borderRadius: 999,
                    padding: "4px 10px",
                    background: skill.highlighted
                      ? "#FDF0E8"
                      : "var(--color-background-primary)",
                    color: skill.highlighted
                      ? "#7A3209"
                      : "var(--color-text-secondary)",
                    border: `0.5px solid ${
                      skill.highlighted
                        ? "#F4C99A"
                        : "var(--color-border-tertiary)"
                    }`,
                  }}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-name { font-size: 40px !important; }
          .hero-card { width: 100% !important; }
          .hero-buttons a { flex: 1; text-align: center; }
        }
        @media (max-width: 767px) {
          section#home { padding: 48px 24px 60px !important; }
        }
      `}</style>
    </section>
  );
}
