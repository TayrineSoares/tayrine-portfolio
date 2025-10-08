import '../styles/Header.css';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // functional form, where v is always the most recent value of the state
  const toggle = () => setOpen(v => !v);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // if menu is open AND click is outside both menu & button
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);


  return (
    <header>
      <div className="container header-container">

        {/* Mobile togglebutton */}
        <button 
          ref={buttonRef}
          className={`menu-toggle ${open ? 'open' : ''}`}
       
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
          <ul 
            ref={menuRef}
            id="site-nav"
            className={`nav-list ${open ? 'nav-open' : ''}`}
          >
            <li><a href="#hero" onClick={closeMenu}>Home</a></li>
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
