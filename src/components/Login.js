import React, { Component } from 'react';
import { Button, Col, Input, Row} from 'react-materialize';

class Login extends Component {
  render() {

    return (
      <div className="login">
        <Row>
            <Col s={3}></Col>
          <Col s={6} >
            <h3>Log In</h3>
              <Row>
                <Input
                  s={12}
                  name="email"
                  className="center"
                  type="email"
                  label="Email"
                  // value={fields.email}
                  // onChange={this.handleChange}
                />
                <Input
                  s={12}
                  name="password"
                  className="center"
                  type="password"
                  label="Password"
                  // value={fields.password}
                  // onChange={this.handleChange}
                />
              <Button
                // onClick={this.handleSubmit} 
                waves='light' node='a'>Log In</Button>
            </Row>
              <div>
                <Row>
                </Row>
                <Row>
                  <p>Don't have an account?</p> <Button waves='light' node='a' href='/signup'>Sign Up</Button>
              </Row>
              </div>
            </Col>
            <Col s={3}></Col>
        </Row>

      </div>
    )
  }
}

export default Login;
