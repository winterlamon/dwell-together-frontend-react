import React from "react";
import { Button, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import api from "../services/api";

class NewHouseholdMemberForm extends React.Component {
  state = {
    email: "",
    users: this.props.users
  };

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  handleClick = event => {
    console.log("state in NewMember handleclick", this.state);
    debugger;
    event.preventDefault();
    const addedUser = this.state.users.filter(
      user => user.email === this.state.email
    );
    api.users
      .addUserToHousehold(addedUser, this.props.currentUser.household)
      .then(res => {
        if (res.error) {
          this.setState({ error: true }, console.log(res.error));
        } else {
          this.props.history.push("/dashboard");
        }
      })
      .then(this.props.refreshCurrentUser());
  };

  render() {
    console.log("state in NewHouseholdMemberForm", this.state);

    return (
      <div className="household-members-list form">
        <Row>
          <div>
            <h5>Invite New Member</h5>
          </div>
        </Row>
        <Row>
          <label>
            <input
              type="text"
              className="center"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <Button className="button" onClick={this.handleClick}>
            Add Member to Household
          </Button>
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.authReducer
  };
}, actions)(NewHouseholdMemberForm);
