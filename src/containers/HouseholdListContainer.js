import React from "react";
import { Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import HouseholdList from "../components/HouseholdList";
import NewListForm from "../components/NewListForm";
import NewListItemForm from "../components/NewListItemForm";

const HouseholdListContainer = props => {
  const lists = props.household.lists;
  console.log("props in list", props);
  const allHouseholdLists = lists.map(list => (
    <HouseholdList key={`household-list-` + list.id.toString()} list={list} />
  ));

  return (
    <div className="household-lists">
      <Row>
        <Col s={8}>
          <div>
            <h3>Lists</h3>
            {props.household.lists ? (
              allHouseholdLists
            ) : (
              <p>There are no lists to display.</p>
            )}
          </div>
        </Col>
        <Col s={4} className="household center">
          <Row>
            <div>
              <h3>{props.currentUser.household.nickname}</h3>
            </div>
          </Row>
          <Row>
            <NewListForm />
          </Row>
          <Row>
            <NewListItemForm lists={lists} />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default connect(state => {
  return {
    ...state.authReducer
  };
}, actions)(HouseholdListContainer);
