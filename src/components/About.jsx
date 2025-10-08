import "../styles/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="section-about-intro-container">
        <p className="section-about-intro">Get to know more about</p>
        <p className="section-title">Who I Am</p>
      </div>

      <div className="about-content">
        <p>
          Hey 👋 I'm Tayrine! <br/>
          <br/>

          I was born and raised in Brazil, but Canada is the place I now call Home. 
          <br/><br/>
          I've always loved <strong>solving problems</strong> and had a natural <strong>curiosity for technology</strong>.
          <br/>
          But it wasn't until recently that I truly had the chance to dive in and develop my skills as a Web Developer.
        </p>

        <p>
          During and after completing Lighthouse Labs' Web Development Program, I started building projects that <strong>bring ideas to life</strong> and explore my creativity.
        </p>

        <p>
          <strong>Outside of coding</strong>, I'm a huge foodie!
          <br/>
          I love cooking (and let's be honest, eating), exploring new places, and collecting a few tattoos along the way. 
          <br/>
          Fun fact about me: I'm learning how to swim at the age of 33 🧜🏻‍♀️!
        </p>
      </div>
    </section>
  );
};

export default About;
