import { Mail, Linkedin, Github, FileText } from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-intro-container">
        <p className="section-intro">Let's connect</p>
        <h2 className="section-title">Get in Touch</h2>
      </div>

      <div className="contact-content">
        <div className="contact-icons">
          <a
            href="https://github.com/TayrineSoares"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link"
            aria-label="GitHub"
          >
            <Github size={28} strokeWidth={1.75} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tayrine-soares"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} strokeWidth={1.75} />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="contact-info">
          <p>
            <Mail size={18} aria-hidden />
            <a href="mailto:tayrinecristina@hotmail.com">tayrinecristina@hotmail.com</a>
          </p>
          <p>
            <FileText size={18} aria-hidden />
            <a href="/Tayrine_Soares_Resume.pdf" target="_blank" rel="noopener noreferrer">
              View my Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
