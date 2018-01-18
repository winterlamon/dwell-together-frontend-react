import React from "react";
import { Col, Row } from "react-materialize";
import HouseholdList from "../components/HouseholdList";

const ProfileListItemContainer = props => {
  const allUserListItems = props.userListItems.map(item => (
    <ListItem
      key={`list-item-` + list.id.toString()}
      item={item}
      currentUser={props.currentUser}
      refreshCurrentUser={props.refreshCurrentUser}
    />
  ));

  return (
    <div className="household-lists">
      <Col s={12}>
        <div>
          <h3>Your Items</h3>
          {allUserListItems}
        </div>
      </Col>
    </div>
  );
};

export default ProfileListItemContainer;
