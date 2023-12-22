import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecomm from "../../Assets/Projects/ecomm.png";
import socio from "../../Assets/Projects/socio.png";
import blog from "../../Assets/Projects/blog.png";
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Application"
              description="A Full Stack Application , this platform is designed to help you
              create and share your thoughts, experiences. Built using EJS
              frontend framework and Express.js in backend, also includes
              MONGODB database."
              ghLink="https://github.com/Sahilparyani1804/blog1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Credit Card Fraud Detection"
              description="This model is designed to analyze transaction data and predict whether a transaction is fraudulent or legitimate.The
              primary objective of this project is to create an accurate and efficient system that can detect and prevent credit
              card fraud in real-time by analyzing transaction patterns and features.Algorithm used is Logistic regression."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
