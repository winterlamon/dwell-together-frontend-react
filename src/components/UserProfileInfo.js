import React, { Component } from "react";
import { Button, Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
// import swal from "sweetalert";

class Profile extends Component {
  state = {
    toggle: false,
    error: false,
    currentUser: {
      ...this.props.currentUser,
      avatar_url: this.props.currentUser.avatar_url,
      description: this.props.currentUser.description
    }
  };

  handleChange = event => {
    const newState = {
      ...this.state,
      currentUser: {
        ...this.props.currentUser,
        [event.target.name]: event.target.value
      }
    };
    console.log(newState);
    // this.setState({ newState });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.updateUserDetails(this.state.currentUser).then(res => {
  //     if (res.error) {
  //       this.setState({ error: true }, () => swal(res.error));
  //     } else {
  //       console.log("currentUser after save changes", this.state.currentUser);
  //       //     console.log(res);
  //     }
  //   });
  // };

  render() {
    console.log("currentUser before changes", this.props.currentUser);
    return (
      <div className="profile">
        <Row className="vertical-align">
          <Col s={2}>
            <img
              className="profile-avatar"
              src={this.props.currentUser.avatar_url}
              alt="user avatar"
            />
          </Col>
          <Col s={10}>
            <div>
              <h1>
                {this.props.currentUser.first_name +
                  " " +
                  this.props.currentUser.last_name}
              </h1>
              <h3>{this.props.currentUser.username}</h3>
              <p>{this.props.currentUser.description}</p>

              {this.state.toggle ? (
                <div className="form center">
                  <form className="center">
                    <label>
                      Avatar URL
                      <input
                        type="text"
                        name="avatar_url"
                        className="center"
                        placeholder="http://www.website.com/image.png"
                        label="avatar_url"
                        value={this.state.currentUser.avatar_url}
                        onChange={this.handleChange}
                      />
                    </label>
                    <label>
                      Description
                      <input
                        type="text"
                        name="description"
                        className="center"
                        label="description"
                        placeholder="Enter your description here..."
                        value={this.state.currentUser.descritpion}
                        onChange={this.handleChange}
                      />
                    </label>
                    <Row className="center">
                      <Col>
                        <Button className="button" onClick={this.handleSubmit}>
                          Save Changes
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          className="button grey"
                          onClick={() => {
                            this.setState({ toggle: false });
                          }}
                        >
                          Cancel
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              ) : (
                <Button
                  className="button"
                  onClick={() => {
                    this.setState({ toggle: true });
                  }}
                >
                  Edit Description
                </Button>
              )}
            </div>
          </Col>
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
