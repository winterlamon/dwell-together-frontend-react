import React, { Component } from "react";
import { Button, Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import swal from "sweetalert";

class Signup extends Component {
  state = {
    error: false,
    fields: {
      first_name: "",
      last_name: "",
      username: "",
      household_key: "",
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

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state.fields).then(res => {
      debugger;
      if (res.error) {
        this.setState({ error: true }, swal(res.error));
      } else {
        // this.props.history.push(`/profile/${res.username}`);
        this.props.history.push(`/login`);
      }
    });
  };

  render() {
    return (
      <div>
        <Row>
          <Col s={12} className="signup-form">
            <div className="container">
              <h3>Create an Account</h3>
              <form>
                <Row>
                  <Col s={6}>
                    <label>
                      First Name
                      <input
                        s={6}
                        type="text"
                        name="first_name"
                        id="first_name"
                        onChange={this.handleChange}
                      />
                    </label>
                  </Col>
                  <Col s={6}>
                    <label>
                      Last Name
                      <input
                        s={6}
                        type="text"
                        name="last_name"
                        id="last_name"
                        onChange={this.handleChange}
                      />
                    </label>
                  </Col>
                </Row>

                <Row>
                  <Col s={6}>
                    <label>
                      Username
                      <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={this.handleChange}
                      />
                    </label>
                  </Col>
                  <Col s={6}>
                    <label>
                      Household Key
                      <input
                        type="text"
                        name="household_key"
                        id="household_key"
                        onChange={this.handleChange}
                      />
                    </label>
                  </Col>
                </Row>

                <Row>
                  <Col s={6}>
                    <label>
                      Email
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                      />
                    </label>
                  </Col>
                  <Col s={6}>
                    <label>
                      Password
                      <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.handleChange}
                      />
                    </label>
                  </Col>
                </Row>
              </form>
              <Button className="button" onClick={this.handleSubmit}>
                Create Account
              </Button>
              <Row />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.authReducer,
    ...state.usersReducer,
    ...state.householdReducer
  };
}, actions)(Signup);
