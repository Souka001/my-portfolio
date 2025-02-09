import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <HashRouter>
      {/* NavBar دايماً ظاهر فوق */}
      <NavBar />
      {/* Routes ديال صفحات الموقع */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* Skills Page */}
        <Route path="/Skills" element={<Skills />} />

        {/* Projects Page */}
        <Route path="/Projects" element={<Projects />} />

        {/* Contact Page */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* Footer دايماً ظاهر تحت */}
      <Footer />
    </HashRouter>
  );
}

export default App;
