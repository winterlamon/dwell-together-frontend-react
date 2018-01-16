import React, { Component } from 'react';
import { Button, Col, Input, Row} from 'react-materialize';

class CreateHousehold extends Component {
  render() {
    return (
      <div className="login">
        <Row>
            <Col s={3}></Col>
          <Col s={6} className="login-form">
            <div className="container">
              <h3>Create New Household</h3>
                <Row>
                  <form>
                    <label>
                      Household Nickname
                      <input
                        s={6}
                        name="nickname"
                        className="center"
                        type="text"
                        label="nickname"
                        placeholder="Candy Mountain"
                        // value={fields.email}
                        // onChange={this.handleChange}
                      />
                    </label>
                  </form>
                  <Button
                    // onClick={this.handleSubmit}
                    className="button"
                    waves='light' node='a'>Create Household</Button>
                  </Row>
                <div>
                  <Row>
                  </Row>
                </div>
              </div>
            </Col>
            <Col s={3}></Col>
        </Row>

      </div>
    );
  }
}

export default CreateHousehold;
