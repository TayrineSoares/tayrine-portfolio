import "../styles/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="section-about-intro-container">
        <p className="section-about-intro">A bit more about</p>
        <h2 className="section-title">Who I Am</h2>
      </div>

      <div className="about-content">
           <p>
              Hi, I'm <span className="highlight">Tayrine</span>! Originally from Brazil and now based in Toronto. 
            </p>
            <p>
              I love seeing the world from different perspectives :)
            </p>

            <p>
              That's probablt why I spend so much of my time around
              <span className="highlight"> food</span>,
              <span className="highlight"> travel</span>, and 
              <span className="highlight"> photograpy</span>! 
            </p>

            <p>
              A fun fact about me: I've been <span className="highlight">learning how to swim</span> (which at my age is both humbling and fun).
            </p>
      </div>

      <div className="about-gallery">
        <img src="/images/instagram3.jpg" alt="Miami" />
        <img src="/images/instagram4.jpg" alt="Doces" />
        <img src="/images/instagram1.jpg" alt="Kew Beach" />
        
        <img src="/images/instagram6.jpg" alt="NYC" />
        <img src="/images/instagram5.jpg" alt="Beaver Tails" />

        
       
      </div>

    </section>
  );
};

export default About;
