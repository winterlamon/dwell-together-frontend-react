import React from "react";
import { Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";

const HouseholdKey = props => {
  console.log("props in household key", props);
  return (
    <div className="household-members-list form">
      <Row>
        <div>
          <h5>Your Household's Key</h5>
        </div>
      </Row>
      <Row>
        <div>
          <h3 className="blue-text text-darken-4 household-key">
            {props.household.household_key}
          </h3>
        </div>
      </Row>
    </div>
  );
};

export default connect(state => {
  return {
    ...state.householdReducer
  };
}, actions)(HouseholdKey);
