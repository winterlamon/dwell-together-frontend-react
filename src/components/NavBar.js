import React, { Component } from 'react';
import logo from '../dwell-logo-full.svg';
import { Icon, Navbar, NavItem} from 'react-materialize'


class NavBar extends Component {
  render() {

    const current_user = true

    return (
      <div >
        <Navbar
          brand={<img href="/" class="navbar-logo navbar-contents" src={logo} />}
          className="navbar blue darken-4 black-text"
          right
          >
              {current_user ?
                (
                  <div className="navbar-contents">
                    <NavItem href="/dashboard" className="nav-link" >DASHBOARD</NavItem>
                    <NavItem href="/profile" className="nav-link">PROFILE</NavItem>
                    <NavItem href="/logout" className="nav-link">LOG OUT</NavItem>
                  </div>
                )
                :
                (
                  <div className="navbar-contents">
                    <NavItem href="/signup" className="nav-link">SIGN UP</NavItem>
                    <NavItem href="/login" className="nav-link">LOG IN</NavItem>
                  </div>
                )
              }
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
