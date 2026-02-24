import "../styles/Skills.css";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-intro-container">
        <p className="section-intro">Tools and </p>
        <h2 className="section-title">Tech I work with</h2>
      </div>

      <div className="container skills-container">
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skills-badge">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
