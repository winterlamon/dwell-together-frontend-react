import React, { Component } from 'react';
import { BrowserRouter as Route, Redirect, Switch, withRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPageContainer from './containers/LandingPageContainer';
import DashboardContainer from './containers/DashboardContainer';
import ProfileContainer from './containers/ProfileContainer';
import Signup from './components/Signup';
import Login from './components/Login';
import CreateHousehold from './components/CreateHousehold';



class App extends Component {
  render() {
    console.log(this.props);

    return (
        <div>
          <NavBar />
          <Route
            exact path="/"
            render={props => {
              return (<LandingPageContainer
                {...this.props} />
            )
            }}
          />
          <Route
            exact
            path="/login"
            render={props => {
              return (<Login
                {...this.props} />
            )
            }}
          />
          <Route
            exact
            path="/signup"
            render={props => {
              return (<Signup
                {...this.props} />
            )
            }}
          />
          <Route
            exact
            path="/dashboard"
            render={props => {
              return (<DashboardContainer
                {...props} />
            )
          }}
          />
          <Route
            exact
            path="/profile"
            render={props => {
              return (<ProfileContainer
                {...props} />
            )
          }}
          />
      </div>
    );
  }
}


export default withRouter(App);
