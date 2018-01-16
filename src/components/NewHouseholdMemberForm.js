import React from 'react';
import { Button, Col, Row} from 'react-materialize';
import api from '../services/api'


class NewHouseholdMemberForm extends React.Component {

  render() {
    return (
      <div className="household-members-list form">
        <Row>
          <div>
            Add New Member
          </div>
        </Row>
        <Row className="section">
            <label>
                  <input
                    type="text"
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
