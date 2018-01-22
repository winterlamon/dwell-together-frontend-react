import React from "react";
import { Row } from "react-materialize";
import ProfileListItemContainer from "../containers/ProfileListItemContainer";
import UserProfileInfo from "../components/UserProfileInfo";

const Profile = props => {
  const user = props.currentUser;
  const household = user.household;
  const userListItems = user.list_items;

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
        <ProfileListItemContainer
          currentUser={props.currentUser}
          userListItems={userListItems}
        />
      </Row>
    </div>
  );
};

export default Profile;
