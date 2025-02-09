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
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Banner />
              <Skills /> 
              <Projects/>
              <Contact />
              <Footer/>
            </>
          }
        />

        {/* Skills Page */}
        <Route path="/Skills" element={
          <>
          <NavBar /> <Skills /> <Footer/>
          </> } />
         {/* Projects Page */}
         <Route path="/Projects" element={<>
          <NavBar /> <Projects /> <Footer/>
          </> } />
         <Route path="/Contact" element={<>
          <NavBar /> <Contact /> <Footer/>
          </> } />

      </Routes>
    </Router>
  );
}

export default App;
