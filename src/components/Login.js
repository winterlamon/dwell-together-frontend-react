import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Col, Row } from "react-materialize";
// import api from "../services/api";
import * as actions from "../actions";
import swal from "sweetalert";

class Login extends Component {
  state = {
    error: false,
    fields: {
      email: "",
      password: ""
    }
  };

  handleChange = event => {
    const loginFields = {
      ...this.state.fields,
      [event.target.name]: event.target.value
    };
    this.setState({ fields: loginFields });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state.fields).then(res => {
      if (res.error) {
        this.setState({ error: true }, () => swal(res.error));
      } else {
        this.props.history.push(`/profile/${res.username}`);
      }
    });
  };

  render() {
    const { fields } = this.state;

    return (
      <div className="login">
        <Row>
          <Col s={3} />
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
                      value={fields.email}
                      onChange={this.handleChange}
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
                      value={fields.password}
                      onChange={this.handleChange}
                    />
                  </label>
                </form>
                <Button
                  onClick={this.handleSubmit}
                  className="button"
                  waves="light"
                  node="a"
                >
                  Log In
                </Button>
              </Row>
              <div>
                <Row />
                <Row>
                  <p>Don't have an account?</p>
                  <Button
                    className="button"
                    waves="light"
                    node="a"
                    href="/signup"
                  >
                    Sign Up
                  </Button>
                </Row>
              </div>
            </div>
          </Col>
          <Col s={3} />
        </Row>
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      ...state.authReducer
    }),
    actions
  )(Login)
);
