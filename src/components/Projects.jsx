
import "../styles/Projects.css";

const projects = [
  {
    title: "Earth Table Co",
    summary:
      "A full-stack e-commerce platform for a holistic meal prep business with secure payments and an admin workflow.",
    details: [
      "Responsive and intuitive design, featuring product catalogue with filterable menu items in clear categories",
      "Admin dashboard to create/edit products, manage availability, pricing, and inventory; view and fulfill orders",
      "Smooth cart & checkout flow with Stripe integration",
      "Auth, DB, and storage with Supabase; deployed on Vercel; version control with Git.",
    ],
    tech: ["React", "Node.js", "Supabase", "Stripe", "PostgreSQL", "Vercel", "CSS","Git"],
    images: ["/images/earth.gif","/images/earth-tablet.png"],
    live: "https://www.earthtableco.ca/",
    code: "https://github.com/TayrineSoares/earth-table"
  },
  {
    title: "Byte to Bite - Web Recipe App",
    summary:
      "A fun recipe finder where users can discover, save, and explore meals based on the ingredients they already have at home.",
    details: [
      "Search for recipes by entering available ingredients, powered by the Spoonacular API.",
      "Bookmark favorite recipes with real-time updates.",
      "Intuitive, responsive interface with recipe details, nutrition facts, custom timers, and allergy flags.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "CSS"],
    images: ["/images/byte-to-bite-desktop.gif","/images/byte-to-bite-tablet-landscape.png"],
    code: "https://github.com/TayrineSoares/byte-to-bite"
  },
  {
    title:"Byte to Bite - A React Native Expo Project",
    summary:"The mobile version of our fun recipe finder where users can post, save, and share their favorite recipes.", 
    details:[
      "Browse recipes by entering available ingredients, powered by the Spoonacular API.", 
      "User login and profile system via Clerk", 
      "Bookmark recipes with real-time updates from Convex", 
      "Clean, responsive UI with recipe detail modals", ],
    tech: ["React Native", "Convex + Clerk", "Git", "CSS" ],
    images: ["/images/byte-to-bite-mobile-commenting.gif", "byte-to-bite-mobile-favorites.gif", "byte-to-bite-mobile-search.gif"

    ],
    code: "https://github.com/TayrineSoares/byte-to-bite-mobile",

  },
];
console.log(projects);


const Projects = () => {
  
  return (
    <section id="projects" className="projects">
      <h1>Projects section </h1>
    </section>
  );
};

export default Projects;
