import '../styles/Header.css';
import { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  // functional form, where v is always the most recent value of the state
  const toggle = () => setOpen(v => !v);
  const closeMenu = () => setOpen(false);


  return (
    <header>
      <div className="container header-container">
        
        <a href="#hero" className="logo" onClick={closeMenu}>
          Tayrine Soares
        </a>

        {/* Mobile togglebutton */}
        <button 
          className='menu-toggle'
          aria-label='Toggle navigation'
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={toggle}
        >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>

        </button>
          

        {/* Navigation */}
        <nav>
          <ul className={`nav-list ${open ? 'nav-open' : ''}`}>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
          

      </div>

     </header>
  );
};

export default Header;
