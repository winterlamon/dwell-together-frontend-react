import React from "react";
import { Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import HouseholdList from "../components/HouseholdList";

const MemberListItems = props => {
  const listItems = props.currentUser.household.list_items;
  const memberListItems = listItems.filter(list => {
    list;
  });
  //   <HouseholdList
  //     key={`household-list-` + list.id.toString()}
  //     list={list}
  //     currentUser={props.currentUser}
  //     refreshCurrentUser={props.refreshCurrentUser}
  //   />
  // ));

  return (
    <div className="member-list-items">
      <Col s={12}>
        <div>
          <h3>List Items</h3>
          {memberListItems}
        </div>
      </Col>
    </div>
  );
};

export default connect(state => {
  return {
    ...state.authReducer
  };
}, actions)(MemberListItems);
