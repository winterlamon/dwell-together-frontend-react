import React from 'react';
import { Button, Col, Row} from 'react-materialize';


const DashboardContainer = (props) => {
console.log('dashboard user', props.currentUser)

    return (
      <div className="dashboard">
        <Row>
          <Col s={8} className="section">
            <Row className="section">
              <Col className="section">
                <div>
                  <h3>Welcome home, {props.currentUser.first_name}!</h3>
                </div>
              </Col>
              <Col className="section inline-block">
                <div className="inline-block">
                  <Button className="button">View Lists</Button>
                  <Button className="button">Create New List</Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col s={4} className="section">
            <Row className="section">
              <Row className="section">
                <div>
                  <h3>Candy Mountain</h3>
                </div>
              </Row>
              <Col className="section">
                <Button className="button">Add Member to Household</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
  )
}


export default DashboardContainer;
