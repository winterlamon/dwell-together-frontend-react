import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-materialize";
import api from "../services/api";

class HouseholdMemberDetails extends React.Component {
  handleClick = event => {
    event.preventDefault();
    api.users.removeUserFromHousehold(this.props.member);
  };

  render() {
    const member = this.props.member;

    return (
      <div className="profile">
        <Row className="vertical-align">
          <Col s={2}>
            <img
              className="profile-avatar"
              src={member.avatar_url}
              alt="user avatar"
            />
          </Col>
          <Col s={10}>
            <div>
              <Link to={`/profile/${member.username}`}>
                <h1>{member.first_name + " " + member.last_name}</h1>
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

export default HouseholdMemberDetails;
