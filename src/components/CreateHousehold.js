import React, { Component } from "react";
import { Button, Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import swal from "sweetalert";

class CreateHousehold extends Component {
  state = {
    error: false,
    nickname: ""
  };

  handleChange = event => {
    this.setState({ nickname: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    this.props.createHousehold(this.state.nickname).then(res => {
      if (res.error) {
        this.setState({ error: true }, console.log(res.error));
      } else {
        console.log("household created");
        swal({
          title: `${this.props.household.household_key}`,
          text: `${
            this.props.household.nickname
          } has been created. Use the above key to join this household.`
        });
        // this.props.history.push("/dashboard");
      }
    });
  };

  render() {
    console.log("state in create household", this.state);

    return (
      <div>
        <Row>
          <Col s={12} className="signup-form">
            <div className="container">
              {/* <p>
                If you would like to join an existing household, please contact
                a member of the household to add you.
              </p> */}
              <h3>Create a New Household</h3>
              <Row>
                <form>
                  <label>
                    Household Nickname
                    <input
                      s={6}
                      name="nickname"
                      className="center"
                      type="text"
                      label="nickname"
                      placeholder="Candy Mountain"
                      value={this.state.nickname}
                      onChange={this.handleChange}
                    />
                  </label>
                </form>

                <Button
                  onClick={this.handleClick}
                  className="button"
                  waves="light"
                  node="a"
                >
                  Create Household
                </Button>
              </Row>
              <div>
                <Row />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.authReducer
  };
}, actions)(CreateHousehold);
