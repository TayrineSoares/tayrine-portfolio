import "../styles/Experience.css";
import { FileText } from "lucide-react";

const experience = [
  {
    roles: [
      {
        period: "2026 - Present",
        role: "Software Engineer",
        company: "MyKitchenOps",
        companyUrl: "https://mykitchenops.com",
        highlights: [
          "Ship features and fixes on a production SaaS built with React, Node.js, Supabase, and Tailwind",
          "Improve operational workflows by translating real kitchen processes into scalable software features",
          "Document system architecture and implementation plans to support product and engineering decisions",
          "Refactor production code, resolve bugs, and improve reliability, maintainability, and UX"
        ],
      },
      {
        period: "2025 - 2026",
        role: "Full-Stack Developer Intern",
        company: "MyKitchenOps",
        companyUrl: "https://mykitchenops.com",
        highlights: [
          "Implemented user-facing features in a production SaaS application, collaborating closely with senior engineers",
          "Refactored legacy components and resolved full-stack issues to improve performance, reliability, and maintainability",
          "Participated in code reviews, sprint planning, and ticket-based development within an agile engineering workflow"
        ],
      },
    ],
  },
  {
    roles: [
      {
        period: "2025 - Present",
        role: "Full-Stack Web Developer",
        company: "Freelance / Self-Employed",
        highlights: [
          "Built and launched custom web applications for small businesses",
          "Developed full-stack systems and scalable database models using Next.js, React, Node.js, and PostgreSQL",
          "Integrated third-party services such as Stripe for payments and shipping APIs for logistics",
          "Deployed and maintained applications using Vercel, GitHub, and modern development workflows"
        ],
      },
    ],
  },
  {
    roles: [
      {
        period: "2024 - 2025",
        role: "Web Development Program",
        company: "Lighthouse Labs",
        highlights: [
          "Completed an intensive full-stack program covering React, Node.js, PostgreSQL, APIs, authentication, and deployment",
          "Developed full-stack projects applying modern web technologies",
          "Worked in pair-programming environments and agile-style development workflows"
        ],
      },
    ],
  },
  {
    roles: [
      {
        period: "Before tech",
        role: "Civil Engineering & Hospitality",
        company: null,
        highlights: [
          "Structured problem-solving, process optimization, and attention to detail",
          "Collaboration and client-facing work",
          "Pivot into software with a product-minded, impact-focused approach",
        ],
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-intro-container">
        <p className="section-intro">Where I've Built</p>
        <h2 className="section-title">In Production</h2>
      </div>

      <div className="container experience-container">
        <div className="timeline">
          {experience.map((group, i) => (
            <article key={i} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />

              <div className="timeline-content">
                {group.roles.map((role, j) => (
                  <div key={j} className="timeline-role-block">

                    <div className="timeline-header">
                      {role.company && (
                        <p className="timeline-company">
                          {role.companyUrl ? (
                            <a
                              href={role.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {role.company}
                            </a>
                          ) : (
                            role.company
                          )}
                        </p>
                      )}

                      <p className="timeline-period">{role.period}</p>
                    </div>

                    <h3 className="timeline-role">{role.role}</h3>

                    <ul className="timeline-highlights">
                      {role.highlights.map((h, k) => (
                        <li key={k}>{h}</li>
                      ))}
                    </ul>

                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="experience-resume-wrap">
          <FileText size={18} aria-hidden />
          <a
            href="/Tayrine_Soares_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-resume-link"
          >
            View my Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;