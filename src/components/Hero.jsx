import '../styles/Hero.css';
import { MapPin, Compass, Braces, Building2, Network } from 'lucide-react';

const heroTags = [
  { label: 'Toronto based', icon: MapPin },
  { label: 'Product-Minded', icon: Compass },
  { label: 'Engineering Foundation', icon: Building2 },
  { label: 'Systems Thinker', icon: Network },
];

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <p className="intro">Hi, I'm Tayrine</p>
          <h1 className="hero-name">Full-Stack Developer</h1>
          <p className="hero-subheading">
            I build real-world applications with a focus on <span className="highlight">usability, scalability, and clean architecture.</span>
          </p>

          <p className="hero-description">
            Former civil engineer and hospitality professional, I bring a <span className="highlight">structured, calm, and product-minded approach</span> to development: shipping features, solving real problems, and improving systems people actually enjoy using.
          </p>

          <p className="hero-description">
            I am currently a <span className="highlight">Full-Stack Developer Intern</span> at{" "}
            <a href="https://mykitchenops.com" target="_blank" rel="noopener noreferrer">
              MyKitchenOps
            </a>
            , working on a production SaaS built with React, Node.js, Supabase, and Tailwind. Refactoring, debugging, documenting, and improving UX are part of my daily work.
          </p>

          <div className="hero-tags">
            {heroTags.map(({ label, icon: Icon }) => (
              <span key={label} className="hero-tag">
                <Icon size={16} aria-hidden />
                <span>{label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-image">
          <img src="/Tayrine_Soares_3.jpg" alt="Tayrine Soares" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

