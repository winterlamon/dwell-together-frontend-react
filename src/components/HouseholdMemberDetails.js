import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";

class HouseholdMemberDetails extends React.Component {
  // handleRemoveClick = event => {
  //   event.preventDefault();
  //   this.props.removeUserFromHousehold(member);
  // };

  handleMemberClick = event => {
    event.preventDefault();
    this.props.getUserData(this.props.member);
  };

  render() {
    const member = this.props.member;

    return (
      <div className="profile">
        <Row className="vertical-align">
          <Col s={3} className="profile-avatar-column">
            <img
              className="profile-avatar"
              src={member.avatar_url}
              alt="user avatar"
            />
          </Col>
          <Col s={9} className="member-details">
            <div>
              <Link to={`/profile/${member.username}`}>
                <h1 onClick={this.handleMemberClick}>
                  {member.first_name + " " + member.last_name}
                </h1>
              </Link>
              <h3>{member.username}</h3>
              <p>{member.description}</p>
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
}, actions)(HouseholdMemberDetails);
