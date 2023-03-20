import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Profile extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  back = () => {
    window.location.href = "./dashboard";
  };

  render() {
    const { user } = this.props.auth;
    console.log(user);
    return (
      <div style={{ height: "75vh" }} className="App valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
                <b>Name: </b> {user.name.split(" ")[0]}{" "}
                {user.name.split(" ")[1]}
                <br></br>
                <b>Detail: </b> 
              </h4>
            </div>
          </div>
      </div>
    );
  }
}

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Profile);
