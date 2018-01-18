import React from "react";
import { Button, Card } from "react-materialize";
import api from "../services/api";

class ListItem extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <div className="list-item">
        <Card
          className="card"
          title={item.name}
          actions={[
            <Button
              className="item-remove-button"
              key={"item-button-" + item.id}
              // onClick={() => {
              //   api.items.deleteList(item);
              //   props.refreshCurrentUser();
              // }}
            >
              MARK AS COMPLETED
            </Button>
          ]}
        >
          <p>Category: {item.category}</p>
        </Card>
      </div>
    );
  }
}

export default ListItem;
