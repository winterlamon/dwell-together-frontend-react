import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "../dwell-logo-full.svg";
import { Button, Dropdown, Navbar, NavItem } from "react-materialize";

class NavBar extends Component {
  handleClick = event => {
    event.preventDefault();
  };

  render() {
    const loggedIn = !!this.props.currentUser.id;

    return (
      <div>
        <Navbar
          brand={
            <img
              href="/"
              className="navbar-logo navbar-contents"
              src={logo}
              alt="D'well Together logo with two hands holding up a house"
            />
          }
          className="navbar blue darken-4 black-text"
          right
        >
          {loggedIn ? (
            <div>
              {console.log(`${this.props.currentUser.username} is logged in.`)}
            </div>
          ) : null}
          {loggedIn ? (
            <div className="navbar-contents">
              <Dropdown
                trigger={
                  <Button className="navbar-button blue darken-4">
                    MY ACCOUNT
                  </Button>
                }
              >
                {/* <Link to="/dashboard">
                  <NavItem className="nav-link">DASHBOARD</NavItem>
                </Link> */}
                <Link to={`/profile/${this.props.currentUser.username}`}>
                  <NavItem className="nav-link">PROFILE</NavItem>
                </Link>
                <Link to="/household/members">
                  <NavItem className="nav-link">MEMBERS</NavItem>
                </Link>
                <Link to="/household/lists">
                  <NavItem className="nav-link">LISTS</NavItem>
                </Link>
                <NavItem divider />
                <Link to="/login">
                  <NavItem
                    onClick={() => {
                      this.props.handleLogout();
                    }}
                  >
                    LOG OUT
                  </NavItem>
                </Link>
              </Dropdown>
            </div>
          ) : (
            <div className="navbar-contents">
              <Link to="/signup">
                <NavItem>GET STARTED</NavItem>
              </Link>
              <Link to="/login">
                <NavItem>LOG IN</NavItem>
              </Link>
            </div>
          )}
        </Navbar>
      </div>
    );
  }
}

export default withRouter(NavBar);
