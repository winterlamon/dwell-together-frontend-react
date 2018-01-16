import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Button, ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';


const DashboardContainer = () => {
    return (
      <div className="dashboard">
        <div>
          <h1>Welcome home, Winter!</h1>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div className="col-md-4">
          <h1>Create New List</h1>
        <div className="new-list">
            <form>
              <FormGroup>
                <ControlLabel for="listName">List Name</ControlLabel>
                <FormControl type="text" name="listName" id="listName" />
              </FormGroup>
              <FormGroup>
                <ControlLabel for="category">Category</ControlLabel>
                <FormControl type="text" name="category" id="category" />
              </FormGroup>
              <Button className="button">Create List</Button>
            </form>
          </div>
        </div>
      </div>
    );
}


export default DashboardContainer;
