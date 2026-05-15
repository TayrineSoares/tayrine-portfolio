import '../styles/Hero.css';
import { MapPin, Compass, Building2, Network } from 'lucide-react';

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
          <h1 className="hero-name">Software Engineer</h1>
          <p className="hero-subheading">
            I enjoy building applications that <span className="highlight">work well</span> and <span className="highlight">feel good</span> to use. 
          </p>

          <p className="hero-description">
            Before tech, I worked in civil engineering and hospitality, which shaped how I work today: 
            <span className="highlight">structured, calm, and focused on solving real problems. </span> <br/> <br/>
            Now, I apply that to building software with a focus <span className="highlight">usability, scalability</span>, and <span className="highlight">clean architecture</span>.       
          </p>

          <img 
            src="/images/intersection-arrow-Picsart-BackgroundRemover.png" 
            alt="Intersection"
            className="hero-arrow"
          />

          <p className="hero-description">
            
          </p>

          {/* <p className="hero-description">
            Currently working at{" "}
            <a href="https://mykitchenops.com" target="_blank" rel="noopener noreferrer">
              MyKitchenOps 
            </a>
            , I collaborate  across <span className="highlight">engineering and product</span> on a SaaS for kitchen operations: improving workflows, documenting system architecture, and <span className="highlight">translating real-world processes into scalable software features.</span>
          </p> */}

      
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

