import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import IMAGES from "../assets/images";
import AnimatedCard from "../Components/AnimatedCard";

const About = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="fw-bold mb-3">About Us</h2>
            <p>
              We are a forward-thinking company dedicated to delivering
              outstanding digital solutions tailored to meet the unique needs of
              businesses and individuals. With a passion for creativity and
              innovation, we help our clients turn their ideas into powerful,
              scalable platforms.
            </p>
            <p>
              Whether you're a startup looking to make an impact or a large
              organization seeking efficiency, our team of experts is ready to
              help.
            </p>
            <Button variant="primary" className="mt-3">
              Learn More
            </Button>
          </Col>
          <Col md={6}>
            <img
              src={IMAGES.image_3}
              alt="About us"
              className="img-fluid rounded-4 shadow"
            />
          </Col>
        </Row>

        <div className="container py-5">
          <Row className="text-center">
            <Col md={4}>
              <h5 className="fw-bold">Our Mission</h5>
              <p className="text-muted">
                To deliver solutions that empower businesses and enrich user
                experiences globally.
              </p>
            </Col>
            <Col md={4}>
              <h5 className="fw-bold">Our Vision</h5>
              <p className="text-muted">
                To be a leading force in digital transformation across
                industries and borders.
              </p>
            </Col>
            <Col md={4}>
              <h5 className="fw-bold">Core Values</h5>
              <p className="text-muted">
                Innovation, Integrity, Collaboration, and Excellence in every
                project we undertake.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
