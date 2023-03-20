import React, { Component } from "react";

const login = () => {
  window.location.href = "/login";
};

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="App valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Please</b> Login
            </h4>
            <p className="flow-text grey-text text-darken-1">
              to access NetteN Resume.
            </p>
            <br />
          </div>
          <button
            className="btn btn-outline-danger blue btn-left"
            onClick={login}
          >
            Log In
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
