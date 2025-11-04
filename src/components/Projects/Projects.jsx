import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import project1 from "../../../public/assets/images/Frame 301.png";
import project2 from "../../../public/assets/images/graduation project_.png"
import project3 from "../../../public/assets/images/project3.png"

const projects = [
  {
    title: "EATO FOOD DELIVERY",
    description:"It is an app competes Talabat, in addition to providingfood for your pet.Tools: using figma",
    image:project1,
    tech: "Figma • User Flow • Design System",
    demo: "https://www.figma.com/design/0Rq8fTG21x1Q0vn2dMT0qZ/eato-food?node-id=0-1&t=XhwnRc018VMscl9f-1",
  },
  {
    title: "ELDER PEOPLE BAND",
    description:"An app for the care of the elderly and those with chronic diseases by monitoring their vital signs and keeping them at home",
    image: project2,
    tech: "Figma • User Flow • Design System",
    demo: "https://www.figma.com/design/lltT4MDq2c6qL0UGrWC7OG/graduation-project-?node-id=0-1&t=6ZQycwPkqnmE1MTZ-1",
  },
  {
    title: "TRANSGO",
    description:"TransGo provides services such as cranes and maintenance.To know more, TransGo exists for the convenience of customers",
    image: project3,
    tech: "Figma • User Flow • Design System",
    demo: "https://www.figma.com/design/5SL69eBUBvKbPHZM7bL8mk/final-project?node-id=0-1&t=OFzJaHiQ9XUAxmV3-1",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="text-center mb-5 text-white fw-bold">🎨 My Projects</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="project-card rounded-3 h-100">
               <Card.Img
  variant="top"
  src={project.image}
  alt={project.title}
  className="project-img"
  style={{ height: "250px", objectFit: "cover" }}
/>

                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <p className="tech-text">
                    <small>{project.tech}</small>
                  </p>
                  <div className="d-flex justify-content-between">
                    <Button
                      className="btn-gradient"
                      href={project.demo}
                      target="_blank"
                    >
                      View Design
                    </Button>
                   
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
