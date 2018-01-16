import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const JumbotronComponent = () => {
    return (
      <div>
          <Jumbotron fluid className="landing-page-jumbotron">
            <h1 className="display-3">D'WELL TOGETHER</h1>
          <p className="lead">Do well together.</p>
            <hr className="my-2" />
          <p>Get started today</p>
        <div className="inline-buttons">
            <div className="col-md-6">
              <Button href="/signup" color="primary">SIGN UP</Button>
            </div>
            <div className="col-md-6">
              <Button href="/login" color="primary">LOG IN</Button>
            </div>
        </div>
          </Jumbotron>
      </div>
    );
}

export default JumbotronComponent;
