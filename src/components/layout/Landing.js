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
              <b>Please</b> Or Register
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Welcome to NetteN Resume.
            </p>
            <br />
            {/* <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div> */}
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
