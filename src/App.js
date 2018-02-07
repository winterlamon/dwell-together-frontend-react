import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import NavBar from "./components/NavBar";
import LandingPageContainer from "./containers/LandingPageContainer";
import ProfileContainer from "./containers/ProfileContainer";
import MembersContainer from "./containers/MembersContainer";
import HouseholdListContainer from "./containers/HouseholdListContainer";
import SignupContainer from "./containers/SignupContainer";
import Login from "./components/Login";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.getCurrentUser();
      this.props.getAllUsers();
      this.props.getUserData(this.props.currentUser);
      this.props.getLists(this.props.household);
    }
  }

  render() {
    const loggedIn = !!this.props.currentUser.id;

    return (
      <Router>
        <div>
          <NavBar />
          <Route
            exact
            path="/"
            render={props => {
              return loggedIn ? (
                <Redirect to={`/profile/${this.props.currentUser.username}`} />
              ) : (
                <LandingPageContainer {...props} />
              );
            }}
          />
          <Route
            exact
            path="/signup"
            render={props => {
              return loggedIn ? (
                <Redirect to={`/profile/${this.props.currentUser.username}`} />
              ) : (
                <SignupContainer {...props} />
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={props => {
              return loggedIn ? (
                <Redirect to={`/profile/${this.props.currentUser.username}`} />
              ) : (
                <Login
                  {...props}
                  getCurrentUser={this.props.getCurrentUser}
                  loginUser={this.props.loginUser}
                />
              );
            }}
          />
          {/* <Route
            exact
            path="/dashboard"
            render={props => {
              return !loggedIn ? (
                <Redirect to="/login" />
              ) : (
                <DashboardContainer
                  {...props}
                  currentUser={this.props.currentUser}
                  users={this.props.users}
                  refreshCurrentUser={this.refreshCurrentUser}
                />
              );
            }}
          /> */}
          <Route
            exact
            path="/profile/:username"
            render={props => {
              return !loggedIn ? (
                <Redirect to="/login" />
              ) : (
                <ProfileContainer
                  {...props}
                  selectedUser={this.props.selectedUser}
                />
              );
            }}
          />
          <Route
            exact
            path="/household/members"
            render={props => {
              return !loggedIn ? (
                <Redirect to="/login" />
              ) : (
                <MembersContainer
                  {...props}
                  currentUser={this.props.currentUser}
                  users={this.props.users}
                />
              );
            }}
          />
          <Route
            exact
            path="/household/lists"
            render={props => {
              return !loggedIn ? (
                <Redirect to="/login" />
              ) : (
                <HouseholdListContainer
                  {...props}
                  currentUser={this.props.currentUser}
                  users={this.props.users}
                />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default withRouter(
  connect(state => {
    return {
      ...state.authReducer
    };
  }, actions)(App)
);
