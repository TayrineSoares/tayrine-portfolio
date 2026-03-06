import "../styles/Experience.css";
import { FileText } from "lucide-react";

const experience = [
  {
    period: "2025 - Present",
    role: "Full-Stack Developer",
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
    period: "2025 - Present",
    role: "Freelance Developer",
    company: "Self-Employed",
    highlights: [
      "Built and launched custom web applications for small businesses",
      "Developed full-stack systems and scalable database models using Next.js, React, Node.js, and PostgreSQL",
      "Integrated third-party services such as Stripe for payments and shipping APIs for logistics",
      "Deployed and maintained applications using Vercel, GitHub, and modern development workflows"
    ],
  },
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
          {experience.map((item, i) => (
            <article key={i} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <p className="timeline-period">{item.period}</p>
                <h3 className="timeline-role">{item.role}</h3>
                {item.company && (
                  <p className="timeline-company">
                    {item.companyUrl ? (
                      <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </p>
                )}
                <ul className="timeline-highlights">
                  {item.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
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
