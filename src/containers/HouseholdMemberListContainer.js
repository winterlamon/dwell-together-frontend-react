import React from "react";
import { Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import HouseholdMemberDetails from "../components/HouseholdMemberDetails";

const HouseholdMemberListContainer = props => {
  console.log("props in HouseholdMemberListContainer", props.currentUser);

  const household = props.currentUser.household;
  const allHouseholdMembers = household.members.map(member => (
    <HouseholdMemberDetails
      key={`${household.nickname}-member-` + member.id.toString()}
      member={member}
    />
  ));

  return (
    <div className="household-members-list">
      <Row>
        <h1>Welcome to {props.household.nickname}!</h1>
      </Row>
      <Row>
        <div>
          <h3>Members</h3>
        </div>
      </Row>
      <Row>{allHouseholdMembers}</Row>
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
}, actions)(HouseholdMemberListContainer);
