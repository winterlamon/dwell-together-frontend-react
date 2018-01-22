import React, { Component } from "react";
import { Button, Col, Input, Row } from "react-materialize";
import avatar from "../default-avatar.png";

class Profile extends Component {
  render() {
    console.log(this.props.currentUser);
    return (
      <div className="profile">
        <Row className="vertical-align">
          <Col s={2}>
            <img
              className="profile-avatar"
              src={this.props.currentUser.avatar_url}
              alt="user avatar"
            />
          </Col>
          <Col s={10}>
            <div>
              <h1>
                {this.props.currentUser.first_name +
                  " " +
                  this.props.currentUser.last_name}
              </h1>
              <h3>{this.props.currentUser.username}</h3>
              <p>{this.props.currentUser.description}</p>
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
