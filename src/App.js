import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Skills /> 
              <Projects/>
              <Contact />
            </>
          }
        />

        {/* Skills Page */}
        <Route path="/Skills" element={<Skills />} />
         {/* Projects Page */}
         <Route path="/Projects" element={<Projects />} />
         <Route path="/Contact" element={<Contact />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
