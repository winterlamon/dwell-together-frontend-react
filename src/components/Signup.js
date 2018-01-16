import React, { Component } from 'react';
import { Button, Col, Input, Row} from 'react-materialize';


class Signup extends Component {
  render() {
    return (
      <div className="signup" >
        <Row>
          <Col s={3}></Col>
          <Col s={6} className="signup-form">
            <div className="container">
              <h3>Create an Account</h3>
              <form>
                <label>
                  First Name
                  <input type="text" name="firstName" id="firstName" />
                </label>
                <label>
                  Last Name
                <input type="text" name="lastName" id="lastName" />
                </label>
                <label>
                  Email
                <input type="email" name="email" id="email" />
                </label>
                <label>
                  Password
                <input type="password" name="password" id="password" />
              </label>
            </form>
              <Button className="button">Create Account</Button>
            <Row></Row>
        </div>
            </Col>
          <Col s={3}></Col>
        </Row>
      </div>
    );
  }
}

export default Signup;
