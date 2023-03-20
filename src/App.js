import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
// LayOut
import Landing from "./components/Layout/Landing";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
// Register & Login
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
// Page
import Dashboard from "./components/Dashboard/Dashboard";
import TimeOut from "./components/Dashboard/TimeOut";
import Profile from "./components/Dashboard/Profile";
import Project from "./components/Dashboard/Project";
// Project
import Image from "./components/Dashboard/Image";
import project_01 from "./components/Dashboard/Project/01/project_01";
import project_02 from "./components/Dashboard/Project/02/project_02";
import project_03 from "./components/Dashboard/Project/03/project_03";
import project_04 from "./components/Dashboard/Project/04/project_04";
import project_05 from "./components/Dashboard/Project/05/project_05";
import project_06 from "./components/Dashboard/Project/06/project_06";
import project_07 from "./components/Dashboard/Project/07/project_07";
import project_08 from "./components/Dashboard/Project/08/project_08";
import project_09 from "./components/Dashboard/Project/09/project_09";
// Project 09
import showTeamDetails from "./components/Dashboard/Project/09/showTeamDetails";
import Compair from "./components/Dashboard/Project/09/Compair";
import Predict from "./components/Dashboard/Project/09/predict";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set Auth token header Auth
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
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Switch>
              <PrivateRoute path="/Dashboard" component={Dashboard} />
              <TimeOut></TimeOut>
            </Switch>
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/project" component={Project} />
            <PrivateRoute path="/show-team/:id" component={showTeamDetails} />
            <PrivateRoute path="/compair" component={Compair} />
            <PrivateRoute path="/predict" component={Predict} />
            <PrivateRoute path="/image" component={Image} />
            <PrivateRoute path="/project_01" component={project_01} />
            <PrivateRoute path="/project_02" component={project_02} />
            <PrivateRoute path="/project_03" component={project_03} />
            <PrivateRoute path="/project_04" component={project_04} />
            <PrivateRoute path="/project_05" component={project_05} />
            <PrivateRoute path="/project_06" component={project_06} />
            <PrivateRoute path="/project_07" component={project_07} />
            <PrivateRoute path="/project_08" component={project_08} />
            <PrivateRoute path="/project_09" component={project_09} />

            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
