
import "../styles/Projects.css";

const projects = [
  {
    title: "Earth Table Co",
    summary:
      "A full-stack e-commerce platform for a holistic meal prep business with secure payments and an admin workflow.",
    details: [
      "Built product catalogue, cart, checkout, and order management.",
      "Implemented Stripe payments and webhooks for order status.",
      "Auth, DB, and storage with Supabase; deployed on Vercel.",
    ],
    tech: ["React", "Node.js", "Supabase", "Stripe", "PostgreSQL", "Vercel"],
    images: ["/projects/earth.gif","/projects/earth-tablet.png"],
    live: "https://www.earthtableco.ca/",
    code: "https://github.com/TayrineSoares/earth-table"
  },
  {
    title: "ByteToBite",
    summary:
      "A recipe finder that suggests dishes based on ingredients you already have, optimized for mobile.",
    details: [
      "Ingredient parser with fuzzy matching.",
      "Responsive UI and offline caching for recent results.",
      "Clear nutrition and allergy flags.",
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
    images: ["/projects/byte-to-bite-desktop.gif","/projects/byte-to-bite-tablet-landscape.png"],
    code: "https://github.com/TayrineSoares/byte-to-bite"
  },
];
console.log(projects);


const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects section </h1>
    </section>
  );
};

export default Projects;
