import React, { Component } from "react";
import { Table } from "reactstrap";

import IdleTimer from "react-idle-timer";
import TimeoutModal from "../../actions/TimeoutModal";

class TimeOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.idleTimer = null;
    this.logoutTimer = null;
  }

  onIdle = () => {
    this.togglePopup();
    this.logoutTimer = setTimeout(() => {
      this.handleLogout();
    }, 1000 * 30 * 1); // 5 seconds
  };

  togglePopup = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  handleStayLoggedIn = () => {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
      this.logoutTimer = null;
    }
    this.idleTimer.reset();
    this.togglePopup();
  };

  handleLogout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <IdleTimer
          ref={(ref) => {
            this.idleTimer = ref;
          }}
          element={document}
          stopOnIdle={true}
          onIdle={this.onIdle}
          timeout={1000 * 300 * 1} // 10 seconds
        />

        <TimeoutModal
          showModal={showModal}
          togglePopup={this.togglePopup}
          handleStayLoggedIn={this.handleStayLoggedIn}
        />
      </div>
    );
  }
}

export default TimeOut;
