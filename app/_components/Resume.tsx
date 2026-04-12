const workExperience = [
  {
    role: "Software Engineer (Frontend)",
    date: "2025 – present",
    company: "Quantum Leap",
    description:
      "Developing responsive and high-performance user interfaces using React for client-facing applications. Collaborating closely with backend engineers to integrate APIs and deliver seamless user experiences. Improved frontend performance, fixed bugs, and implemented new features in fast-paced, production environments while maintaining clean and scalable code.",
  },
  {
    role: "Full-Stack Developer (Projects)",
    date: "2023 – present",
    company: "Independent",
    description:
      "Architected and built full-stack applications using Django, Vite + React, and REST APIs, focusing on scalability and maintainability. Implemented secure authentication systems and optimized frontend performance for seamless user experiences. Delivered end-to-end solutions from design to deployment while applying modern software engineering best practices.",
  },
  {
    role: "Frontend Developer (React)",
    date: "2022 – present",
    company: "Freelance / Self-Driven",
    description:
      "Engineered responsive and high-performance user interfaces using React and JavaScript, improving usability and accessibility. Translated design concepts into functional interfaces while maintaining clean, reusable code. Continuously enhanced frontend architecture through component-based design and performance optimization techniques.",
  },
];

const education = [
  {
    role: "BSc Computer Science",
    date: "2024 – 2028",
    company: "Covenant University",
    description:
      "Building a strong foundation in data structures, algorithms, and operating systems. Transitioned from Industrial Mathematics, leveraging a solid background in mathematics, physics, and analytical problem-solving to excel in software engineering.",
  },
  {
    role: "Self-Taught Software Development",
    date: "2021 – present",
    company: "freeCodeCamp, Harvard Online & Technical Documentation",
    description:
      "Developed practical software engineering skills through hands-on projects and structured courses. Gained experience in JavaScript, React, and full-stack development by consistently building and deploying real-world applications.",
  },
];

const techSkills = [
  { name: "React", pct: 90 },
  { name: "JavaScript (ES6+)", pct: 88 },
  { name: "TypeScript", pct: 80 },
  { name: "Tailwind CSS", pct: 92 },
  { name: "Rust", pct: 65 },
  { name: "REST APIs", pct: 82 },
  { name: "SQL / Database Design", pct: 78 },
  { name: "Git & Version Control", pct: 85 },
];

const toolsHighlighted = [
  "Git & GitHub",
  "VS Code",
  "Vercel",
];

const toolsNeutral = [
  "Docker",
  "CI/CD (GitHub Actions)",
  "REST APIs",
  "GraphQL",
  "Jest",
  "Linux",
];

const softSkills = [
  "Problem-solving",
  "Adaptability",
  "Communication",
  "Teamwork",
  "Attention to detail",
  "Self-directed",
];

function TimelineItem({
  item,
  isLast,
}: {
  item: (typeof workExperience)[0];
  isLast: boolean;
}) {
  return (
    <div style={{ display: "flex", gap: 16, marginBottom: isLast ? 0 : 24 }}>
      {/* Dot + line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 4,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#C95A14",
            border: "2px solid #FDF0E8",
            flexShrink: 0,
          }}
        />
        {!isLast && (
          <div
            style={{
              width: 1,
              flex: 1,
              background: "var(--color-border-tertiary)",
              marginTop: 4,
            }}
          />
        )}
      </div>

      {/* Card */}
      <div
        style={{
          flex: 1,
          background: "var(--color-background-secondary)",
          border: "0.5px solid var(--color-border-tertiary)",
          borderRadius: 12,
          padding: "16px 18px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 500 }}>{item.role}</span>
          <span
            style={{
              fontSize: 11,
              color: "var(--color-text-tertiary)",
              whiteSpace: "nowrap",
              marginLeft: 12,
            }}
          >
            {item.date}
          </span>
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#C95A14",
            fontWeight: 500,
            marginBottom: 8,
          }}
        >
          {item.company}
        </div>
        <div
          style={{
            fontSize: 12,
            color: "var(--color-text-secondary)",
            lineHeight: 1.7,
          }}
        >
          {item.description}
        </div>
      </div>
    </div>
  );
}

function TimelineHeading({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 20,
      }}
    >
      <span style={{ fontSize: 13, fontWeight: 500, whiteSpace: "nowrap" }}>
        {text}
      </span>
      <div
        style={{
          flex: 1,
          height: 0.5,
          background: "var(--color-border-tertiary)",
        }}
      />
    </div>
  );
}

export default function Resume() {
  return (
    <section
      id="resume"
      style={{
        background: "var(--color-background-primary)",
        padding: "88px 52px",
      }}
    >
      {/* Header Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 48,
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div>
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
            RESUME
          </div>
          <h2
            style={{
              fontSize: 42,
              fontWeight: 500,
              letterSpacing: -1.8,
              margin: "0 0 12px",
            }}
          >
            Experience &amp; background
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "var(--color-text-secondary)",
              margin: 0,
            }}
          >
            My journey — where I&apos;ve worked, studied, and what I bring
          </p>
        </div>

        <a
          href="/assets/jordan-davies-cv.pdf"
          download
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#C95A14",
            color: "white",
            borderRadius: 999,
            padding: "11px 22px",
            fontSize: 13,
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </div>

      {/* Two Column Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
          gap: 32,
        }}
        className="resume-grid"
      >
        {/* Left Column — Timeline */}
        <div>
          <TimelineHeading text="Work experience" />
          {workExperience.map((item, i) => (
            <TimelineItem
              key={item.role}
              item={item}
              isLast={i === workExperience.length - 1}
            />
          ))}

          <div style={{ marginTop: 36 }}>
            <TimelineHeading text="Education" />
            {education.map((item, i) => (
              <TimelineItem
                key={item.role}
                item={item}
                isLast={i === education.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Right Column — Skills Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Card 1 — Technical Proficiency */}
          <div
            style={{
              background: "var(--color-background-secondary)",
              border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: 12,
              padding: 22,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 16 }}>
              Technical proficiency
            </div>
            {techSkills.map((skill, i) => (
              <div
                key={skill.name}
                style={{ marginBottom: i < techSkills.length - 1 ? 14 : 0 }}
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
          </div>

          {/* Card 2 — Tools & Workflow */}
          <div
            style={{
              background: "var(--color-background-secondary)",
              border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: 12,
              padding: 22,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 16 }}>
              Tools &amp; workflow
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {toolsHighlighted.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 11,
                    borderRadius: 999,
                    padding: "4px 10px",
                    background: "#FDF0E8",
                    color: "#7A3209",
                    border: "0.5px solid #F4C99A",
                  }}
                >
                  {t}
                </span>
              ))}
              {toolsNeutral.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 11,
                    borderRadius: 999,
                    padding: "4px 10px",
                    background: "var(--color-background-primary)",
                    color: "var(--color-text-secondary)",
                    border: "0.5px solid var(--color-border-tertiary)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 — Soft Skills */}
          <div
            style={{
              background: "var(--color-background-secondary)",
              border: "0.5px solid var(--color-border-tertiary)",
              borderRadius: 12,
              padding: 22,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 16 }}>
              Soft skills
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              {softSkills.map((s) => (
                <div
                  key={s}
                  style={{
                    background: "var(--color-background-primary)",
                    border: "0.5px solid var(--color-border-tertiary)",
                    borderRadius: 8,
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#C95A14",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .resume-grid { grid-template-columns: 1fr !important; }
          section#resume { padding: 64px 24px !important; }
        }
      `}</style>
    </section>
  );
}
