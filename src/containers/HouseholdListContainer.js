import React from "react";
import { Col, Collapsible, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import HouseholdList from "../components/HouseholdList";
import NewListForm from "../components/NewListForm";
import NewListItemForm from "../components/NewListItemForm";

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
        <Col s={8}>
          <div>
            <h3>Lists</h3>
            <Collapsible popout>{allHouseholdLists}</Collapsible>
          </div>
        </Col>
        <Col s={4} className="household center">
          <Row className="sections">
            <div>
              <h3>{props.currentUser.household.nickname}</h3>
            </div>
          </Row>
          <Row>
            <NewListForm
              currentUser={props.currentUser}
              refreshCurrentUser={props.refreshCurrentUser}
            />
          </Row>
          <Row>
            <NewListItemForm
              currentUser={props.currentUser}
              users={props.users}
              lists={lists}
              refreshCurrentUser={props.refreshCurrentUser}
            />
          </Row>
        </Col>
      </Row>
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
}, actions)(HouseholdListContainer);
