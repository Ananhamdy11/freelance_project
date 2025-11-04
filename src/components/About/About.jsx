import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFigma, FaPaintBrush, FaLayerGroup } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <FaFigma />,
    title: "Figma",
    desc: "Wireframing, Prototyping, and UI Design Systems.",
  },
  {
    icon: <SiAdobe />,
    title: "Adobe XD",
    desc: "Interactive design and user flow visualization.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Adobe Photoshop",
    desc: "Photo editing, color correction, and UI assets.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Adobe Illustrator",
    desc: "Logo design, vector graphics, and icons.",
  },
];

const skillVariant = {
  hidden: { opacity: 0, y: 60, rotate: -5 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
  }),
};

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container className="text-center text-light">
        <motion.h2
          className="mb-4 fw-bold text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          👩‍🎨 About Me
        </motion.h2>

        <motion.div
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <p>
            I'm <span className="text-white fw-bolder">Yomna Mahmoud</span>, a
            junior <strong>UI/UX designer</strong>. I started studying this field in
            <strong> May 2023</strong> at Route Academy. There, I discovered my
            passion for design — how much I love colors, coordinating them, and
            creating new designs that reflect each project's concept.
          </p>
          <p>
            This was the beginning of my journey and the reason I wanted to dive
            deeper into this field. I later joined the{" "}
            <strong>Digital Pioneers of Egypt Scholarship (DEPI)</strong>, where I
            gained a lot of knowledge and learned to design user-friendly
            applications and websites suitable for all age groups and people with
            special needs.
          </p>
          <p>
            I’m always eager to grow, explore new tools, and design experiences that
            combine beauty, functionality, and accessibility.
          </p>
        </motion.div>

        <Row className="mt-5">
          {skills.map((skill, index) => (
            <Col key={index} md={3} sm={6} className="mb-4">
              <motion.div
                className="skill-card text-center"
                custom={index}
                variants={skillVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 0 25px rgba(255,0,204,0.4)",
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                <motion.div
                  className="icon mb-3"
                  initial={{ rotate: -10, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <h5>{skill.title}</h5>
                <p>{skill.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
