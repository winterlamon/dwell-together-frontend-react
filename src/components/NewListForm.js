import React, { Component } from "react";
import { Button, Col, Row } from "react-materialize";
import api from "../services/api";

class NewListForm extends Component {
  state = {
    error: false,
    list: {
      household: this.props.currentUser.household,
      name: "",
      category: ""
    }
  };

  handleChange = event => {
    const newList = {
      ...this.state.list,
      [event.target.name]: event.target.value
    };
    this.setState({ list: newList });
  };

  handleButtonClick = event => {
    event.preventDefault();
    api.lists
      .createList(
        this.state.list.household,
        this.state.list.name,
        this.state.list.category
      )
      .then(res => {
        if (res.error) {
          this.setState({ error: true }, console.log(res.error));
        } else {
          this.props.refreshCurrentUser();
        }
      });
    this.setState({
      list: {
        household: this.props.currentUser.household,
        name: "",
        category: ""
      }
    });
  };

  render() {
    console.log("new list form currentUser", this.props.currentUser);
    return (
      <div className="new-list">
        <Row>
          <Col s={6} className="form">
            <div className="container">
              <h3>Create New List</h3>
              <form>
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    id="listName"
                    value={this.state.list.name}
                    onChange={this.handleChange}
                  />
                </label>
                <label>
                  Category
                  <input
                    type="text"
                    name="category"
                    id="listCategory"
                    value={this.state.list.category}
                    onChange={this.handleChange}
                  />
                </label>
              </form>
              <Button className="button" onClick={this.handleButtonClick}>
                Create List
              </Button>
              <Row />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NewListForm;
