import React, { Component } from "react";
import { Button, Col, Row } from "react-materialize";
import api from "../services/api";
import CreateHousehold from "../components/CreateHousehold";
import Signup from "../components/Signup";

const SignupContainer = props => {
  return (
    <div className="signup">
      <Row>
        <Col s={6}>
          <Signup
            handleUserSignup={api.auth.signup}
            currentUser={props.currentUser}
          />
        </Col>
        <Col s={6}>
          <CreateHousehold
            handleHouseholdSignup={api.households.createHousehold}
            currentUser={props.currentUser}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SignupContainer;
