import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import './styles/global.css';

const App = () => {

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Hero />

        <Projects />
        <About />

       
 
 

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