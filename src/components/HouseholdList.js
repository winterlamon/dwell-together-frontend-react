import React from "react";
import { Button, Card } from "react-materialize";
import api from "../services/api";

const HouseholdList = props => {
  const list = props.list;

  return (
    <div className="list">
      <Card
        className="card"
        title={list.name}
        actions={[
          <Button
            className="list-remove-button"
            key={"list-button-" + list.id}
            onClick={() => {
              api.lists.deleteList(list);
              props.refreshCurrentUser();
            }}
          >
            Delete List
          </Button>
        ]}
      >
        <p>Category: {list.category}</p>
      </Card>
    </div>
  );
};

export default HouseholdList;
