import "../styles/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="section-about-intro-container">
        <p className="section-about-intro">A bit about me</p>
        <h2 className="section-title">Who I Am</h2>
      </div>

      <div className="about-content">
        <p>
          I'm Tayrine — born in Brazil, based in Toronto. I've always been drawn to <strong>solving problems</strong> and <strong>technology</strong>; the shift from civil engineering into software was a deliberate move toward building products that people actually use.
        </p>
        <p>
          After <strong>Lighthouse Labs' Web Development Program</strong>, I've been shipping full-stack projects and learning from production code at <strong>MyKitchenOps</strong>. I care about clean code, scalability, and UX that holds up under real use.
        </p>
        <p>
          Outside of code: food, travel, and a growing tattoo collection. Currently learning to swim.
        </p>
      </div>
    </section>
  );
};

export default About;
