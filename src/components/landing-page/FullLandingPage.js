import React from "react";
import { Button, Carousel, Col, Row } from "react-materialize";

const FullLandingPage = () => {
  return (
    <div>
      <Carousel
        className="landing-page-actions"
        fixedItem={
          <div>
            <h1 className="display-3">D'WELL TOGETHER</h1>
            <p className="lead">Do well together.</p>
            <p>Get started today</p>
            <Row className="inline-buttons">
              <Col s={6}>
                <Button href="/signup" className="button">
                  SIGN UP
                </Button>
              </Col>
              <Col s={6}>
                <Button href="/login" className="button">
                  LOG IN
                </Button>
              </Col>
            </Row>
          </div>
        }
        options={{ fullWidth: true }}
        images={[
          "https://static.pexels.com/photos/271753/pexels-photo-271753.jpeg"
        ]}
      />
    </div>
  );
};

export default FullLandingPage;
