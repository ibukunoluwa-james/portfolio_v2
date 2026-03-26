export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--color-background-tertiary)",
        padding: "88px 52px",
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: 60 }}>
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
          CONTACT
        </div>
        <h2
          style={{
            fontSize: 42,
            fontWeight: 500,
            letterSpacing: -1.8,
            margin: "0 0 12px",
          }}
        >
          Let&apos;s work together
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "var(--color-text-secondary)",
            margin: 0,
          }}
        >
          Have a project in mind or just want to say hello? I&apos;d love to hear
          from you.
        </p>
      </div>

      {/* Inner Container */}
      <div
        style={{ maxWidth: 920, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.5fr)",
            gap: 28,
          }}
          className="contact-grid"
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Availability Banner */}
            <div
              style={{
                background: "#C95A14",
                borderRadius: 12,
                padding: "22px 20px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "white",
                  }}
                />
              </div>
              <div>
                <div
                  style={{ fontSize: 14, fontWeight: 500, color: "white" }}
                >
                  Available for work
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.72)",
                    marginTop: 2,
                  }}
                >
                  Open to freelance &amp; full-time roles
                </div>
              </div>
            </div>

            {/* Info Rows */}
            {[
              {
                icon: (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C95A14"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                ),
                label: "EMAIL",
                value: "hello@jordandavies.dev",
              },
              {
                icon: (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C95A14"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                label: "LOCATION",
                value: "Remote — worldwide",
              },
              {
                icon: (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C95A14"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                label: "RESPONSE TIME",
                value: "Within 24 hours",
              },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  background: "var(--color-background-primary)",
                  border: "0.5px solid var(--color-border-tertiary)",
                  borderRadius: 12,
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 8,
                    background: "#FDF0E8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {row.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "var(--color-text-tertiary)",
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                      marginBottom: 3,
                    }}
                  >
                    {row.label}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {row.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column — Contact Form */}
          <div
            style={{
              background: "var(--color-background-primary)",
              border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: 12,
              padding: "32px 28px",
            }}
          >
            <form>
              {/* Row 1 — Name + Email */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
                }}
                className="contact-form-row"
              >
                <div>
                  <label
                    style={{
                      fontSize: 12,
                      color: "var(--color-text-secondary)",
                      display: "block",
                      marginBottom: 7,
                    }}
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Jordan Smith"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "0.5px solid var(--color-border-tertiary)",
                      borderRadius: 8,
                      fontSize: 14,
                      color: "var(--color-text-primary)",
                      background: "var(--color-background-secondary)",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: 12,
                      color: "var(--color-text-secondary)",
                      display: "block",
                      marginBottom: 7,
                    }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "0.5px solid var(--color-border-tertiary)",
                      borderRadius: 8,
                      fontSize: 14,
                      color: "var(--color-text-primary)",
                      background: "var(--color-background-secondary)",
                      outline: "none",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
              </div>

              {/* Row 2 — Subject */}
              <div style={{ marginBottom: 16 }}>
                <label
                  style={{
                    fontSize: 12,
                    color: "var(--color-text-secondary)",
                    display: "block",
                    marginBottom: 7,
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project inquiry"
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "0.5px solid var(--color-border-tertiary)",
                    borderRadius: 8,
                    fontSize: 14,
                    color: "var(--color-text-primary)",
                    background: "var(--color-background-secondary)",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Row 3 — Message */}
              <div style={{ marginBottom: 16 }}>
                <label
                  style={{
                    fontSize: 12,
                    color: "var(--color-text-secondary)",
                    display: "block",
                    marginBottom: 7,
                  }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    border: "0.5px solid var(--color-border-tertiary)",
                    borderRadius: 8,
                    fontSize: 14,
                    color: "var(--color-text-primary)",
                    background: "var(--color-background-secondary)",
                    outline: "none",
                    fontFamily: "inherit",
                    height: 108,
                    resize: "none",
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: 13,
                  background: "#C95A14",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  marginTop: 4,
                }}
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-form-row { grid-template-columns: 1fr !important; }
          section#contact { padding: 64px 24px !important; }
        }
      `}</style>
    </section>
  );
}
