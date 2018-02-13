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
    const showListItems =
      listItems.length === 0 ? (
        <div className="center">
          <p>There are no list items to display.</p>
        </div>
      ) : (
        listItems.map((item, index) => (
          <ListItem
            key={`list-item-` + item.id.toString()}
            item={item}
            index={index}
          />
        ))
      );

    return (
      <div className="list">
        <div
          className="household-list-div"
          // header={<CardTitle reveal waves="light" />}
          title=" "
          // reveal={}
        >
          <h3>{list.name}</h3>
          <p>
            <strong>Category:</strong> {list.category}
          </p>
          <div className="center">
            <Row />
            <Row className="center">
              <Col l={3} s={12} />
              <Col l={3} s={12}>
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
              <Col l={3} s={12}>
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
              <Col l={3} s={12} />
            </Row>
          </div>
          <div>{this.state.showItems ? showListItems : null}</div>
        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.authReducer
  };
}, actions)(HouseholdList);
