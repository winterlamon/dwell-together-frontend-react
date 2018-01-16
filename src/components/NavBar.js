import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import logo from '../dwell-logo-full.svg';
import { Navbar, NavItem} from 'react-materialize'


class NavBar extends Component {

  handleClick = (event) => {
    event.preventDefault()
  }

  render() {

    const loggedIn = !!this.props.currentUser.id;

    return (
      <div >
        <Navbar
          brand={<img href="/" className="navbar-logo navbar-contents" src={logo} alt="D'well Together logo with two hands holding up a house"/>}
          className="navbar blue darken-4 black-text"
          right
          >
            {loggedIn ? (
              <div>
                {console.log(`${this.props.currentUser.username} is logged in.`)}
              </div>
            ) : null}
              {loggedIn ?
                (
                  <div className="navbar-contents">
                    <NavItem href="/dashboard" className="nav-link" >DASHBOARD</NavItem>
                    {/* <NavItem href="/profile" className="nav-link">PROFILE</NavItem> */}
                    <NavItem onClick={() => {
                       this.props.history.push('/login');
                       this.props.handleLogout();
                     }}>
                     LOG OUT
                    </NavItem>
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

export default withRouter(NavBar);
