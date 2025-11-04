import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";


export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section py-5 text-light"
     
    >
      <Container>
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          📬 Get in Touch
        </motion.h2>

        <Row className="justify-content-center">
          <Col md={10} lg={6}>
            <motion.div
              className="contact-info text-center py-5 px-4 rounded-4 shadow-lg"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="fs-6 mb-3">
                <FaEnvelope className="me-2 text-warning" />
                <a
                  href="mailto:yomnamahmoud2707@gmail.com"
                  className="text-light text-decoration-none"
                >
                  yomnamahmoud2707@gmail.com
                </a>
              </p>
              <p className=" mb-3" style={{fontSize:"12px"}}>
                <FaLinkedin className="me-2 text-warning" />
                <a
                  href="http://www.linkedin.com/in/yomnamahmoud0"
                  className="text-light text-decoration-none"
                >
                 http://www.linkedin.com/in/yomnamahmoud0
                </a>
              </p>

              <p className="fs-6 mb-3">
                <FaPhoneAlt className="me-2 text-warning" />
                <a
                  href="tel:+201067221980"
                  className="text-light text-decoration-none"
                >
                  +20 106 722 1980
                </a>
              </p>

              <p className="fs-6 mb-4">
                <FaMapMarkerAlt className="me-2 text-warning" />
                Cairo, Egypt
              </p>

              <motion.p
                className="mt-4 fw-light fst-italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                I’d love to collaborate on creative projects — feel free to reach out! 💌
              </motion.p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
