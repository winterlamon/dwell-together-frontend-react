import React from "react";
import { Row } from "react-materialize";
import { connect } from "react-redux";
import ProfileListItemContainer from "../containers/ProfileListItemContainer";
import UserProfileInfo from "../components/UserProfileInfo";
import * as actions from "../actions";

class Profile extends React.Component {
  componentDidMount() {
    this.props.getUserData(this.props.match.params);
  }

  render() {
    const user = this.props.currentUser;
    const household = user.household;
    const userListItems = user.list_items;

    console.log("user list items", userListItems);

    return (
      <div className="profile">
        <Row>
          <UserProfileInfo
            currentUser={this.props.currentUser}
            household={household}
          />
        </Row>
        <Row>
          <ProfileListItemContainer
            currentUser={this.props.currentUser}
            userListItems={userListItems}
          />
        </Row>
      </div>
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
}, actions)(Profile);
