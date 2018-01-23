import React from "react";
import { Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import HouseholdList from "../components/HouseholdList";
import ListItem from "../components/ListItem";

const ProfileListItemContainer = props => {
  const allUserListItems = props.userListItems.map(item => (
    <ListItem
      key={`list-item-` + item.id.toString()}
      item={item}
      currentUser={props.currentUser}
    />
  ));

  return (
    <div className="profile-items">
      <Row>
        <div>
          <h3>Your Items</h3>
        </div>
        <div className="search">Search Bar / Filter Goes Here</div>
        <div>
          <table className="list-items-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{allUserListItems}</tbody>
          </table>
        </div>
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
}, actions)(ProfileListItemContainer);
