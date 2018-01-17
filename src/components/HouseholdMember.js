import React from "react";
import { Button, Col, Row } from "react-materialize";
import api from "../services/api";

class HouseholdMember extends React.Component {
  handleClick = event => {
    event.preventDefault();
    api.auth.removeUserFromHousehold(this.props.member);
  };

  render() {
    const member = this.props.member;

    return (
      <div className="">
        {/* <Card
              className="card"
              title={member.first_name + " " + member.last_name}
              actions={[<Button
                            key={"venue-button-" + member.id}
                            onClick={this.handleClick}>
                            Remove
                          </Button>
                      ]}>
            </Card> */}
        <Row>
          <Col s={8}>
            <h5>{member.first_name + " " + member.last_name}</h5>
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

export default HouseholdMember;
