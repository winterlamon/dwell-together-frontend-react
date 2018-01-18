import React, { Component } from "react";
import { Button, Col, Input, Row } from "react-materialize";
import HouseholdListContainer from "./HouseholdListContainer";
import UserProfileInfo from "../components/UserProfileInfo";

const Profile = props => {
  const user = props.currentUser;
  const household = user.household;
  const userListItems = household.list_items.filter(item => {
    item.user_id === user.id;
  });

  console.log("user list items", userListItems);

  return (
    <div className="profile">
      <Row>
        <UserProfileInfo
          currentUser={props.currentUser}
          household={household}
        />
      </Row>
      <Row>
        <HouseholdListContainer
          currentUser={props.currentUser}
          userListItems={userListItems}
        />
      </Row>
    </div>
  );
};

export default Profile;
