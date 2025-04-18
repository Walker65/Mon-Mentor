import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";

function Testimonials() {
  return (
    <Container className="py-5 bg-light">
      <h2 className="text-center fw-bold mb-5">
        Ils ont trouvé leur <span className="text-success">Mentor</span>
      </h2>
      <Row className="g-4">
        <Col md={6} lg={3}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={avatar1}
                  alt="Amina D."
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0">Amina D.</h6>
                  <small className="text-muted">Étudiante</small>
                </div>
              </div>
              <Card.Text>
                Grâce à Mon Mentor, j’ai trouvé une experte qui m’a guidée dans mes projets.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={avatar2}
                  alt="Jean K."
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0">Jean K.</h6>
                  <small className="text-muted">Développeur</small>
                </div>
              </div>
              <Card.Text>
                Le mentorat m’a permis de progresser rapidement et de décrocher un stage.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={avatar3}
                  alt="Fatou S."
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0">Fatou S.</h6>
                  <small className="text-muted">Jeune diplômée</small>
                </div>
              </div>
              <Card.Text>
                J’ai reçu des conseils précieux qui m’ont aidée à choisir ma voie pro.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={avatar4}
                  alt="Ibrahim M."
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0">Ibrahim M.</h6>
                  <small className="text-muted">Étudiant en design</small>
                </div>
              </div>
              <Card.Text>
                Mon Mentor m’a aidé à bâtir un portfolio solide pour mes candidatures.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
