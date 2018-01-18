import React, { Component } from "react";
import { Button, Col, Input, Row } from "react-materialize";
import avatar from "../default-avatar.png";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <Row>
          <Col>
            <img className="profile-avatar" src={avatar} alt="user avatar" />
          </Col>
          <Col>
            <div>
              <h1>
                {this.props.currentUser.first_name +
                  " " +
                  this.props.currentUser.last_name}
              </h1>
              <h3>username</h3>
              <p>
                Eventually, there will be a user description/status here. But
                for now, we have this filler text. Maybe a user will use the
                space to leave notes for their roommates like
                <em>
                  "Hey, yall! Just a reminder that I will be out of town from
                  January 26 - February 3. I'll miss you!"
                </em>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
