import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecomm from "../../Assets/Projects/ecomm.png";
import socio from "../../Assets/Projects/socio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomm}
              isBlog={false}
              title="Ecommerce Application"
              description="This application is designed to provide
                a seamless online shopping experience for both customers and
                administrators. Features include User Authentication, Admin
                Dashboard, Product Management, Shopping Cart and so on.."
              ghLink="https://github.com/Sahilparyani1804/EcommerceApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socio}
              isBlog={false}
              title="Sociopedia"
              description="Sociopedia is a MERN Stack Web Application designed to connect
              people, enable friendships, and encourage vibrant social
              interactions. Whether you’re sharing posts, making new friends,
              or engaging with content, Sociopedia has it all.."
              ghLink="https://github.com/Sahilparyani1804/socialize"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
