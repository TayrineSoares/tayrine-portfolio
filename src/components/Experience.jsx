import "../styles/Experience.css";

const experience = [
  {
    period: "2024 – Present",
    role: "Full-Stack Developer Intern",
    company: "MyKitchenOps",
    companyUrl: "https://mykitchenops.com",
    highlights: [
      "Ship features and fixes on a production app with React, Node.js, Supabase, Tailwind",
      "Refactor code for maintainability; fix bugs and improve UX with senior engineers",
      "Own tasks from ticket to deployment",
    ],
  },
  {
    period: "2024",
    role: "Web Development Program",
    company: "Lighthouse Labs",
    highlights: [
      "Full-stack curriculum: React, Node, PostgreSQL, APIs, auth, deployment",
      "Built and shipped multiple projects end-to-end",
      "Pair programming and agile workflows",
    ],
  },
  {
    period: "Before tech",
    role: "Civil Engineering & Hospitality",
    company: null,
    highlights: [
      "Structured problem-solving and attention to detail",
      "Collaboration and client-facing work",
      "Pivot into software with a product-minded, impact-focused approach",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-intro-container">
        <p className="section-intro">My previous</p>
        <h2 className="section-title">Experience</h2>
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
      </div>
    </section>
  );
};

export default Experience;
