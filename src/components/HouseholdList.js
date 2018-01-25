import React from "react";
import { Button, Card, CardTitle, Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import ListItem from "./ListItem";

class HouseholdList extends React.Component {
  state = {
    showItems: false
  };

  render() {
    const list = this.props.list;
    const listItems = this.props.household.list_items.filter(
      list_item => list_item.list_id === list.id
    );
    const showListItems = listItems.map((item, index) => (
      <ListItem
        key={`list-item-` + item.id.toString()}
        item={item}
        index={index}
      />
    ));

    return (
      <div className="list">
        <Card
          className="list-card"
          header={<CardTitle reveal waves="light" />}
          title={`Name: ${list.name}`}
          // reveal={}
        >
          <p>
            <strong>Category:</strong> {list.category}
          </p>
          <div>
            <Row />
            <Row>
              <Col>
                {this.state.showItems ? (
                  <Button
                    className="list-button button"
                    key={"list-button-" + list.id}
                    onClick={() => {
                      this.setState({ showItems: !this.state.showItems });
                    }}
                  >
                    Hide Items
                  </Button>
                ) : (
                  <Button
                    className="list-button button"
                    key={"list-button-" + list.id}
                    onClick={() => {
                      this.setState({ showItems: !this.state.showItems });
                    }}
                  >
                    Show Items
                  </Button>
                )}
              </Col>
              <Col>
                <Button
                  className="list-button remove-button"
                  key={"list-button-" + list.id}
                  onClick={() => {
                    this.props.deleteList(list);
                  }}
                >
                  Delete List
                </Button>
              </Col>
            </Row>
          </div>
          <div>
            {this.state.showItems ? (
              <div>
                <table className="list-items-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Due Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>{showListItems}</tbody>
                </table>
              </div>
            ) : null}
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
}, actions)(HouseholdList);
