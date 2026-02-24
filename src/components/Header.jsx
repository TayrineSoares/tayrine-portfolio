import '../styles/Header.css';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggle = () => {
    if (open) {
      buttonRef.current?.blur();
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
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
        <a href="#hero" className="header-name" onClick={closeMenu}>
          Tayrine Soares
        </a>

        <div className="header-right">
          <button
            ref={buttonRef}
            type="button"
            className={`menu-toggle ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={toggle}
          >
            <span className="menu-toggle-icon" aria-hidden>
              {open ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </span>
          </button>

          <nav>
            <ul
              ref={menuRef}
              id="site-nav"
              className={`nav-list ${open ? 'nav-open' : ''}`}
            >
              <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
