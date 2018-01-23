import React from "react";
import { Button, Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import NewHouseholdMemberForm from "../components/NewHouseholdMemberForm";
import HouseholdMemberListContainer from "./HouseholdMemberListContainer";
import HouseholdListContainer from "./HouseholdListContainer";
import NewListForm from "../components/NewListForm";
import CreateHousehold from "../components/CreateHousehold";

const DashboardContainer = props => {
  console.log("dashboard user", props.currentUser);

  const household = props.currentUser.household;

  return (
    <div className="dashboard">
      {household.id === 1 ? (
        <CreateHousehold currentUser={props.currentUser} />
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
              <Row>
                <Col className="section">
                  <NewListForm
                    currentUser={props.currentUser}
                    refreshCurrentUser={props.refreshCurrentUser}
                  />
                </Col>
                <Col className="section">
                  <HouseholdListContainer
                    currentUser={props.currentUser}
                    household={household}
                    refreshCurrentUser={props.refreshCurrentUser}
                  />
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
                <NewHouseholdMemberForm
                  currentUser={props.currentUser}
                  users={props.users}
                  refreshCurrentUser={props.refreshCurrentUser}
                />
              </Row>
              <Row>
                <HouseholdMemberListContainer
                  currentUser={props.currentUser}
                  refreshCurrentUser={props.refreshCurrentUser}
                />
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default connect(state => {
  return {
    ...state.authReducer,
    ...state.usersReducer,
    ...state.householdReducer,
    ...state.listCategoriesReducer
  };
}, actions)(DashboardContainer);
