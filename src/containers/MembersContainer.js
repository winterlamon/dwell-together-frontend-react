import React from "react";
import { Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import HouseholdMemberListContainer from "./HouseholdMemberListContainer";
import HouseholdMemberSidebarContainer from "./HouseholdMemberSidebarContainer";
// import HouseholdListContainer from "./HouseholdListContainer";
import NewHouseholdMemberForm from "../components/NewHouseholdMemberForm";
import HouseholdKey from "../components/HouseholdKey";

const MembersContainer = props => {
  console.log("dashboard user", props.currentUser);

  const household = props.currentUser.household;

  return (
    <div className="members">
      <div>
        <Row>
          <Col s={8}>
            <HouseholdMemberListContainer
            // currentUser={props.currentUser}
            // refreshCurrentUser={props.refreshCurrentUser}
            />
          </Col>
          <Col s={4} className="household center">
            <Row>
              <div>
                <h3>{props.currentUser.household.nickname}</h3>
              </div>
            </Row>
            <Row>
              <HouseholdKey />
            </Row>
            <Row>
              <NewHouseholdMemberForm
              // currentUser={props.currentUser}
              // users={props.users}
              // refreshCurrentUser={props.refreshCurrentUser}
              />
            </Row>
            <Row>
              <HouseholdMemberSidebarContainer
              // currentUser={props.currentUser}
              // refreshCurrentUser={props.refreshCurrentUser}
              />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    ...state.authReducer,
    ...state.usersReducer,
    ...state.householdReducer
  };
}, actions)(MembersContainer);
