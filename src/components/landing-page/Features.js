import React from 'react';


const Features = () => {
    return (
      <div className="landing-page-features container" >
        <h1>How It Works</h1>
      <div className="features">
          <div className="col-md-4 container">
            <div>
              <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
            </div>
            <div>
              <p>
                Create a household and add members.
              </p>
            </div>
          </div>
          <div className="col-md-4 container">
            <div>
              <span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
            </div>
            <div>
              <p>
                Create lists and assign items to household members.
              </p>
            </div>
          </div>
          <div className="col-md-4 container">
            <div>
              <span className="glyphicon glyphicon-check" aria-hidden="true"></span>
            </div>
            <div>
              <p>
                Members can check off items as they are completed in real time.
              </p>
            </div>
          </div>
      </div>
      </div>
    );
}

export default Features;
