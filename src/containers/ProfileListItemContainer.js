import React from "react";
import { Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
// import HouseholdList from "../components/HouseholdList";
import ListItem from "../components/ListItem";

class ProfileListItemContainer extends React.Component {
  allUserListItems = () => {
    console.log("called!", this.props.currentUser.list_items);
    return this.props.currentUser.list_items.map((item, index) => (
      <ListItem
        key={`list-item-` + item.id.toString()}
        item={item}
        index={index}
      />
    ));
  };

  render() {
    return (
      <div className="profile-items">
        <Row>
          <div>
            <h3>Your Items</h3>
          </div>
          <div className="search" />
          <div>
            {this.props.currentUser.list_items.length === 0 ? (
              <p>There are currently no items to display.</p>
            ) : (
              // <table className="list-items-table">
              //   <thead>
              //     <tr>
              //       <th>Title</th>
              //       <th>Description</th>
              //       <th>Due Date</th>
              //       <th>Status</th>
              //     </tr>
              //   </thead>
              //   <tbody>{this.allUserListItems()}</tbody>
              // </table>
              this.allUserListItems()
            )}
            {/* <table className="list-items-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>{this.allUserListItems()}</tbody>
            </table> */}
          </div>
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.authReducer
  };
}, actions)(ProfileListItemContainer);
