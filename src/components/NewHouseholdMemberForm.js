import React from 'react';
import { Button, Col, Row} from 'react-materialize';
import api from '../services/api'


class NewHouseholdMemberForm extends React.Component {

  render() {
    return (
      <div className="household-members-list form">
        <Row>
          {/* <div>
            <h5>Add New Member</h5>
          </div> */}
        </Row>
        <Row>
            <label>
              <h5>Add New Member</h5>
                  <input
                    type="text"
                    className="center"
                    placeholder="Member Email"
                    // value={this.state.value}
                    // onChange={this.handleChange}
                  />
            </label>
            <Button
              className="button"
              // onClick={this.handleClick}
            >
              Add Member to Household
            </Button>
        </Row>
      </div>
    )
  }
}


export default NewHouseholdMemberForm;
