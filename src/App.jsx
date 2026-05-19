import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';


const App = () => {
  return (
    <>
    
      <header>
        <Header />
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        {/* <Experience /> */}
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