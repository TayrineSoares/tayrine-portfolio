import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import './styles/global.css';

const App = () => {

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Hero />

        <section id="projects">
          <h2>Projects</h2>
        </section>

        <section id="about">
          <h2>About</h2>
        </section>

        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}


export default App;