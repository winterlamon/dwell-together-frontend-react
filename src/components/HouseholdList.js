import React from "react";
import { Button, Card, CardTitle } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import ListItem from "./ListItem";

const HouseholdList = props => {
  const list = props.list;
  const listItems = props.household.list_items.filter(
    list_item => list_item.list_id === list.id
  );
  const showListItems = listItems.map((item, index) => (
    <ListItem
      key={`list-item-` + item.id.toString()}
      item={item}
      index={index}
    />
  ));

  return (
    <div className="list">
      <Card
        header={<CardTitle reveal waves="light" />}
        title={`${list.name}`}
        reveal={<div>{showListItems}</div>}
      >
        <p>
          <strong>Category:</strong> {list.category}
        </p>
        <div>
          <Button
            className="list-button"
            key={"list-button-" + list.id}
            onClick={() => {
              props.deleteList(list);
            }}
          >
            Delete List
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default connect(state => {
  return {
    ...state.authReducer
  };
}, actions)(HouseholdList);
