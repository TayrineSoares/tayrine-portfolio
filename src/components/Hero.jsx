import '../styles/Hero.css';


const Hero = () => {
  return (
    <section id="hero">

      <div className="container hero-container">

        {/* TOP CONTAINER - TEXT + PROFILE PIC SIDE BY SIDE */}
        <div className="hero-text">
          <div className="hero-text-left">
             <p className="intro">Hi, I'm Tayrine</p>
            <h1 className="hero-name">Software Engineer</h1>
            <p className="hero-subheading">
              I enjoy building applications that <span className="highlight">work well</span> and <span className="highlight">feel good</span> to use. 
            </p> 
        
              <p className="hero-description" >While I work across the full stack, my soft spot is the  <span className="highlight">frontend</span> : where code meets design and details shape how something feels.</p>

          </div>
         

            {/* PROFILE PICTURE */}
            <div className="hero-image">
              <img src="/Tayrine_Soares_3.jpg" alt="Tayrine Soares" />
            </div>

            <hr className="hero-divider" />

          </div>


          {/* BOTTOM - VENN DIAGRAM + TEXT SIDE BY SIDE  */}
       

          <div className="hero-venn-row">
         
               <img 
                src="/images/intersection-arrow-Picsart-BackgroundRemover.png" 
                alt="Intersection"
                className="hero-venn"
              />
           
            <div className="hero-venn-text">
              <p className="hero-description">
                Before tech, I worked in civil engineering and hospitality, which shaped how I work today: <span className="highlight">structured, calm, and focused on solving real problems. </span> 
              </p>

              <p className="hero-description">
                Now, I apply that to building software with a focus on <span className="highlight">usability, scalability</span>, and <span className="highlight">clean architecture</span>.  
              </p>
            </div>

          </div>

      </div>
    </section>
  );
};

export default Hero;


           