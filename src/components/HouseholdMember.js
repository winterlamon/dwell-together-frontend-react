import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";

class HouseholdMember extends React.Component {
  handleClick = event => {
    event.preventDefault();
    this.props.removeUserFromHousehold(this.props.member);
  };

  render() {
    const member = this.props.member;

    return (
      <div className="household-member">
        <Row>
          <Col s={8}>
            <Link to={`/profile/${member.username}`}>
              <h5>{member.first_name + " " + member.last_name}</h5>
            </Link>
          </Col>
          <Col s={4}>
            <div className="member-button">
              <Button
                className="member-remove-button"
                key={"member-button-" + member.id}
                onClick={this.handleClick}
              >
                Remove
              </Button>
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
}, actions)(HouseholdMember);
