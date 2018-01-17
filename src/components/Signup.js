import React, { Component } from "react";
import { Button, Col, Row } from "react-materialize";
import api from "../services/api";

class Signup extends Component {
  state = {
    error: false,
    fields: {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }
  };

  handleChange = event => {
    const newField = {
      ...this.state.fields,
      [event.target.name]: event.target.value
    };
    this.setState({ fields: newField });
  };

  handleButtonClick = event => {
    event.preventDefault();
    api.auth
      .signup(
        this.state.fields.first_name,
        this.state.fields.last_name,
        this.state.fields.email,
        this.state.fields.password
      )
      .then(res => {
        if (res.error) {
          this.setState({ error: true }, console.log(res.error));
        } else {
          this.props.history.push("/dashboard");
        }
      });
  };

  render() {
    console.log("signup state", this.state);
    return (
      <div className="signup">
        <Row>
          <Col s={3} />
          <Col s={6} className="signup-form">
            <div className="container">
              <h3>Create an Account</h3>
              <form>
                <label>
                  First Name
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Last Name
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </label>
              </form>
              <Button className="button" onClick={this.handleButtonClick}>
                Create Account
              </Button>
              <Row />
            </div>
          </Col>
          <Col s={3} />
        </Row>
      </div>
    );
  }
}

export default Signup;
