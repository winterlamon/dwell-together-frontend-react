import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPageContainer from "./containers/LandingPageContainer";
// import DashboardContainer from "./containers/DashboardContainer";
import ProfileContainer from "./containers/ProfileContainer";
import MembersContainer from "./containers/MembersContainer";
import HouseholdListContainer from "./containers/HouseholdListContainer";
import SignupContainer from "./containers/SignupContainer";
import Login from "./components/Login";
import api from "./services/api";

class App extends Component {
  state = {
    auth: {
      currentUser: {}
    },
    users: [],
    lists: [],
    list_items: []
  };

  handleLogin = user => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);
    this.setState(
      { auth: currentUser },
      this.props.history.push(
        `/profile/${this.state.auth.currentUser.username}`
      )
    );
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };

  refreshCurrentUser = () => {
    // debugger;
    this.setState(this.state);
  };

  componentWillMount() {
    api.users.getAllUsers().then(data => {
      this.setState({ users: data });
    });
  }

  componentDidMount() {
    if (api.auth.token) {
      api.auth
        .getCurrentUser()
        .then(data => {
          this.setState({ auth: { currentUser: data } });
        })
        .then(data => {
          this.setState({
            lists: this.state.auth.currentUser.household.lists,
            list_items: this.state.auth.currentUser.household.list_items
          });
          console.log("CDM in APP");
          this.props.history.push(
            `/profile/${this.state.auth.currentUser.username}`
          );
        });
      // api.users.getAllUsers().then(data => {
      //   this.setState({ users: data });
      // });
    }
  }

  render() {
    console.log("state in App", this.state.users);
    const loggedIn = !!this.state.auth.currentUser.id;
    console.log("location in APP", this.props.location);
    // debugger;

    return (
      <Router>
        <div>
          <NavBar
            currentUser={this.state.auth.currentUser}
            handleLogout={this.handleLogout}
          />
          <Route
            exact
            path="/"
            render={props => {
              return loggedIn ? (
                <Redirect
                  to={`/profile/${this.state.auth.currentUser.username}`}
                />
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
                <Redirect
                  to={`/profile/${this.state.auth.currentUser.username}`}
                />
              ) : (
                <SignupContainer
                  {...props}
                  handleSignup={api.auth.signup}
                  currentUser={this.state.auth.currentUser}
                />
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={props => {
              return loggedIn ? (
                <Redirect
                  to={`/profile/${this.state.auth.currentUser.username}`}
                />
              ) : (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  currentUser={this.state.auth.currentUser}
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
                  currentUser={this.state.auth.currentUser}
                  users={this.state.users}
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
                  currentUser={this.state.auth.currentUser}
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
                  currentUser={this.state.auth.currentUser}
                  users={this.state.users}
                  refreshCurrentUser={this.refreshCurrentUser}
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
                  currentUser={this.state.auth.currentUser}
                  users={this.state.users}
                  refreshCurrentUser={this.refreshCurrentUser}
                />
              );
            }}
          />
          {/* <Route
            exact
            path="/createhousehold"
            render={props => {
              return household && loggedIn ? (
                <Redirect to="/dashboard" />
              ) : (
                <CreateHousehold
                  {...props}
                  currentUser={this.state.auth.currentUser}
                />
              );
            }}
            />*/}
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
