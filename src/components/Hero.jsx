import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <p className="intro">Toronto-based</p>
          <h1 className="hero-name">Full-Stack Developer</h1>
          <p className="hero-subheading">
            Transitioning from Civil Engineering into software — I build real-world applications with a focus on <span className="highlight">UX, scalability, and clean code.</span>
          </p>

          <p className="hero-description">
            Former civil engineer and hospitality professional. I bring a <span className="highlight">structured, product-minded approach</span> to development: shipping features, solving real problems, and improving systems people actually use.
          </p>

          <p className="hero-description">
            Currently a <span className="highlight">Full-Stack Developer Intern</span> at{" "}
            <a href="https://mykitchenops.com" target="_blank" rel="noopener noreferrer">
              MyKitchenOps
            </a>
            , working on a production app with React, Node.js, Supabase, and Tailwind — refactoring, bug fixes, and UX improvements.
          </p>
        </div>

        {/* Right: Image */}
        <div className="hero-image">
          <img src="/Tayrine_Soares_2.jpeg" alt="Tayrine Soares" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

