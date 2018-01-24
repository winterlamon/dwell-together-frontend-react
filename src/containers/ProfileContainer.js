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
    return (
      <div className="profile">
        <Row>
          <UserProfileInfo />
        </Row>
        <Row>
          <ProfileListItemContainer />
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.authReducer,
    ...state.usersReducer,
    ...state.householdReducer
  };
}, actions)(Profile);
