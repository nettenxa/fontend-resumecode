import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  project = () => {
    window.location.href = "./project";
  };

  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      <div style={{ height: "75vh" }} className="App container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              {user.name.split(" ")[0]} {user.name.split(" ")[1]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to Resume Version Web Application 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              onClick={this.project}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Project
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
