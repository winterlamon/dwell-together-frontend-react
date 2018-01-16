import React, { Component } from 'react';
import { Button, Col, Input, Row} from 'react-materialize';

class CreateHousehold extends Component {
  render() {
    return (
      <div className="login">
        <div className="col-md-4" />
          <div className="form container col-md-4">
            <div className="form-label">
              <h1>Create Household</h1>
            </div>
            <div>
              <form>
                <label>Household Nickname
                  <Input type="text" name="nickname" id="nickname" />
                </label>
                <Button className="button">Create Household</Button>
                <label>Add Member
                  <Input type="text" name="addUser" id="addUser" />
                </label>
                <Button className="button">Add Member</Button>

              </form>
            </div>
          </div>
        <div className="col-md-4" />
      </div>
    );
  }
}

export default CreateHousehold;
