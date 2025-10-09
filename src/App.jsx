import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
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
        <Contact />  

      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}


export default App;