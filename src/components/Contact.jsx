import { Mail, Phone, Linkedin, Github, FileText } from "lucide-react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-intro-container">
        <p className="section-intro">Want to chat?</p>
        <p className="section-title">Get in Touch</p>
      </div>

      <div className="contact-content">
     

        <div className="contact-info">
          <p>
            <Mail size={14} /> tayrinecristina@hotmail.com
          </p>
          <p>
            <Phone size={14} /> +1 (647) 787-2585
          </p>
          <p>
            <Linkedin size={14} />
            <a
              href="https://www.linkedin.com/in/tayrine-soares"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/tayrine-soares
            </a>
          </p>
          <p>
            <Github size={14} />
            <a
              href="https://github.com/TayrineSoares"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/TayrineSoares
            </a>
          </p>
          <p>
            <FileText size={14} />
            <a
              href="/Tayrine_Soares_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my Resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
