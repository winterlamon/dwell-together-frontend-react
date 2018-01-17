import React from "react";
import { Button, Col, Row } from "react-materialize";
import api from "../services/api";

class HouseholdList extends React.Component {
  const list = this.props.list

  state = {
    list: {
      name: list.name,
      category: list.category,
    }
  }



  render() {
    const list = this.props.list;

    return (
      <div className="">
        {/* <Card
              className="card"
              title={list.first_name + " " + list.last_name}
              actions={[<Button
                            key={"venue-button-" + list.id}
                            onClick={this.handleClick}>
                            Remove
                          </Button>
                      ]}>
            </Card> */}
        <Row>
          <Col s={8}>
            <h5>{list.first_name + " " + list.last_name}</h5>
          </Col>
          <Col s={4}>
            <div className="list-button">
              <Button
                className="list-remove-button"
                key={"list-button-" + list.id}
                onClick={this.handleClick}
              >
                Remove
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HouseholdList;
