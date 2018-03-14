import React from "react";
import { Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import HouseholdMemberListContainer from "./HouseholdMemberListContainer";
import HouseholdMemberSidebarContainer from "./HouseholdMemberSidebarContainer";
// import NewHouseholdMemberForm from "../components/NewHouseholdMemberForm";
import HouseholdKey from "../components/HouseholdKey";

const MembersContainer = props => {
  console.log("dashboard user", props.currentUser);

  return (
    <div className="members">
      <div>
        <Row>
          <Col s={8}>
            <HouseholdMemberListContainer />
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
            {/* <Row>
              <NewHouseholdMemberForm />
            </Row> */}
            <Row>
              <HouseholdMemberSidebarContainer />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default connect(state => {
  return {
    ...state.authReducer
  };
}, actions)(MembersContainer);
