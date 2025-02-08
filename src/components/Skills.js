import { Container, Row, Col } from "react-bootstrap";
import separatorBlack from "../assets/img/separatorBlack.png";
import bootstrap from "../assets/img/bootstrap.svg"; 
import git from "../assets/img/git.svg"; 
import group1 from "../assets/img/Group1.png"; // Nom unique: group1
import group2 from "../assets/img/Group2.svg"; // Nom unique: group1
import groupimg from "../assets/img/Groupimg.svg"; // Nom unique: groupimg
import group4 from "../assets/img/Group4.svg"; // Nom unique: group4
import Group5 from "../assets/img/Group5.png"; // Nom unique: group5
import group6 from "../assets/img/Group6.svg"; // Nom unique: group6
import vector from "../assets/img/Vector.png"; // Nom unique: vector
import vector1 from "../assets/img/Vector1.svg"; // Nom unique: vector1
import vector2 from "../assets/img/Vector2.svg"; // Nom unique: vector2 
import laravel3 from "../assets/img/laravel3.png";

function Skills() {
  const skills = [
    { name: "HTML5", logo: group2 },
    { name: "CSS3", logo: groupimg },
    { name: "SASS", logo: vector1 },
    { name: "JAVASCRIPT", logo: group6 },
    { name: "REACT", logo: group4 },
    { name: "BOOTSTRAP", logo: bootstrap },
    { name: "GIT", logo: git },
    { name: "TYPESCRIPT", logo: group1 },
    { name: "MySQL", logo: vector2 },
    { name: "MONGODB", logo: vector }, 
    { name: "NODEJS", logo:Group5  },
    { name: "LARAVEL", logo: laravel3 },
  ];

  return (
    <section className="skills" id="skills">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={12}>
            <div>
              <h2>S K I L L S</h2>
              <p>Here are some of the technologies and tools I work with:</p>
              <img src={separatorBlack} alt="logoskills" />
              <Row>
                {skills.map((skill, index) => (
                  <Col key={index} size={12} sm={6} md={4} lg={3} className="px-1">
                    <div className="skill-item">
                      <img src={skill.logo} alt={skill.name} />
                      <p>{skill.name}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;