import React from "react";
import { Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";

const HouseholdKey = props => {
  const Hashids = require("hashids");
  const hashids = new Hashids("", 6);

  return (
    <div className="household-members-list form">
      <Row>
        <div>
          <h5>Your Household's Key</h5>
        </div>
      </Row>
      <Row>
        <div>
          <h3 classname="red darken-4">
            {hashids.encode(props.currentUser.household.id)}
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
