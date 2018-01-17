import React from "react";
import { Button, Card, Col, Row } from "react-materialize";
import api from "../services/api";

class HouseholdList extends React.Component {
  state = {
    completed: false
  };

  render() {
    const list = this.props.list;

    return (
      <div className="list">
        <Card
          className="card"
          title={list.name}
          actions={[
            <Button
              className="list-remove-button"
              key={"list-button-" + list.id}
              onClick={this.handleClick}
            >
              Delete List
            </Button>
          ]}
        >
          <p>Category: {list.category}</p>
        </Card>
      </div>
    );
  }
}

export default HouseholdList;
