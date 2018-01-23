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
// import DashboardContainer from "./containers/DashboardContainer";
import ProfileContainer from "./containers/ProfileContainer";
import MembersContainer from "./containers/MembersContainer";
import HouseholdListContainer from "./containers/HouseholdListContainer";
import SignupContainer from "./containers/SignupContainer";
import Login from "./components/Login";
import api from "./services/api";

class App extends Component {
  // state = {
  //   auth: {
  //     currentUser: {
  //       id: null,
  //       first_name: null,
  //       last_name: null,
  //       username: null,
  //       email: null,
  //       description: null,
  //       avatar_url: null,
  //       list_items: [],
  //       token: null
  //     }
  //   },
  //   household: {
  //     id: null,
  //     nickname: null,
  //     lists: [],
  //     list_items: [],
  //     members: []
  //   },
  //   users: [],
  //   list_categories: [],
  //   selectedUser: {
  //     id: null,
  //     first_name: null,
  //     last_name: null,
  //     username: null,
  //     email: null,
  //     description: null,
  //     avatar_url: null,
  //     list_items: []
  //   }
  // };

  // handleLogin = user => {
  //   const currentUser = { currentUser: user };
  //   localStorage.setItem("token", user.token);
  //   this.setState(
  //     { auth: currentUser },
  //     this.props.history.push(
  //       `/profile/${this.state.auth.currentUser.username}`
  //     )
  //   );
  // };

  // handleLogout = () => {
  //   localStorage.removeItem("token");
  //   this.setState({ auth: { currentUser: {} } });
  // };

  // refreshCurrentUser = () => {
  //   // debugger;
  //   this.setState(this.state);
  // };

  // componentWillMount() {
  //   api.users.getAllUsers().then(data => {
  //     this.setState({ users: data });
  //   });
  // }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.getCurrentUser();
      this.props.getAllUsers();
      // .then(data => {
      //   this.setState({ auth: { currentUser: data } });
    }
    //     .then(data => {
    //       this.setState({
    //         lists: this.state.auth.currentUser.household.lists,
    //         list_items: this.state.auth.currentUser.household.list_items
    //       });
    //       console.log("CDM in APP");
    //       this.props.history.push(
    //         `/profile/${this.state.auth.currentUser.username}`
    //       );
    //     });
    //   // api.users.getAllUsers().then(data => {
    //   //   this.setState({ users: data });
    //   // });
    // }
  }

  render() {
    console.log("props in App", this.props);
    const loggedIn = !!this.props.currentUser.id;
    console.log("location in APP", this.props.location);
    // debugger;

    return (
      <Router>
        <div>
          <NavBar
            currentUser={this.props.currentUser}
            handleLogout={this.handleLogout}
          />
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
                <SignupContainer
                  {...props}
                  handleSignup={api.signup}
                  currentUser={this.props.currentUser}
                />
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
                  currentUser={this.props.currentUser}
                  user={this.props.selectedUser}
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
                  currentUser={this.props.currentUser}
                  users={this.props.users}
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
                  currentUser={this.props.currentUser}
                />
              );
            }}
            />*/}
        </div>
      </Router>
    );
  }
}

// const mapStateToProps = state => {
//   return state;
// };

export default withRouter(
  connect(state => {
    return {
      ...state.authReducer,
      ...state.usersReducer,
      ...state.householdReducer,
      ...state.listCategoriesReducer
    };
  }, actions)(App)
);
