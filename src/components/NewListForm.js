import React, { Component } from "react";
import { Button, Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";

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
    this.props
      .createList(
        this.state.list.household,
        this.state.list.name,
        this.state.list.category
      )
      .then(res => {
        if (res.error) {
          this.setState({ error: true }, console.log(res.error));
        } else {
          this.setState({
            list: { ...this.state.list, name: "", category: "" }
          });
          this.props.forceRender();
        }
      });
  };

  render() {
    console.log("new list form currentUser", this.props.currentUser);
    return (
      <div className="new-list">
        <Col s={12} className="form">
          <div className="container">
            <h3>Create New List</h3>
            <form>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  id="listName"
                  className="center"
                  value={this.state.list.name}
                  onChange={this.handleChange}
                />
              </label>
              {/* <label>
                Category
                <input
                  type="text"
                  name="category"
                  id="listCategory"
                  value={this.state.list.category}
                  onChange={this.handleChange}
                />
              </label> */}
              <div>
                <label>
                  Category
                  <select
                    name="category"
                    onChange={this.handleChange}
                    class="browser-default center"
                  >
                    <option value="Tasks" className="center">
                      Tasks
                    </option>
                    <option value="Events" className="center">
                      Events
                    </option>
                    <option value="Shopping" className="center">
                      Shopping
                    </option>
                    <option value="Financial" className="center">
                      Financial
                    </option>
                  </select>
                </label>
              </div>
            </form>
            <Row />
            <Button className="button" onClick={this.handleButtonClick}>
              Create List
            </Button>
            <Row />
          </div>
        </Col>
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.authReducer
  };
}, actions)(NewListForm);
