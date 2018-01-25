import React from "react";
import { Col, Row } from "react-materialize";
import { connect } from "react-redux";
import * as actions from "../actions";
import HouseholdList from "../components/HouseholdList";
import NewListForm from "../components/NewListForm";
import NewListItemForm from "../components/NewListItemForm";

class HouseholdListContainer extends React.Component {
  state = {
    filter: "All Categories"
  };

  handleChange = event => {
    // const newFilter = {
    //   ...this.state,
    //   [event.target.name]: event.target.value
    // };
    this.setState({ filter: event.target.value });
  };

  render() {
    console.log("lists to filter", this.props.household.lists);
    const lists = this.props.household.lists;
    const filteredLists =
      this.state.filter === "All Categories"
        ? lists
        : lists.filter(list => list.category === this.state.filter);

    const allHouseholdLists = filteredLists.map(list => (
      <HouseholdList key={`household-list-` + list.id.toString()} list={list} />
    ));

    return (
      <div className="household-lists">
        <Row>
          <Col s={8}>
            <div>
              <h3>Lists</h3>
            </div>
            <div className="search">
              <form>
                <div>
                  <label>
                    Filter by Category
                    <select
                      name="filter"
                      onChange={this.handleChange}
                      class="browser-default center"
                    >
                      <option value="All Categories" className="center">
                        Show All
                      </option>
                      <option value="Tasks" className="center">
                        Tasks
                      </option>
                      <option value="Events" className="center">
                        Events
                      </option>
                      <option value="Shopping" className="center">
                        Shopping
                      </option>
                      <option value="Financial" className="center">
                        Financial
                      </option>
                    </select>
                  </label>
                </div>
              </form>
            </div>
            <div>
              {this.props.household.lists.count === 0 ? (
                <p>There are no lists to display.</p>
              ) : (
                allHouseholdLists
              )}
            </div>
          </Col>
          <Col s={4} className="household center">
            <Row>
              <div>
                <h3>{this.props.currentUser.household.nickname}</h3>
              </div>
            </Row>
            <Row>
              <NewListForm />
            </Row>
            <Row>
              <NewListItemForm lists={lists} />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.authReducer
  };
}, actions)(HouseholdListContainer);
