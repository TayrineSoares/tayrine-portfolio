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
              Hi, I'm Tayrine! Born in Brazil and now based in Toronto. I've always been drawn to <span className="highlight">creating</span>,
              <span className="highlight"> movement</span>, and experiences that
              feel intentional.
            </p>

            <p>
              Outside of work, I spend most of my time around
              <span className="highlight"> food</span>,
              <span className="highlight"> travel</span>, and collecting
              <span className="highlight"> tattoos</span> along the way.
            </p>

            <p>
              Lately, I've been learning how to swim — mostly for fun, but also
              because I enjoy challenging myself in new ways.
            </p>
      </div>

      <div className="about-gallery">
        <img src="/images/about-1.jpg" alt="" />
        <img src="/images/about-2.jpg" alt="" />
        <img src="/images/about-3.jpg" alt="" />
        <img src="/images/about-4.jpg" alt="" />
        <img src="/images/about-5.jpg" alt="" />
      </div>
    </section>
  );
};

export default About;
