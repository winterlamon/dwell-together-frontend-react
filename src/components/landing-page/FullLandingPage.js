import React from "react";
import { Button, Col, Row } from "react-materialize";
import { Link } from "react-router-dom";

const FullLandingPage = () => {
  return (
    <div style={{ minHeight: window.innerHeight }} className="landing-page">
      <Row />
      <div className="landing-content">
        <h1 className="display-1 marker-font">D'WELL TOGETHER</h1>
        <Row>
          <Col s={3} />
          <Col s={6}>
            <p className="">
              D'well Together is the communal living organizer that makes it
              easier for roommates to do well together. Whether it's making a
              chore list or paying bills, D'well Together keeps everything
              transparant and hassle-free.
            </p>
          </Col>
          <Col s={3} />
        </Row>

        <Row className="inline-buttons">
          <Col>
            <Link to="/signup">
              <Button href="/signup" className="button">
                GET STARTED
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/login">
              <Button href="/login" className="button">
                LOG IN
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      <Row />
      <Row />
    </div>
  );
};

export default FullLandingPage;
