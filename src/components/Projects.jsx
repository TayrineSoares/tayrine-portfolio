import "../styles/Projects.css";
import { ExternalLink, Github } from "lucide-react";
import Carousel from "./Carousel";

const projects = [

  {
    title: "MyKitchenOps",
    summary1:
      "A SaaS to streamline kitchen operations.",
    summary2:
      "All-in-one platform for inventory, recipes, purchasing, and production tracking",
    details: [
      "Operational dashboards and workflow tools tailored for modern kitchens",
      "Flexible workflows for kitchens with or without POS integrations",
      "Designed to reduce manual processes and improve kitchen efficiency",

   
    ],
    tech: [
      "React",
      "Node.js",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
      "Git",
    ],
    images: ["/images/mykitchenops.gif"],
    live: "https://www.mykitchenops.com/",
  },

  {
    title: "Earth Table Co",
    summary1:
      "A full-stack e-commerce for a chef services and meal prep business.",
    summary2:
      "Designed to simplify the ordering proccess, so the team can spend more time cooking.",
    impact: "30% increase in sales within the first month of launch.",
    details: [
      "Product catalogue with filterable menu items and clear categories",
      "User authentication and order history powered by Supabase Auth",
      "Admin dashboard: products catalogue, availability, orders management",
    ],
    tech: [
      "React",
      "Node.js",
      "Supabase",
      "Stripe",
      "PostgreSQL",
      "Vercel",
      "Git",
    ],
    images: ["/images/earth.gif"],
    live: "https://www.earthtableco.ca/",
    code: "https://github.com/TayrineSoares/earth-table",
  },

  {
    title: "Yoga'Ana",
    summary1: "A modern website for a brazilian yoga instructor.",
    summary2:
      "Designed to reflect Ana's calm energy while making it easy for students to connect.",
    details: [
      "Custom responsive design focused on simplicity, clarity and user experience",
      "Service sections, contact flow, and class information",
    ],
    tech: ["React", "Tailwind CSS", "Vercel", "Git"],
    images: ["/images/yogana-gif2.gif"],
    live: "https://yogana.vercel.app/",
    code: "https://github.com/TayrineSoares/yogana-portfolio",
  },

  {
    title: "KiloBoy Artwork",
    summary1: "(Under Development)",
    summary2:
      "A full-stack e-gallery for a Toronto-based artist.",
      // Created to help his artwork scale and reach people beyond the local scene.
    details: [
      "Custom visual identity with a filterable gallery and detailed artwork pages",
      "Events calendar, custom order requests, and streamlined ordering flow",
      "Admin tools for managing artwork catalogue, shipping, and orders",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Vercel", "Git"],
    images: ["/images/kiloboy-homepage.gif", "/images/kiloboy-custom.gif"],
    live: "https://kiloboyartworkstudio.com/",
    code: "https://github.com/TayrineSoares/kiloboy-artwork",
  },

  {
    title: "Byte to Bite",
    summary1: "Recipe finder: discover and save meals by ingredients you have.",
    summary2: "Real-time bookmarks, nutrition facts, timers, allergy flags.",
    details: [
      "Spoonacular API; search by ingredients",
      "Bookmark favorites with real-time updates",
      "Responsive UI with recipe details and nutrition",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "CSS", "Git"],
    images: [
      "/images/byte-to-bite-desktop.gif",
      "/images/byte-to-bite-tablet-landscape.png",
    ],
    code: "https://github.com/TayrineSoares/byte-to-bite",
  },
  {
    title: "Byte to Bite Mobile",
    summary1:
      "React Native version: browse, save, and share recipes on the go.",
    summary2: "Auth and profile via Clerk; real-time data with Convex.",
    details: [
      "Ingredient-based search; bookmark and sync",
      "Clerk auth and profile; Convex backend",
      "Recipe detail modals and responsive layout",
    ],
    tech: ["React Native", "CSS", "Convex", "Clerk", "Git"],
    images: [
      "/images/byte-to-bite-mobile-favorites.gif",
      "/images/byte-to-bite-mobile-commenting.gif",
      "/images/byte-to-bite-mobile-search.gif",
    ],
    code: "https://github.com/TayrineSoares/byte-to-bite-mobile",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="section-intro-container">
        <p className="section-intro">Take a look at my</p>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="container projects-container">
        <ul className="projects-list">
          {projects.map((p) => (
            <li key={p.title} className="project">
              {p.images?.length > 0 && (
                <div className="project-media-wrap">
                  <Carousel images={p.images} title={p.title} />
                  <div className="project-media-overlay" aria-hidden="true" />
                </div>
              )}

              <div className="project-body">
                <h3 className="project-name">{p.title}</h3>
                <p className="project-summary">
                  {p.summary1 && p.summary2 ? (
                    <>
                      {p.summary1}
                      <br />
                      {p.summary2}
                    </>
                  ) : (
                    p.summary
                  )}
                </p>
                {p.impact && (
                  <p className="project-impact">
                    <span className="highlight">{p.impact}</span>
                  </p>
                )}
                <ul className="project-details">
                  {p.details.map((pdetail, i) => (
                    <li key={i}>{pdetail}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {p.tech.map((tech, i) => (
                    <span key={i} className="project-tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                      aria-label={`Open ${p.title} live site`}
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn"
                      aria-label={`Open ${p.title} source code`}
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
