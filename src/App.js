import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPageContainer from "./containers/LandingPageContainer";
import DashboardContainer from "./containers/DashboardContainer";
import ProfileContainer from "./containers/ProfileContainer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import CreateHousehold from "./components/CreateHousehold";
import api from "./services/api";

class App extends Component {
  state = {
    auth: {
      currentUser: {}
    },
    users: []
  };

  handleLogin = user => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.token);
    this.setState({ auth: currentUser });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
  };

  // addHouseholdToUser = (household) => {
  //   const newHousehold = this.state.auth.currentUser.householdId
  //   this.setState({[this.state.auth.currentUser.household]: newHousehold });
  // }

  componentDidMount() {
    if (api.auth.token) {
      api.auth.getCurrentUser().then(data => {
        this.setState({ auth: { currentUser: data } });
      });
    }
    this.props.history.push("/dashboard");
    api.users.getAllUsers().then(data => {
      this.setState({ users: data });
    });
  }

  render() {
    console.log("state in App", this.state.users);
    const loggedIn = !!this.state.auth.currentUser.id;

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
                <Redirect to="/dashboard" />
              ) : (
                <LandingPageContainer {...props} />
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={props => {
              return loggedIn ? (
                <Redirect to="/dashboard" />
              ) : (
                <Login
                  {...props}
                  handleLogin={this.handleLogin}
                  currentUser={this.state.auth.currentUser}
                />
              );
            }}
          />
          <Route
            exact
            path="/signup"
            render={props => {
              return loggedIn ? (
                <Redirect to="/dashboard" />
              ) : (
                <Signup
                  {...props}
                  handleSignup={api.auth.signup}
                  currentUser={this.state.auth.currentUser}
                />
              );
            }}
          />
          <Route
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
                />
              );
            }}
          />
          {/* <Route
            exact
            path="/profile"
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
          /> */}
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
            }} */}
          />
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
