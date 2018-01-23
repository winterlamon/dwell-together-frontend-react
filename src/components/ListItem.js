import React from "react";
import { Button, Icon } from "react-materialize";
import api from "../services/api";
import { connect } from "react-redux";
import * as actions from "../actions";

class ListItem extends React.Component {
  handleClick = () => {
    api.listItems.completeListItem(this.props.item);
  };

  render() {
    const item = this.props.item;

    return (
      <tr className="list-item">
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>{item.due_date}</td>
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
    );
  }
}

export default connect(state => {
  return {
    ...state.authReducer,
    ...state.usersReducer,
    ...state.householdReducer,
    ...state.listCategoriesReducer
  };
}, actions)(ListItem);
