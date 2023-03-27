import React, { Component } from "react";
import "../../../../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ShowName from "./Show/showName";

class Compair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      select: "NetteN",
    };
  }

  componentDidMount() {
    axios
      .get("/teams")
      .then((res) => {
        this.setState({
          teams: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowTeamList");
      });
  }

  handleChange = (event) => {
    // // console.log(event.target.value);
    this.setState({ select: event.target.value });
  };
  back = () => {
    window.location.href = "./predict";
  };

  render() {
    const { state } = this.props.location;
    // // console.log("state", state, "-", this.state.select)
    const team = this.state.teams;
    const teamTwo = this.state.select;

    let teamList = team.filter((team) => {
      return team._id == state;
    });
    let show = teamList.map((book, k) => <ShowName book={book} key={k} />);

    let teamListTwo;
    let showTwo;
    if (teamTwo != "NetteN") {
      //     // console.log(teamTwo)
      teamListTwo = team.filter((team) => {
        return team._id == teamTwo;
      });
      showTwo = teamListTwo.map((book, k) => <ShowName book={book} key={k} />);
    }
    let result = state + "," + this.state.select;
    return (
      <div className="ShowTeamList">
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <br />
                <Link
                  to={{ pathname: "/show-team/" + state }}
                  className="btn btn-outline-warning float-left"
                >
                  Back
                </Link>
                <h2 className="display-4 text-center">Team List</h2>
                <br></br>
                {show}
              </div>

              <select className="btn btn-primary" onChange={this.handleChange}>
                {team.map((option, index) => (
                  <option key={index} value={option._id}>
                    {option.Team}
                  </option>
                ))}
              </select>
              <br></br>
            </div>
            <div>{showTwo}</div>
            <br></br>
            <div className="row">
              <Link
                to={{
                  pathname: "/predict",
                  state: result,
                }}
                className="btn btn-secondary"
              >
                Predict the Winner
              </Link>
              {console.log(result)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Compair;
