import React from "react";
import { Row } from "react-materialize";
import HouseholdList from "../components/HouseholdList";

const HouseholdListContainer = props => {
  const lists = props.currentUser.household.lists;
  const allHouseholdLists = lists.map(list => (
    <HouseholdList
      key={`household-list-` + list.id.toString()}
      list={list}
      currentUser={props.currentUser}
      refreshCurrentUser={props.refreshCurrentUser}
    />
  ));

  return (
    <div className="household-lists">
      <Row>
        <div>
          <h3>Lists</h3>
        </div>
      </Row>
      <Row>{allHouseholdLists}</Row>
    </div>
  );
};

export default HouseholdListContainer;
