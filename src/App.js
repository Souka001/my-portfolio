import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
    <NavBar />
    <Banner />
    <section id="home">
      
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer />
  </Router>
  );
}

export default App;
