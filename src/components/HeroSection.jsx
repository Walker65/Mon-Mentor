import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImage from "../assets/hero-image.png";

function HeroSection() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">
              Trouve ton <span className="text-success">Mentor</span> idéal
            </h1>
            <p className="lead text-muted mt-3">
              Rejoins notre plateforme de mentorat et connecte-toi avec des experts prêts à t’accompagner dans ta carrière.
            </p>
            <div className="mt-4">
              <a href="#how-it-works" className="btn btn-success btn-lg">
                Découvrir comment ça marche
              </a>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <img
              src={heroImage}
              alt="Mentorat"
              className="img-fluid"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
