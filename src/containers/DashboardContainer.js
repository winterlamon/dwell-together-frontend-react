import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Button, Col, Input, Row} from 'react-materialize';


const DashboardContainer = () => {
    return (
      <div className="dashboard">
        <Row>
        <Col s={8} className="section">
        <Row className="section">
          <Col className="section">
            <div>
              <h3>Welcome home, Winter!</h3>
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



        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div className="section">
          <h3>Create New List</h3>
        <div className="section">
            <form>
            </form>
          </div>
        </div>
      </div>
    );
}


export default DashboardContainer;
