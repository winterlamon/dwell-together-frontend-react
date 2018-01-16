import React, { Component } from 'react';
import { Button, Col, Input, Row} from 'react-materialize';

class Login extends Component {
  render() {

    return (
      <div className="login">
        <Row>
            <Col s={3}></Col>
          <Col s={6} className="login-form">
            <div className="container">
              <h3>Log In</h3>
                <Row>
                  <form>
                    <label>
                      Email
                      <input
                        s={6}
                        name="email"
                        className="center"
                        type="email"
                        label="Email"
                        placeholder="awesomeroommate@ourhome.com"
                        // value={fields.email}
                        // onChange={this.handleChange}
                      />
                    </label>
                    <label>
                      Password
                      <input
                        s={6}
                        name="password"
                        className="center"
                        type="password"
                        label="Password"
                        placeholder="mypassword"
                        // value={fields.password}
                        // onChange={this.handleChange}
                      />
                    </label>
                  </form>
                  <Button
                    // onClick={this.handleSubmit}
                    className="button"
                    waves='light' node='a'>Log In</Button>
                  </Row>
                <div>
                  <Row>
                  </Row>
                  <Row>
                    <p>Don't have an account?</p>
                    <Button
                      className="button"
                      waves='light' node='a' href='/signup'>Sign Up</Button>
                  </Row>
                </div>
              </div>
            </Col>
            <Col s={3}></Col>
        </Row>

      </div>
    )
  }
}

export default Login;
