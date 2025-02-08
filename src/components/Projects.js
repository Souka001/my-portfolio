import { Container, Row, Col } from "react-bootstrap";
import separatorBlack from "../assets/img/separatorBlack.png";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project7 from "../assets/img/project7.png";

function Projects() {
  const projects = [
    {
      name: "E-Commerce Platform",
      image: project1,
      description: "Online store rental platform.",
      technologies: "Node.js, Vue.js, MySQL",
    },
    {
      name: "To-Do List",
      image: project2,
      description: "Task management app with Firebase integration.",
      technologies: "React.js, Firebase",
    },
    {
      name: "Clothing Store",
      image: project7,
      description: "Online clothing store based on a Fake Store API.",
      technologies: "React.js, Bootstrap, REST API",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={12}>
            <div>
              <h2>P R O J E C T S</h2>
              <p>Here are some projects I have worked on:</p>
              <img src={separatorBlack} alt="logoprojects" />
              <Row>
                {projects.map((project, index) => (
                  <Col key={index} size={12} sm={6} md={4} lg={4} className="px-1">
                    <div className="project-item">
                      <img src={project.image} alt={project.name} />
                      <h4>{project.name}</h4>
                      <div className="overlay">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p className="tech">{project.technologies}</p>
                      </div>
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

export default Projects;
