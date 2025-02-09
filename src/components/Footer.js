import { Container, Row, Col } from "react-bootstrap";
import logofooter from "../assets/img/logofooter.svg";
import navicon1 from '../assets/img/navicon1.svg';
import navicon3 from '../assets/img/navicon3.svg';
import iconFooter from '../assets/img/iconFooter.svg';

function Footer() {
  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="glob" style={{
    bottom: 0,
    width: "100%",
    background: "#1A1A1A",
    color: "white",
    textAlign: "center",
    padding: "20px",
    
    }}>
      <Container>
        <Row>
          <Col xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {/* Ajout de l'événement onClick */}
            <img className="logofooter" src={logofooter} alt="Logo" onClick={scrollToTop} style={{ cursor: "pointer",marginTop:"13px" }} />
            <p onClick={scrollToTop} style={{ cursor: "pointer" }}>BACK TO TOP</p>
          </Col>
          <Col xs={12} className="text-center">
            <div className="social-icon" style={{marginBottom:"9px"}}>
              <a href="https://www.linkedin.com/in/soukaina-azaqui-931924185/">
                <img src={navicon1} alt="icon_linkedin" />
              </a>
              <a href="https://www.instagram.com/az__souka/profilecard/?igsh=MXNiNTZqZjRubHY3">
                <img src={navicon3} alt="icon_instagram" />
              </a> 
              <a href="mailto:soukainaiziki2001@gmail.com"><img src={iconFooter} alt="icon_gmail"/></a>
            </div>
            <p style={{ fontSize: "10px", marginBottom:"9px" }}>@2025 SOUKAINA AZAQUI All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
