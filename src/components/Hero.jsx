import '../styles/Hero.css';
import { useState } from "react";
import { ArrowRight } from 'lucide-react';


const Hero = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="hero">
      <div className="container hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <p className="intro">Hi, I'm</p>
          <h1 className="hero-name">Tayrine!</h1>
          <h2 className="hero-title">Full-Stack Developer</h2>
          <p className="hero-description">
            I love building clean, responsive web applications that bring ideas to life.
          </p>
          <p className="hero-description" >
            Before moving into tech, I worked in <strong>Civil Engineering</strong> and <strong>Hospitality</strong> — solving problems, juggling projects, staying organized, and keeping cool under pressure. <br/> Everything helped me build a <strong>structured way of thinking</strong> that I now bring into development.
          </p>

          {/* Flip Card */}
          <div 
            className={`skill-card ${flipped ? "flipped" : ""}`} 
            onClick={() => setFlipped(!flipped)}
          >
            <div className="card-inner">
              {/* Front */}
              <div className="card-front">
                <p>Checkout my skills <ArrowRight size={18} strokeWidth={2} /> </p>
              </div>

              {/* Back */}
              <div className="card-back">
                <div className="badges">
                  <span className="badge">JavaScript</span>
                  <span className="badge">React</span>
                  <span className="badge">Node.js</span>
                  <span className="badge">PostgreSQL</span>
                  <span className="badge">HTML5</span>
                  <span className="badge">CSS3</span>
                  <span className="badge">Git</span>
                  <span className="badge">Supabase</span>
                  <span className="badge">Stripe</span>
                  <span className="badge">Resend</span>
                  <span className="badge">Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-image">
          <img src="/Tayrine_Soares.jpeg" alt="Tayrine Soares" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

