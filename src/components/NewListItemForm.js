import React, { Component } from "react";
import { Button, Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";

class NewListItemForm extends Component {
  state = {
    error: false,
    list_item: {
      household: this.props.household,
      name: "",
      description: "",
      due_date: "",
      user_id: "",
      list_id: "",
      completed: false
    }
  };

  handleChange = event => {
    const newListItem = {
      ...this.state.list_item,
      [event.target.name]: event.target.value
    };
    this.setState({ list_item: newListItem });
  };

  handleButtonClick = event => {
    event.preventDefault();
    this.props
      .createListItem(
        this.state.list_item.name,
        this.state.list_item.description,
        this.state.list_item.due_date,
        this.state.list_item.user_id,
        this.state.list_item.list_id,
        this.state.list_item.completed
      )
      .then(res => {
        if (res.error) {
          this.setState({ error: true }, console.log(res.error));
        } else {
          this.setState({
            ...this.state,
            list_item: {
              household: this.props.household,
              name: "",
              description: "",
              due_date: "",
              user_id: "",
              list_id: "",
              completed: false
            }
          });
          this.props.forceRender();
        }
      });
  };

  render() {
    const memberSelect = this.props.household.members.map(member => (
      <option value={member.id}>
        {member.first_name + " " + member.last_name}
      </option>
    ));
    const listSelect = this.props.household.lists.map(list => (
      <option value={list.id}>{list.name}</option>
    ));

    return (
      <div className="new-list-item">
        <Col s={12} className="form">
          <div className="container">
            <h3>Create New List Item</h3>
            <form>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  id="listItemName"
                  className="center"
                  value={this.state.list_item.name}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Description
                <input
                  type="text"
                  name="description"
                  id="listItemDescription"
                  className="center"
                  value={this.state.list_item.description}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Due Date
                <input
                  type="date"
                  name="due_date"
                  id="listItemDueDate"
                  // placeholder="YYYY-MM-DD"
                  className="center"
                  value={this.state.list_item.due_date}
                  onChange={this.handleChange}
                />
              </label>
              {/* <label>
                Assigned User
                <input
                  type="text"
                  name="user_id"
                  id="listItemUserID"
                  className="center"

                  value={this.state.list_item.user_id}
                  onChange={this.handleChange}
                />
              </label> */}
              <div>
                <label>
                  Assigned Member
                  <select
                    name="user_id"
                    onChange={this.handleChange}
                    class="browser-default center"
                  >
                    <option value="" disabled selected>
                      Select a member
                    </option>
                    {memberSelect}
                  </select>
                </label>
              </div>
              {/* <label>
                Add to:
                <input
                  type="text"
                  name="list_id"
                  id="listItemListID"
                  className="center"

                  value={this.state.list_item.list_id}
                  onChange={this.handleChange}
                />
              </label> */}
              <div>
                <label>
                  Add to:
                  <select
                    name="list_id"
                    onChange={this.handleChange}
                    class="browser-default center"
                  >
                    <option value="" disabled selected>
                      Select a list
                    </option>
                    {listSelect}
                  </select>
                </label>
              </div>
            </form>
            <Row />

            <Button className="button" onClick={this.handleButtonClick}>
              Create List Item
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
}, actions)(NewListItemForm);
