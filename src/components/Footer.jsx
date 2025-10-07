import '../styles/Footer.css';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';



const Footer = () => {
  const year = new Date().getFullYear();


  return (
   <div>
    <div className="container footer-container" role="contentinfo">
      {/* small note */}
      <small className="muted">
        © {year} Tayrine Soares
      </small>

      {/* quick links */}
      <ul className="footer-links">
        <li>
          <a 
            href="mailto:tayrinecristina@hotmail.com" 
            aria-label="Email"
            title="Email"
            >
            <Mail size={20} strokeWidth={1.75} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/TayrineSoares"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={20} strokeWidth={1.75} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tayrinesoares"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={1.75} />
          </a>
          
        </li>
        <li>
          <a
            href="/Tayrine_Soares_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Resume"
            title="Resume"
          >
            <FileText size={20} strokeWidth={1.75} />
          </a>
        </li>
        <li><a href="#hero">Back to top ↑</a></li>
      </ul>

    </div>

   </div>
  )
};

export default Footer;
