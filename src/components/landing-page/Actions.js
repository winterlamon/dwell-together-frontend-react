import React, { Component } from 'react';
import { Button } from 'react-materialize';

const Actions = () => {
    return (
      <div className="landing-page-actions" >
        <h1 className="display-3">Let's do well together.</h1>
      <div className="inline-buttons">
            <div className="col-md-6">
              <Button href="/signup" className="button">SIGN UP</Button>
            </div>
            <div className="col-md-6">
              <Button href="/login" className="button">LOG IN</Button>
            </div>
        </div>
      </div>
    );
}

export default Actions;
