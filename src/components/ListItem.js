import React from "react";
import { Button, Card, CardTitle, Icon } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";

class ListItem extends React.Component {
  handleClick = event => {
    event.preventDefault();
    this.props.completeListItem(this.props.item).then(res => {
      if (res.error) {
        this.setState({ error: true }, console.log(res.error));
      } else {
        console.log("marked an item as completed");
      }
      this.props.forceRender();
    });
  };

  render() {
    const item = this.props.item;

    return (
      <div>
        {/* <tr className="list-item">
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.due_date}</td>
          <td>
            {item.completed ? (
              <p
                className="green darken-1 white-text button"
                onClick={this.handleClick}
              >
                <Icon>done</Icon>
                COMPLETED
              </p>
            ) : (
              <Button
                className="button"
                key={"item-button-" + item.id}
                onClick={this.handleClick}
              >
                MARK AS COMPLETED
              </Button>
            )}
          </td>
        </tr> */}
        <Card
          header={<CardTitle reveal waves="light" />}
          title=" "
          reveal={<p>{item.description}</p>}
          className="list-card"
        >
          <h3>{item.name}</h3>
          <p>Due: {item.due_date}</p>
          <div className="center">
            {item.completed ? (
              // <p className="green-text success" onClick={this.handleClick}>
              //   <strong>COMPLETED</strong>
              // </p>
              <Button
                className="button"
                style={{ backgroundColor: "green" }}
                key={"item-button-success-" + item.id}
                onClick={this.handleClick}
              >
                COMPLETED
              </Button>
            ) : (
              <Button
                className="button"
                key={"item-button-" + item.id}
                onClick={this.handleClick}
              >
                MARK AS COMPLETED
              </Button>
            )}
          </div>
        </Card>
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.authReducer
  };
}, actions)(ListItem);
