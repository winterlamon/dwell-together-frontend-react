import React from "react";
import { Button, CollapsibleItem, Icon } from "react-materialize";
import api from "../services/api";
import { connect } from "react-redux";
import * as actions from "../actions";

const HouseholdList = props => {
  const list = props.list;
  const allListItems = props.list.list_items.map(item => (
    <tr className="list-item">
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.due_date}</td>
      <td>{item.user}</td>

      <td>
        {item.completed ? (
          <p
            className="green darken-1"
            // key={"item-button-" + item.id}
            onClick={this.handleClick}
            //   () => {
            //   api.listItems.completeListItem(item);
            //   //   props.refreshCurrentUser();
            // }
          >
            <Icon>done</Icon> COMPLETED
          </p>
        ) : (
          <Button
            className="button"
            key={"item-button-" + item.id}
            // onClick={() => {
            //   api.items.deleteList(item);
            //   props.refreshCurrentUser();
            // }}
          >
            MARK AS COMPLETED
          </Button>
        )}
      </td>
    </tr>
  ));

  return (
    <div
      className="list"
      // onClick={props.changeHi}
    >
      <CollapsibleItem header={`${list.name}`}>
        <p>
          <strong>Category:</strong> {list.category}
        </p>
        {allListItems}
        <Button
          className="list-remove-button"
          key={"list-button-" + list.id}
          onClick={() => {
            api.lists.deleteList(list);
            props.refreshCurrentUser();
          }}
        >
          Delete List
        </Button>
      </CollapsibleItem>

      {/* <Card
        className="card"
        title={list.name}
        actions={[
          <Button
            className="list-remove-button"
            key={"list-button-" + list.id}
            onClick={() => {
              api.lists.deleteList(list);
              props.refreshCurrentUser();
            }}
          >
            Delete List
          </Button>
        ]}
      >
        <p>Category: {list.category}</p>
      </Card> */}
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
}, actions)(HouseholdList);
