import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
