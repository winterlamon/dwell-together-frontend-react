import React from "react";
import { Button, Col, Row } from "react-materialize";
import NewHouseholdMemberForm from "../components/NewHouseholdMemberForm";
import HouseholdMemberList from "../components/HouseholdMemberList";
import CreateHousehold from "../components/CreateHousehold";

const DashboardContainer = props => {
  console.log("dashboard user", props.currentUser);

  const household = !!props.currentUser.household;

  return (
    <div className="dashboard">
      {!household ? (
        <CreateHousehold />
      ) : (
        <div>
          <Row>
            <Col s={8}>
              <Row>
                <Col>
                  <div>
                    <h3>Welcome home, {props.currentUser.first_name}!</h3>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="inline-block">
                  <div className="inline-block">
                    <Button className="button">View Lists</Button>
                  </div>
                </Col>
                <Col className="inline-block">
                  <div className="inline-block">
                    <Button className="button">Create New List</Button>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col s={4} className="household center">
              <Row className="sections">
                <div>
                  <h3>{props.currentUser.household.nickname}</h3>
                </div>
              </Row>
              <Row>
                <NewHouseholdMemberForm currentUser={props.currentUser} />
              </Row>
              <Row>
                <HouseholdMemberList currentUser={props.currentUser} />
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default DashboardContainer;
