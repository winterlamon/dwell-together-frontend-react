import React from "react";
import { Row } from "react-materialize";
import HouseholdMember from "../components/HouseholdMember";

const HouseholdMemberListContainer = props => {
  console.log("props in HouseholdMemberListContainer", props.currentUser);

  const household = props.currentUser.household;
  const allHouseholdMembers = household.members.map(member => (
    <HouseholdMember
      key={`${household.nickname}-member-` + member.id.toString()}
      member={member}
      currentUser={props.currentUser}
    />
  ));

  return (
    <div className="household-members-list">
      <Row>
        <div>
          <h3>Members</h3>
        </div>
      </Row>
      <Row>{allHouseholdMembers}</Row>
    </div>
  );
};

export default HouseholdMemberListContainer;
