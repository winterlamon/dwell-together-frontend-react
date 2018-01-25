import React, { Component } from "react";
import { Button, Col, Icon, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import swal from "sweetalert";

class Profile extends Component {
  state = {
    toggle: false,
    error: false,
    avatar_url: "",
    description: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props
      .updateUserDetails({
        ...this.props.currentUser,
        avatar_url: this.state.avatar_url,
        description: this.state.description
      })
      .then(res => {
        if (res.error) {
          this.setState({ error: true }, () => swal(res.error));
        } else {
          console.log("currentUser after save changes", this.state.currentUser);
          this.props.forceRender();
        }
        this.props.forceRender();
        this.setState({
          toggle: false,
          error: false,
          avatar_url: "",
          description: ""
        });
      });
  };

  render() {
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
                <div className="center">
                  <Row className="center">
                    <Col />
                    <Col>
                      <div className="form center">
                        <form>
                          <label>
                            Avatar URL
                            <input
                              s={8}
                              type="text"
                              name="avatar_url"
                              className="center"
                              placeholder="http://www.website.com/image.png"
                              label="avatar_url"
                              value={this.state.avatar_url}
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
                              value={this.state.description}
                              onChange={this.handleChange}
                            />
                          </label>
                          <Row className="center">
                            <Col>
                              <Button
                                className="button"
                                onClick={this.handleSubmit}
                              >
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
                    </Col>
                    <Col />
                  </Row>
                </div>
              ) : (
                <Button
                  className="button"
                  onClick={() => {
                    this.setState({ toggle: true });
                  }}
                >
                  {/* <Icon>create</Icon> */}
                  Edit
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
    ...state.authReducer
  };
}, actions)(Profile);
