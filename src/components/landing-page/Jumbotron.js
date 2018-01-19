import React from "react";
import { Button, Col, Parallax, Row } from "react-materialize";

const JumbotronComponent = () => {
  return (
    <div>
      {/* <Jumbotron fluid className="landing-page-jumbotron"> */}
      <h1 className="display-3">D'WELL TOGETHER</h1>
      <p className="lead">Do well together.</p>
      <hr className="my-2" />
      <p>Get started today</p>
      <div className="inline-buttons">
        <div className="col-md-6">
          <Button href="/signup" color="primary">
            SIGN UP
          </Button>
        </div>
        <div className="col-md-6">
          <Button href="/login" color="primary">
            LOG IN
          </Button>
        </div>
      </div>
      {/* </Jumbotron> */}
    </div>
  );
};

<div>
  <Parallax imageSrc="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg" />
  <div className="section white">
    <div className="row container">
      <h2 className="header">Parallax</h2>
      <p className="grey-text text-darken-3 lighten-3">
        Parallax is an effect where the background content or image in this
        case, is moved at a different speed than the foreground content while
        scrolling.
      </p>
    </div>
  </div>
  <Parallax imageSrc="https://static.pexels.com/photos/271753/pexels-photo-271753.jpeg" />
</div>;

export default JumbotronComponent;
