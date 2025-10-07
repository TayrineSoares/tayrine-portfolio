const App = () => {
  
  return (
    <>
      <header>
        <h1>Tayrine Portfolio</h1>
      </header>

      <main>
        <section id="hero">
          <h2>Hero</h2>
        </section>

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
        <small>© {new Date().getFullYear()} Tayrine Soares</small>
      </footer>
    </>
  );
}


export default App;