import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        {/* PLACEHOLDER FOR LOGO LATER */}
        <a href="#" className="logo">TS</a>

        {/* Navigation */}
        <nav>
          <ul className="nav-list">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
          

      </div>

     </header>
  );
};

export default Header;
