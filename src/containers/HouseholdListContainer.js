import React from "react";
import { Row } from "react-materialize";
import HouseholdList from "../components/HouseholdList";

const HouseholdListContainer = props => {
  const list = props.currentUser.household.lists;
  const allHouseholdLists = household.lists.map(list => (
    <HouseholdList
      key={`household-list-` + household.list.id.toString()}
      list={list}
      currentUser={props.currentUser}
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
