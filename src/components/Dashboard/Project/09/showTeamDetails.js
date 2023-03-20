import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../../App.css";
import axios from "axios";
import Flag from "react-world-flags";

const back = () => {
  window.location.href = "/project_09";
};

class showTeamDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {},
    };
  }

  componentDidMount() {
    // // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("https://chartreuse-green-caterpillar-robe.cyclic.app/api/teams/" + this.props.match.params.id)
      .then((res) => {
        // console.log("Print-showTeamDetails-API-response: " + res.data);
        this.setState({
          team: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from showTeamDetails");
      });
  }

  render() {
    const team = this.state.team;
    console.log("AA", team);
    let TeamItem = (
      <div>
        <table className="table table-hover table-dark">
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Team Name</td>
              <td>{team.Team}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Goal</td>
              <td>{team.Goal}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Lost</td>
              <td>{team.Lost}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className="showTeamDetails App">
        <button className="btn btn-outline-danger blue btn-left" onClick={back}>
          Back
        </button>

        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto"></div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Team Record</h1>
              <p className="lead text-center">Football Team Info</p>
              <hr /> <br />
            </div>
            <Flag code={team.code} height="100"/>
          </div>
          <div>{TeamItem}</div>
        </div>
        <div className="m-auto">
          <Link
            to={{
              pathname: "/compair",
              state: this.props.match.params.id,
            }}
            className="btn btn-secondary"
          >
            compair
          </Link>
        </div>
      </div>
    );
  }
}

export default showTeamDetails;
