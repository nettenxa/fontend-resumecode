import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import TimeOut from "./components/dashboard/TimeOut";
import Profile from "./components/dashboard/Profile";
import Project from "./components/dashboard/Project";

import showTeamDetails from "./components/dashboard/Project/09/showTeamDetails";
import Compair from "./components/dashboard/Project/09/Compair";
import Predict from "./components/dashboard/Project/09/predict";

// Project
import Image from "./components/dashboard/Image";
import project_01 from "./components/dashboard/Project/01/project_01";
import project_02 from "./components/dashboard/Project/02/project_02";
import project_03 from "./components/dashboard/Project/03/project_03";
import project_04 from "./components/dashboard/Project/04/project_04";
import project_05 from "./components/dashboard/Project/05/project_05";
import project_06 from "./components/dashboard/Project/06/project_06";
import project_07 from "./components/dashboard/Project/07/project_07";
import project_08 from "./components/dashboard/Project/08/project_08";
import project_09 from "./components/dashboard/Project/09/project_09";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    // window.localStorage.clear();
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <TimeOut></TimeOut>
            </Switch>
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/project" component={Project} />
            <PrivateRoute
              exact
              path="/show-team/:id"
              component={showTeamDetails}
            />
            <PrivateRoute exact path="/compair" component={Compair} />
            <PrivateRoute exact path="/predict" component={Predict} />
            <PrivateRoute exact path="/image" component={Image} />
            <PrivateRoute exact path="/project_01" component={project_01} />
            <PrivateRoute exact path="/project_02" component={project_02} />
            <PrivateRoute exact path="/project_03" component={project_03} />
            <PrivateRoute exact path="/project_04" component={project_04} />
            <PrivateRoute exact path="/project_05" component={project_05} />
            <PrivateRoute exact path="/project_06" component={project_06} />
            <PrivateRoute exact path="/project_07" component={project_07} />
            <PrivateRoute exact path="/project_08" component={project_08} />
            <PrivateRoute exact path="/project_09" component={project_09} />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
