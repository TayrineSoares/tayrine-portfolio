
import "../styles/Projects.css";
import { ExternalLink, Github } from "lucide-react";
import Carousel from "./Carousel";

const projects = [
  {
    title: "Earth Table Co - E-commerce Platform",
    summary:
      "A full-stack e-commerce platform for a holistic meal prep business with secure payments and an admin workflow.",
    details: [
      "Responsive and intuitive design, featuring product catalogue with filterable menu items in clear categories",
      "Admin dashboard to create/edit products, manage availability, pricing, and inventory; view and fulfill orders",
      "Smooth cart & checkout flow with Stripe integration",
      "Auth, DB, and storage with Supabase; Deployed on Vercel; Version control with Git.",
    ],
    tech: ["React", "Node.js", "Supabase", "Stripe", "PostgreSQL", "Vercel", "CSS","Git"],
    images: ["/images/earth.gif","/images/earth-tablet.png"],
    live: "https://www.earthtableco.ca/",
    code: "https://github.com/TayrineSoares/earth-table"
  },
  {
    title: "Byte to Bite - Recipe Finder Web App",
    summary:
      "A fun recipe finder where users can discover, save, and explore meals based on the ingredients they already have at home.",
    details: [
      "Search for recipes by entering available ingredients, powered by the Spoonacular API.",
      "Bookmark favorite recipes with real-time updates.",
      "Intuitive, responsive interface with recipe details, nutrition facts, custom timers, and allergy flags.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "CSS", "Git"],
    images: ["/images/byte-to-bite-desktop.gif","/images/byte-to-bite-tablet-landscape.png"],
    code: "https://github.com/TayrineSoares/byte-to-bite"
  },
  {
    title:"Mobile Byte to Bite - A React Native Expo Project",
    summary:"The mobile version of our fun recipe finder where users can post, save, and share their favorite recipes.", 
    details:[
      "Browse recipes by entering available ingredients, powered by the Spoonacular API.", 
      "User login and profile system via Clerk", 
      "Bookmark recipes with real-time updates from Convex", 
      "Clean, responsive UI with recipe detail modals", ],
    tech: ["React Native", "Convex + Clerk", "Git", "CSS" ],
    images: ["/images/byte-to-bite-mobile-favorites.gif", "/images/byte-to-bite-mobile-commenting.gif", "/images/byte-to-bite-mobile-search.gif"

    ],
    code: "https://github.com/TayrineSoares/byte-to-bite-mobile",

  },
];
console.log(projects);


const Projects = () => {
  
  return (
    <section id="projects">
      
      <div className="section-intro-container">
        <p className="section-intro">Take a look at my recent </p>
        <p className="section-title">Projects</p>

      </div>
      
      <div className="container projects-container">
        
        
        <ul className="projects-list">
          {projects.map((p) => (
            <li key={p.title} className="project">
              <h3 className="project-name">{p.title}</h3>
              <p className="project-summary">{p.summary}</p>
              <ul className="project-details">
                {p.details.map((pdetail, i) => (
                  <li key={i}>{pdetail}</li>
                ))}
                          
              </ul>
              <div className="project-tech">
                {p.tech.map((tech, i) => 
                <span key={i} className="project-tech-badge">
                  {tech}
                </span>)}
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
              {p.images?.length > 0 && (
                <Carousel images={p.images} title={p.title} />
              )}
              
            </li>
            
            

          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
