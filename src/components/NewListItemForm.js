import React, { Component } from "react";
import { Button, Col, Row } from "react-materialize";
import api from "../services/api";

class NewListItemForm extends Component {
  state = {
    error: false,
    list_item: {
      household: this.props.currentUser.household,
      name: "",
      description: "",
      due_date: "",
      user_id: this.props.currentUser.id,
      list_id: 1,
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
    api.list_items
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
          this.props.refreshCurrentUser();
        }
      });
    // this.setState({
    //   list_item: {
    //     household: this.props.currentUser.household,
    //     name: "",
    //     category: ""
    //   }
    // });
  };

  render() {
    console.log("new list item form currentUser", this.props.currentUser);
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
                  value={this.state.list_item.description}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Due Date
                <input
                  type="text"
                  name="due_date"
                  id="listItemDueDate"
                  value={this.state.list_item.due_date}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Assigned User
                <input
                  type="text"
                  name="user_id"
                  id="listItemUserID"
                  value={this.state.list_item.user_id}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Add to:
                <input
                  type="text"
                  name="list_id"
                  id="listItemListID"
                  value={this.state.list_item.list_id}
                  onChange={this.handleChange}
                />
              </label>
            </form>
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

export default NewListItemForm;
