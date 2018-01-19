import React from "react";
import { Button, Card } from "react-materialize";
import api from "../services/api";
// import { connect } from "react-redux";
// import { changeHi } from "../actions";

const HouseholdList = props => {
  const list = props.list;

  return (
    <div
      className="list"
      // onClick={props.changeHi}
    >
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

// const mapStateToProps = state => {
//   return { hi: state.hi };
// };
//
// export default connect(mapStateToProps, { changeHi: changeHi })(HouseholdList)

export default HouseholdList;
